'use client';

import { Container } from '@/components/ui/Container';
import { HorizontalTimeline } from '@/components/ui/HorizontalTimeline';

const steps = [
  {
    title: 'Drop in a URL',
    description: 'Paste your exhibition page, newsletter, or event. PolyWiz scrapes the content and images automatically.',
  },
  {
    title: 'AI generates the posts',
    description: 'Platform-specific drafts shaped by your 8-dimension brand voice — plus cover slides for carousels.',
  },
  {
    title: 'Smart scheduling',
    description: 'Posts are distributed over weeks and months with per-brand cadence and collision avoidance.',
  },
  {
    title: 'Review and approve',
    description: 'Edit text, swap images from the campaign library, adjust tone, approve individually or in bulk.',
  },
  {
    title: 'Publish everywhere',
    description: 'One click publishes to 13 platforms with automatic status sync and branded short links.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-900 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Process
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
              From URL to Published Campaign in Five Steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Drop in a link, and PolyWiz does the rest — generating, scheduling, and
              publishing posts across every platform your audience uses.
            </p>
          </div>

          <HorizontalTimeline steps={steps} />
        </div>
      </Container>
    </section>
  );
}
