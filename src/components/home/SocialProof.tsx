'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

const campaignTypes = [
  'Exhibitions', 'Newsletters', 'Podcasts', 'Events', 'Open Calls',
  'Artist Profiles', 'Blog Posts', 'Public Art', 'Video & Film', 'Institutional', 'Custom',
];

const brands = [
  { name: 'Arterial', href: 'https://arterial.org' },
  { name: 'Not Real Art', href: 'https://notrealart.com' },
  { name: 'Artsville USA', href: 'https://artsvilleusa.com' },
  { name: 'The Intersect', href: 'https://theintersect.art' },
];

export function SocialProof() {
  return (
    <section id="about" className="bg-navy-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Trusted by Arts Organizations
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
            Powering campaigns across {siteConfig.platforms.length} social platforms
          </h2>
        </div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 px-6 py-2.5 font-display text-lg text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
            >
              {brand.name}
            </a>
          ))}
        </motion.div>

        {/* Campaign types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <p className="mb-4 text-center text-sm font-semibold text-white">
            11 campaign types and counting
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {campaignTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <p className="mb-4 text-center text-sm font-semibold text-white">
            Publish to every major platform
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full bg-secondary-400/10 px-3 py-1 text-sm font-medium text-secondary-400 ring-1 ring-inset ring-secondary-400/20"
              >
                {platform}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
