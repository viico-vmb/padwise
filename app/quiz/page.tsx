"use client";

import { useMemo, useState } from "react";
import { Container, Card, CardBody, CardHeader, Button, Label, Select } from "@/components/ui";
import { QuizAnswers } from "@/lib/types";
import { saveAnswers } from "@/lib/storage";
import { useRouter } from "next/navigation";

const defaults: QuizAnswers = {
  game: "tac-fps",
  sens: "medium",
  feel: "balanced",
  humidity: "medium",
  budget: "mid",
  size: "XL"
};

export default function QuizPage() {
  const [a, setA] = useState<QuizAnswers>(defaults);
  const r = useRouter();

  const steps = useMemo(
    () => [
      {
        key: "game",
        title: "What do you play the most?",
        help: "Your game type heavily influences control vs speed.",
        options: [
          { value: "tac-fps", label: "Tactical FPS (Valorant / CS)" },
          { value: "tracking-fps", label: "Tracking FPS (Apex / OW)" },
          { value: "moba", label: "MOBA (LoL / Dota)" },
          { value: "mixed", label: "Mixed" }
        ]
      },
      {
        key: "sens",
        title: "Your sensitivity?",
        help: "Low sens tends to benefit from larger pads and smoother glide.",
        options: [
          { value: "low", label: "Low sens (big arm swipes)" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High sens (wrist heavy)" }
        ]
      },
      {
        key: "feel",
        title: "What feel do you want?",
        help: "Control = stopping power. Speed = effortless glide. Balanced = both.",
        options: [
          { value: "control", label: "Control (stopping power)" },
          { value: "balanced", label: "Balanced (hybrid)" },
          { value: "speed", label: "Speed (fast glide)" }
        ]
      },
      {
        key: "humidity",
        title: "How humid is your room?",
        help: "Some cloth pads get muddy in humidity.",
        options: [
          { value: "low", label: "Low (dry room)" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High (humid / sweaty hands)" }
        ]
      },
      {
        key: "budget",
        title: "Budget tier?",
        help: "We’ll prioritize within your tier and lightly penalize above-tier picks.",
        options: [
          { value: "budget", label: "Budget" },
          { value: "mid", label: "Mid-range" },
          { value: "premium", label: "Premium" }
        ]
      },
      {
        key: "size",
        title: "Preferred size?",
        help: "If you play low sens, XL/Desk usually feels safer.",
        options: [
          { value: "L", label: "L" },
          { value: "XL", label: "XL" },
          { value: "Desk", label: "Desk / Extended" }
        ]
      }
    ],
    []
  );

  const [i, setI] = useState(0);

  const current = steps[i];
  const key = current.key as keyof QuizAnswers;

  const onNext = () => {
    if (i < steps.length - 1) setI(i + 1);
    else {
      saveAnswers(a);
      r.push("/results");
    }
  };

  const onBack = () => setI(Math.max(0, i - 1));

  return (
    <Container className="py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Quiz</h1>
        <p className="mt-2 text-sm text-zinc-400">6 questions. Local. No tracking.</p>

        <div className="mt-6">
          <Card>
            <CardHeader
              title={`${i + 1}/${steps.length} — ${current.title}`}
              subtitle={current.help}
            />
            <CardBody>
              <Label>Pick one</Label>
              <Select
                value={String(a[key])}
                onChange={(v) => setA({ ...a, [key]: v } as QuizAnswers)}
                options={current.options}
              />

              <div className="mt-6 flex items-center justify-between">
                <Button variant="secondary" onClick={onBack} className={i === 0 ? "opacity-50 pointer-events-none" : ""}>
                  Back
                </Button>
                <Button variant="primary" onClick={onNext}>
                  {i === steps.length - 1 ? "See results" : "Next"}
                </Button>
              </div>

              <div className="mt-4 text-xs text-zinc-500">
                Tip: if you’re unsure, pick “Balanced” — you’ll get safer recommendations.
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
}
