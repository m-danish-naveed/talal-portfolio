# Hamas Munawar Portfolio — Homepage Rebuild Plan

Rebuild `samkolder.com` homepage in the existing **Next.js 16.2.10 / Tailwind CSS v4** project, strictly following the feature-sliced architecture. All filenames 100% kebab-case.

## Key Design Observations (from screenshots + HTML)

Dark, cinematic, minimal portfolio. Structure:

| Section          | Details                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nav**          | Fixed top bar — "kold" SVG logo left, Home/Work/Masterclass + Contact button right; burger on mobile                                                                 |
| **Hero**         | 3-span blur-in animated headline; location + email below; **showreel video** (background autoplay) with rotating-ring CTA button that opens **YouTube lightbox**     |
| **Logos**        | Brand strip: Canon, YouTube, DJI, Hyundai, Musicbed with dividers                                                                                                    |
| **Works Grid**   | 2-column staggered grid; **static image** shown by default, **GIF plays on hover**; title / client / date below; even columns offset down 64px on desktop            |
| **CTA Banner**   | Full-bleed **background video** (sam-clip .mp4/.webm), dark overlay; stat counters (1.34M subscribers, 1.6M followers, 64M views); "Let's Chat" tag + Contact button |
| **Social Links** | Instagram + YouTube centered row                                                                                                                                     |
| **Footer**       | Two-row: logo + email + nav top; copyright + Privacy + socials bottom                                                                                                |

**Color palette:** `#0e0e0e` bg, `#f0f0f0` text, `#1e1e1e` surface, `#888` muted, `#fff` buttons.
**Typography:** Space Mono (monospace) for hero headline; Inter for body.
**Aesthetic:** Dark mode, minimal, negative space, blur/opacity scroll-entry animations.

---

## Owner Info (Personalization)

| Field                        | Value                                                            |
| ---------------------------- | ---------------------------------------------------------------- |
| **Name**                     | Hamas Munawar                                                    |
| **Location**                 | Dubai, UAE                                                       |
| **Email**                    | engineer.hamas.munawar@gmail.com                                 |
| **Projects / Media / Stats** | All from Kolder's scraped content (no changes)                   |
| **YouTube lightbox**         | Same as Kolder's (`https://www.youtube.com/watch?v=7OoSX3KbXOw`) |
| **Social links**             | Same as Kolder's (Instagram + YouTube)                           |

## Resolved Items

- ✅ **Next.js 16.2.10** — targeting this version's App Router conventions
- ✅ **Showreel section** — `sam-showreel-transcode.mp4/.webm` as background video; rotating circle CTA opens YouTube lightbox (`<dialog>` with iframe)
- ✅ **CTA section** — `sam-clip-transcode.mp4/.webm` as full-bleed background video
- ✅ **Work cards hover GIFs** — static `.jpg` shown by default; swap to `.gif` on hover via CSS/JS
- ✅ **Personalization** — **Hamas Munawar**, Dubai UAE, `engineer.hamas.munawar@gmail.com`; all project content, media, and stats remain as Kolder's
- ✅ **All scraped images/GIFs/videos** — copied to `public/` for use as `<Image>` src and `<video>` src
- ✅ **No open questions** — ready to execute

---

## Assets to Copy

| Source (scraped)                                                                      | Destination in `public/` | Usage                     |
| ------------------------------------------------------------------------------------- | ------------------------ | ------------------------- |
| `images/*_insta360.jpg` + `*_insta360-p-*.jpg`                                        | `public/images/works/`   | Work card static image    |
| `images/*_underwater.jpg` + variants                                                  | `public/images/works/`   | Work card static image    |
| `images/*_ktwoeqpxpuo-hd*.jpg`                                                        | `public/images/works/`   | Work card static image    |
| `images/*_avata.jpg` + variants                                                       | `public/images/works/`   | Work card static image    |
| `images/*_insta360-ezgif.com-optimize.gif`                                            | `public/images/works/`   | Insta360 hover GIF        |
| `images/*_underwater-ezgif.com-optimize.gif`                                          | `public/images/works/`   | Underwater hover GIF      |
| `images/*_drone-clips-ezgif.com-optimize.gif`                                         | `public/images/works/`   | Drone clips hover GIF     |
| `images/*_avata-ezgif.com-optimize.gif`                                               | `public/images/works/`   | Avata hover GIF           |
| `images/*_canon.svg`, `*_youtube.svg`, `*_dji.svg`, `*_hyundai.svg`, `*_musicbed.svg` | `public/images/logos/`   | Brand logos strip         |
| `images/*_kold-logo.svg`                                                              | `public/images/`         | Nav + footer logo         |
| `images/*_showreel-icon.svg`, `*_play.svg`                                            | `public/images/`         | Showreel CTA button       |
| `images/*_pin-location.svg`, `*_mail.svg`                                             | `public/images/`         | Hero meta icons           |
| `images/*_instagram.svg`, `*_youtube.svg` (footer)                                    | `public/images/`         | Social icons              |
| `video/*_sam-showreel-transcode.mp4`                                                  | `public/videos/`         | Showreel background video |
| `video/*_sam-showreel-transcode.webm`                                                 | `public/videos/`         | Showreel background video |
| `video/*_sam-clip-transcode.mp4`                                                      | `public/videos/`         | CTA background video      |
| `video/*_sam-clip-transcode.webm`                                                     | `public/videos/`         | CTA background video      |
| `images/*_sam-showreel-poster-*.jpg`                                                  | `public/images/`         | Showreel video poster     |
| `images/*_sam-clip-poster-*.jpg`                                                      | `public/images/`         | CTA video poster          |

