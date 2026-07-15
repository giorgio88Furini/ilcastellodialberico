# Il Castello di Alberico — Single-Page B&B Site

Build the full single-scroll landing page based on the selected "Romagnolo Editorial" direction. All copy in Italian, warm editorial tone, palette (terracotta #C4724E, olive #5C6B3C, cream #FAF6F0, gold #B8963E, charcoal #2C2C2C), Cormorant Garamond + Inter.

## Sections (in order)

1. **Sticky nav** — logo left; links Storia / Camere / Colazione / Recensioni / Contatti; gold "Prenota" pill; mobile hamburger with slide-in sheet.
2. **Hero** — full-viewport casale image, glass card with name + tagline + gold "Prenota il tuo soggiorno" CTA + address; floating "9.0 Eccellente — 40+ recensioni" badge; subtle parallax.
3. **Trust bar** — WiFi, Parcheggio, Colazione, Biciclette, Non Fumatori (Lucide icons, gold).
4. **La Nostra Storia** — 2-column, interior image + 1700s casale copy + Massimo pull-quote.
5. **Le Camere** — 3 room cards (Matrimoniale, Bagno Esterno, Tripla) with hover-lift + gold ring; subtle "Camere limitate" chip.
6. **La Colazione** — warm olive-tinted band, right image, Fabiana copy, Elena testimonial card.
7. **Recensioni** — grid of 10 curated guest quotes (with 🇮🇹 flag + 5 stars + Verificato badge) + right column animated rating bars (Ospitalità 9.6, Pulizia 9.7, Comfort 9.7, Servizi 9.5, Qualità-Prezzo 9.0, Posizione 8.8, WiFi 9.4).
8. **Esplora la Romagna** — 4 cards: Mirabilandia, Ravenna, Cotignola, Ciclismo.
9. **Info pratiche** — check-in/out, address, distances (Forlì 35km, Ravenna 30km), Maria Cecilia Hospital note, contacts, static Google Maps embed.
10. **Final CTA** — terracotta band, Booking.com gold button + secondary outline "Contattaci".
11. **Footer** — name, quick links, social placeholders, copyright.

## Motion

- Fade-up on scroll (IntersectionObserver hook), staggered for card grids.
- Rating bars animate width from 0 to target on viewport entry.
- Hero background subtle parallax (translateY on scroll).
- Room cards hover-lift + gold ring.

## Technical

- Replace placeholder `src/routes/index.tsx` with the full page (composed of section components in `src/components/site/`).
- Load Cormorant Garamond + Inter via `<link>` in `__root.tsx` head.
- Add color tokens (terracotta, olive, cream, gold, charcoal) + font tokens to `src/styles.css` under `@theme`.
- Generate 8 images via imagegen (hero casale, story interior, 3 rooms, breakfast, Ravenna, Cotignola, Mirabilandia, cycling) saved to `src/assets/` and imported as ES modules — no Unsplash URLs.
- Update `__root.tsx` head with SEO title "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna", Italian description, og tags, LodgingBusiness JSON-LD.
- Small `useScrollReveal` hook for fade-up + bar animations.
- Booking.com CTAs link to `https://www.booking.com` placeholder (user can swap).
- Fully responsive; mobile nav sheet via shadcn Sheet.

## Out of scope

- No backend, no real booking engine, no CMS — this is a static marketing page.
- No i18n switcher (Italian only, as requested).
