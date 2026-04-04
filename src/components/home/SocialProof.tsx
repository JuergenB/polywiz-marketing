'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

const campaignTypes = [
  'Exhibitions',
  'Newsletters',
  'Podcasts',
  'Events',
  'Open Calls',
  'Artist Profiles',
  'Blog Posts',
  'Public Art',
  'Video & Film',
  'Institutional',
];

const brands = [
  { name: 'Arterial', href: 'https://arterial.media' },
  { name: 'Not Real Art', href: 'https://notrealart.com' },
  { name: 'Artsville USA', href: 'https://artsvilleusa.com' },
  { name: 'The Intersect', href: 'https://theintersect.art' },
];

export function SocialProof() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #FDF8F3 0%, #FAFAF8 100%)' }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">
            Trusted by Arts Organizations
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
            Powering campaigns across {siteConfig.platforms.length} social platforms
          </h2>
        </motion.div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#DFE6E9] bg-white px-6 py-3 text-lg font-display font-semibold text-[#2D3436] shadow-[0_1px_2px_rgba(45,52,54,0.05)] transition hover:border-[#E07A5F] hover:shadow-[0_4px_12px_rgba(45,52,54,0.08)]"
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold text-[#636E72] mb-4">
            11 campaign types and counting
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {campaignTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-[#DFE6E9] bg-white px-4 py-1.5 text-sm text-[#636E72]"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-semibold text-[#636E72] mb-4">
            Publish to every major platform
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full bg-[#EFF7F3] px-3 py-1 text-xs font-medium text-[#6A9A82]"
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
