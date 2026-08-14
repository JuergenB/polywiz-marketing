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
        // A `mailto:` here published support@polymash.com in the HTML of every
        // page on the site, which is exactly what address harvesters read (#9).
        // Keep this pointing at the form.
        { label: 'Contact', href: '/contact' },
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
    // No `waitlistUrl` here. It used to hold a long pre-filled `mailto:` and had
    // no consumer left once the early-access form landed — dead config that
    // published the support address the moment anything re-wired it (#9).
    // Early access goes through EarlyAccessButton -> /api/early-access.
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
