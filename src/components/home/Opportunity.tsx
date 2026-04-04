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
    title: 'Sustained promotion requires sustained effort',
    description:
      'Dozens of platform-specific posts, optimized for different audiences, distributed over weeks and months — that\'s what it takes to build real engagement.',
  },
  {
    title: 'Small teams can\'t do it manually',
    description:
      'When 2-10 people share marketing duties across multiple brands and platforms, the repetitive work crowds out the creative work.',
  },
];

export function Opportunity() {
  return (
    <section className="bg-[#F5F3F0] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">
              The Opportunity
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
              Your art deserves more than a single launch-day post
            </h2>
          </motion.div>

          <div className="mt-16 space-y-12">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FEF0EC] font-display text-lg font-bold text-[#E07A5F]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2D3436]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[#636E72] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 rounded-2xl bg-[#EFF7F3] p-8 text-center"
          >
            <p className="text-lg font-medium text-[#2D3436]">
              PolyWiz handles the repetitive work so your team focuses on{' '}
              <span className="text-[#81B29A] font-semibold">what to promote</span> and{' '}
              <span className="text-[#81B29A] font-semibold">what resonates</span>.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
