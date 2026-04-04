# PolyWiz Marketing Site

## Project
- Next.js 16 marketing/landing site for **PolyWiz** by Polymash
- Deployed via Vercel at **polywiz.polymash.com**
- GitHub repo: JuergenB/polywiz-marketing
- **Companion app repo:** https://github.com/JuergenB/social-media-promo-scheduler (local: `/Users/juergenberkessel/Projects/social-media-promo-scheduler`)

## What Is PolyWiz?
PolyWiz is a campaign planning tool that gives **arts organizations, 501(c)(3) nonprofits, newsletter publishers, and creative institutions** sustained social media presence across 14 platforms. Instead of a single opening-night post, PolyWiz generates and schedules dozens of platform-specific posts over weeks and months — with human approval before anything goes live.

**Built by Polymash for Arterial and its brands:** Not Real Art, Artsville USA, Sugar Press Art, The Intersect.

## Target Audience
- Arts organizations (galleries, exhibition spaces, artist collectives)
- 501(c)(3) nonprofits in the arts/culture sector
- Newsletter publishers (curators, writers, community publications)
- Podcast networks (artist interviews, creative professional series)
- Event coordinators (exhibitions, open calls, studio tours)
- Small to mid-size teams (2-10 people sharing marketing duties)

## Site Scope (Phase 1)
**Single-page landing site** — no multi-page tools directory or pricing page yet. All features explained on the homepage as benefit-focused sections. The app is still in active development; this site establishes the public presence and value proposition.

### What's Included
- Homepage with hero, feature sections, CTA
- Responsive header/footer with navigation stubs
- SEO metadata, sitemap, robots.txt
- Vercel deployment

### What's NOT Included (Yet)
- Individual tool detail pages (future: when features stabilize)
- Public pricing/tiers (not yet defined)
- Blog, help center, resources
- Sync script (no need until tool detail pages exist)

## Architecture Pattern
This site follows the same **registry-driven architecture** as the Visibility Labs marketing site (`/Users/juergenberkessel/Projects/visibility-labs-marketing`):

- **Tool/feature registry** in `src/config/tools.ts` — single source of truth
- **Site config** in `src/config/site.ts` — navigation, social links, branding
- **SEO config** in `src/config/seo.ts` — centralized metadata
- **Design tokens** in `src/config/design-tokens.ts` — colors, typography, spacing
- Pages consume the registry; adding a feature updates everything automatically
- Components are product-agnostic (Button, Container, Card, Timeline, Header, Footer)
- **Fullscreen image lightbox** on all screenshot carousels (homepage + detail pages)

### Reference Implementation
The Visibility Labs marketing site is the architectural reference:
- Tool registry pattern: `visibility-labs-marketing/src/config/tools.ts`
- Tool detail template: `visibility-labs-marketing/src/components/tools/ToolDetailTemplate.tsx`
- Image lightbox: `visibility-labs-marketing/src/components/ui/ImageLightbox.tsx`
- Site config: `visibility-labs-marketing/src/config/site.ts`
- Design tokens: `visibility-labs-marketing/src/config/design-tokens.ts`

Copy the structural patterns, not the content.

### Required UI Features (Bake Into Scaffold)
These features must be included from day one — do not ship without them:
- **Fullscreen image lightbox:** Every screenshot carousel must support click-to-open fullscreen, click-to-close, left/right arrow keyboard navigation, and touch swipe on mobile. Reference implementation: `visibility-labs-marketing/src/components/ui/ImageLightbox.tsx` (custom Framer Motion + Lucide icons, no external library needed).

## Design Direction

### Theme: Oatmeal (Tailwind Plus Template)
The site uses the **Oatmeal** template from Tailwind Plus — a light, warm, arts-friendly design system. This is a confirmed decision, not a proposal.

