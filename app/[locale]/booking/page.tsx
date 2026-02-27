import { Header } from '@/components/header';
import { BookingSection } from '@/components/booking-section';
import { Footer } from '@/components/footer';

export default function BookingPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
