'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { getLiveFeatures } from '@/config/tools';

export function Features() {
  const features = getLiveFeatures();

  return (
    <section id="features" className="bg-[#FAFAF8] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">
            Features
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#2D3436] sm:text-4xl">
            Everything your team needs for sustained promotion
          </h2>
          <p className="mt-4 text-lg text-[#636E72]">
            From content creation to multi-platform publishing, PolyWiz handles
            the repetitive work so your team focuses on what to promote and what
            resonates.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBgClass}`}
                  >
                    <Icon className={`h-6 w-6 ${feature.iconColorClass}`} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#2D3436]">
                    {feature.benefitHeadline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#636E72]">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
