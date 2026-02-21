# PadWise
![Demo](docs/demo.gif)

**PadWise** is a gamer-first mousepad recommender that produces a clear shortlist in ~60 seconds.

No hype. No affiliate bias. No “one pad fits all”.

A small quiz → a ranked result with concrete reasons.

**Live:** https://padwise-blush.vercel.app

---

## Overview

Choosing a mousepad is context-dependent:

- game type changes optimal friction profile
- sensitivity affects required glide and size
- humidity can alter cloth behavior dramatically
- budget constraints narrow viable options

PadWise models these factors with a simple, transparent scoring system.

---

## Features

- 6-question decision flow
- Ranked recommendations (top matches first)
- Human-readable rationale for each pick
- Dataset of widely used pads across price tiers
- Runs entirely client-side (no accounts, no telemetry)

---

## How it works

PadWise applies heuristic scoring across several dimensions:

- Feel match — closeness to target speed/control balance  
- Game bias — tactical FPS vs tracking-heavy titles  
- Sensitivity bias — glide and size requirements  
- Environmental factors — humidity resistance  
- Budget alignment — soft penalties outside selected tier  
- Availability — size compatibility  

The result is a practical ranking, not a laboratory benchmark.

---

## Dataset

Each entry contains approximate attributes such as:

- speed / control balance  
- humidity resistance  
- durability  
- surface material and sizes  
- price tier  

Values are normalized for comparison consistency.

---

## Technology

- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

## License

MIT