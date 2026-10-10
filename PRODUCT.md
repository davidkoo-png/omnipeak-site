# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small-business owners and operations leads in the US who have outgrown their tools: off-the-shelf software almost fits, a workaround has become the process, data lives in five places, or a previous developer left a half-built system behind. Many have been burned by a developer before and arrive wary. They are non-technical, evaluating whether to trust someone with money and time again. Clients are served remotely, US-wide; the Los Angeles / Orange County base is a fact about the founder, not a service boundary.

## Product Purpose

Marketing site for Omnipeak LLC, a senior engineering practice that builds custom software for small businesses: booking and membership systems, custom web apps, process automation, internal tools and admin dashboards, rescue of stalled projects, and optional ongoing maintenance. The site's single success action is a **booked 20-minute intro call**; the contact form and email are fallbacks.

## Positioning

The person you talk to is the person writing the code, and the client owns everything from day one (code, repository, hosting, payment accounts), with written documentation and an admin interface a non-technical owner can run. Fixed scope and fixed price in a written proposal before any building. The homepage leads with three pillars: **clear communication** (direct line to the builder, plain-English updates), **fast turnaround** (reported bugs are tracked and handled immediately; no fixed-hours guarantee is promised), and **no handoffs** (the person who understands the business is the one writing the code; the word "architect" is deliberately avoided). Booking/membership/billing is the deepest specialty and the only case study, framed as proof that the hardest kind of small-business software is handled, never as the limit of scope.

## Operating Context

Visitors typically arrive with a specific pain (a stalled project, a manual weekly routine, a tool that almost fits) and read to answer three questions: what if you disappear, will I be able to run it, what will it cost and how long. Process: intro call, written proposal (or written assessment for rescues), build with visible progress, handover, optional support.

## Capabilities and Constraints

- Astro 5 static site, six pages (home, services, work, process, about, contact), deployed to GitHub Pages at `omnipeak.tech`. Only client-side JS is the mobile nav toggle.
- Contact form posts natively to Formspree. Site constants live in `src/consts.ts`.
- Every "Book an intro call" button links straight to Cal.com (`SCHEDULING_URL` in `src/consts.ts`).
- Technology named to clients: TypeScript, PostgreSQL, Stripe ("deliberately boring").

## Brand Commitments

- Name: Omnipeak. Contact: `info@omnipeak.tech`.
- Voice: company voice with no pronoun ("Omnipeak builds…") or first person singular where it reassures. Never "we"/"our team", "solo", "one-man", "freelance", "small shop", "just me". Plain, specific, outcome-first; no "leveraging", "solutions", "digital transformation", "passionate".
- Never narrow copy back to appointment-based businesses only.

## Evidence on Hand

- One case study (`src/pages/work.astro`): ground-up rebuild of a booking and membership platform for a multi-location golf simulator business, the client's third attempt after two failed developers. Reservations with time-based pricing, Stripe recurring billing, scheduled jobs, franchise-ready structure.
- Founder has 6+ years in the industry; deliberately not headlined (proof over tenure), may appear on About.
- Client is named with permission: **Smash Factor Lounge** (smashfactorlounge.com).
- **Pending:** a real screenshot of the Smash Factor booking/admin screen; the `SCREENSHOT SLOT` comment in `index.astro` marks where it goes (`.case__shot` style is ready).
- **Absent, must not be fabricated:** testimonials/quotes, outcome numbers, logos, other case studies, pricing figures.
- Founder: David, software engineer, LA/OC, completing a master's in CS at Georgia Tech.

## Product Principles

1. Trust before persuasion: every claim answers a burned owner's fear with a concrete, verifiable commitment.
2. Specialty as proof, not boundary: lead with the hardest work to signal capability across all of it.
3. Plain language for non-technical owners; outcomes over implementation.
4. Honesty over polish: show only real evidence, and leave visible slots rather than inventing it.
5. Every page points toward the intro call.
