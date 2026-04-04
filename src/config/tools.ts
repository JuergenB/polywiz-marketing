import {
  Globe,
  Sparkles,
  CalendarClock,
  ShieldCheck,
  LayoutGrid,
  Building2,
  ImagePlus,
  Link2,
  type LucideIcon,
} from 'lucide-react';

export type FeatureStatus = 'live' | 'coming-soon';

export interface FeatureDefinition {
  id: string;
  slug: string;
  sortOrder: number;
  status: FeatureStatus;
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
  title: string;
  benefitHeadline: string;
  description: string;
  details: string[];
}

/**
 * PolyWiz Feature Registry
 * Single source of truth for all features displayed on the marketing site.
 * Add new features here — the homepage consumes this registry automatically.
 */
export const FEATURES: FeatureDefinition[] = [
  {
    id: 'campaign-planner',
    slug: 'campaign-planner',
    sortOrder: 1,
    status: 'live',
    icon: Globe,
    iconColorClass: 'text-[#E07A5F]',
    iconBgClass: 'bg-[#FEF0EC]',
    title: 'Campaign Planner',
    benefitHeadline: 'Drop in a URL, get a campaign',
    description:
      'Paste your exhibition page, newsletter, or event — PolyWiz scrapes the content and builds a multi-week campaign across all your platforms.',
    details: [
      '11 campaign types: exhibitions, newsletters, podcasts, events, and more',
      'Firecrawl-powered content extraction from any URL',
      'Multiple source URLs per campaign for richer content',
    ],
  },
  {
    id: 'ai-post-generator',
    slug: 'ai-post-generator',
    sortOrder: 2,
    status: 'live',
    icon: Sparkles,
    iconColorClass: 'text-[#81B29A]',
    iconBgClass: 'bg-[#EFF7F3]',
    title: 'AI Post Generator',
    benefitHeadline: 'Platform-perfect drafts in seconds',
    description:
      'AI generates posts tuned for each platform\'s voice, length, and audience — from LinkedIn articles to Instagram captions to Bluesky threads.',
    details: [
      'Brand-aware generation respects your organization\'s voice and tone',
      'Platform-specific formatting, hashtags, and character limits',
      'Image-Text Integrity Rule prevents hallucinated artist names',
    ],
  },
  {
    id: 'smart-scheduler',
    slug: 'smart-scheduler',
    sortOrder: 3,
    status: 'live',
    icon: CalendarClock,
    iconColorClass: 'text-[#D4A853]',
    iconBgClass: 'bg-[#FDF6E8]',
    title: 'Smart Scheduler',
    benefitHeadline: 'Months of promotion, not just opening night',
    description:
      'The tapering algorithm distributes posts over weeks and months with platform-appropriate cadence — so your exhibition gets sustained attention, not a single-day spike.',
    details: [
      '4 schedule profiles: Sprint, Standard, Evergreen, Marathon',
      'Per-platform cadence control and collision avoidance',
      'Calendar view with day-by-day timeline',
    ],
  },
  {
    id: 'approval-queue',
    slug: 'approval-queue',
    sortOrder: 4,
    status: 'live',
    icon: ShieldCheck,
    iconColorClass: 'text-[#E07A5F]',
    iconBgClass: 'bg-[#FEF0EC]',
    title: 'Approval Queue',
    benefitHeadline: 'Nothing goes live without your say',
    description:
      'Every post is a draft until your team approves it. Review, edit text, swap images, then publish — individually or in bulk.',
    details: [
      'Inline editing for text and images before publishing',
      'Approve, dismiss, or bulk-action across campaigns',
      'Failed post retry and single-post immediate publish',
    ],
  },
  {
    id: 'multi-platform-publisher',
    slug: 'multi-platform-publisher',
    sortOrder: 5,
    status: 'live',
    icon: LayoutGrid,
    iconColorClass: 'text-[#81B29A]',
    iconBgClass: 'bg-[#EFF7F3]',
    title: 'Multi-Platform Publisher',
    benefitHeadline: '14 platforms, one dashboard',
    description:
      'Instagram, LinkedIn, X, Threads, Bluesky, TikTok, Facebook, Pinterest, YouTube, and more — publish everywhere from a single approval queue.',
    details: [
      'Zernio-powered publishing with webhook status sync',
      'Published, failed, and partial status tracking',
      'LinkedIn PDF carousel assembly and lnk.bio integration',
    ],
  },
  {
    id: 'brand-manager',
    slug: 'brand-manager',
    sortOrder: 6,
    status: 'live',
    icon: Building2,
    iconColorClass: 'text-[#D4A853]',
    iconBgClass: 'bg-[#FDF6E8]',
    title: 'Brand Manager',
    benefitHeadline: 'One tool, all your brands',
    description:
      'Switch between organizations with distinct voice, tone, and connected accounts. Each brand maintains its own identity across every platform.',
    details: [
      'Per-brand voice and tone configuration',
      'Separate API keys and social accounts per brand',
      'Role-based access with user-brand mapping',
    ],
  },
  {
    id: 'image-optimizer',
    slug: 'image-optimizer',
    sortOrder: 7,
    status: 'live',
    icon: ImagePlus,
    iconColorClass: 'text-[#636E72]',
    iconBgClass: 'bg-[#F5F3F0]',
    title: 'Image Optimizer',
    benefitHeadline: 'Gallery-ready visuals, platform-optimized',
    description:
      'Auto-crop, compress, and optimize images to fit each platform\'s requirements. Your artwork always looks its best, everywhere.',
    details: [
      'Client and server-side image optimization',
      'Vercel Blob permanent image hosting',
      'Unified image catalog with deduplication',
    ],
  },
  {
    id: 'link-shortener',
    slug: 'link-shortener',
    sortOrder: 8,
    status: 'live',
    icon: Link2,
    iconColorClass: 'text-[#E07A5F]',
    iconBgClass: 'bg-[#FEF0EC]',
    title: 'Link Shortener',
    benefitHeadline: 'Branded links with tracking built in',
    description:
      'Short.io integration with per-brand domains and UTM parameters. Track which campaigns, platforms, and posts drive real engagement.',
    details: [
      'Per-brand custom short domains',
      'Automatic UTM parameter tagging',
      'Click tracking across all published links',
    ],
  },
];

export function getAllFeatures(): FeatureDefinition[] {
  return [...FEATURES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLiveFeatures(): FeatureDefinition[] {
  return getAllFeatures().filter((f) => f.status === 'live');
}

export function getFeatureBySlug(slug: string): FeatureDefinition | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
