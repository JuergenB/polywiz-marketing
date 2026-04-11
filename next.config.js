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
};

module.exports = nextConfig;
