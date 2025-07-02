import Image from 'next/image';
import PopularTours from './components/PopularTours';
import ExploreByLocation from './components/ExplorebyLocation';
import ExploreUnexplored from './components/ExploreUnexplored';
import TopSellingTours from './components/TopSelling';
import OceaniaSlider from './components/Oceania';
import VisaFreeDestinations from './components/VisaFreeDestinations';
import HolidayThemesSlider from './components/HolidayThemesSlider';
import Kolkata from './components/Kolkata';
import UpcomingSlider from './components/Upcoming';
import TestimonialSlider from './components/Testimonials';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <Header/>

      {/* Info Section */}
      <section className="grid  grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16 items-start">
        <div className="w-full relative max-w-[900px] h-[600px] rounded-2xl overflow-hidden">
          {/* <video
            controls
            className="w-full max-w-[600px] h-[350px] rounded-2xl object-cover shadow-lg"
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/travel.mp4" type="video/mp4" />
          </video> */}
          <Image
            src="/images/image (1).png"
            alt="Traveler"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.518-3.756A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-3.756a1 1 0 000-1.764z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-3xl text-cyan-600 font-medium mb-2">Let's Go Together</h4>
          <h2 className="text-5xl font-bold mb-4 leading-tight">Plan Your Trip<br />With us</h2>
          <p className="text-lg text-gray-600 mb-6">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-2 rounded-full">
                <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Exclusive Trip</h3>
                <p className="text-base text-gray-600">There are many variations of passages of available but the majority.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-2 rounded-full">
                <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Professional Guide</h3>
                <p className="text-base text-gray-600">There are many variations of passages of available but the majority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularTours/>
      <ExploreByLocation/>
      <TestimonialSlider/>
      <TopSellingTours/>
      <HolidayThemesSlider/>
      <ExploreUnexplored/>
      <OceaniaSlider/>
      <VisaFreeDestinations/>
      <Kolkata/>
      <UpcomingSlider/>
      {/* <Footer/> */}
      
      
    </main>
  );
}
