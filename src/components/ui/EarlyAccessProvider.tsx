'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { EarlyAccessModal } from './EarlyAccessModal';

const EarlyAccessContext = createContext<{ open: () => void }>({ open: () => {} });

export function useEarlyAccess() {
  return useContext(EarlyAccessContext);
}

export function EarlyAccessProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  return (
    <EarlyAccessContext.Provider value={{ open }}>
      {children}
      <EarlyAccessModal open={isOpen} onClose={() => setIsOpen(false)} />
    </EarlyAccessContext.Provider>
  );
}
