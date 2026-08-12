'use client';

import { Container } from '@/components/ui/Container';
import { HorizontalTimeline } from '@/components/ui/HorizontalTimeline';

const steps = [
  {
    title: 'Start from what you have',
    description: 'A link to a page, a PDF you upload, or a link to a PDF on your own site. Add your own photographs, and they go into the campaign too.',
  },
  {
    title: 'The posts get written',
    description: 'Platform-specific drafts shaped by your 8-dimension brand voice, plus cover slides for carousels.',
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
    description: 'One click publishes to 13 platforms, with branded short links and the real reason if anything fails.',
  },
  {
    title: 'See what worked',
    description: 'Impressions, engagement and follower growth come back in, so the next campaign starts better informed than the last.',
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
              From What You Have to What Worked, in Six Steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Bring a link, a PDF, or the photographs on your hard drive. PolyWiz
              generates, schedules and publishes across every platform your audience
              uses, then tells you what landed.
            </p>
          </div>

          <HorizontalTimeline steps={steps} />
        </div>
      </Container>
    </section>
  );
}
