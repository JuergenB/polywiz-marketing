'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
      style={{
        background: 'linear-gradient(180deg, #FDF8F3 0%, #FAFAF8 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #E07A5F 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #81B29A 0%, transparent 70%)' }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]"
          >
            Campaign Automation for Arts Organizations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-[#2D3436] sm:text-5xl lg:text-6xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-[#636E72] sm:text-xl"
          >
            Most exhibitions get one social post on opening night, then silence.
            PolyWiz generates and schedules weeks of platform-specific posts
            across {siteConfig.platforms.length} platforms — with human approval
            before anything goes live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button href={siteConfig.cta.waitlistUrl} size="lg">
              {siteConfig.cta.primary}
            </Button>
            <Button href="#features" variant="outline" color="primary" size="lg">
              See How It Works
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-[#9BA4A8]"
          >
            Built for Arterial, Not Real Art, Artsville USA, and The Intersect
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
