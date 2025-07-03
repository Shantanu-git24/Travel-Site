import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FlightsPage() {
  return (
    <main>
      <Header/>
      <HeroSection />
      <WhyBook />
      <AirFareDeals/>
      <Footer/>
    </main>
  );
}
