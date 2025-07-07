import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsLetter';

export default function HotelsPage() {
  return (
    <main>
      <Header/>
      <HeroSection />
      <WhyBook />
      <AirFareDeals/>
      <NewsletterSection/>
      <Footer/>
    </main>
  );
}