# Venture Route

Venture Route is an independent concept for a six-week student venture sprint: investigate an everyday problem, map current alternatives, test a small solution, and choose a grounded next step.

## Status and credit

This is a portfolio concept, not an operating programme. It is not affiliated with a university and is not accepting applications. Dates, schedule, weekly time commitment, cost, facilitators, cohort size, and delivery format have not been set. The group-study walkthrough is fictional; it is not research or a participant story.

**This website prototype was built with AI assistance.**

The interest form is a local interaction demo only. It neither sends nor saves the values entered.

## Run locally

Requires Node.js and pnpm. From this directory:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Vite prints the local development URL. To create a static production build:

```sh
pnpm build
```

The output is written to `dist/`. Asset URLs use a relative base, so the built site can be served from a repository subfolder as well as the domain root. Adding this source folder to GitHub does not itself publish or host the website.

## Project structure

- `index.html` — landing-page content, metadata, navigation, and form markup.
- `src/main.js` — mobile navigation and local-only form behavior.
- `src/styles.css` — design tokens, responsive layouts, and reduced-motion handling.
- `public/` — the local brand mark and the single-page route manifest.
- `vite.config.js` — static build and local development server configuration.

The app has no backend, database, external form service, third-party font, or runtime analytics dependency.
