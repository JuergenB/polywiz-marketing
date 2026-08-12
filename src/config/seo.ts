import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://polywiz.polymash.com';

export const seoConfig = {
  global: {
    siteName: 'PolyWiz by Polymash',
    tagline: 'Sustained social media campaigns for arts organizations',
    description:
      'PolyWiz generates and schedules weeks of platform-specific social media posts for arts organizations, nonprofits, and creative institutions - with human approval before anything goes live.',
    url: baseUrl,
    twitterHandle: '@polymash',
    defaultOgImage: `${baseUrl}/og-image.png`,
  },

  pages: {
    home: {
      title: 'PolyWiz - Sustained Social Media Campaigns for Arts Organizations',
      description:
        'Give your art the sustained social media presence it deserves. PolyWiz generates and schedules weeks of platform-specific posts across 13 platforms - with human approval before anything goes live.',
      keywords: [
        'social media management',
        'arts organizations',
        'nonprofit marketing',
        'campaign automation',
        'social media scheduling',
        'exhibition marketing',
        'arts marketing tools',
        'multi-platform publishing',
        'content scheduling',
      ],
    },
  },
} as const;

export function getPageMetadata(pageName: keyof typeof seoConfig.pages): Metadata {
  const page = seoConfig.pages[pageName];
  const { global } = seoConfig;

  return {
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    openGraph: {
      title: page.title,
      description: page.description,
      url: global.url,
      siteName: global.siteName,
      images: [{ url: global.defaultOgImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      creator: global.twitterHandle,
    },
  };
}
