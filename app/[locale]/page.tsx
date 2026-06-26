import { Header, Footer, HeroSection } from '@/app/_components/layout';
import { FeaturedDestinations } from '@/app/_components/features/destinations';
import { WhyChooseUs, Testimonials, Newsletter } from '@/app/_components/features/testimonials';
import { generateSEO, generateBreadcrumbSchema } from '@/app/_lib/seo';
import { JsonLd } from '@/app/_components/shared';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateSEO({
    title: 'Home - Discover Amazing Destinations',
    description: 'Explore the world with Wayfera. Premium travel packages to 50+ countries, expert local guides, 24/7 support, and unforgettable experiences. Start your journey today!',
    keywords: ['travel home', 'vacation planning', 'travel deals', 'holiday packages', 'world destinations'],
    locale,
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${locale}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <main className="overflow-hidden">
        <Header />
        <HeroSection />
        <FeaturedDestinations />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
