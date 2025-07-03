
import BrandSlider from '../components/BrandSlider';
import CorporateGetaways from '../components/CorporateGetaways';
import DestinationCorporate from '../components/DestinationCorporate';
import HeroCorporate from '../components/HeroCorporate';
import InOfficeActivities from '../components/InOfficeActivities';
import OfferSection from '../components/OfferSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FlightsPage() {
  return (
    <main>
      <Header/>
      <HeroCorporate/>
      <BrandSlider />
      <OfferSection/>
      {/* <DestinationCorporate/> */}
      <CorporateGetaways/>
      <InOfficeActivities heading="In Office Activities"
        subheading="Bring the excitement to your workspace with dynamic activities that foster creativity, engagement, and team bonding, right within your office walls."/>
      <InOfficeActivities
      heading="Team Outing Activities"
        subheading="Bring the excitement to your workspace with dynamic activities that foster creativity, engagement, and team bonding, right within your office walls."/>
      <InOfficeActivities
      heading="Conferences"
        subheading="Bring the excitement to your workspace with dynamic activities that foster creativity, engagement, and team bonding, right within your office walls."/>
      <InOfficeActivities
      heading="Weekend Excursions"
        subheading="Bring the excitement to your workspace with dynamic activities that foster creativity, engagement, and team bonding, right within your office walls."/>
      <InOfficeActivities
      heading="Add On Activities"
        subheading="Bring the excitement to your workspace with dynamic activities that foster creativity, engagement, and team bonding, right within your office walls."/>
    <Footer/>
    </main>
  );
}
