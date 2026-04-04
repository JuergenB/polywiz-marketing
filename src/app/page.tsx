import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Opportunity } from '@/components/home/Opportunity';
import { HowItWorks } from '@/components/home/HowItWorks';
import { SocialProof } from '@/components/home/SocialProof';
import { CallToAction } from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Opportunity />
      <HowItWorks />
      <SocialProof />
      <CallToAction />
    </>
  );
}
