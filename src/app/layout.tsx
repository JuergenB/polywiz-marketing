import type { Metadata } from 'next';
import Script from 'next/script';
import { Raleway, Open_Sans } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EarlyAccessProvider } from '@/components/ui/EarlyAccessProvider';
import '@/styles/tailwind.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://polywiz.polymash.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'PolyWiz — Sustained Social Media Campaigns for Arts Organizations',
    template: '%s | PolyWiz by Polymash',
  },
  description:
    'Give your art the sustained social media presence it deserves. PolyWiz generates and schedules weeks of platform-specific posts across 13 platforms.',
  keywords: [
    'social media management',
    'arts organizations',
    'nonprofit marketing',
    'campaign automation',
    'AI social media',
    'multi-platform publishing',
  ],
  authors: [{ name: 'Polymash Design' }],
  icons: {
    icon: [
      { url: '/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logos/favicon-32x32.png',
    apple: [{ url: '/logos/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'PolyWiz by Polymash',
    title: 'PolyWiz — Sustained Social Media Campaigns for Arts Organizations',
    description:
      'Give your art the sustained social media presence it deserves.',
    images: [
      {
        url: '/logos/polywiz-og.png',
        width: 1200,
        height: 630,
        alt: 'PolyWiz by Polymash — sustained social media campaigns for arts organizations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolyWiz by Polymash',
    description:
      'Sustained social media campaigns for arts organizations.',
    creator: '@polymash',
    images: ['/logos/polywiz-og.png'],
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
      className={clsx(
        'h-full scroll-smooth antialiased',
        raleway.variable,
        openSans.variable,
      )}
    >
      <body className="flex h-full flex-col bg-navy-900 text-gray-300">
        {/* UserMaven analytics — cookieless, no consent banner needed */}
        {process.env.NEXT_PUBLIC_USERMAVEN_KEY && (
          <Script
            src="https://t.usermaven.com/lib.js"
            data-key={process.env.NEXT_PUBLIC_USERMAVEN_KEY}
            data-tracking-host="https://events.usermaven.com"
            data-autocapture="true"
            data-privacy-policy="strict"
            strategy="afterInteractive"
          />
        )}
        <EarlyAccessProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </EarlyAccessProvider>
      </body>
    </html>
  );
}
