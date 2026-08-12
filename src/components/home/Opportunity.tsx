'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const points = [
  {
    title: 'Your material was never a web page',
    description:
      'The season brochure is a PDF. The press release arrived by email. The installation shots are in a folder on somebody\'s hard drive. Most tools want a link, and have nothing to say if you do not have one.',
  },
  {
    title: 'One post on opening night, then silence',
    description:
      'Most arts organizations promote exhibitions, events, and newsletters with a single social post on launch day. After that, nothing.',
  },
  {
    title: 'Every platform wants something different',
    description:
      'Instagram carousels, LinkedIn articles, Bluesky threads, TikTok hooks. Each wants its own format, voice and cadence, and when a handful of people share the duties the repetitive work crowds out the creative work.',
  },
  {
    title: 'You post into the void',
    description:
      'Months of publishing, and then a board member asks how it went. Without numbers the honest answer is a shrug, and nothing you learned makes the next campaign any better.',
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

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
