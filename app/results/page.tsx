"use client";

import { useEffect, useMemo, useState } from "react";
import { Container, Button } from "@/components/ui";
import { pads } from "@/data/pads";
import { recommend } from "@/lib/recommend";
import { QuizAnswers } from "@/lib/types";
import { clearAnswers, loadAnswers } from "@/lib/storage";
import { PadCard } from "@/components/pad-card";
import Link from "next/link";

export default function ResultsPage() {
  const [a, setA] = useState<QuizAnswers | null>(null);

  useEffect(() => {
    setA(loadAnswers());
  }, []);

  const scored = useMemo(() => (a ? recommend(pads, a) : []), [a]);

  if (!a) {
    return (
      <Container className="py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold">Results</h1>
          <p className="mt-2 text-zinc-400">
            No quiz answers found. Run the quiz first.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/quiz" variant="primary">Start the quiz</Button>
            <Button href="/dataset" variant="secondary">Browse dataset</Button>
          </div>
        </div>
      </Container>
    );
  }

  const top = scored.slice(0, 6);

  return (
    <Container className="py-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold">Your picks</h1>
          <p className="mt-2 text-zinc-400 text-sm">
            Ranked shortlist based on your answers. This is a heuristic tool—use it to narrow your options fast.
          </p>
          <div className="mt-3 text-xs text-zinc-500">
            Game: <b className="text-zinc-300">{a.game}</b> · Sens: <b className="text-zinc-300">{a.sens}</b> · Feel:{" "}
            <b className="text-zinc-300">{a.feel}</b> · Humidity: <b className="text-zinc-300">{a.humidity}</b> · Budget:{" "}
            <b className="text-zinc-300">{a.budget}</b> · Size: <b className="text-zinc-300">{a.size}</b>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              clearAnswers();
              window.location.href = "/quiz";
            }}
          >
            Retake
          </Button>
          <Button href="/dataset" variant="secondary">Dataset</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {top.map((s) => (
          <PadCard key={s.pad.id} pad={s.pad} score={s.score} reasons={s.reasons} />
        ))}
      </div>

      <div className="mt-10 text-xs text-zinc-500 max-w-4xl">
        Want it more accurate? Extend the dataset (more pads) or tune the scoring weights in <code className="text-zinc-300">lib/recommend.ts</code>.
      </div>
    </Container>
  );
}
