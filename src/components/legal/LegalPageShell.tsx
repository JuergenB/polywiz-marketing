import Link from 'next/link';
import { Container } from '@/components/ui/Container';

/** Chrome shared by the marketing site's /terms and /privacy pages. */
export function LegalPageShell({
  title,
  version,
  effectiveDate,
  siblingHref,
  siblingLabel,
  children,
}: {
  title: string;
  version: string;
  effectiveDate: string;
  siblingHref: string;
  siblingLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-navy-900">
      <Container>
        <div className="mx-auto max-w-3xl py-16 sm:py-20">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Version <span className="font-mono">{version}</span> · Effective{' '}
            {effectiveDate}
          </p>
          <p className="mt-4 text-sm">
            <Link
              href={siblingHref}
              className="text-primary-400 underline underline-offset-4 transition-colors hover:text-primary-300"
            >
              {siblingLabel}
            </Link>
          </p>

          <div className="mt-10">{children}</div>

          {/*
            Deliberately a form link, not a `mailto:` — this footer rendered the
            support address as both href and visible text on two pages that are
            in the sitemap and allowed by robots.txt (#9).

            The addresses INSIDE the document body stay plain and readable on
            purpose: the arbitration opt-out, the DMCA notice procedure and the
            data-rights contact each have to name a method that is demonstrably
            reachable. Do not obfuscate those.
          */}
          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-500">
            Questions about this document?{' '}
            <Link
              href="/contact"
              className="text-primary-400 underline underline-offset-4 transition-colors hover:text-primary-300"
            >
              Send us a message
            </Link>
            .
          </div>
        </div>
      </Container>
    </div>
  );
}
