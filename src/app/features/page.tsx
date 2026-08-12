import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getAllFeatures } from '@/config/tools';
import { FeatureGrid } from '@/components/features/FeatureGrid';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Everything your team needs for sustained social media promotion from content generation to multi-platform publishing across 13 platforms.',
};

export default function FeaturesPage() {
  const features = getAllFeatures();

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #0A141F 0%, #152a42 40%, #1a3350 60%, #0A141F 100%)',
      }}
    >
      {/* Decorative backgrounds */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[10%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-rings.png)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[50%] h-[600px] bg-cover bg-center bg-no-repeat opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ backgroundImage: 'url(/images/bg/bg-node-network.png)' }}
      />

      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Features
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Everything Your Team Needs
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              From content creation to multi-platform publishing, PolyWiz handles
              the repetitive work so your team focuses on what to promote.
            </p>
          </div>

          <FeatureGrid features={features} />

          <div className="mt-16 text-center">
            <Button href="/" variant="outline" color="white" size="lg">
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
