'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import type { FeatureDefinition } from '@/config/tools';

function ImageCarousel({ images, alt }: { images: { src: string; caption?: string }[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!isInView) {
      setActiveIndex(0);
    }
  }, [isInView]);

  // No auto-rotation — lead image stays visible, users click dots to browse

  // Clamp index if images array changed
  const safeIndex = Math.min(activeIndex, images.length - 1);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-navy-800 shadow-2xl ring-1 ring-white/[0.08]"
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
            key={safeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-6"
          >
            <Image
              src={images[safeIndex].src}
              alt={images[safeIndex].caption || `${alt} — view ${safeIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {(images[safeIndex].caption || images.length > 1) && (
        <div className="flex flex-col items-center gap-2 pb-4 pt-1">
          {images[safeIndex].caption && (
            <p className="text-center text-xs text-white/50">
              {images[safeIndex].caption}
            </p>
          )}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safeIndex
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
        images={images}
        open={lightboxOpen}
        index={safeIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}

function FeatureSection({ feature, index }: { feature: FeatureDefinition; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className="py-20 sm:py-24">
      <Container>
        <div
          className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
            isReversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Screenshot carousel */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ImageCarousel images={feature.images} alt={feature.title} />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <span className="inline-flex items-center rounded-md bg-primary-400/10 px-2.5 py-1 text-xs font-semibold text-primary-400 ring-1 ring-inset ring-primary-400/20">
              {feature.homepageLabel}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {feature.benefitHeadline}
            </h3>
            <p className="mt-4 text-base/7 text-gray-300">
              {feature.description}
            </p>
            <div className="mt-8">
              <Button href={`/features/${feature.slug}`} size="md">
                {feature.cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Subtle divider */}
      <div className="mx-auto mt-20 max-w-4xl">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
    </div>
  );
}

export function FeatureShowcase({ features }: { features: FeatureDefinition[] }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A141F 0%, #0f1d2e 10%, #1a3350 30%, #1f3d5e 50%, #1a3350 70%, #0f1d2e 90%, #0f1d2e 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[10%] h-[600px] bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] opacity-[0.06]"
        style={{ backgroundImage: 'url(/images/bg/bg-wave-1.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[35%] h-[600px] bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] opacity-[0.08]"
        style={{ backgroundImage: 'url(/images/bg/bg-rings.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[55%] h-[600px] bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] opacity-[0.06]"
        style={{ backgroundImage: 'url(/images/bg/bg-audio-waveform.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[75%] h-[600px] bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] opacity-[0.07]"
        style={{ backgroundImage: 'url(/images/bg/bg-node-network.png)' }}
      />

      {/* Section header */}
      <div className="pt-16 pb-4 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Features
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
              Everything Your Team Needs for Sustained Promotion
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              From content creation to multi-platform publishing, PolyWiz handles
              the repetitive work so your team focuses on what to promote and what resonates.
            </p>
          </div>
        </Container>
      </div>

      {/* Feature sections */}
      <div className="relative z-10">
        {features.map((feature, index) => (
          <FeatureSection key={feature.slug} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}
