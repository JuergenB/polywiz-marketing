import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://polywiz.polymash.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'PolyWiz — Sustained Social Media Campaigns for Arts Organizations',
    template: '%s | PolyWiz',
  },
  description:
    'Give your art the sustained social media presence it deserves. PolyWiz generates and schedules weeks of platform-specific posts across 14 platforms.',
  keywords: [
    'social media management',
    'arts organizations',
    'nonprofit marketing',
    'campaign automation',
    'AI social media',
  ],
  authors: [{ name: 'Polymash Design' }],
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'PolyWiz by Polymash',
    title: 'PolyWiz — Sustained Social Media Campaigns for Arts Organizations',
    description:
      'Give your art the sustained social media presence it deserves.',
    images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@polymash',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth antialiased ${dmSans.variable} ${inter.variable}`}
    >
      <body className="flex h-full flex-col bg-[#FAFAF8] text-[#2D3436]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
