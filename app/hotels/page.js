import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';

export default function HotelsPage() {
  return (
    <main>
      <Header/>
      <HeroSection />
      <WhyBook />
      <AirFareDeals/>
    </main>
  );
}