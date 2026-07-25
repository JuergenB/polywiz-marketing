import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

function SitemapLinks() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Product
        </h4>
        <ul className="mt-4 space-y-3">
          {siteConfig.navigation.footer.product.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Company
        </h4>
        <ul className="mt-4 space-y-3">
          {siteConfig.navigation.footer.company.map((item) => (
            <li key={item.href}>
              {'external' in item && (item as { external: boolean }).external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Built For
        </h4>
        <ul className="mt-4 space-y-3">
          {siteConfig.navigation.footer.brands.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Social
        </h4>
        <ul className="mt-4 space-y-3">
          <li>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              X / Twitter
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <Container>
        <div className="py-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logos/Polymash Square Logo 3-400.png"
                  alt="Polymash"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="font-display text-base font-semibold text-white">
                  PolyWiz{' '}
                  <span className="font-normal text-primary-400">
                    by Polymash
                  </span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                Sustained social media campaigns for arts organizations,
                nonprofits, and creative institutions.
              </p>
            </div>
            <SitemapLinks />
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row-reverse sm:justify-between sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {siteConfig.navigation.footer.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://app.polywiz.polymash.com"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Log in
              </a>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Polymash Design. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
