'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function CallToAction() {
  return (
    <section id="waitlist" className="bg-[#FEF0EC] py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="relative">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #F2CC8F 0%, transparent 70%)' }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
            Ready to give your art sustained visibility?
          </h2>
          <p className="mt-4 text-lg text-[#636E72]">
            PolyWiz is currently in private beta with select arts organizations.
            Join the waitlist to get early access when we open up.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="mailto:hello@polymash.com" size="lg">
              {siteConfig.cta.primary}
            </Button>
            <Button href="#features" variant="outline" color="primary" size="lg">
              {siteConfig.cta.secondary}
            </Button>
          </div>
          <p className="mt-6 text-sm text-[#9BA4A8]">
            No credit card required. We&apos;ll reach out when your spot opens.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