---

## Dependencies to Install

```bash
bun add framer-motion lucide-react clsx tailwind-merge
```

shadcn/ui not needed — building components from scratch for exact design fidelity.

---

## Proposed Changes

### Data Layer

#### [NEW] `src/data/pages/home.config.ts`

All static content: Hamas's personal info, nav links, work items (title/client/date/image/gif paths), brand logos, stats, social links, footer data.

---

### Module: `home`

#### [NEW] `src/modules/home/index.tsx`

Composite root — imports and renders all sections sequentially.

#### [NEW] `src/modules/home/ui/lib/animations.ts`

Single `homeAnimations` export (`Record<string, Variants>`) with:

- `heroText` — blur-in staggered spans
- `cardEntry` — staggered work card fade+translateY
- `ctaSlide` — CTA banner slide-up on scroll entry

#### [NEW] `src/modules/home/ui/sections/nav-section.tsx`

Fixed top nav. Mobile burger (3-line) with framer-motion drawer. Scroll-aware background.

#### [NEW] `src/modules/home/ui/sections/hero-section.tsx`

3-span animated heading. Location + email meta row. `<video>` background showreel (autoplay, muted, loop). Rotating SVG circle button → opens YouTube lightbox via native `<dialog>`.

#### [NEW] `src/modules/home/ui/sections/logos-section.tsx`

Horizontal brand strip: Canon / YouTube / DJI / Hyundai / Musicbed SVGs with `|` pipe dividers.

#### [NEW] `src/modules/home/ui/sections/works-section.tsx`

2-column staggered grid. Even column offset 64px down on `lg:`. Cards use `work-card.tsx`.

#### [NEW] `src/modules/home/ui/sections/cta-section.tsx`

`<video>` background (sam-clip mp4/webm, autoplay, muted, loop) with dark overlay. "Let's Chat" tag. Three stat counters. Contact button.

#### [NEW] `src/modules/home/ui/sections/social-section.tsx`

Centered Instagram + YouTube text links with icons.

#### [NEW] `src/modules/home/ui/sections/footer-section.tsx`

Row 1: logo + email + nav links. Divider. Row 2: copyright + Privacy + social icon buttons.

#### [NEW] `src/modules/home/ui/components/work-card.tsx`

`"use client"` — static `<Image>` + hover GIF swap via `onMouseEnter/Leave` state. Title, client, date below.

#### [NEW] `src/modules/home/ui/components/stat-counter.tsx`

`"use client"` — animates a number from 0 → target using framer-motion `useInView` + spring.

#### [NEW] `src/modules/home/ui/components/showreel-dialog.tsx`

`"use client"` — `<dialog>` element with YouTube iframe embed. Opens on button click, closes on backdrop click or Escape.

---

### Lib / Shared

#### [NEW] `src/lib/animations/index.ts`

Shared `fadeUp` variant used across modules (from-below entry).

---

### App Layer

#### [MODIFY] `src/app/globals.css`

Add CSS custom properties, dark background, Space Mono + Inter Google Fonts `@import`, base resets.

#### [MODIFY] `src/app/layout.tsx`

Add metadata (Hamas Munawar + description), font variables, dark `<html>` class.

#### [MODIFY] `src/app/page.tsx`

```tsx
import { HomePage } from "@/modules/home";
export default function Page() {
  return <HomePage />;
}
```

---

## Verification Plan

### Automated Tests

- `bun run build` — zero TypeScript / Next.js errors

### Manual Verification

- Matches the screenshot visually (dark bg, monospace hero, staggered grid)
- Hero text blur-in animates on load
- Showreel video plays in background; circle button opens YouTube embed dialog
- Work card shows static image → swaps to GIF on hover
- CTA section has background video playing
- Stats animate from 0 on scroll into view
- Mobile hamburger opens/closes nav drawer
- Footer renders correctly
