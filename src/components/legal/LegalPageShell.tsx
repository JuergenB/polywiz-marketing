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

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-500">
            Questions about this document? Email{' '}
            <a
              href="mailto:support@polymash.com"
              className="text-primary-400 underline underline-offset-4 transition-colors hover:text-primary-300"
            >
              support@polymash.com
            </a>
            .
          </div>
        </div>
      </Container>
    </div>
  );
}
