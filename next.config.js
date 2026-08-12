/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // In dev, skip optimization so replaced images appear immediately
    // without needing a server restart. Production still optimizes.
    ...(process.env.NODE_ENV === 'development' ? { unoptimized: true } : {}),
  },
  compress: true,
  poweredByHeader: false,
  // Feature slugs retired when the registry was restructured (#5, #6). These
  // URLs were in the published sitemap, so they redirect rather than 404.
  async redirects() {
    return [
      { source: '/features/link-shortener', destination: '/features/results-reporting', permanent: true },
      { source: '/features/campaign-dashboard', destination: '/features/results-reporting', permanent: true },
      { source: '/features/image-optimizer', destination: '/features/campaign-images', permanent: true },
      { source: '/features/ai-post-generator', destination: '/features/post-generator', permanent: true },
    ];
  },
};

module.exports = nextConfig;
