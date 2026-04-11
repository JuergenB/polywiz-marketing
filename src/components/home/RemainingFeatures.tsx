'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getFeaturedFeatures, getLiveFeatures, resolveIcon } from '@/config/tools';

export function RemainingFeatures() {
  const allLive = getLiveFeatures();
  const featured = getFeaturedFeatures();
  const remaining = allLive.filter(
    (f) => !featured.some((ff) => ff.id === f.id),
  );

  if (remaining.length === 0) return null;

  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-4xl">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold text-white">
            And More
          </h3>
          <p className="mb-8 text-center text-sm text-gray-500">
            Additional tools that complete the PolyWiz platform.
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((feature) => {
              const Icon = resolveIcon(feature.iconName);
              return (
                <a
                  key={feature.id}
                  href={`/features/${feature.slug}`}
                  className="group rounded-xl bg-navy-800 p-6 ring-1 ring-white/10 transition-all hover:ring-white/20"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ${feature.iconColorClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-display text-base font-semibold text-white">
                    {feature.benefitHeadline}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </a>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button href="/features" variant="outline" color="white">
              View All Features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