**Template setup:**
- Oatmeal must be downloaded from Tailwind Plus and placed in the project
- The sister site stores its Tailwind Plus templates at `/Users/juergenberkessel/Projects/visibility-labs-marketing/.templates/` (contains `tailwind-plus-radiant` and `tailwind-plus-salient`)
- Follow the same pattern: place the Oatmeal template in `.templates/tailwind-plus-oatmeal/` for reference
- Oatmeal ships with **4 color schemes** and **100+ duotone icons** — select the warmest scheme and customize with the PolyWiz palette below

### Color Palette (Customized from Oatmeal Warm Scheme)

**Primary — Coral/Terracotta** `#E07A5F`
Warm, creative, evokes clay/earth/art materials. Used for CTAs, active states, accent elements.

**Secondary — Sage Green** `#81B29A`
Calming, nature-inspired, pairs with coral. Used for success states, secondary actions, feature highlights.

**Accent — Warm Gold** `#F2CC8F`
Optimistic, inviting. Used sparingly for badges, highlights, premium indicators.

**Neutrals:**
- Background: `#FAFAF8` (warm off-white, not sterile)
- Surface: `#FFFFFF` (cards, elevated elements)
- Text primary: `#2D3436` (warm near-black)
- Text secondary: `#636E72` (muted warm gray)
- Border: `#DFE6E9` (soft gray)

**Polymash Blue** `#0399FE` — used only for "Built by Polymash" attribution, not as a primary color.

See `DESIGN.md` for the full design specification.

### Typography
- **Headings:** A humanist sans-serif (e.g., DM Sans, Source Sans 3, or Nunito) — friendly but professional
- **Body:** Inter or system font stack — clean readability
- **Scale:** Same Minor Third (1.2x) ratio as Visibility Labs site

### Visual Language
- Light backgrounds with subtle warm gradients (not dark gradients)
- Soft shadows instead of ring borders
- Rounded corners (more generous than the podcast site)
- Illustrations or abstract art textures as decorative elements (not waveforms)
- Photography: arts events, gallery spaces, studio work (not microphones/headphones)

## Content Strategy

### Hero Section
- **Headline:** "Give your art the sustained social media presence it deserves"
- **Subhead:** Position the "one post on opening night" problem, then the solution
- **CTA:** "Get Early Access" or "Join the Waitlist" (no public signup yet)

### Feature Sections (Homepage)
Present PolyWiz's capabilities as benefit-focused cards/sections:

| Feature | Benefit Headline | Key Message |
|---------|-----------------|-------------|
| Campaign Planner | Drop in a URL, get a campaign | Paste your exhibition page, newsletter, or event — PolyWiz scrapes the content and builds a multi-week campaign |
| AI Post Generator | Platform-perfect drafts in seconds | Claude generates posts tuned for each platform's voice, length, and audience — from LinkedIn articles to Instagram captions |
| Smart Scheduler | Months of promotion, not just opening night | Tapering algorithm distributes posts over weeks/months with platform-appropriate cadence |
| Approval Queue | Nothing goes live without your say | Every post is a draft until your team approves it — review, edit, swap images, then publish |
| Multi-Platform Publisher | 14 platforms, one dashboard | Instagram, LinkedIn, X, Threads, Bluesky, TikTok, Facebook, Pinterest, YouTube, and more |
| Brand Manager | One tool, all your brands | Switch between organizations with distinct voice, tone, and connected accounts |
| Image Optimizer | Gallery-ready visuals, platform-optimized | Auto-crop, compress, and AI-extend images to fit each platform's requirements |
| Link Shortener | Branded links with tracking built in | Short.io integration with per-brand domains and UTM parameters |

### Opportunity Statement
Frame around the pain point:
- Arts organizations promote exhibitions, events, newsletters, and artist features
- Most get a single social post on launch day, then silence
- Sustained promotion requires dozens of platform-specific posts over months
- Small teams can't manually create and schedule all that content
- **PolyWiz handles the repetitive work so teams focus on what to promote and what resonates**

