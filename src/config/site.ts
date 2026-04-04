export const siteConfig = {
  name: 'PolyWiz',
  byline: 'by Polymash',
  description:
    'Sustained social media campaigns for arts organizations, nonprofits, and creative institutions.',
  tagline: 'Give your art the sustained social media presence it deserves',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://polywiz.polymash.com',

  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'About', href: '#about' },
    ],
    footer: {
      product: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
      ],
      company: [
        { label: 'About Polymash', href: 'https://polymash.com', external: true },
        { label: 'Contact', href: 'mailto:hello@polymash.com', external: true },
      ],
      brands: [
        { label: 'Arterial', href: 'https://arterial.media', external: true },
        { label: 'Not Real Art', href: 'https://notrealart.com', external: true },
        { label: 'Artsville USA', href: 'https://artsvilleusa.com', external: true },
        { label: 'The Intersect', href: 'https://theintersect.art', external: true },
      ],
    },
  },

  social: {
    twitter: 'https://twitter.com/polymash',
    linkedin: 'https://linkedin.com/company/polymash',
  },

  cta: {
    primary: 'Get Early Access',
    secondary: 'Learn More',
    waitlistUrl: '#waitlist',
  },

  platforms: [
    'Instagram',
    'TikTok',
    'YouTube',
    'LinkedIn',
    'Pinterest',
    'X/Twitter',
    'Facebook',
    'Threads',
    'Bluesky',
    'Snapchat',
    'Google Business',
    'Reddit',
    'Telegram',
  ],
} as const;
