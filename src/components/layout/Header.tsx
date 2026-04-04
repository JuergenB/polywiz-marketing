'use client';

import Link from 'next/link';
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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
      className="h-3.5 w-3.5 overflow-visible stroke-[#2D3436]"
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
        className="fixed inset-0 bg-black/30 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-[#2D3436] shadow-[0_12px_32px_rgba(45,52,54,0.10)] ring-1 ring-[#DFE6E9] data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        {siteConfig.navigation.main
          .filter((item) => item.label !== 'Home')
          .map((item) => (
            <MobileNavLink key={item.href} href={item.href}>
              {item.label}
            </MobileNavLink>
          ))}
        <hr className="m-2 border-[#DFE6E9]" />
        <MobileNavLink href={siteConfig.cta.waitlistUrl}>
          {siteConfig.cta.primary}
        </MobileNavLink>
      </PopoverPanel>
    </Popover>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-3 py-1.5 text-sm text-[#636E72] transition hover:text-[#2D3436] hover:bg-[#F5F3F0]"
    >
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-8">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-10">
            <Link href="/" aria-label="Home" className="flex items-center gap-2.5">
              <span className="font-display text-xl font-bold text-[#2D3436]">
                PolyWiz
              </span>
            </Link>
            <div className="hidden md:flex md:gap-x-1">
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
            <Button href={siteConfig.cta.waitlistUrl} size="sm">
              {siteConfig.cta.primary}
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
