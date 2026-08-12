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
    benefitHeadline: 'Start with what you already have',
    description:
      'A link to your exhibition page. The press release sitting on your desktop as a PDF. A season brochure hosted on your own site. Any of the three becomes a multi-week campaign across your platforms.',
    images: [
      { src: '/images/features/three-ways-in-url-pdf-quick-post.png', caption: 'Three ways in, all converging on platform-specific posts: pasting a URL, uploading a PDF, or writing a quick post' },
      { src: '/images/features/generation-options-platform-toggles.png', caption: 'Platform toggles, variant count, and tone of voice controls' },
      { src: '/images/features/duration-distribution-schedule-profile.png', caption: 'Duration and distribution settings with tapering frequency preview' },
      { src: '/images/features/campaign-type-picker-dark.jpg', caption: 'Campaign type picker asking what you are promoting, with tiles for newsletters, blog posts, exhibitions, artist profiles, podcast episodes, events, event listings, open calls and press releases' },
    ],
    cta: 'See Campaign Planner',
    detailPageTitle: 'Campaign Planner',
    detailPageDescription:
      'Start a campaign from a web page, a PDF you upload, or a link to a PDF on your own site. PolyWiz reads the material and builds weeks of platform-specific social content from it.',
    opportunityStatement: {
      paragraph1:
        'Your material is not always a tidy web page. The season brochure is a PDF. The press release is a document someone emailed you. The fall schedule exists, but nobody ever built it a microsite. <strong>Most tools ask you to paste a link, and shrug if you do not have one.</strong>',
      paragraph2:
        'PolyWiz takes a URL, an uploaded PDF, or a link to a PDF on your own site, and builds weeks of platform-specific content from any of them. Your own photographs come along too, so material that arrived as a document still produces a campaign that looks like your organization.',
    },
    howItWorks: {
      subtitle: 'From your material to a complete campaign in four steps.',
      steps: [
        { title: 'Bring what you have', description: 'A link to a page, a PDF you upload, or a link to a PDF hosted on your own site. PolyWiz reads it and works out what there is to promote.' },
        { title: 'Configure the campaign', description: 'Choose the campaign type, select brands, set editorial direction, and pick your schedule profile.' },
        { title: 'The posts get written', description: 'Platform-specific drafts shaped by your brand voice and the kind of campaign you are running.' },
        { title: 'Review and publish', description: 'Edit, approve, and schedule posts individually or in bulk across all 13 platforms.' },
      ],
    },
    details: [
      'Campaign types for exhibitions, newsletters, podcasts, events, artist profiles and press releases, with more added over time',
      'Start from a web page, an uploaded PDF up to 10 MB, or a link to a PDF on your own site',
      'PolyWiz proposes a campaign title from the document itself, and you can change it',
      'A read at upload tells you whether there is a campaign in the document. It advises, it never blocks',
      'Several source pages can feed a single campaign',
    ],
  },
  {
    id: 'post-generator',
    slug: 'post-generator',
    sortOrder: 2,
    status: 'live',
    iconName: 'Sparkles',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'Drafting',
    title: 'Post Generator',
    benefitHeadline: 'Platform-perfect drafts in seconds',
    description:
      'Posts written for each platform\'s voice, length and audience, from LinkedIn articles to Instagram captions to Bluesky threads. Every one arrives as a draft for your team to approve.',
    images: [
      { src: '/images/features/campaign-timeline-with-instagram-posts.png', caption: 'Campaign timeline showing drafted Instagram posts with approve and dismiss actions' },
    ],
    cta: 'See Post Generator',
    detailPageTitle: 'Post Generator',
    detailPageDescription:
      'Drafts written for your brand voice and for each platform\'s requirements, ready for you to edit and approve before anything goes live.',
    opportunityStatement: {
      paragraph1:
        'Writing social media posts for 13 platforms is tedious. Each platform has its own <strong>character limits, hashtag conventions, tone expectations, and media formats</strong>.',
      paragraph2:
        'PolyWiz writes the first draft for each one, shaped by your brand voice dimensions, so LinkedIn gets a considered article while Instagram gets a punchy caption. <strong>Nothing publishes on its own.</strong> Every post waits for someone on your team to read it, change it, and approve it.',
    },
    howItWorks: {
      subtitle: 'Drafts shaped by your brand and by every platform.',
      steps: [
        { title: 'Your brand voice', description: 'Your 8-dimension tone profile (Wit, Warmth, Authority, and the rest) shapes every draft.' },
        { title: 'Written per platform', description: 'Each platform gets content formatted for its own requirements and audience.' },
        { title: 'Shaped by campaign type', description: 'Editorial rules adjust the writing based on whether it is an exhibition, a newsletter, or an event.' },
        { title: 'You have the last word', description: 'Every post is a draft. Edit, refine, and approve before anything goes live.' },
      ],
    },
    details: [
      'Drafts shaped by your brand voice and by the kind of campaign you are running',
      'Platform-specific formatting, hashtags, and character limits',
      'Never invents an artist name for a picture it was given',
      'Per-campaign editorial direction for fine-tuned output',
    ],
  },
  {
    id: 'tone-voice-system',
    slug: 'tone-voice-system',
    sortOrder: 7,
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
      'Control your brand voice across eight independent dimensions - Wit, Warmth, Opinion, Skepticism, Playfulness, Urgency, Authority, and Intimacy - so every generated post sounds authentically yours.',
    details: [
      'Eight tone dimensions: Wit, Warmth, Opinion, Skepticism, Playfulness, Urgency, Authority, Intimacy',
      'Master intensity slider from Professional to Full Voice',
      'Per-brand defaults with per-campaign overrides',
      'Adaptive scaling - dimensions modulate as intensity changes',
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
      'The tapering algorithm distributes posts over weeks and months with platform-appropriate cadence - so your exhibition gets sustained attention.',
    images: [
      { src: '/images/features/calendar-april-2026-scheduled-posts.png', caption: 'April 2026 calendar with color-coded posts across six platforms and daily post counts' },
      { src: '/images/features/per-brand-cadence-settings.png', caption: 'Smart scheduling algorithm profiles: Sprint, Standard, Evergreen, and Marathon' },
      { src: '/images/features/duration-distribution-schedule-profile.png', caption: 'Duration and distribution settings with tapering frequency preview' },
    ],
    cta: 'See Smart Scheduler',
    detailPageTitle: 'Smart Scheduler',
    detailPageDescription:
      'Distribute posts intelligently over weeks and months with tapering algorithms, per-brand cadence controls, and collision avoidance - so your content gets sustained attention.',
    howItWorks: {
      subtitle: 'Intelligent post distribution that sustains attention.',
      steps: [
        { title: 'Choose a profile', description: 'Sprint (2 weeks), Standard (6 weeks), Evergreen (3 months), or Marathon (6 months).' },
        { title: 'Tapering algorithm', description: 'Posts are front-loaded with natural decay - more activity at launch, sustained presence over time.' },
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
      'Every post is a draft until your team approves it. Review, edit, swap images from the campaign library, and publish individually or in bulk.',
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
    sortOrder: 8,
    status: 'live',
    iconName: 'Layers',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Design Tool',
    title: 'Cover Slide Designer',
    benefitHeadline: 'Branded carousel covers in clicks',
    description:
      'Design editorial cover slides for carousel posts with a template-driven visual editor. Choose layouts, customize colors, and have the headline drafted for you.',
    images: [
      { src: '/images/features/cover-slide-templates-cover-dark-and-big-type-overlay.jpg', caption: 'One headline in two dark treatments: artwork above a caption block, and the headline set large in coral straight over a textured field' },
      { src: '/images/features/cover-slide-templates-cover-light-and-framed-light.jpg', caption: 'The same headline in two light treatments: artwork above a white caption block, and a cream-framed layout with the artwork inset' },
      { src: '/images/features/cover-slide-templates-masthead-band-and-framed-dark.jpg', caption: 'A coral masthead band above the artwork, next to a cream-framed layout with the headline and a one-line standfirst beneath' },
      { src: '/images/features/cover-slide-templates-podcast-quote-and-podcast-masthead.jpg', caption: 'Podcast layouts: the headline in italic serif over the artwork, and the issue number and headline banded across a monochrome image' },
      { src: '/images/features/cover-slide-templates-quote-dark-and-solid-statement.jpg', caption: 'A pull quote set over the artwork, next to a solid coral panel carrying only type and the logo' },
      { src: '/images/features/cover-slide-band-layout.png', caption: 'Band-based cover slide layout with image, text, and branding sections' },
    ],
    cta: 'See Cover Designer',
    detailPageTitle: 'Cover Slide Designer',
    detailPageDescription:
      'Design branded carousel cover slides with a template-driven visual editor. Band-based layouts, eyedropper colors, font sizing, and drafted headlines.',
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
    sortOrder: 9,
    status: 'live',
    iconName: 'Zap',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Quick Action',
    title: 'Quick Post',
    benefitHeadline: 'One-off posts without the overhead',
    description:
      'Not everything needs a full campaign. Quick Post lets you create, preview, and publish a single post to any platform - ideal for timely announcements.',
    images: [
      { src: '/images/features/quick-post-platform-selector.png', caption: 'Quick Post creation with platform selector, URL input, editorial direction, and tone slider' },
      { src: '/images/features/quick-post-schedule-later.png', caption: 'Schedule a quick post for a future date and time' },
    ],
    cta: 'See Quick Post',
    detailPageTitle: 'Quick Post',
    detailPageDescription:
      'Create, preview, and publish a single post to any platform without campaign overhead - ideal for timely announcements and spur-of-the-moment shares.',
    details: [
      'Standalone post creation without campaign context',
      'Image picker with preview during generation',
      'Publish immediately or schedule for later',
    ],
  },
  {
    id: 'multi-platform-publisher',
    slug: 'multi-platform-publisher',
    sortOrder: 10,
    status: 'live',
    iconName: 'LayoutGrid',
    iconColorClass: 'text-secondary-400',
    homepageLabel: 'Publishing',
    title: 'Multi-Platform Publisher',
    benefitHeadline: '13 platforms, one dashboard',
    description:
      'Instagram, LinkedIn, X, Threads, Bluesky, TikTok, Facebook, Pinterest, YouTube, and more - publish everywhere from a single approval queue.',
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
    sortOrder: 11,
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
      'Manage multiple brands with distinct voice dimensions, cadence defaults, connected accounts, and team permissions - all from one tool.',
    details: [
      '8-dimension tone system with per-brand defaults',
      'Per-brand posting cadence, timezone, and logo variants',
      'Separate API keys and social accounts per brand',
      'Role-based access with user-brand mapping',
    ],
  },
  {
    id: 'campaign-images',
    slug: 'campaign-images',
    sortOrder: 3,
    status: 'live',
    iconName: 'ImagePlus',
    iconColorClass: 'text-primary-400',
    homepageLabel: 'Visual Tools',
    title: 'Campaign Images',
    benefitHeadline: 'Your images, ready for every platform',
    description:
      'Upload your own photographs, or pull them in from another page. Everything for the campaign sits in one place, and PolyWiz sizes each picture correctly for wherever it is going.',
    images: [
      { src: '/images/features/campaign-image-library.png', caption: 'Campaign image library with scraped images available during post editing' },
      { src: '/images/features/image-edges-extended-to-fit.png', caption: 'Image edges extended automatically to fit platform aspect ratios' },
      { src: '/images/features/platform-auto-crop-formats.png', caption: 'Platform-specific auto-crop for square, portrait, landscape, and vertical formats' },
    ],
    cta: 'See Campaign Images',
    detailPageTitle: 'Campaign Images',
    detailPageDescription:
      'Bring your own photographs to a campaign or import them from another page. One place for every image, labelled with where it came from, sized correctly for each platform.',
    opportunityStatement: {
      paragraph1:
        'Your best photographs are rarely on the page you are promoting. They are on a hard drive, in the folder from the opening, or attached to an email from the artist. <strong>A campaign built only from what a web page gave up is a campaign missing its best pictures.</strong>',
      paragraph2:
        'So bring your own. Upload from your machine or import from another page, and everything lands in one place for the campaign, labelled with where it came from. Captions you correct stay corrected, and your pictures are spread across the campaign rather than one image doing all the work.',
    },
    details: [
      'Upload your own images to a campaign, or import them from another page',
      'Every picture for the campaign sits in one place, labelled with where it came from',
      'Captions you write or correct stay that way, even when posts are generated again',
      'PolyWiz describes what is in a picture without ever guessing who made it. It writes "a large abstract canvas in reds", never an attribution',
      'Your images are spread across the campaign instead of one picture carrying every post',
      'Automatic sizing and cropping for each platform, including extending an image that does not quite fit',
    ],
  },
  {
    id: 'results-reporting',
    slug: 'results-reporting',
    sortOrder: 6,
    status: 'live',
    iconName: 'BarChart3',
    iconColorClass: 'text-accent-400',
    homepageLabel: 'Measurement',
    title: 'Results & Reporting',
    benefitHeadline: 'Know what landed',
    description:
      'Impressions, engagement, clicks and follower growth for everything you published, next to what shipped and what failed. Come to the board meeting with numbers.',
    images: [
      { src: '/images/features/dashboard-overview-publishing-pipeline.png', caption: 'Campaign operations dashboard with publishing pipeline, pending review count, and approval queue' },
      { src: '/images/features/campaigns-list-overview.png', caption: 'Campaigns grid with campaign types, status badges, schedule profiles, and calendar links' },
      { src: '/images/features/failed-post-alerts.png', caption: 'Failed post alerts with one-click retry or delete actions' },
    ],
    cta: 'See Results & Reporting',
    detailPageTitle: 'Results & Reporting',
    detailPageDescription:
      'What each post earned, whether your audience grew, and what shipped or failed along the way. Reporting written for the person who has to answer to a board.',
    opportunityStatement: {
      paragraph1:
        'You publish for months, and then someone asks how it went. <strong>Most teams answer with a feeling.</strong> The posts went out, the calendar looks busy, and whether any of it reached anyone is anybody\'s guess.',
      paragraph2:
        'PolyWiz reports what each post earned and whether your audience actually grew, alongside the plainer question of what shipped and what failed. The campaign stops being a pipeline that ends at publish, and becomes a loop where what worked shapes what you make next.',
    },
    details: [
      'Impressions, likes, comments, shares and clicks, post by post',
      'Follower counts and growth over time, per platform and per brand',
      'Time ranges from a week to a year, so a weekly check and an annual report use the same screen',
      'What is pending, scheduled, published and failed, including the real reason a post failed',
      'Branded short links that carry your own domain on everything you publish',
      'Figures appear wherever each platform reports them, and PolyWiz says so plainly when one does not',
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
