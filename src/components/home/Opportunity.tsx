'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const points = [
  {
    title: 'One post on opening night, then silence',
    description:
      'Most arts organizations promote exhibitions, events, and newsletters with a single social post on launch day. After that, nothing.',
  },
  {
    title: 'Every platform wants something different',
    description:
      'Instagram carousels, LinkedIn articles, Bluesky threads, TikTok hooks — each platform demands its own format, voice, and cadence.',
  },
  {
    title: 'Small teams can\'t do it manually',
    description:
      'When 2-10 people share marketing duties across multiple brands and 13 platforms, the repetitive work crowds out the creative work.',
  },
];

export function Opportunity() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            The Opportunity
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
            Your art deserves more than a single launch-day post
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl bg-navy-800 p-8 ring-1 ring-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400/10 font-display text-lg font-semibold text-primary-400">
                {index + 1}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm/6 text-gray-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-navy-800 p-8 ring-1 ring-secondary-400/20 sm:p-12"
        >
          <p className="text-center text-lg/8 text-gray-300">
            PolyWiz handles the repetitive work so your team focuses on{' '}
            <span className="font-semibold text-secondary-400">what to promote</span> and{' '}
            <span className="font-semibold text-secondary-400">what resonates</span>.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
