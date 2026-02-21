# PadWise — Mousepad Finder (Next.js)

A **dark, premium** mousepad recommender:
- 60-second quiz
- ranked results + reasons
- starter dataset (30 popular pads)
- runs fully **client-side** (privacy-first)

> No brand affiliation. This is a neutral helper tool.

---

## Screenshots (add yours)

After running locally, add:
- `docs/screenshot-home.png`
- `docs/screenshot-quiz.png`
- `docs/screenshot-results.png`

And paste them here.

---

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Local dataset (`data/pads.ts`)
- Simple recommender (`lib/recommend.ts`)

---

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Dataset

File: `data/pads.ts`

Each pad contains heuristic attributes:
- speed/control (1–10)
- humidityResistance (1–10)
- durability (1–10)
- material/surface/size/priceTier

These values are **approximate** to support ranking.
Always verify exact specs/availability.

---

## Recommender (simple, clean)

File: `lib/recommend.ts`

Scoring considers:
- feel match (speed/control targets)
- game bias (tac FPS vs tracking FPS)
- sens bias (size + glide needs)
- humidity need
- budget tier
- size requirement

---

## Deploy on Vercel (recommended)

1) Push this repo to GitHub.
2) Go to Vercel and click **New Project**.
3) Import your repository.
4) Framework preset: **Next.js** (auto-detected).
5) Click **Deploy**.

No env vars required.

### Custom domain (optional)
In Vercel → Project → Settings → Domains → add your domain.

---

## Make it look “product-level” fast

- Add screenshots + a short GIF
- Add a favicon + OG image (optional)
- Add more pads to the dataset (50–100 makes it feel serious)
- Write a short methodology page (already included: `/about`)

---

## License
MIT
