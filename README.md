# Parquet Doors — website

Next.js 16 (App Router) marketing site + blog for Parquet Doors | CMG International SRL.

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack) + Tailwind CSS v4
- Blog: MDX files in `src/content/blog/*.mdx` (git-based, no CMS) via `gray-matter` + `next-mdx-remote-client`
- Icons: `lucide-react`
- Analytics: `@vercel/analytics`, gated behind the cookie-consent banner (opt-in only)
- No contact form / no backend: every CTA links directly to WhatsApp, `tel:`, or `mailto:`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## ⚠️ Placeholder values — replace before launch

All business-specific values live in one file: [`src/lib/site-config.ts`](src/lib/site-config.ts).
Update these before going live:

| Field | Current value | Notes |
|---|---|---|
| `phone` / `phoneHref` | `+40 700 000 000` | Real phone number, used in "Sună acum" buttons |
| `email` | `placeholder@mail.com` | Used in "Trimite un e-mail" buttons |
| `whatsappNumber` | `40700000000` | Digits only, `wa.me` format — used by the floating WhatsApp button, all "Solicită o ofertă" CTAs, and the delayed popup |
| `address` | placeholder text | Shown on `/contact` |
| `hours` | placeholder text | Shown on `/contact` |
| `socialLinks` | empty | Not yet linked anywhere in the UI — add if needed |
| `url` | `https://www.parquetdoors.ro` | Used for canonical URLs, sitemap, JSON-LD — set to the real production domain |

Also still needed before launch:

- **Logo**: the header/footer currently render a text wordmark ("Parquet **Doors**"). Swap in a real
  logo file in [`Header.tsx`](src/components/layout/Header.tsx) and [`Footer.tsx`](src/components/layout/Footer.tsx) once available.
- **Brand colors**: a proposed warm wood-toned palette lives in [`globals.css`](src/app/globals.css)
  (`@theme inline` block). Replace the hex values there if the client supplies official brand colors.
- **Legal pages**: `/politica-de-confidentialitate`, `/politica-de-cookie-uri`, `/termeni-si-conditii`
  are structural drafts and are flagged on-page (and marked `noindex`) — they must be reviewed by a
  legal specialist and filled in with real company/legal details before publishing.
- **Testimonials**: the one testimonial on the homepage uses bracketed placeholders (`[NUME CLIENT]`,
  `[LOCALITATE]`) intentionally — replace with real, client-approved reviews only.
- **Photos**: product/project photos were curated and optimized from `usii_part2/` (kept locally,
  gitignored — not deployed) into `public/images/`. Add real professional photography here if/when
  available; see `scripts/curate-images.mjs` for how the current set was generated.

## Not built in this pass

A few sections that exist in `copywrite.md` but weren't part of the requested scope: the downloadable
PDF **catalog** (§30) and a dedicated **Prețuri** (pricing) section (§31) — both need real assets/numbers
the client hadn't provided yet. Straightforward to add later following the existing section-component
pattern in `src/components/sections/`.

## Deploying to Vercel

This repo is a standard Next.js App Router project — Vercel needs no special configuration.

1. Push this repository to GitHub (not done yet — `git init` and the initial commit are already in place locally).
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo.
3. Framework preset: Next.js (auto-detected). No environment variables are required to build — the
   site currently has no server secrets (no form backend, no CMS API keys).
4. Deploy. Set the production domain, then update `siteConfig.url` in `site-config.ts` to match and redeploy.
