'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { resolveIcon } from '@/config/tools';
import type { CampaignType } from '@/config/tools';

/**
 * Campaign type breakdown (#8).
 *
 * The picker is the first real choice a user makes, and naming the types does
 * not make the case for any of them. Each card leads with the outcome and then
 * says what this type does that the others do not.
 *
 * Weighting is deliberately ~80/20 in favour of the copy: the icon is a small
 * badge for recognition and scanning, not the point of the card. An icon grid
 * would look tidier and answer nothing.
 *
 * ⛔ No count is rendered anywhere here, and the layout must not imply one -
 * no numbering, no "all N types". See the CampaignType docblock in tools.ts.
 */
export function CampaignTypeGrid({
  subtitle,
  types,
}: {
  subtitle: string;
  types: CampaignType[];
}) {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Campaign Types
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
            Pick the type, and the campaign changes shape
          </h2>
          <p className="mt-4 text-base/7 text-gray-400">{subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => {
            const Icon = resolveIcon(type.iconName);
            return (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.06 }}
                className="flex h-full flex-col rounded-2xl bg-navy-800 p-6 ring-1 ring-white/10 transition hover:ring-primary-400/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-400/10 ring-1 ring-primary-400/20">
                    <Icon className="h-5 w-5 text-primary-400" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {type.name}
                  </h3>
                </div>

                <p className="mt-4 font-display text-base font-semibold text-primary-200">
                  {type.benefitHeadline}
                </p>
                <p className="mt-2 text-sm/6 text-gray-400">{type.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
