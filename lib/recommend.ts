import { Pad, QuizAnswers } from "@/lib/types";

type Scored = { pad: Pad; score: number; reasons: string[] };

const tierRank: Record<string, number> = { budget: 0, mid: 1, premium: 2 };

function sizeFits(pad: Pad, need: QuizAnswers["size"]): boolean {
  if (need === "Desk") return pad.sizes.includes("Desk");
  return pad.sizes.includes(need);
}

function gameBias(game: QuizAnswers["game"]) {
  // Control bias for tac FPS, speed bias for tracking
  if (game === "tac-fps") return { control: 1.2, speed: 0.8 };
  if (game === "tracking-fps") return { control: 0.9, speed: 1.25 };
  if (game === "moba") return { control: 1.0, speed: 1.0 };
  return { control: 1.05, speed: 1.05 }; // mixed
}

function sensBias(sens: QuizAnswers["sens"]) {
  // Low sens = larger swipes → speed a bit more important + size importance
  if (sens === "low") return { control: 1.0, speed: 1.15, sizeBoost: 6 };
  if (sens === "high") return { control: 1.1, speed: 0.95, sizeBoost: 2 };
  return { control: 1.05, speed: 1.05, sizeBoost: 4 };
}

function feelTargets(feel: QuizAnswers["feel"]) {
  if (feel === "control") return { targetSpeed: 4, targetControl: 9 };
  if (feel === "speed") return { targetSpeed: 8, targetControl: 4 };
  return { targetSpeed: 6, targetControl: 7 }; // balanced
}

function humidityNeed(h: QuizAnswers["humidity"]) {
  if (h === "high") return 8;
  if (h === "medium") return 6;
  return 4;
}

function closeness(val: number, target: number) {
  // 0..10 -> 0..10 (higher is better)
  const d = Math.abs(val - target);
  return Math.max(0, 10 - d * 1.3);
}

export function recommend(pads: Pad[], answers: QuizAnswers): Scored[] {
  const gb = gameBias(answers.game);
  const sb = sensBias(answers.sens);
  const ft = feelTargets(answers.feel);
  const hNeed = humidityNeed(answers.humidity);

  const out: Scored[] = pads.map((pad) => {
    let score = 0;
    const reasons: string[] = [];

    // Fit by feel
    const speedFit = closeness(pad.speed, ft.targetSpeed);
    const controlFit = closeness(pad.control, ft.targetControl);

    score += speedFit * 4.5 * gb.speed * sb.speed;
    score += controlFit * 4.5 * gb.control * sb.control;

    if (speedFit >= 8) reasons.push("Glide matches your speed preference.");
    if (controlFit >= 8) reasons.push("Stopping power matches your control preference.");

    // Humidity resistance
    const hFit = closeness(pad.humidityResistance, hNeed);
    score += hFit * 2.3;
    if (answers.humidity !== "low" && pad.humidityResistance >= hNeed) {
      reasons.push("Good humidity resistance for your environment.");
    }

    // Durability
    score += pad.durability * 0.9;

    // Budget penalty if over the selected tier (soft)
    const chosen = tierRank[answers.budget];
    const padTier = tierRank[pad.priceTier];
    if (padTier > chosen) {
      const penalty = (padTier - chosen) * 6;
      score -= penalty;
      reasons.push("Slightly above your budget tier (still a strong fit).");
    } else {
      score += 2;
    }

    // Size fit
    if (sizeFits(pad, answers.size)) {
      score += sb.sizeBoost;
      reasons.push("Available in your preferred size.");
    } else {
      score -= 6;
    }

    // Special: glass pads warning for control players
    if (pad.material === "glass" && answers.feel === "control") {
      score -= 10;
      reasons.push("Glass is usually too fast for pure control preference.");
    }

    // Special: very low sens + small pad
    if (answers.sens === "low" && !pad.sizes.includes("XL") && answers.size !== "L") {
      score -= 3;
    }

    // Normalize reasons (keep 3 max)
    const unique = Array.from(new Set(reasons)).slice(0, 3);
    return { pad, score: Math.round(score * 10) / 10, reasons: unique };
  });

  out.sort((a, b) => b.score - a.score);
  return out;
}
