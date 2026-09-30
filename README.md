# Marketing landing page

The public landing page for the time-locked savings and auto-pay app for Sierra
Leone. This is a standalone Next.js site; it lives next to the Expo app
(`../vault`) but shares no build tooling with it, so the Metro bundler never
sees it.

```
COMMIT-VAULT/
├── vault/     ← the Expo app + Convex backend
└── landing/   ← you are here
```

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Stack

- **Next.js 16** (App Router, Turbopack) — the page is fully static except for
  the early-access form.
- **Tailwind CSS v4** — theme tokens declared in `src/app/globals.css`.
- **Geist**, self-hosted via the `geist` package, so builds don't depend on
  reaching Google Fonts.

## Design language

The site reuses the app's **"3D glass"** system, ported from
`../vault/constants/theme.ts`. Colours, gradients and shadows are declared once
as Tailwind theme tokens in `src/app/globals.css`, alongside utility classes
that reproduce the app's signature treatments:

| Class          | What it does                                                        |
| -------------- | ------------------------------------------------------------------- |
| `.glass`       | Frosted panel: translucent fill, hairline border, depth shadow, blur |
| `.sheen`       | Top-light bevel — the highlight that sells the depth                 |
| `.btn-gloss`   | Glossy blue CTA: vertical gradient, inner top highlight, blue glow   |
| `.card-filled` | Brand-filled accent tile, used for the bento accent and CTA band     |
| `.nav-capsule` | The floating 3D capsule navbar: bevelled edges, lift shadow          |

Use `.glass .sheen` together for cards, and add `.glass-muted` for compact rows.
Don't introduce new hex values — add a token to `@theme` instead, so the site and
the app stay in step.

### Section shaders

Every section sits on an animated mesh-gradient field (`SectionShader`):
drifting colour blobs, optionally a rotating conic sweep (`beam`) or a
perspective grid (`grid`), with a grain layer so the gradients don't band.
These are pure CSS and animate only on `transform`/`opacity`, so they stay on
the compositor; `prefers-reduced-motion` freezes them.

> **Note:** `<body>` deliberately has **no** `background-color`. The canvas
> colour comes from `<html>`. A background on `<body>` paints *above*
> negative-z-index elements in the root stacking context, which silently hides
> every shader field and ambient glow.

### App mockups

`src/components/phone-frame.tsx` plus `phone-screens.tsx` are hand-built CSS
replicas of the real app screens (vaults dashboard, vault detail, history). If
those screens change materially, update them here too.

## Wiring up the early-access form

`src/app/actions.ts` holds the `joinWaitlist` server action. It validates the
address and logs it; **it does not persist anything yet.** Point it at whatever
you want to own the list — a Convex mutation against the app's deployment is the
obvious choice:

```ts
import { ConvexHttpClient } from "convex/browser";
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
await convex.mutation(api.waitlist.join, { email });
```

## Configuration

| Variable               | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for OG tags and `metadataBase`. Defaults to `https://example.com`. |

## Before launch

The product name has been stripped from this site — there is currently **no
wordmark anywhere**, only the logo glyph. Decide on a name and reinstate it in:
`src/app/layout.tsx` (title, OG/Twitter titles, `siteName`),
`src/components/site-header.tsx` and `src/components/site-footer.tsx` (lockups,
copyright).

- Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- Replace the placeholder `hello@example.com` contact address in the footer.
- Add an Open Graph image (`src/app/opengraph-image.png`, 1200×630) — the
  metadata references one but no file ships yet.
- Replace the favicon in `src/app/favicon.ico`.
- Point `joinWaitlist` at real storage.
- Consider whether a payment-provider credit is required in the footer; the
  previous one was removed.
