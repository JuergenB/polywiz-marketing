'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { EarlyAccessButton } from '@/components/ui/EarlyAccessButton';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      {/* Background image — visible at edges, darkened in center for text readability */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0A141F_20%,transparent_75%)]" />
        <div className="absolute inset-0 bg-navy-950/25" />
      </div>

      {/* Bottom edge fade — smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-b from-transparent via-navy-950/60 to-navy-950" />

      <Container className="relative">
        <div className="pt-40 pb-24 text-center sm:pt-48 sm:pb-32 lg:pt-52 lg:pb-40">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-primary-400"
          >
            Campaign Automation for Arts Organizations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-xl/8 text-gray-400"
          >
            Most exhibitions get one social post on opening night, then silence.
            PolyWiz generates weeks of platform-specific posts, designs carousel
            covers, and schedules everything across {siteConfig.platforms.length} platforms
            — with human approval before anything goes live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="mt-10 flex justify-center gap-4"
          >
            <EarlyAccessButton className="group inline-flex items-center justify-center rounded-lg bg-primary-400 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
              {siteConfig.cta.primary}
            </EarlyAccessButton>
            <Button href="/features" variant="outline" color="white" size="lg">
              View Features
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-16 text-sm text-gray-500"
          >
            Built for Arterial, Not Real Art, Artsville USA, and The Intersect
          </motion.p>
        </div>
      </Container>
    </div>
  );
}
