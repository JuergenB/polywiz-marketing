import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllFeatures, getFeatureBySlug } from '@/config/tools';
import FeatureDetailTemplate from '@/components/features/FeatureDetailTemplate';

interface FeaturePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFeatures().map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return {
    title: feature.detailPageTitle,
    description: feature.detailPageDescription,
    openGraph: {
      title: `${feature.detailPageTitle} | PolyWiz`,
      description: feature.detailPageDescription,
    },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return <FeatureDetailTemplate feature={feature} />;
}
