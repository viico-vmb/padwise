import { QuizAnswers } from "@/lib/types";

const KEY = "padwise.quiz.v1";

export function saveAnswers(a: QuizAnswers) {
  localStorage.setItem(KEY, JSON.stringify(a));
}

export function loadAnswers(): QuizAnswers | null {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as QuizAnswers;
  } catch {
    return null;
  }
}

export function clearAnswers() {
  localStorage.removeItem(KEY);
}
