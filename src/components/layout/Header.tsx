'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button';
import { EarlyAccessButton } from '@/components/ui/EarlyAccessButton';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

function MobileNavLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full p-2">
        {children}
      </a>
    );
  }
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-black/60 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-xl bg-navy-800 p-4 text-lg tracking-tight text-gray-300 shadow-2xl ring-1 ring-white/10 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        {siteConfig.navigation.main
          .filter((item) => item.label !== 'Home')
          .map((item) => (
            <MobileNavLink key={item.href} href={item.href}>
              {item.label}
            </MobileNavLink>
          ))}
        <hr className="m-2 border-gray-300/40" />
        <EarlyAccessButton className="block w-full p-2 text-left text-primary-400">
          {siteConfig.cta.primary}
        </EarlyAccessButton>
      </PopoverPanel>
    </Popover>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <header
      className={clsx(
        'py-10',
        isHomepage
          ? 'absolute inset-x-0 top-0 z-50 bg-transparent'
          : 'bg-navy-900',
      )}
    >
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home" className="flex items-center gap-3">
              <Image
                src="/logos/Polymash Square Logo 3-400.png"
                alt="Polymash"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg"
                priority
              />
              <span className="font-display text-lg font-semibold text-white">
                PolyWiz{' '}
                <span className="font-normal text-polymash">
                  by Polymash
                </span>
              </span>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {siteConfig.navigation.main
                .filter((item) => item.label !== 'Home')
                .map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <EarlyAccessButton className="inline-flex items-center justify-center rounded-lg bg-primary-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
              {siteConfig.cta.primary}
            </EarlyAccessButton>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
