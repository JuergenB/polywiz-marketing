export const siteConfig = {
  name: 'PolyWiz',
  byline: 'by Polymash',
  description:
    'Sustained social media campaigns for arts organizations, nonprofits, and creative institutions.',
  tagline: 'Give your arts organization the social media presence it deserves',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://polywiz.polymash.com',

  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/features' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'About', href: '/#about' },
    ],
    footer: {
      product: [
        { label: 'Features', href: '/features' },
        { label: 'How It Works', href: '/#how-it-works' },
      ],
      company: [
        { label: 'About Polymash', href: 'https://polymash.com', external: true },
        { label: 'Visibility Labs', href: 'https://visibilitylabs.polymash.com', external: true },
        { label: 'Contact', href: 'mailto:support@polymash.com', external: true },
      ],
      brands: [
        { label: 'Arterial', href: 'https://arterial.org', external: true },
        { label: 'Not Real Art', href: 'https://notrealart.com', external: true },
        { label: 'Artsville USA', href: 'https://artsvilleusa.com', external: true },
        { label: 'The Intersect', href: 'https://theintersect.art', external: true },
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        // "Beta Agreement", not "Terms of Service" — that is the document's
        // actual title. Calling it ToS while the product is in private beta
        // would misdescribe what a visitor is about to read.
        { label: 'Beta Agreement', href: '/terms' },
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
    waitlistUrl: 'mailto:support@polymash.com?subject=PolyWiz%20Early%20Access%20Request&body=Hi%20Polymash%20team%2C%0A%0AI%E2%80%99m%20interested%20in%20getting%20early%20access%20to%20PolyWiz%20for%20my%20organization.%20I%E2%80%99d%20love%20to%20learn%20more%20and%20set%20up%20a%20quick%20call%20or%20demo%20if%20possible.%0A%0AA%20bit%20about%20us%3A%0A%E2%80%A2%20Organization%3A%20%0A%E2%80%A2%20Role%3A%20%0A%E2%80%A2%20Platforms%20we%20currently%20use%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!',
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
    'Google Business',
    'Reddit',
    'Telegram',
    'Snapchat',
  ],
} as const;
