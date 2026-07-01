# Joan V. Oliver Rosell — Portfolio

A personal portfolio built as a real, maintainable project — not a template.
It presents my work as an early-career full-stack developer: data-informed
products with a focus on engineering quality.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · `next-themes`

**Features:** static-first (free to host on Vercel) · fully responsive ·
light/dark themes · bilingual English/Spanish with a toggle · theme and
language persisted in `localStorage` · accessible (semantic HTML, keyboard
navigation, visible focus, reduced-motion support) · SEO + Open Graph metadata
· generated favicon and social image.

---

## Getting started

Requirements: **Node.js ≥ 20**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

> On first run, Next.js downloads the web fonts (Inter, Space Grotesk,
> JetBrains Mono) via `next/font/google`, so an internet connection is needed
> for the first build.

### Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

---

## Deploying to Vercel (free)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** and import
   the repository.
3. Framework preset is detected automatically as **Next.js**. No environment
   variables are required. Click **Deploy**.
4. After the first deploy, set your final domain and update the `url` field in
   [`src/content/site.ts`](src/content/site.ts) so canonical and Open Graph
   URLs are correct, then redeploy.

The site is fully static, so it also works on any static-friendly host
(Netlify, Cloudflare Pages, GitHub Pages with an adapter, etc.).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        Root layout: fonts, SEO/OG metadata, providers, skip link
│   ├── page.tsx          Home page — composes all sections
│   ├── globals.css       Design tokens (light/dark), base styles, motion
│   ├── icon.svg          Favicon (monogram)
│   └── apple-icon.png    Apple touch icon
├── components/
│   ├── layout/           Navbar, Footer
│   ├── providers/        ThemeProvider, combined Providers
│   ├── projects/         FlagshipCard, ProjectCard (+ shared bits)
│   ├── sections/         Hero, HeroVisual, Portrait, ProofStrip, Projects,
│   │                     TechnicalFocus, Experience, Education, Contact
│   └── ui/               Reveal, Toggles, primitives (Section, headings, tags, icons)
├── content/              ← EDIT COPY HERE (typed, centralized)
│   ├── site.ts           Identity, links, deployed URL, OG image path
│   ├── dictionary.ts     All UI strings (English + Spanish)
│   ├── projects.ts       The five projects (bilingual)
│   ├── experience.ts     Internships
│   ├── education.ts      Education
│   └── skills.ts         Technical-focus groups
├── hooks/                useReducedMotion
├── i18n/                 I18nProvider + useI18n (language + persistence)
├── lib/                  utils
└── types/                Shared content types

public/
├── profile.jpg           Portrait placeholder — REPLACE with your photo
├── og.png                Social preview image
├── icon-192.png / icon-512.png / site.webmanifest
```

All text content lives in `src/content/`. English is authored first and the
Spanish object is type-checked against it, so the two languages can never fall
out of sync.

---

## Replacing the portrait photo

The photo is referenced in exactly one place —
[`src/components/sections/Portrait.tsx`](src/components/sections/Portrait.tsx) —
and loads `public/profile.jpg`.

**To use your own photo:** replace `public/profile.jpg` with your image, keeping
the same filename. A square image (e.g. 800×800 or 1000×1000) works best. No
code changes are needed. A branded placeholder ships there so the layout never
looks broken before you swap it.

---

## Adding a CV download button later (not included yet)

When your CV PDF is ready:

1. Put the file at `public/cv/joan-oliver-cv.pdf`.
2. Add a label to both languages in
   [`src/content/dictionary.ts`](src/content/dictionary.ts), e.g. inside the
   `hero` and/or `contact` objects:

   ```ts
   // en
   downloadCv: "Download CV",
   // es
   downloadCv: "Descargar CV",
   ```

3. Add the button where you want it (the Hero CTA row and/or the Contact
   section are the natural spots). Example, next to the existing Hero buttons in
   [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx):

   ```tsx
   <a
     href="/cv/joan-oliver-cv.pdf"
     download
     className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
   >
     {t.hero.downloadCv}
   </a>
   ```

That's the whole change — no other wiring required.

---

## Customization notes

- **Colors / theme:** the palette is defined once as CSS variables in
  [`src/app/globals.css`](src/app/globals.css) (`:root` for light, `.dark` for
  dark) and surfaced to Tailwind in `tailwind.config.ts`.
- **Fonts:** configured in `src/app/layout.tsx` via `next/font/google`.
- **Sections order:** controlled in `src/app/page.tsx`.
- **Signature visual:** the hero motif is based on Data Fuel's real total-cost
  equation, `C = V·P + D·K`, in
  [`src/components/sections/HeroVisual.tsx`](src/components/sections/HeroVisual.tsx).

---

## License

© Joan V. Oliver Rosell. All rights reserved.
