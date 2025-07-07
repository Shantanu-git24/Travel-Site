import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import NewsletterSection from '../components/NewsLetter';

export default function FlightsPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyBook />
      <AirFareDeals />
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/image 53.png"
          alt="Banner"
          layout="fill"
          priority
        />
      </div>
      <NewsletterSection />
      <Footer />
    </main>
  );
}
