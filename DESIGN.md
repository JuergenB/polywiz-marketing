# PolyWiz — Design Specification

This document defines the visual design system for the PolyWiz marketing site. Every page must conform to these standards. Check against this spec before finalizing any page update.

## Template Foundation

**Oatmeal** from Tailwind Plus is the base template. Oatmeal ships with:
- **4 color schemes** — select the warmest scheme as the starting point
- **100+ duotone icons** — use these for feature illustrations and decorative elements
- Built-in responsive layouts, component patterns, and dark mode support (dark mode not used for PolyWiz)

Customize Oatmeal's default palette with the PolyWiz brand colors below. Preserve the template's spacing, border-radius, and layout conventions unless explicitly overridden here.

## Color Palette

### Brand Colors
| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `primary` | `#E07A5F` | Coral/Terracotta | CTAs, active states, accent elements, primary buttons |
| `primary-light` | `#E8957E` | Light Coral | Hover states, lighter accents |
| `primary-dark` | `#C96A51` | Dark Coral | Active/pressed states |
| `secondary` | `#81B29A` | Sage Green | Success states, secondary actions, feature highlights |
| `secondary-light` | `#9BC4B0` | Light Sage | Hover states, subtle backgrounds |
| `secondary-dark` | `#6A9A82` | Dark Sage | Active/pressed states |
| `accent` | `#F2CC8F` | Warm Gold | Badges, highlights, premium indicators (use sparingly) |
| `accent-light` | `#F5D9A8` | Light Gold | Subtle accent backgrounds |
| `polymash-blue` | `#0399FE` | Polymash Blue | "Built by Polymash" attribution only |

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-page` | `#FAFAF8` | Page wrapper, main background — warm off-white |
| `bg-surface` | `#FFFFFF` | Cards, elevated elements, modals |
| `bg-muted` | `#F5F3F0` | Alternate section backgrounds, subtle differentiation |
| `bg-warm` | `#FDF8F3` | Hero sections, highlight areas — slightly warmer than page bg |
| `bg-primary-subtle` | `#FEF0EC` | Primary-tinted backgrounds (feature highlights) |
| `bg-secondary-subtle` | `#EFF7F3` | Secondary-tinted backgrounds (success areas) |
| `bg-accent-subtle` | `#FDF6E8` | Accent-tinted backgrounds (callouts) |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#2D3436` | Headings, primary content — warm near-black |
| `text-secondary` | `#636E72` | Body text, descriptions — muted warm gray |
| `text-muted` | `#9BA4A8` | Metadata, timestamps, supporting copy |
| `text-on-primary` | `#FFFFFF` | Text on primary-colored backgrounds |
| `text-on-dark` | `#FAFAF8` | Text on dark sections (if any) |

### Borders & Shadows
| Token | Value | Usage |
|-------|-------|-------|
| `border-default` | `#DFE6E9` | Card borders, dividers — soft gray |
| `border-subtle` | `#EDF0F2` | Lighter borders, inner dividers |
| `border-primary` | `#E07A5F` | Focused inputs, highlighted cards |
| `shadow-sm` | `0 1px 2px rgba(45, 52, 54, 0.05)` | Subtle elevation |
| `shadow-md` | `0 4px 12px rgba(45, 52, 54, 0.08)` | Cards, panels |
| `shadow-lg` | `0 12px 32px rgba(45, 52, 54, 0.10)` | Modals, dropdowns |
| `shadow-primary` | `0 4px 16px rgba(224, 122, 95, 0.20)` | Primary CTA hover glow |

### Status & Badges
```
Live:        bg-secondary-subtle text-secondary-dark border border-secondary/20
Coming Soon: bg-muted text-muted border border-default
Premium:     bg-accent-subtle text-amber-700 border border-accent/30
Polymash:    bg-blue-50 text-polymash-blue border border-blue-200
```

## Typography

### Font Stack
- **Display/Headings:** DM Sans (humanist sans-serif) — friendly but professional. Fallback: Source Sans 3, Nunito, system sans-serif.
- **Body:** Inter — clean readability. Fallback: system font stack.
- **Monospace:** JetBrains Mono or system monospace (for code snippets if needed).

### Scale (Minor Third — 1.2x ratio)
| Element | Size | Weight | Additional |
|---------|------|--------|------------|
| h1 | `text-4xl sm:text-5xl lg:text-6xl` | `font-bold` | `tracking-tight`, `text-primary` |
| h2 | `text-3xl sm:text-4xl` | `font-bold` | `tracking-tight`, `text-primary` |
| h3 | `text-xl sm:text-2xl` | `font-semibold` | `text-primary` |
| h4 | `text-lg` | `font-semibold` | `text-primary` |
| Body | `text-base/7` or `text-lg/8` | `font-normal` | `text-secondary` |
| Small | `text-sm/6` | `font-normal` | `text-muted` |
| Eyebrow | `text-sm` | `font-semibold` | `uppercase tracking-wider text-primary` (coral) |

### Heading Style
All major headings use warm near-black (`#2D3436`), never pure black (`#000`). This keeps the page feeling warm and approachable.

## Component Patterns

### Buttons
- **Primary:** Coral background (`bg-primary`), white text, `shadow-primary` on hover, rounded-lg
- **Secondary:** White background with coral border, coral text, hover fills with subtle coral bg
- **Ghost:** No background, coral text, subtle hover background
- **All buttons:** `rounded-lg` (generous radius), `font-medium`, smooth transition

```tsx
// Primary CTA
<button className="rounded-lg bg-[#E07A5F] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#C96A51] hover:shadow-[0_4px_16px_rgba(224,122,95,0.20)]">
  Get Early Access
</button>

// Secondary
<button className="rounded-lg border border-[#E07A5F] px-6 py-3 font-medium text-[#E07A5F] transition hover:bg-[#FEF0EC]">
  Learn More
</button>
```

