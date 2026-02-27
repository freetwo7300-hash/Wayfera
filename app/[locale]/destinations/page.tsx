import { Header } from '@/components/header';
import { DestinationsSection } from '@/components/destinations-section';
import { Footer } from '@/components/footer';
import DestinationHero from '@/components/destination-hero';
import PopularRegions from '@/components/popular-regions';
import TravelTips from '@/components/travel-tips';

export default function DestinationsPage() {
  return (
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
  );
}
