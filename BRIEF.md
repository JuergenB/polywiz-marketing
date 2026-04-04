# PolyWiz Marketing Site — Project Brief

## Goal
Create a single-page marketing/landing site for PolyWiz that establishes the product's public presence, communicates its value proposition to arts organizations and 501(c)(3) nonprofits, and provides a path for early access signups.

## Context
- PolyWiz is a campaign planning tool built by Polymash
- The app is in active development (Phase I near-complete, Phases II-IV planned)
- No public pricing model yet — this is an awareness/waitlist play
- The companion app repo is at `/Users/juergenberkessel/Projects/social-media-promo-scheduler`
- The architectural reference is at `/Users/juergenberkessel/Projects/visibility-labs-marketing`

## Design Direction
- **Template:** Oatmeal from Tailwind Plus — light, warm, arts-friendly (confirmed)
- Oatmeal ships with 4 color schemes and 100+ duotone icons; use the warmest scheme, customized with PolyWiz palette
- Coral/terracotta primary (`#E07A5F`), sage green secondary (`#81B29A`), warm gold accent (`#F2CC8F`)
- Warm off-white backgrounds (`#FAFAF8`), soft shadows, generous rounded corners
- Humanist typography (DM Sans or similar for headings)
- Decorative: abstract art textures, not tech waveforms
- See `DESIGN.md` for the full design specification

## Content Direction
- Benefit-focused, not feature-list
- Lead with the "sustained presence" narrative
- Frame challenges as opportunities
- Social proof: Arterial, Not Real Art, Artsville USA, The Intersect
- CTA: "Get Early Access" or "Join the Waitlist"

## Scope — Phase 1
1. **Homepage** with:
   - Hero (headline + subhead + CTA)
   - Feature cards (8 capabilities as benefit statements)
   - Opportunity statement section
   - Social proof / trust signals
   - Final CTA
2. **Header** with logo + nav stubs (Home, Features, About, Contact)
3. **Footer** with Polymash attribution + social links
4. **SEO** metadata, sitemap, robots.txt
5. **Vercel** deployment config

## Scope — Future Phases
- Individual feature detail pages (when features stabilize)
- Pricing page (when tiers are defined)
- Blog / case studies
- Help center
- Tool sync script (app repo → marketing registry)

## Implementation Plan
1. Initialize Next.js 16 project with Tailwind v4, Framer Motion, TypeScript
2. Set up the config layer (site.ts, seo.ts, design-tokens.ts, tools.ts registry)
3. Build shared components (Button, Container, Card, Header, Footer)
4. Build the homepage sections
5. Configure Vercel deployment
6. Create GitHub repo and push
7. Set up polywiz.polymash.com domain on Vercel

## Key Decisions Already Made
- Product name: **PolyWiz**
- Domain: **polywiz.polymash.com**
- Template: **Oatmeal** (Tailwind Plus) — warmest color scheme, customized with coral/sage/gold palette
- No public pricing in Phase 1
- Single-page landing (not multi-page tools directory)
- Registry-driven architecture (same pattern as Visibility Labs)
- Dev server port: **3111**
