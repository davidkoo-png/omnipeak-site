# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Omnipeak, a technology consulting business. Plain HTML/CSS/JS — no build tooling, no package manager, no framework. Deployed to GitHub Pages at the custom domain `omnipeak.tech` (see `CNAME`).

## Development

There is no build, lint, or test process. To preview changes, open the HTML files directly in a browser or serve the directory with any static file server (e.g. `python -m http.server`).

## Architecture

- **Five standalone HTML pages** at the repo root: `index.html`, `services.html`, `process.html`, `about.html`, `contact.html`. Each is a full, self-contained document — there is no templating or shared-partial system, so the header/nav and footer markup is duplicated across every page. When changing shared elements (nav links, footer, contact email, meta tags), grep across all five HTML files rather than editing one.
- **`css/styles.css`** — single stylesheet for the entire site, organized in labeled sections (Reset/Base, Typography, Layout/Container, Buttons, Header/Nav, Hero, etc.) separated by `/* ---- */` comment banners. Uses BEM-style class naming (`.hero__title`, `.nav__link--active`) and CSS custom properties defined in `:root` for colors (`--color-*`), font weights (`--font-weight-*`), and spacing scale (`--space-xs` through `--space-3xl`). Reuse existing variables/spacing scale rather than introducing new hardcoded values.
- **`js/main.js`** — single vanilla JS file, no dependencies, no modules/bundler. Runs entirely inside one `DOMContentLoaded` listener, with each feature in its own labeled section: mobile nav toggle, header scroll-shadow effect, smooth-scroll for anchor links, contact form UX (loading state on submit), active-nav-link highlighting, scroll-triggered animations via `IntersectionObserver`, and a footer copyright year. A `debounce` utility is defined at file scope but not currently used by any handler.
- **Contact form** (`contact.html`) submits to Formspree (no backend) — `main.js` only adds a loading-state UX layer on top of the native form submission.
- **Contact email**: `support@omnipeak.tech`, used consistently across all five HTML pages' footers/contact sections. Keep it in sync if it changes.
