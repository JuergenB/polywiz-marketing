import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal/LegalDocument';
import { LegalPageShell } from '@/components/legal/LegalPageShell';
import {
  CURRENT_PRIVACY_VERSION,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_TEXT,
} from '@/lib/legal/privacy-v1';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What PolyWiz collects, who it is shared with, and how long it is kept.',
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="PolyWiz Privacy Policy"
      version={CURRENT_PRIVACY_VERSION}
      effectiveDate={PRIVACY_EFFECTIVE_DATE}
      siblingHref="/terms"
      siblingLabel="Read the Beta Agreement"
    >
      <LegalDocument markdown={PRIVACY_TEXT} />
    </LegalPageShell>
  );
}
