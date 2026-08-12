'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

// Only campaign types a user can actually select. Selectability is driven by
// Airtable Status, not by a constant in the app repo, so this list can go stale
// with no commit anywhere. Deliberately no count is published alongside it.
const campaignTypes = [
  'Exhibitions', 'Newsletters', 'Podcasts', 'Events', 'Event Listings',
  'Open Calls', 'Artist Profiles', 'Blog Posts', 'Press Releases',
];

const brands = [
  { name: 'Arterial', href: 'https://arterial.org' },
  { name: 'Not Real Art', href: 'https://notrealart.com' },
  { name: 'Artsville USA', href: 'https://artsvilleusa.com' },
  { name: 'The Intersect', href: 'https://theintersect.art' },
];

const audiences = [
  {
    title: 'Arts Organizations',
    description: 'Galleries, exhibition spaces, and artist collectives that need sustained promotion beyond opening night.',
  },
  {
    title: 'Nonprofits & Institutions',
    description: '501(c)(3) organizations with small marketing teams managing multiple programs and campaigns.',
  },
  {
    title: 'Newsletter Publishers',
    description: 'Curators, writers, and community publications that deserve promotion across every platform, not just the inbox.',
  },
  {
    title: 'Podcast Networks',
    description: 'Episode-driven content that needs platform-specific promotion over weeks, not a single share-and-forget post.',
  },
  {
    title: 'Event Coordinators',
    description: 'Exhibitions, open calls, studio tours, and conferences that need pre-event, day-of, and post-event coverage.',
  },
  {
    title: 'Content-Driven Businesses',
    description: 'Any organization where a small team manages social media across multiple platforms and can\'t keep up with the volume.',
  },
];

export function SocialProof() {
  return (
    <section id="about" className="bg-navy-900 py-24 sm:py-32">
      <Container>
        {/* About narrative */}
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-400/90">
              About PolyWiz
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
              The marketing capacity of a full social media team - without the headcount
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-base/7 text-gray-300">
            <p>
              Most organizations produce great content - exhibitions, newsletters, podcast
              episodes, events, campaigns - but promoting it across social media is a grind.
              One post on launch day. Maybe a reminder the week after. Then silence, while
              your team moves on to the next thing.
            </p>
            <p>
              PolyWiz changes that equation. Give it a link, a PDF, or the photographs
              you already have, and it generates platform-specific posts tuned to your
              brand voice, schedules them over weeks and months with intelligent tapering,
              publishes across {siteConfig.platforms.length} platforms, and reports what
              each one earned. What used to require a dedicated social media team now runs
              alongside your existing workflow.
            </p>
          </div>

          {/* Founder quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-14 max-w-3xl"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              The Intelligence Is Under the Hood, Not on the Label
            </p>
            <div className="flex items-start gap-8">
              <div className="hidden shrink-0 sm:block">
                <Image
                  src="/images/founder-juergen-berkessel.jpg"
                  alt="Juergen Berkessel, founder of Polymash"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-primary-400/30"
                />
              </div>
              <blockquote className="border-l-2 border-primary-400/60 pl-8">
                <p className="font-display text-xl/8 font-medium tracking-tight text-white sm:text-2xl/9">
                  PolyWiz doesn&apos;t replace your marketing team - it frees them
                  from the content production grind so they can focus on engagement,
                  community building, and creative strategy.
                </p>
                <p className="mt-4 font-display text-lg font-medium text-primary-400">
                  Nothing goes live without a human saying yes.
                </p>
                <footer className="mt-5 flex items-center gap-3 sm:hidden">
                  <Image
                    src="/images/founder-juergen-berkessel.jpg"
                    alt="Juergen Berkessel, founder of Polymash"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-primary-400/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Juergen Berkessel</p>
                    <p className="text-xs text-gray-500">Founder, Polymash</p>
                  </div>
                </footer>
                <footer className="mt-5 hidden sm:block">
                  <p className="text-sm font-semibold text-white">Juergen Berkessel</p>
                  <p className="text-xs text-gray-500">Founder, Polymash</p>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* Who it's for */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-400/90">
              Who It&apos;s For
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
              Built for organizations that produce more content than they can promote
            </h3>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl bg-navy-800 p-6 ring-1 ring-white/10"
              >
                <h4 className="font-display text-base font-semibold text-white">
                  {audience.title}
                </h4>
                <p className="mt-2 text-sm/6 text-gray-400">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* Social proof - trust signals */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-400/90">
              In Production
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-tight text-white sm:text-3xl">
              Running real campaigns for real organizations
            </h3>
            <p className="mt-4 text-base text-gray-400">
              PolyWiz isn&apos;t a prototype. It powers active campaigns across{' '}
              {siteConfig.platforms.length} platforms for these organizations today.
            </p>
          </div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4"
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
            className="mx-auto mt-14 max-w-3xl"
          >
            <p className="mb-4 text-center text-sm font-semibold text-white">
              Campaign types, with more added over time
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
        </div>

        {/* Built by Polymash */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-20 max-w-2xl rounded-2xl bg-navy-800 p-8 ring-1 ring-white/10 sm:p-10"
        >
          <p className="text-center text-sm/7 text-gray-400">
            PolyWiz is built by{' '}
            <a
              href="https://polymash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0399FE] hover:underline"
            >
              Polymash
            </a>
            , a 15-year veteran of podcast production, content strategy, and
            creator visibility. After helping hundreds of creators get heard,
            Polymash launched{' '}
            <a
              href="https://visibilitylabs.polymash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              Visibility Labs
            </a>
            {' '}to solve search visibility, and PolyWiz to solve sustained
            social media presence. Same philosophy across both: focus on
            creating great content - we automate everything else.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
