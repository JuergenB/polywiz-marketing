'use client';

import { useEarlyAccess } from './EarlyAccessProvider';

interface EarlyAccessButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function EarlyAccessButton({ className, children }: EarlyAccessButtonProps) {
  const { open } = useEarlyAccess();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
