---
name: body-by-olga-brand
description: Apply Body By Olga's "Warm Athletic" design system and brand voice to any frontend, content, or marketing output. Use when building pages, components, blog posts, emails, social content, or any visual/written asset for the Body By Olga fitness brand. Triggers on mentions of "Body By Olga," "Olga," "bodybyolga," "Warm Athletic," or when working in the bodybyolga project directory.
---

# Body By Olga — Brand Skill

You are building for **Body By Olga**, a fitness platform for women 40–60 focused on functional strength training at home. Every output must conform to the design system and brand voice below. Do not deviate from these specifications — they are the result of extensive brand strategy work and are final.

## Brand Identity

**Tagline:** Strength is ageless.
**Positioning:** The only fitness app built around functional strength for women in midlife. Anti-fake-shortcut, but not anti-weight-loss. Health-first methodology wrapped in the aspirational language women actually search for.
**Tone:** Calm, intelligent, warm, confident. Think Apple or Eight Sleep, not fitness influencer energy. Never shouty, never gimmicky, never condescending. Empathy-first — name the visitor's experience before offering the solution.
**Audience:** Women 42–55, returning to or new to strength training, home-based, dumbbells only, 30 minutes per day.

### Messaging Principles

- **"Wrap the garlic in ham":** Lead with what the audience wants to hear (look better, feel confident, lose weight) but deliver functional strength education inside. The hook sells what they want; the content gives what they need.
- **Anti-fake-shortcut, not anti-weight-loss:** Acknowledge that women want to get leaner and feel better. Position strength, consistency, and sustainable habits as the honest path — never dismiss the desire, just redirect the method.
- **Empathy before solution:** Name the visitor's pain ("You used to feel strong. Somewhere along the way, that changed.") before presenting the product.
- **Confirmation over persuasion:** The site speaks to warm traffic from Instagram who already follow Olga. Lead with "you're in the right place" rather than hard sells.

### Words to use
strong, strength, capable, energized, sustainable, functional, consistent, real, honest, ageless, reclaim, rebuild, midlife, after 40, dumbbells, 30 minutes, at home, community

### Words to avoid
shred, burn calories, tone (as a verb), blast fat, skinny, bikini body, no excuses, crush it, beast mode, grind, hustle, anti-aging (use "ageless" instead), senior, elderly, old

## Design System — "Warm Athletic"

### Colors

Always use CSS custom properties. Never use raw hex values in component code.

```css
:root {
  /* Primary — CTAs, links, highlights, energy */
  --color-primary:          #FF6A2B;
  --color-primary-hover:    #E85A1F;
  --color-primary-light:    #FFF0E9;  /* icon backgrounds, tags */

  /* Accent — authority, depth, philosophy sections */
  --color-accent:           #2F5D62;
  --color-accent-hover:     #244A4E;
  --color-accent-light:     #E8F4F0;

  /* Text */
  --color-text:             #1A1A1A;  /* headings, primary body */
  --color-text-secondary:   #555555;  /* body secondary */
  --color-text-muted:       #888888;  /* captions, placeholders */

  /* Backgrounds */
  --color-bg:               #F7F4EF;  /* page background — warm linen */
  --color-bg-card:          #FFFFFF;  /* cards, content blocks */
  --color-bg-secondary:     #E8E1D7;  /* dividers, inactive buttons */
  --color-bg-secondary-light: #F0EBE3;

  /* Borders */
  --color-border:           #E8E1D7;
  --color-border-light:     #F0EBE3;

  /* Inverse (dark sections: footer, teal philosophy) */
  --color-inverse-text:     #FFFFFF;
  --color-inverse-muted:    rgba(255, 255, 255, 0.65);
}
```

**Color usage rules:**
- Orange (`--color-primary`) is the action color. Every CTA button is orange.
- Teal (`--color-accent`) is the authority/depth color. Used for philosophy sections, eyebrow labels, and secondary emphasis. Never for primary CTAs.
- Warm linen (`--color-bg`) is the default page background. Never pure white for page bg.
- Alternate sections between warm linen and white card backgrounds to create visual rhythm.
- Dark sections (footer, special callouts) use `#1A1A1A` or `#2F5D62`.

### Typography

