import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

function FooterLinkSection({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9BA4A8]">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            {'external' in item && item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#DFE6E9] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-[#DFE6E9] transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3436]">
      <Container>
        <div className="py-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="font-display text-lg font-bold text-white">
                  PolyWiz
                </span>
              </Link>
              <p className="mt-4 text-sm text-[#9BA4A8]">
                {siteConfig.description}
              </p>
              <p className="mt-4 text-sm text-[#636E72]">
                Built by{' '}
                <a
                  href="https://polymash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0399FE] transition-colors hover:text-[#4DC2FF]"
                >
                  Polymash
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3">
              <FooterLinkSection title="Product" links={siteConfig.navigation.footer.product} />
              <FooterLinkSection title="Company" links={siteConfig.navigation.footer.company} />
              <FooterLinkSection title="Built For" links={siteConfig.navigation.footer.brands} />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center border-t border-white/10 pt-8 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-6">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm capitalize text-[#9BA4A8] transition-colors hover:text-white"
                >
                  {name}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#636E72] sm:mt-0">
              &copy; {currentYear} Polymash Design. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
