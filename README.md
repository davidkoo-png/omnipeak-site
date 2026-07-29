# omnipeak.tech

Marketing site for Omnipeak LLC — booking, scheduling, and membership systems for appointment-based small businesses.

Built with [Astro](https://astro.build) (static output, no client framework). Deployed to GitHub Pages at [omnipeak.tech](https://omnipeak.tech) via GitHub Actions.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
├── consts.ts            # email, Formspree endpoint, scheduling URL
├── styles/global.css    # all CSS; design tokens in :root
├── layouts/BaseLayout.astro
├── components/          # Header, Footer, CTA, SectionHeader
└── pages/               # index, services, work, process, about, contact
public/                  # CNAME, robots.txt, favicon.svg
```

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to GitHub Pages. Repo setting required once: **Settings → Pages → Source: GitHub Actions**. The custom domain is kept by `public/CNAME`.

## Before-launch checklist

- [ ] Replace `SCHEDULING_URL` in `src/consts.ts` with the real Cal.com/Calendly link
- [ ] Confirm the reply-time promise on the contact page ("within one business day")
- [ ] When client permission lands: fill the name/quote/numbers slots in `src/pages/work.astro`
