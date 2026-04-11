'use client';

import { motion } from 'framer-motion';
import { EarlyAccessButton } from '@/components/ui/EarlyAccessButton';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function CallToAction() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-lg text-center"
        >
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to give your brand sustained visibility?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            PolyWiz is currently in private beta with select organizations.
            Get in touch to request early access.
          </p>
          <EarlyAccessButton className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary-400 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
            {siteConfig.cta.primary}
          </EarlyAccessButton>
          <p className="mt-6 text-sm text-gray-500">
            No credit card required. We&apos;ll reach out when your spot opens.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
