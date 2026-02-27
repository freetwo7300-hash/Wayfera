import { Header } from '@/components/header';
import { ServicesSection } from '@/components/services-section';
import { Footer } from '@/components/footer';
import ServiceFeatures from '@/components/service-features';
import ServiceProcess from '@/components/service-process';
import ServicePricing from '@/components/service-pricing';

export default function ServicesPage() {
  return (
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
  );
}
