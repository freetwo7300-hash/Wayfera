import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { Footer } from '@/components/footer';
import FeaturedDestinations from '@/components/featured-destinations';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
