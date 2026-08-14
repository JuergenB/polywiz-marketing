import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Questions about PolyWiz, the beta agreement, or a privacy request? Send us a message.',
};

export default function ContactPage() {
  return (
    <div className="bg-navy-900">
      <Container>
        <div className="mx-auto max-w-2xl py-16 sm:py-20">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-4 text-gray-400">
            Questions about PolyWiz, the beta agreement, or a privacy request?
            Send us a message and a person will read it.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
