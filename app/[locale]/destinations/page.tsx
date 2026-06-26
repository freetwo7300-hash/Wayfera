import { Header, Footer } from '@/app/_components/layout';
import { DestinationsSection, DestinationHero, PopularRegions, TravelTips } from '@/app/_components/features/destinations';
import { generateSEO, generateBreadcrumbSchema } from '@/app/_lib/seo';
import { JsonLd } from '@/app/_components/shared';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateSEO({
    title: 'Destinations - Explore World Travel Destinations',
    description: 'Discover amazing travel destinations worldwide. From tropical beaches to mountain adventures, explore our curated collection of 200+ destinations across Europe, Asia, Americas, and Africa.',
    keywords: ['travel destinations', 'vacation spots', 'tourist attractions', 'world travel', 'holiday destinations', 'beach destinations', 'mountain travel', 'city tours'],
    locale,
  });
}

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${locale}` },
    { name: 'Destinations', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${locale}/destinations` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <main className="overflow-hidden">
        <Header />
        <div className="pt-20">
          <DestinationHero />
          <DestinationsSection />
          <PopularRegions />
          <TravelTips />
        </div>
        <Footer />
      </main>
    </>
  );
}
