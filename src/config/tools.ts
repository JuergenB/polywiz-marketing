import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Sparkles,
  CalendarClock,
  ShieldCheck,
  LayoutGrid,
  Building2,
  ImagePlus,
  Link2,
  Zap,
  Layers,
  SlidersHorizontal,
  BarChart3,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Icon resolver — maps string names to Lucide components
// ---------------------------------------------------------------------------

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Sparkles,
  CalendarClock,
  ShieldCheck,
  LayoutGrid,
  Building2,
  ImagePlus,
  Link2,
  Zap,
  Layers,
  SlidersHorizontal,
  BarChart3,
};

export function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Globe;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FeatureStatus = 'live' | 'coming-soon';

export interface FeatureImage {
  src: string;
  caption?: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface FeatureDefinition {
  id: string;
  slug: string;
  sortOrder: number;
  status: FeatureStatus;
  iconName: string;
  iconColorClass: string;

  // Homepage showcase
  homepageLabel: string;
  title: string;
  benefitHeadline: string;
  description: string;
  images: FeatureImage[];
  cta: string;

  // Detail page
  detailPageTitle: string;
  detailPageDescription: string;
  opportunityStatement?: {
    paragraph1: string;
    paragraph2: string;
  };
  howItWorks?: {
    subtitle: string;
    steps: HowItWorksStep[];
  };
  details: string[];
}

// ---------------------------------------------------------------------------
// Feature Registry
// ---------------------------------------------------------------------------

export const FEATURES: FeatureDefinition[] = [
  {
    id: 'campaign-planner',
    slug: 'campaign-planner',
    sortOrder: 1,
    status: 'live',
    iconName: 'Globe',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Core Feature',
    title: 'Campaign Planner',
    benefitHeadline: 'Drop in a URL, get a campaign',
    description:
      'Paste your exhibition page, newsletter, or event — PolyWiz scrapes the content and builds a multi-week campaign across all your platforms.',
    images: [
      { src: '/images/features/campaign-workflow-four-steps.png', caption: 'Four-step workflow from URL paste to scheduled distribution' },
      { src: '/images/features/campaign-types-grid-dark.png', caption: '11 color-coded campaign types from Newsletter to Custom' },
      { src: '/images/features/duration-distribution-schedule-profile.png', caption: 'Duration and distribution settings with tapering frequency preview' },
      { src: '/images/features/generation-options-platform-toggles.png', caption: 'Platform toggles, variant count, and tone of voice controls' },
    ],
    cta: 'See Campaign Planner',
    detailPageTitle: 'Campaign Planner',
    detailPageDescription:
      'Paste any URL — an exhibition page, newsletter, blog post, or event listing — and PolyWiz scrapes the content, extracts images, and builds a multi-week social media campaign automatically.',
    opportunityStatement: {
      paragraph1:
        'Arts organizations promote exhibitions, events, newsletters, and artist features across a dozen platforms. Most get <strong>a single social post on launch day, then silence</strong>.',
      paragraph2:
        'PolyWiz\'s Campaign Planner turns any URL into weeks of platform-specific content — extracting text, images, and metadata to build campaigns that sustain attention long after opening night.',
    },
    howItWorks: {
      subtitle: 'From URL to complete campaign in four steps.',
      steps: [
        { title: 'Paste a URL', description: 'Drop in any exhibition page, newsletter, blog post, or event listing. PolyWiz uses Firecrawl to extract content and images.' },
        { title: 'Configure the campaign', description: 'Choose the campaign type, select brands, set editorial direction, and pick your schedule profile.' },
        { title: 'AI generates the posts', description: 'Claude generates platform-specific drafts shaped by your 8-dimension brand voice and campaign type rules.' },
        { title: 'Review and publish', description: 'Edit, approve, and schedule posts individually or in bulk across all 13 platforms.' },
      ],
    },
    details: [
      '11 campaign types: exhibitions, newsletters, podcasts, events, and more',
      'Firecrawl-powered content extraction with smart image filtering',
      'Multiple source URLs per campaign for richer content',
      'Specialized scraping for exhibitions, newsletters, and artist profiles',
    ],
  },
  {
    id: 'ai-post-generator',
    slug: 'ai-post-generator',
    sortOrder: 2,
    status: 'live',
    iconName: 'Sparkles',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'AI-Powered',
    title: 'AI Post Generator',
    benefitHeadline: 'Platform-perfect drafts in seconds',
    description:
      'AI generates posts tuned for each platform\'s voice, length, and audience — from LinkedIn articles to Instagram captions to Bluesky threads.',
    images: [
      { src: '/images/features/ai-generation-system-four-pillars.png', caption: 'AI generation system with campaign rules, brand voice, image integrity, and platform formatting' },
      { src: '/images/features/campaign-timeline-with-instagram-posts.png', caption: 'Campaign timeline showing AI-generated Instagram posts with approve and dismiss actions' },
    ],
    cta: 'See AI Post Generator',
    detailPageTitle: 'AI Post Generator',
    detailPageDescription:
      'Generate platform-perfect social media posts with AI that understands your brand voice, campaign type rules, and each platform\'s unique requirements.',
    opportunityStatement: {
      paragraph1:
        'Writing social media posts for 13 platforms is tedious. Each platform has its own <strong>character limits, hashtag conventions, tone expectations, and media formats</strong>.',
      paragraph2:
        'PolyWiz\'s AI Post Generator uses Claude to create platform-native drafts shaped by your brand voice dimensions — so LinkedIn gets thoughtful articles while Instagram gets punchy captions with relevant hashtags.',
    },
    howItWorks: {
      subtitle: 'AI that understands your brand and every platform.',
      steps: [
        { title: 'Brand voice analysis', description: 'Your 8-dimension tone profile (Wit, Warmth, Authority, etc.) shapes every draft.' },
        { title: 'Platform-specific generation', description: 'Each platform gets content formatted for its unique requirements and audience.' },
        { title: 'Campaign type rules', description: 'Dynamic editorial rules adjust generation based on whether it\'s an exhibition, newsletter, or event.' },
        { title: 'Human review', description: 'Every post is a draft — edit, refine, and approve before anything goes live.' },
      ],
    },
    details: [
      'Brand-aware generation with dynamic content rules per campaign type',
      'Platform-specific formatting, hashtags, and character limits',
      'Image-Text Integrity Rule prevents hallucinated artist names',
      'Per-campaign editorial direction for fine-tuned output',
    ],
  },
  {
    id: 'tone-voice-system',
    slug: 'tone-voice-system',
    sortOrder: 3,
    status: 'live',
    iconName: 'SlidersHorizontal',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Brand Control',
    title: 'Tone & Voice System',
    benefitHeadline: 'Eight dimensions of brand voice control',
    description:
      'Go beyond a single "tone" slider. Fine-tune your brand\'s voice across eight dimensions so every post sounds unmistakably yours.',
    images: [
      { src: '/images/features/tone-dimensions-eight-sliders.png', caption: 'Eight tone sliders from Wit to Intimacy with low and high labels' },
      { src: '/images/features/tone-voice-wheel-four-quadrants.png', caption: 'Voice wheel showing Expert Connection, Engaging Personality, Objective Authority, and Bold Expression' },
      { src: '/images/features/brand-settings-voice-guidelines.png', caption: 'Brand settings with voice guidelines, profile details, and brand selector' },
      { src: '/images/features/posting-cadence-per-platform.png', caption: 'Per-platform posting cadence with weekly frequency, day selection, and time-of-day slots' },
    ],
    cta: 'See Voice System',
    detailPageTitle: 'Tone & Voice System',
    detailPageDescription:
      'Control your brand voice across eight independent dimensions — Wit, Warmth, Opinion, Skepticism, Playfulness, Urgency, Authority, and Intimacy — so every generated post sounds authentically yours.',
    details: [
      'Eight tone dimensions: Wit, Warmth, Opinion, Skepticism, Playfulness, Urgency, Authority, Intimacy',
      'Master intensity slider from Professional to Full Voice',
      'Per-brand defaults with per-campaign overrides',
      'Adaptive scaling — dimensions modulate as intensity changes',
    ],
  },
  {
    id: 'smart-scheduler',
    slug: 'smart-scheduler',
    sortOrder: 4,
    status: 'live',
    iconName: 'CalendarClock',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Automation',
    title: 'Smart Scheduler',
    benefitHeadline: 'Months of promotion, not just opening night',
    description:
      'The tapering algorithm distributes posts over weeks and months with platform-appropriate cadence — so your exhibition gets sustained attention.',
    images: [
      { src: '/images/features/calendar-april-2026-scheduled-posts.png', caption: 'April 2026 calendar with color-coded posts across six platforms and daily post counts' },
      { src: '/images/features/per-brand-cadence-settings.png', caption: 'Smart scheduling algorithm profiles: Sprint, Standard, Evergreen, and Marathon' },
      { src: '/images/features/duration-distribution-schedule-profile.png', caption: 'Duration and distribution settings with tapering frequency preview' },
    ],
    cta: 'See Smart Scheduler',
    detailPageTitle: 'Smart Scheduler',
    detailPageDescription:
      'Distribute posts intelligently over weeks and months with tapering algorithms, per-brand cadence controls, and collision avoidance — so your content gets sustained attention.',
    howItWorks: {
      subtitle: 'Intelligent post distribution that sustains attention.',
      steps: [
        { title: 'Choose a profile', description: 'Sprint (2 weeks), Standard (6 weeks), Evergreen (3 months), or Marathon (6 months).' },
        { title: 'Tapering algorithm', description: 'Posts are front-loaded with natural decay — more activity at launch, sustained presence over time.' },
        { title: 'Collision avoidance', description: 'Per-brand cadence limits prevent platform flooding and audience fatigue.' },
        { title: 'Visual timeline', description: 'Calendar heatmap shows your entire schedule at a glance with day-by-day drill-down.' },
      ],
    },
    details: [
      '4 schedule profiles: Sprint, Standard, Evergreen, Marathon',
      'Per-brand and per-platform cadence with collision avoidance',
      'Calendar heatmap with day-by-day timeline visualization',
      'Automatic schedule sync corrects drift from the publishing platform',
    ],
  },
  {
    id: 'approval-queue',
    slug: 'approval-queue',
    sortOrder: 5,
    status: 'live',
    iconName: 'ShieldCheck',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'Quality Control',
    title: 'Approval Queue',
    benefitHeadline: 'Nothing goes live without your say',
    description:
      'Every post is a draft until your team approves it. Review, edit text, swap images, browse the campaign image library, then publish.',
    images: [
      { src: '/images/features/approval-queue-pending-posts.png', caption: 'Approved posts queue with Bluesky and Instagram posts, reorder handle, and Generate More option' },
      { src: '/images/features/campaign-image-library-browser.png', caption: 'Approval queue workflow: Review Drafts, Edit or Swap, Approve Posts, Publish' },
    ],
    cta: 'See Approval Queue',
    detailPageTitle: 'Approval Queue',
    detailPageDescription:
      'Every AI-generated post is a draft until your team approves it. Review, edit, swap images from the campaign library, and publish individually or in bulk.',
    details: [
      'Inline editing with campaign image library quick-access',
      'Approve, dismiss, or bulk-action across campaigns',
      'Failed post retry, single-post publish, and unscheduling',
      'Multi-image carousel support with per-slide captions',
    ],
  },
  {
    id: 'cover-slide-designer',
    slug: 'cover-slide-designer',
    sortOrder: 6,
    status: 'live',
    iconName: 'Layers',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Design Tool',
    title: 'Cover Slide Designer',
    benefitHeadline: 'Branded carousel covers in clicks',
    description:
      'Design editorial cover slides for carousel posts with a template-driven visual editor. Choose layouts, customize colors, and let AI write the headline.',
    images: [
      { src: '/images/features/carousel-post-editor-with-cover-slides.png', caption: 'Instagram carousel post with cover slides, post text, and publish controls' },
      { src: '/images/features/cover-slide-finished-interview.png', caption: 'Finished Q+Art Interview cover slide with artist portrait, headline, and branding' },
      { src: '/images/features/cover-slide-template-picker.png', caption: 'Template picker with Quote and Podcast Quote layouts in light and dark variants' },
      { src: '/images/features/cover-slide-band-layout.png', caption: 'Band-based cover slide layout with image, text, and branding sections' },
    ],
    cta: 'See Cover Designer',
    detailPageTitle: 'Cover Slide Designer',
    detailPageDescription:
      'Design branded carousel cover slides with a template-driven visual editor. Band-based layouts, eyedropper colors, font sizing, and AI headlines.',
    details: [
      'Band-based layout system: images, text, branding, separators',
      'Template gallery with brand-scoped and type-aware suggestions',
      'Eyedropper color picker and font size adjustment',
      'Multi-platform carousels: Instagram, Threads, Bluesky, LinkedIn PDF',
    ],
  },
  {
    id: 'quick-post',
    slug: 'quick-post',
    sortOrder: 7,
    status: 'live',
    iconName: 'Zap',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Quick Action',
    title: 'Quick Post',
    benefitHeadline: 'One-off posts without the overhead',
    description:
      'Not everything needs a full campaign. Quick Post lets you create, preview, and publish a single post to any platform — ideal for timely announcements.',
    images: [
      { src: '/images/features/quick-post-platform-selector.png', caption: 'Quick Post creation with platform selector, URL input, editorial direction, and tone slider' },
      { src: '/images/features/quick-post-schedule-later.png', caption: 'Schedule a quick post for a future date and time' },
    ],
    cta: 'See Quick Post',
    detailPageTitle: 'Quick Post',
    detailPageDescription:
      'Create, preview, and publish a single post to any platform without campaign overhead — ideal for timely announcements and spur-of-the-moment shares.',
    details: [
      'Standalone post creation without campaign context',
      'Image picker with preview during generation',
      'Publish immediately or schedule for later',
    ],
  },
  {
    id: 'multi-platform-publisher',
    slug: 'multi-platform-publisher',
    sortOrder: 8,
    status: 'live',
    iconName: 'LayoutGrid',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'Publishing',
    title: 'Multi-Platform Publisher',
    benefitHeadline: '13 platforms, one dashboard',
    description:
      'Instagram, LinkedIn, X, Threads, Bluesky, TikTok, Facebook, Pinterest, YouTube, and more — publish everywhere from a single approval queue.',
    images: [
      { src: '/images/features/connected-accounts-six-platforms.png', caption: 'Connected accounts with six platforms: Bluesky, Facebook, Instagram, LinkedIn, Pinterest, and Threads' },
    ],
    cta: 'See Publisher',
    detailPageTitle: 'Multi-Platform Publisher',
    detailPageDescription:
      'Publish to 13 social platforms from a single dashboard with automatic status sync, branded short links, and LinkedIn PDF carousel assembly.',
    details: [
      'Zernio-powered publishing with automatic webhook status sync',
      'Published, failed, and partial status tracking with drift correction',
      'LinkedIn PDF carousel assembly and lnk.bio integration',
      'Per-platform custom content, media, and scheduling',
    ],
  },
  {
    id: 'brand-manager',
    slug: 'brand-manager',
    sortOrder: 9,
    status: 'live',
    iconName: 'Building2',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Multi-Brand',
    title: 'Brand Manager',
    benefitHeadline: 'One tool, all your brands',
    description:
      'Switch between organizations with distinct voice, tone dimensions, cadence defaults, and connected accounts. Each brand maintains its own identity.',
    images: [
      { src: '/images/features/brand-settings-voice-guidelines.png', caption: 'Brand settings with voice guidelines, profile details, and brand selector' },
      { src: '/images/features/posting-cadence-per-platform.png', caption: 'Per-platform posting cadence with weekly frequency, day selection, and time-of-day slots' },
    ],
    cta: 'See Brand Manager',
    detailPageTitle: 'Brand Manager',
    detailPageDescription:
      'Manage multiple brands with distinct voice dimensions, cadence defaults, connected accounts, and team permissions — all from one tool.',
    details: [
      '8-dimension tone system with per-brand defaults',
      'Per-brand posting cadence, timezone, and logo variants',
      'Separate API keys and social accounts per brand',
      'Role-based access with user-brand mapping',
    ],
  },
  {
    id: 'image-optimizer',
    slug: 'image-optimizer',
    sortOrder: 10,
    status: 'live',
    iconName: 'ImagePlus',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Visual Tools',
    title: 'Image Optimizer',
    benefitHeadline: 'Gallery-ready visuals, platform-optimized',
    description:
      'Auto-crop, compress, and optimize images to fit each platform\'s requirements. AI outpainting extends images that don\'t fit.',
    images: [
      { src: '/images/features/ai-outpainting-aspect-ratio.png', caption: 'AI outpainting extending image edges to fit platform aspect ratios' },
      { src: '/images/features/platform-auto-crop-formats.png', caption: 'Platform-specific auto-crop for square, portrait, landscape, and vertical formats' },
      { src: '/images/features/campaign-image-library.png', caption: 'Campaign image library with scraped images available during post editing' },
    ],
    cta: 'See Image Optimizer',
    detailPageTitle: 'Image Optimizer',
    detailPageDescription:
      'Auto-crop, compress, AI outpaint, and optimize images to fit each platform\'s requirements — so your artwork always looks its best.',
    details: [
      'AI outpainting for aspect ratio correction via Replicate Flux',
      'Platform-specific auto-crop (square, portrait, landscape, vertical)',
      'Vercel Blob permanent image hosting with deduplication',
      'Campaign image library surfaces scraped images during editing',
    ],
  },
  {
    id: 'link-shortener',
    slug: 'link-shortener',
    sortOrder: 11,
    status: 'live',
    iconName: 'Link2',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'Analytics',
    title: 'Link Shortener',
    benefitHeadline: 'Branded links with tracking built in',
    description:
      'Short.io integration with per-brand domains and UTM parameters. Track which campaigns drive real engagement.',
    images: [
      { src: '/images/features/branded-short-domains.png', caption: 'Per-brand custom short domains with Short.io integration' },
      { src: '/images/features/automatic-utm-tagging.png', caption: 'Automatic UTM parameter tagging on all published links' },
      { src: '/images/features/click-tracking-dashboard.png', caption: 'Click tracking analytics across all shortened campaign links' },
    ],
    cta: 'See Link Shortener',
    detailPageTitle: 'Link Shortener',
    detailPageDescription:
      'Branded short links with per-brand domains, automatic UTM parameters, and click tracking across all published content.',
    details: [
      'Per-brand custom short domains',
      'Automatic UTM parameter tagging',
      'Click tracking across all published links',
    ],
  },
  {
    id: 'campaign-dashboard',
    slug: 'campaign-dashboard',
    sortOrder: 12,
    status: 'live',
    iconName: 'BarChart3',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Analytics',
    title: 'Campaign Dashboard',
    benefitHeadline: 'Real-time stats across all campaigns',
    description:
      'See what\'s pending, scheduled, published, and failed — at a glance. Filter by time range, drill into any campaign, and catch problems before your audience does.',
    images: [
      { src: '/images/features/dashboard-overview-publishing-pipeline.png', caption: 'Campaign operations dashboard with publishing pipeline, pending review count, and approval queue' },
      { src: '/images/features/campaigns-list-overview.png', caption: 'Campaigns grid with campaign types, status badges, schedule profiles, and calendar links' },
      { src: '/images/features/failed-post-alerts.png', caption: 'Failed post alerts with one-click retry or delete actions' },
    ],
    cta: 'See Dashboard',
    detailPageTitle: 'Campaign Dashboard',
    detailPageDescription:
      'Real-time campaign statistics with configurable time ranges, pending queues, scheduled heatmaps, and failed post alerts.',
    details: [
      'Configurable time ranges: today, 7d, 30d, 90d, YTD, all time',
      'Pending approval queue with deep-links to campaign detail',
      'Scheduled post timeline heatmap across all brands',
      'Failed post alerts with one-click retry or delete',
    ],
  },
];

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

export function getAllFeatures(): FeatureDefinition[] {
  return [...FEATURES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLiveFeatures(): FeatureDefinition[] {
  return getAllFeatures().filter((f) => f.status === 'live');
}

export function getFeaturedFeatures(): FeatureDefinition[] {
  // Top 6 features for the homepage showcase
  return getLiveFeatures().slice(0, 6);
}

export function getFeatureBySlug(slug: string): FeatureDefinition | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
