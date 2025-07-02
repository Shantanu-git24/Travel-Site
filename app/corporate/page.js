
import BrandSlider from '../components/BrandSlider';
import CorporateGetaways from '../components/CorporateGetaways';
import DestinationCorporate from '../components/DestinationCorporate';
import HeroCorporate from '../components/HeroCorporate';
import InOfficeActivities from '../components/InOfficeActivities';
import OfferSection from '../components/OfferSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';

export default function FlightsPage() {
  return (
    <main>
      <Header/>
      <HeroCorporate/>
      <BrandSlider />
      <OfferSection/>
      {/* <DestinationCorporate/> */}
      <CorporateGetaways/>
      <InOfficeActivities/>
      <InOfficeActivities/>
      <InOfficeActivities/>
      <InOfficeActivities/>
      <InOfficeActivities/>
    </main>
  );
}
