import { Hero } from '@/components/home/Hero';
import { FeatureShowcase } from '@/components/home/FeatureShowcase';
import { RemainingFeatures } from '@/components/home/RemainingFeatures';
import { Opportunity } from '@/components/home/Opportunity';
import { HowItWorks } from '@/components/home/HowItWorks';
import { SocialProof } from '@/components/home/SocialProof';
import { CallToAction } from '@/components/home/CallToAction';
import { getFeaturedFeatures } from '@/config/tools';

export default function HomePage() {
  const featuredFeatures = getFeaturedFeatures();

  return (
    <>
      <Hero />
      <main>
        <FeatureShowcase features={featuredFeatures} />
        <RemainingFeatures />
        <Opportunity />
        <HowItWorks />
        <SocialProof />
        <CallToAction />
      </main>
    </>
  );
}
