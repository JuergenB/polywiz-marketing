'use client';

import { useEarlyAccess } from './EarlyAccessProvider';

interface EarlyAccessButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function EarlyAccessButton({ className, children }: EarlyAccessButtonProps) {
  const { open } = useEarlyAccess();

  function handleClick() {
    // Track conversion funnel step 1: CTA clicked
    if (typeof window !== 'undefined' && (window as any).usermaven) {
      (window as any).usermaven('track', 'early_access_clicked');
    }
    open();
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