```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body:    'DM Sans', -apple-system, sans-serif;
```

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600;700&display=swap
```

**Type scale and usage:**

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display / Hero | Playfair Display | 48px | 700 | line-height: 1.15. Orange italic for emphasis words. |
| H1 | Playfair Display | 36px | 700 | line-height: 1.2 |
| H2 | Playfair Display | 28px | 700 | line-height: 1.25 |
| H3 | DM Sans | 22px | 700 | — |
| Body | DM Sans | 16px | 400 | line-height: 1.7, color: --color-text-secondary |
| Small | DM Sans | 14px | 400 | Captions, price notes |
| Eyebrow | DM Sans | 12px | 700 | letter-spacing: 2.5px, uppercase, color: --color-accent |
| Philosophy emphasis | Playfair Display Italic | 32px | 400 | Used in teal philosophy sections |

**Typography rules:**
- NEVER use Inter, Roboto, Arial, Space Grotesk, or any generic sans-serif as primary fonts.
- Playfair Display is for headlines and emotional emphasis ONLY. Never for body text.
- In hero headlines, wrap the key emotional phrase in `<em>` and color it orange.
- Eyebrow labels are always uppercase, teal, with wide letter-spacing.

### Spacing

```css
--space-xs:   4px;
--space-sm:   8px;
--space-md:   16px;
--space-lg:   24px;
--space-xl:   32px;
--space-2xl:  48px;
--space-3xl:  64px;
--space-4xl:  96px;
```

Sections use 64–96px vertical padding. Content max-width: 1100px centered. Blog post content max-width: 700px.

### Border Radii

```css
--radius-sm:  6px;    /* small elements, inputs */
--radius-md:  10px;   /* buttons, default cards */
--radius-lg:  14px;   /* feature cards */
--radius-xl:  20px;   /* hero sections, large containers */
--radius-pill: 50px;  /* pill buttons, tags */
```

### Shadows

```css
--shadow-card:     0 2px 12px rgba(0, 0, 0, 0.05);
--shadow-elevated: 0 4px 20px rgba(0, 0, 0, 0.08);
```

## Component Patterns

### Buttons

| Variant | Background | Text | Radius | Use case |
|---------|-----------|------|--------|----------|
| Primary | --color-primary | white | --radius-md | Main CTAs |
| Primary Pill | --color-primary | white | --radius-pill | Hero CTA |
| Accent | --color-accent | white | --radius-md | Philosophy/special sections |
| Secondary | --color-bg-secondary | --color-text | --radius-md | Lower-priority actions |
| Outline | transparent, 2px border primary | --color-primary | --radius-md | Secondary emphasis |
| Ghost | transparent | --color-text | --radius-md | Tertiary/cancel |

All buttons: `font-family: var(--font-body); font-weight: 600; padding: 12–14px 24–28px; transition: background 0.2s, transform 0.1s; cursor: pointer;`
Active state: `transform: scale(0.98);`

### Cards

White background, 1px border `--color-border`, border-radius `--radius-lg`, padding 28px 24px. Icon containers: 44×44px, rounded `--radius-md`, with primary-light or accent-light background.

### 3D Flip Cards

Flip cards are a core interaction pattern used across four homepage sections: Recognition ("You know what to do..."), The Method (4 pillars), Inside the App (6 features), and Results (testimonials). Front face shows text content; back face shows a full-bleed photo with a gradient overlay and caption.

**CSS structure:**
```css
.flip-card { perspective: 1000px; cursor: pointer; }
.flip-inner {
  position: relative; width: 100%; height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner,
.flip-card.tapped .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
  border-radius: var(--radius-lg); overflow: hidden;
}
.flip-front { z-index: 2; }
.flip-back { transform: rotateY(180deg); z-index: 1; }
.flip-back img { width: 100%; height: 100%; object-fit: cover; }
.flip-back-overlay {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.55)); color: #fff;
}
```

**Card dimensions by section:**

| Section | Card size | Grid | Back image content |
|---------|----------|------|--------------------|
| Recognition (3 cards) | 480×400 (height: 340px) | 3-col → 1-col mobile | Candid photos of Olga |
| Method (4 cards) | 320×380 (height: 360px) | 4-col → 2-col → 1-col | Olga demonstrating each pillar |
| Inside the App (6 cards) | 320×360 (height: 300px) | 3-col → 2-col → 1-col | Real Playbook app screenshots |
| Results (3 cards) | 400×480 | 3-col → 1-col | Real client photos or before/afters |

**Mobile behavior (≤1024px):** Cards flip on tap instead of hover. Tapping a new card auto-closes the previous one. A subtle "hover to flip" / "tap to see more" hint appears at the bottom-right corner of each card (10px, muted color, 50% opacity) and fades on interaction.

**Design rules:**
- Flip transition: 0.6s with `cubic-bezier(0.4, 0.2, 0.2, 1)` — should feel physical, like turning a playing card.
- Back face always has a bottom gradient overlay (`transparent → rgba(0,0,0,0.55)`) with a short white caption.
- Back images fill the entire card via `object-fit: cover`. Round corners are applied by CSS — source images should be rectangular.
- Flip cards are an enhancement, not a requirement. The site must work without them (graceful degradation).

### Tags / Badges

Uppercase, 11px, font-weight 700, letter-spacing 1px, padding 4px 12px, border-radius pill. Variants: primary (orange-light bg), accent (teal-light bg), dark (black bg, white text), neutral (secondary bg).

### Navigation

White background with `border-bottom: 1px solid var(--color-border)`. Logo in Playfair Display 18px bold. Nav links in DM Sans 14px medium, color secondary. CTA button is primary orange. Becomes sticky on scroll with subtle shadow and backdrop blur.

## Page Architecture

### Confirmed Hero Copy

**Headline:** "Stop getting weaker." / "*Start here.*" (line 2 in orange italic)
**Subheadline:** "You've solved harder problems than this. 30-minute home workouts, food awareness, and coaching support for women 40+ who are done starting over."
**CTA:** "Start Free Trial" (orange pill button)
**Price note:** "$19.99/mo · Cancel anytime" or "$199/year — 2 months FREE"

### Confirmed Meet Olga Copy

> For most of my 20s I was going through the motions — gaining weight, losing it, never really paying attention to what my body could actually do.
>
> That changed when I started training for real. I got stronger than I'd ever been. I trained through both pregnancies, stayed healthy, and never looked back. That was over 18 years ago.
>
> Since then I've coached thousands of women — in person at our gym and remotely through the app. The method works because I've lived it, tested it, and refined it with real people for nearly two decades.

**Credentials line:** *18+ years coaching experience · 7,500+ women coached · Strength & functional fitness specialist* — no formal certifications listed, no "Featured in" media logos. Authority comes from the story.

### Landing Page Section Order

1. **Navigation** (sticky) — white bg, logo left, links center, orange CTA right
2. **Hero** — warm linen bg, teal eyebrow "STRENGTH AFTER 40", confirmed headline above, split layout with hero photo right (Olga with dumbbells, playful expression, never stock)
3. **Social Proof Bar** — grayscale media logos at ~15% opacity (trust signal)
4. **Recognition** — "You know what to do. You just can't make it stick." 3 empathy-first **flip cards** naming the visitor's experience (career/starting over, diets/all-or-nothing, patterns/not willpower). Backs show candid Olga photos.
5. **Philosophy Statement** — full-width deep teal bg, centered Playfair text with orange italic emphasis. Two-column layout: "What we believe" / "What that looks like"
6. **The Method** — 4 pillar **flip cards** (Functional Strength, Food Awareness, Mindset & Behavior, Consistency System). Backs show Olga demonstrating each pillar.
7. **Inside the App** — 6 feature **flip cards** in 3-col grid. Backs show real Playbook app screenshots (workout video, app home, logging, calendar, streaks, community).
8. **Meet Olga** — video + bio split layout with confirmed copy above
9. **Results** — 3 testimonial **flip cards** (real quotes from Michelle, Janka, Victoria). Backs show real client photos or before/afters.
10. **Pricing** — two-tier: Monthly $19.99 / Annual $199 ("2 months FREE"). Best Value badge on annual
11. **Final CTA** — closing statement + primary button
12. **Footer** — dark bg (#1A1A1A or #2F5D62), logo, tagline, nav links, social, legal

### Blog

Category filters at top. Cards with tag, title, excerpt, read-more link. Individual posts: 700px content width, hero image, clean article typography, end-of-post CTA block linking to the app.

### Coaching Page

Intentionally quiet and selective. Calm hero, "who this is for" cards, how it works, testimonials, soft "Apply" CTA. Not prominently promoted in main navigation — available for high-intent visitors.

## Image & Media Asset Spec

**Grand total: 37 image assets + 1 video.** Launch-critical: 14 photos + 1 video. The 16 flip card backs and 5 logos can come in a second pass.

### Homepage Assets (18 images + 1 video)

| ID | Asset | Canva Size | Type | Notes |
|----|-------|-----------|------|-------|
| H-1 | Hero photo | 800×1000 (4:5) | photo | Olga in action, natural light, not posed. Split layout right side. |
| H-2 | Media logos (×5) | 200×60 each | logo | Grayscale, transparent PNG. Rendered at ~15% opacity. |
| H-3a/b/c | Recognition flip backs (×3) | 480×400 | flip | Candid Olga photos matching each card's theme. |
| H-4a/b/c/d | Method flip backs (×4) | 320×380 | flip | Olga demonstrating each pillar. |
| H-5a–f | App feature flip backs (×6) | 320×360 | flip | Real Playbook app screenshots. |
| H-6 | Meet Olga video | 1920×1200 | video | 60–90 sec, direct to camera, natural light. Thumbnail: 640×400. |
| H-7 | Testimonial photos (×3) | 200×200 (1:1) | photo | Real client photos, circular CSS crop. No stock. |
| H-8 | Results flip backs (×3) | 400×480 | flip | Client photos or before/afters. |

### Coaching Page (3 images)

| ID | Asset | Canva Size | Type |
|----|-------|-----------|------|
| C-1 | Coaching hero (optional) | 800×500 (16:10) | photo |
| C-2 | Coaching testimonial photos (×2) | 200×200 (1:1) | photo |

### Blog Page (5 images)

| ID | Asset | Canva Size | Type |
|----|-------|-----------|------|
| B-1 | Blog post featured images (×4) | 800×450 (16:9) | photo |

### Blog Post Page (2 images per post)

| ID | Asset | Canva Size | Type |
|----|-------|-----------|------|
| BP-1 | Post hero image | 1200×514 (21:9) | photo |
| BP-2 | Inline content image | 700×394 (16:9) | photo |

### Image Preparation Rules

- **Format:** JPG for photos (80% quality). PNG for logos and app screenshots (transparency). WebP as bonus optimization.
- **Retina:** Export at 2× the listed dimensions for sharp display on high-DPI screens (e.g., 800×1000 image → export 1600×2000 from Canva, serve at 800×1000 via CSS).
- **Color temperature:** All photos should feel warm. In Canva, apply +5 to +10 warmth. Avoid cool/blue-tinted images.
- **No text on images:** All text is rendered in HTML. Images should be pure photography. Exception: app screenshots with natural UI text.
- **Flip card backs:** Full-bleed photos. Apply a subtle dark overlay (15–20% black) baked into the image. Round corners are applied by CSS — export as rectangles.
- **Consistency:** Same light source direction and warmth across all photos. Natural light preferred. No harsh flash or studio lighting.
- **File naming:** Use ID codes (h-1-hero.jpg, h-3a-flip-career.jpg, etc.) to map cleanly to HTML placeholders.

## Animation & Motion

- **Style:** Subtle, calm. No bouncy, no flashy. Apple/Eight Sleep energy.
- **Scroll reveals:** Fade-in-on-scroll with staggered delays. Use `IntersectionObserver` or Astro-compatible alternatives.
- **Hover states:** Smooth 0.2s transitions on buttons and cards. Cards may lift slightly on hover (elevated shadow).
- **No:** Parallax, auto-playing carousels, pop-ups, or aggressive animations.
- **Sticky nav:** Glassmorphism effect (backdrop blur) with subtle shadow on scroll.

## Content & SEO

- Blog posts should target keywords around: "strength training for women over 40," "dumbbell workouts at home," "perimenopause fitness," "functional strength midlife"
- Every page needs proper meta title, description, and Open Graph tags
- Use semantic HTML (article, section, nav, main, footer)
- Images need descriptive alt text
- Pricing: $19.99/month or $199/year (framed as "2 months FREE"). 7-day free trial on both.

## Technical Stack (Current)

- **Framework:** Astro (static site generator with blog support)
- **Styling:** CSS custom properties (design tokens above), no Tailwind required
- **Fonts:** Google Fonts (Playfair Display + DM Sans)
- **Hosting:** Netlify (free tier, auto-deploy from GitHub)
- **Repository:** GitHub
- **Development:** Replit

## What NOT to do

- Never use stock fitness photography. Only real photos of Olga and her clients.
- Never use purple gradients, Inter font, or generic "AI slop" aesthetic patterns.
- Never use calorie-burn or weight-loss-first messaging in headlines.
- Never make the coaching page prominent or salesy — it's intentionally quiet.
- Never use pop-ups, interstitials, or aggressive conversion tactics.
- Never promise specific health outcomes (bone density numbers, hormone levels) — use personal stories and general wellness framing.
- Never center all content symmetrically. Use intentional asymmetry and visual rhythm.
