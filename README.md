# Sandhyāvandanam

A calm, readable explanation of the Nitya Sandhyāvandanam — script,
literal English meaning, inner meaning, and the hand gestures (mudrās)
that accompany it — with a Devanagari/Tamil script switch. See
[`CLAUDE.md`](./CLAUDE.md) for the full project brief, content model, design
system, and — importantly — the current sourcing status of the mantra text.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion, with
mantra/gesture content as typed data modules under `src/content/`. See
`CLAUDE.md` §8 for the rationale.

## Content status

Mantra and gesture text is a first draft, not yet verified against a
citable source — every entry's `citation` field says `TODO(verify)` and
means it. See `CLAUDE.md` §2 before treating anything here as accurate
enough to chant from.