### Cards
Cards use white backgrounds with soft shadows — the opposite of the Visibility Labs dark glass cards.

```tsx
<div className="rounded-2xl bg-white p-6 shadow-md border border-[#DFE6E9]">
  {/* Card content */}
</div>
```

- **Default:** `bg-white`, `shadow-md`, `border border-default`, `rounded-2xl`
- **Hover state:** `shadow-lg`, optionally shift `border-primary`
- **Featured/highlighted:** `ring-2 ring-primary/30`, `shadow-primary`
- Never use dark backgrounds for cards on this site

### Section Eyebrows
Every major section has a small uppercase label above the heading:
```tsx
<p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">
  Section Label
</p>
<h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
  Section Heading
</h2>
```

### Feature Icon Blocks
Use Oatmeal's duotone icons wherever possible. Icon containers use subtle primary-tinted backgrounds:

```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF0EC]">
  <IconComponent className="h-6 w-6 text-[#E07A5F]" />
</div>
```

Alternate icon background tints for variety:
- Primary: `bg-[#FEF0EC]` with `text-[#E07A5F]`
- Secondary: `bg-[#EFF7F3]` with `text-[#81B29A]`
- Accent: `bg-[#FDF6E8]` with `text-[#D4A853]`
- Neutral: `bg-[#F5F3F0]` with `text-[#636E72]`

### Section Dividers
Soft gradient dividers — no hard lines:
```tsx
<div className="mx-auto max-w-4xl">
  <div className="h-px bg-gradient-to-r from-transparent via-[#DFE6E9] to-transparent" />
</div>
```

## Page Structure

### Homepage Layout
1. **Hero** — `bg-warm` (`#FDF8F3`) with subtle gradient, large heading, subhead, primary CTA
2. **Feature Cards** — `bg-page` (`#FAFAF8`), grid of benefit-focused cards
3. **Opportunity Statement** — `bg-muted` (`#F5F3F0`) or `bg-primary-subtle`, narrative section
4. **How It Works** — `bg-page`, step-by-step with numbered illustrations
5. **Social Proof** — `bg-warm`, trust signals and brand logos
6. **Final CTA** — `bg-primary-subtle` or warm gradient, closing call to action
7. **Footer** — `bg-[#2D3436]` (warm near-black), light text, Polymash attribution

### Section Backgrounds
Alternate between `bg-page` and `bg-muted` (or `bg-warm`) to create visual rhythm without hard color transitions. Never use the same background for adjacent sections.

### Warm Gradient (for Hero and CTA sections)
```tsx
<div style={{
  background: 'linear-gradient(180deg, #FDF8F3 0%, #FAFAF8 100%)',
}}>
```

## Decorative Elements

### Visual Language
- **Abstract art textures** as low-opacity background decoration (NOT waveforms or tech patterns)
- **Soft geometric shapes** — circles, arcs, organic blobs in brand colors at 5-10% opacity
- **Photography:** Arts events, gallery spaces, studio work, creative process (NOT microphones, headphones, or podcast imagery)
- **Oatmeal duotone icons** for feature illustrations — these ship with the template

### Decorative Background Pattern
```tsx
<div
  className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full opacity-[0.06]"
  style={{
    background: 'radial-gradient(circle, #E07A5F 0%, transparent 70%)',
  }}
/>
```

Use 2-3 subtle radial gradients or organic shapes per page section, positioned at corners or edges.

## Animation

### Scroll-triggered (Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

- Use `once: true` for content sections
- Staggered delays for grid items: `delay: index * 0.08`
- Keep animations subtle — this is an arts site, not a tech demo

## Responsive Breakpoints
Follow Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mobile-first patterns
- Cards: single column on mobile, 2-col at `md`, 3-col at `lg`
- Hero text: `text-4xl` base, scales up with breakpoints
- Navigation: hamburger menu below `md`
- Section padding: `py-16` base, `py-24 lg:py-32` at larger sizes

## Anti-Patterns (Do NOT Use)

- `bg-[#0A141F]`, `bg-slate-900`, `bg-gray-900` — no dark backgrounds (this is a light theme)
- `text-white` on page backgrounds — reserved for text on dark footer or primary-colored buttons only
- `ring-white/10` — dark-theme glass-card pattern, not applicable here
- `bg-white/5`, `bg-white/[0.03]` — transparent dark-theme overlays
- Waveform or audio imagery — this is PolyWiz (arts campaigns), not Visibility Labs (podcasts)
- Pure black (`#000`) for text — use warm near-black (`#2D3436`)
- Alternating dark/light section backgrounds with hard transitions
- ASCII diagrams in documentation

## Standing Instructions

### After any page change:
1. Review the page against this spec for color, typography, and component consistency
2. Check that no dark-theme patterns leaked in from the Visibility Labs reference
3. Verify warm off-white backgrounds are used (not sterile pure white `#FFF` for page bg)
4. Ensure all cards use shadows, not ring-based borders (ring borders are the dark theme pattern)
5. Update this DESIGN.md if new patterns are established

### When adding a new page:
1. Start with `bg-page` (`#FAFAF8`) as the wrapper
2. Use section eyebrow + heading pattern
3. Cards: `bg-white` with `shadow-md` and `border-default`
4. Include at least one decorative element per long section
5. Review at mobile, tablet, and desktop breakpoints

### Content consistency:
- Tool/feature names must come from the registry (`src/config/tools.ts`)
- CTA text: "Get Early Access" or "Join the Waitlist" for Phase 1
- Use "The Opportunity" heading (never "The Problem")
- Social proof references: Arterial, Not Real Art, Artsville USA, The Intersect
