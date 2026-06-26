import { Header, Footer } from '@/app/_components/layout';
import { ServicesSection, ServiceFeatures, ServiceProcess, ServicePricing } from '@/app/_components/features/services';
import { generateSEO, generateBreadcrumbSchema } from '@/app/_lib/seo';
import { JsonLd } from '@/app/_components/shared';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateSEO({
    title: 'Services - Travel Booking & Planning Services',
    description: 'Complete travel services including flight booking, hotel reservations, tour guides, and 24/7 support. Best price guarantee, flexible booking, and expert local guides.',
    keywords: ['travel services', 'flight booking', 'hotel reservation', 'tour guide', 'travel planning', 'vacation services', 'travel support'],
    locale,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${locale}` },
    { name: 'Services', url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayfera.com'}/${locale}/services` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <main className="overflow-hidden">
        <Header />
        <div className="pt-20">
          <ServicesSection />
          <ServiceFeatures />
          <ServiceProcess />
          <ServicePricing />
        </div>
        <Footer />
      </main>
    </>
  );
}
