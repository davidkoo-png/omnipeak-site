# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Omnipeak LLC, a senior engineering practice building custom software for small businesses — booking and membership systems, internal tools, automations, and admin dashboards, plus taking over projects that stalled under a previous developer. Positioning note: booking/membership work is the deepest specialty and the only case study, but it is deliberately framed as proof of capability, not as the boundary of what Omnipeak builds. Do not narrow the site's copy back to appointment-based businesses only. Built with Astro 5 (static output), deployed to GitHub Pages at the custom domain `omnipeak.tech` via GitHub Actions (`.github/workflows/deploy.yml`).

## Development

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the production build locally

No test framework or linter. Verify changes by building and viewing the pages.

## Architecture

- **`src/pages/`** — six pages: `index`, `services`, `work` (case study), `process`, `about`, `contact`. Clean URLs (`/services/` etc.) via Astro's default directory build format.
- **`src/layouts/BaseLayout.astro`** — the only layout: head/meta/canonical/OG tags, JSON-LD `ProfessionalService` structured data, Header, Footer. Takes `title` and `description` props; every page must pass both.
- **`src/components/`** — `Header.astro` (nav, build-time active-link highlighting, mobile toggle with the site's only client-side JS), `Footer.astro`, `CTA.astro` (dark closing section used on most pages), `SectionHeader.astro`.
- **`src/consts.ts`** — site-wide constants: contact email, Formspree endpoint, Cal.com scheduling URL (every "Book an intro call" button uses it). Never hardcode these in pages.
- **`src/styles/global.css`** — the entire stylesheet, imported once by BaseLayout. Visual system derived from Notion; **`DESIGN.md` is the visual source of truth**. Tokens in `:root`: warm `--canvas-soft` page, white `--surface` cards, `--ink*` greys, one structural accent `--primary` (blue, CTAs/links only), `--night` indigo used once per page (homepage hero), `--accent-*` sticker colours for decoration only. Inter only, bold tight headlines, pill CTAs, 12px hairline cards. BEM-ish class naming. Reuse tokens; don't introduce hardcoded colors/sizes.
- **`public/`** — `CNAME` (custom domain — do not delete), `robots.txt`, `favicon.svg`.
- **Contact form** (`contact.astro`) posts natively to Formspree; no JS involved.

## Voice rules (apply to ALL client-facing copy)

- Never: "solo", "one-man", "freelance", "small shop", "just me" — and never "we"/"our team" (no team exists to claim).
- Use company voice with no pronoun ("Omnipeak builds…") or first person singular where it reassures ("You'll work directly with the person building your system").
- Specific over generic; outcomes over implementation details; plain language — no "leveraging", "solutions", "digital transformation", "passionate".
- Homepage message: a dependable tech person for small businesses, on three pillars — clear communication (you talk to the person doing the work, plain-English updates), fast turnaround (bugs tracked and handled immediately — deliberately no fixed-hours promise), no handoffs (the person who understands the business is the one writing the code — never call this "architect"). Hero headline: "The person who understands your business is the one writing the code."
- Contact email is `info@omnipeak.tech` (defined in `src/consts.ts`).
- Do not imply the practice only does booking systems. Name booking/membership work as the deepest specialty where it adds credibility, never as the limit of scope.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow, which builds and deploys to GitHub Pages (Pages source must be set to "GitHub Actions" in repo settings). The custom domain is preserved by `public/CNAME` landing in every build artifact. A failed build deploys nothing — the previous site keeps serving.
