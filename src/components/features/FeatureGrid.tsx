'use client';

import Link from 'next/link';
import { resolveIcon } from '@/config/tools';
import type { FeatureDefinition } from '@/config/tools';

export function FeatureGrid({ features }: { features: FeatureDefinition[] }) {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = resolveIcon(feature.iconName);
        return (
          <Link
            key={feature.id}
            href={`/features/${feature.slug}`}
            className="group relative rounded-2xl bg-navy-800 p-8 ring-1 ring-white/10 transition-all hover:ring-white/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 ${feature.iconColorClass}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm/6 text-gray-400">
                {feature.description}
              </p>
              {feature.status === 'live' && (
                <span className="mt-4 inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  Live
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
