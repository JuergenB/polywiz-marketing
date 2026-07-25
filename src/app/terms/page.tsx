import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal/LegalDocument';
import { LegalPageShell } from '@/components/legal/LegalPageShell';
import {
  AGREEMENT_EFFECTIVE_DATE,
  AGREEMENT_TEXT,
  CURRENT_AGREEMENT_VERSION,
} from '@/lib/legal/agreement-v1';

export const metadata: Metadata = {
  title: 'Beta Agreement',
  description: 'The agreement governing use of the PolyWiz private beta.',
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="PolyWiz Beta Agreement"
      version={CURRENT_AGREEMENT_VERSION}
      effectiveDate={AGREEMENT_EFFECTIVE_DATE}
      siblingHref="/privacy"
      siblingLabel="Read the Privacy Policy"
    >
      <LegalDocument markdown={AGREEMENT_TEXT} />
    </LegalPageShell>
  );
}
