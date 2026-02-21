export type SurfaceType = "control" | "hybrid" | "speed";
export type Material = "cloth" | "cordura" | "glass" | "polyester";
export type PriceTier = "budget" | "mid" | "premium";

export type Pad = {
  id: string;
  brand: string;
  model: string;
  surface: SurfaceType;
  material: Material;
  thicknessMm: number; // typical / approximate
  base: "rubber" | "poron" | "silicone" | "other";
  stitch: "none" | "standard" | "low-profile";
  speed: number; // 1-10 heuristic
  control: number; // 1-10 heuristic
  humidityResistance: number; // 1-10 heuristic
  durability: number; // 1-10 heuristic
  sizes: Array<"S" | "M" | "L" | "XL" | "XXL" | "Desk">;
  priceTier: PriceTier;
  notes: string;
  links?: { official?: string; community?: string };
};

export type QuizAnswers = {
  game: "tac-fps" | "tracking-fps" | "moba" | "mixed";
  sens: "high" | "medium" | "low";
  feel: "control" | "balanced" | "speed";
  humidity: "low" | "medium" | "high";
  budget: "budget" | "mid" | "premium";
  size: "L" | "XL" | "Desk";
};
