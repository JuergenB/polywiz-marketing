'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { EarlyAccessButton } from '@/components/ui/EarlyAccessButton';
import { Container } from '@/components/ui/Container';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { HorizontalTimeline } from '@/components/ui/HorizontalTimeline';
import { CheckCircle } from 'lucide-react';
import type { FeatureDefinition } from '@/config/tools';
import { resolveIcon } from '@/config/tools';
import { siteConfig } from '@/config/site';

function ScreenshotCarousel({
  screenshots,
  alt,
}: {
  screenshots: { src: string; caption?: string }[];
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!isInView) {
      setActiveIndex(0);
      setIsPaused(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (screenshots.length <= 1 || isPaused || !isInView) return;
    const delay = activeIndex === 0 ? 2000 : 4000;
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenshots.length, isPaused, isInView, activeIndex]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-navy-800 shadow-2xl ring-1 ring-white/[0.08]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative aspect-[16/10] cursor-pointer p-6"
        onClick={() => setLightboxOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true); }}
        aria-label="Click to view fullscreen"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-6"
          >
            <Image
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].caption || `${alt} — view ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {(screenshots[activeIndex].caption || screenshots.length > 1) && (
        <div className="flex flex-col items-center gap-2 pb-4 pt-1">
          {screenshots[activeIndex].caption && (
            <p className="text-center text-xs text-white/50">
              {screenshots[activeIndex].caption}
            </p>
          )}
          {screenshots.length > 1 && (
            <div className="flex gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? 'w-6 bg-primary-400'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <ImageLightbox
        images={screenshots}
        open={lightboxOpen}
        index={activeIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}

export default function FeatureDetailTemplate({ feature }: { feature: FeatureDefinition }) {
  const Icon = resolveIcon(feature.iconName);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #0A141F 0%, #152a42 35%, #1a3350 50%, #152a42 70%, #0A141F 100%)',
      }}
    >
      {/* Decorative backgrounds */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[3%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-wave-1.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[28%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.10] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-wave-3.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[50%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-rings.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[75%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.10] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-wave-2.png)' }}
      />

      {/* Hero Section */}
      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-400/10 px-4 py-1.5 text-sm font-semibold text-primary-400 ring-1 ring-inset ring-primary-400/20">
                <Icon className="h-4 w-4" />
                {feature.homepageLabel}
              </div>

              <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {feature.detailPageTitle}
              </h1>

              <p className="mt-6 text-lg/8 text-gray-300">
                {feature.detailPageDescription}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <EarlyAccessButton className="inline-flex items-center justify-center rounded-lg bg-primary-400 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
                  {siteConfig.cta.primary}
                </EarlyAccessButton>
                <Button href="/features" variant="outline" color="white" size="lg">
                  All Features
                </Button>
              </div>
            </motion.div>

            {/* Screenshot carousel */}
            {feature.images && feature.images.length > 0 && (
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              >
                <ScreenshotCarousel
                  screenshots={feature.images}
                  alt={feature.detailPageTitle}
                />
              </motion.div>
            )}
          </div>
        </Container>
      </section>

      {/* The Opportunity */}
      {feature.opportunityStatement && (
        <section className="relative py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <motion.div
                className="rounded-2xl bg-navy-800 p-8 ring-1 ring-white/10 sm:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
                  The Opportunity
                </p>
                <p
                  className="mb-6 text-lg/8 text-gray-300"
                  dangerouslySetInnerHTML={{ __html: feature.opportunityStatement.paragraph1 }}
                />
                <p
                  className="text-lg/8 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: feature.opportunityStatement.paragraph2 }}
                />
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* How It Works */}
      {feature.howItWorks && (
        <section className="relative py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center sm:mb-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                  Process
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
                  How It Works
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  {feature.howItWorks.subtitle}
                </p>
              </div>

              <HorizontalTimeline steps={feature.howItWorks.steps} />
            </div>
          </Container>
        </section>
      )}

      {/* Key Features */}
      {feature.details.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Capabilities
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
                  Key Features
                </h2>
              </div>

              <div className="rounded-2xl bg-navy-800 p-8 ring-1 ring-emerald-500/20">
                <ul className="space-y-4">
                  {feature.details.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Ready to try {feature.title}?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get early access to PolyWiz and start building sustained social media campaigns for your organization.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <EarlyAccessButton className="inline-flex items-center justify-center rounded-lg bg-primary-400 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
                {siteConfig.cta.primary}
              </EarlyAccessButton>
              <Button href="/features" variant="outline" color="white" size="lg">
                View All Features
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