### Social Proof / Trust Signals
- "Built for Arterial, Not Real Art, Artsville USA, and The Intersect"
- "Powering campaigns across 14 social platforms"
- Campaign type variety: exhibitions, newsletters, podcasts, events, open calls, artist profiles

## Conventions
- Commit messages: imperative tense, concise
- Reference GitHub issues with `closes #N` when applicable
- Use absolute paths for all Bash commands
- For git commands: use `git -C <repo-path>` instead of `cd` + `git`
- **Opportunity framing:** Use "The Opportunity" heading (never "The Problem") — same convention as Visibility Labs

## Tech Stack
- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **SEO:** next-sitemap
- **Deployment:** Vercel
- **UI Components:** Headless UI (for menus/modals)

## Dev Server
- **Port:** `3111` — run with `npm run dev -- -p 3111` or configure in `package.json`
- Avoids conflicts with other Polymash projects on default ports

## Global Skills (from `~/.claude/skills/`)
The following global skills are relevant to this project. They are loaded automatically by Claude Code when their trigger conditions are met.

| Skill | Path | Relevance |
|-------|------|-----------|
| `email-voice` | `~/.claude/skills/email-voice/SKILL.md` | Juergen's "wry expert" writing style. Apply for any marketing copy, email drafts, or CTA text. |
| `firecrawl` | `~/.claude/skills/firecrawl/SKILL.md` | Web scraping API. Used by PolyWiz's campaign planner to scrape URLs — relevant if building demo content or testing integrations. |
| `vercel-blob` | `~/.claude/skills/vercel-blob/SKILL.md` | Vercel Blob image storage. Use for any image assets that need permanent hosting (hero images, OG images, etc.). |
| `replicate-api` | `~/.claude/skills/replicate-api/SKILL.md` | AI image generation via Replicate (Flux Schnell/Dev). Use for generating marketing visuals, hero images, or decorative assets. |
| `short-io-api` | `~/.claude/skills/short-io-api/SKILL.md` | Short.io link shortening with UTM tracking. Use for any trackable links in marketing CTAs or campaigns. |
| `napkin-ai` | `~/.claude/skills/napkin-ai/SKILL.md` | Napkin AI infographic/diagram generation. Use for creating explanatory visuals, process diagrams, or feature illustrations for the site. |

## Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://polywiz.polymash.com
```

## PolyWiz Feature Inventory (from app repo)
These are the actual capabilities to market. Keep this list updated as the app evolves.

### Live (Phase I Complete)
- Campaign creation from URL (Firecrawl scraping)
- AI post generation (Claude Sonnet 4.6, brand-aware)
- 11 campaign types (Newsletter, Exhibition, Artist Profile, Podcast, Event, Open Call, Blog, Public Art, Video/Film, Institutional, Custom)
- Approval queue with approve/dismiss/bulk actions
- Post inline editing (text + image swap)
- Calendar view with day-by-day timeline
- Tapering schedule algorithm (Sprint/Standard/Evergreen/Marathon)
- Per-platform cadence and collision avoidance
- Multi-brand support (voice, API keys, switching)
- Zernio publishing to 14 platforms
- Webhook status sync (published/failed/partial)
- Image optimization (client + server side)
- Vercel Blob permanent image hosting
- Short.io branded link shortening with UTM
- LinkedIn PDF carousel assembly
- lnk.bio integration
- Failed post retry/delete
- Single-post immediate publish
- Multiple source URLs per campaign
- Unified image catalog with dedup
- Image-Text Integrity Rule (no hallucinated artist names)
- Role-based access with user-brand mapping

### Coming Soon
- Campaign analytics dashboard
- AI image generation (Orshot carousels)
- Pre-generation chatbot workflow
- Deep artist research (Perplexity)
- Automated campaign triggers (n8n)
- A/B content testing
- Best-time optimization
- Platform-aware distribution controls

## Supported Platforms
Instagram, TikTok, YouTube, LinkedIn, Pinterest, X/Twitter, Facebook, Threads, Bluesky, Snapchat, Google Business, Reddit, Telegram
