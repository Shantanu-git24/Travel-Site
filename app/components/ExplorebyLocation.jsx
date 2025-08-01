'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { usePopup } from './PopupContext';

const ExploreByLocation = () => {
  const [locations, setLocations] = useState([]);
  const [activeTab, setActiveTab] = useState('india');
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { setShowPopup } = usePopup();
  // console.log('setShowPopup:', setShowPopup);
  // const [showPopup, setShowPopup] = useState(false);

  const fetchData = (type) => {
    fetch(`/api/location?type=${type}`)
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error('Failed to fetch:', err));
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  return (
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}>Explore By Location</h2>

      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-full font-medium ${activeTab === 'india' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'
            }`}
          onClick={() => setActiveTab('india')}
        >
          India
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium ${activeTab === 'international' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'
            }`}
          onClick={() => setActiveTab('international')}
        >
          International
        </button>
      </div>

      <div className="max-w-6xl mx-auto relative px-4">
        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-swiper-button left-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&lt;</span>
        </div>
        <div
          ref={nextRef}
          className="custom-swiper-button right-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }} >&gt;</span>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {locations.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Text content */}
                <div className="absolute bottom-0 w-full text-left bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-3">
                  <h4 className="font-bold text-base">{item.title}</h4>
                  <p className="text-sm">From ₹<strong>{item.price}</strong>/ - per Person</p>
                  <p>12 Packages</p>
                </div>

                {/* Hover button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#0094da] text-black font-semibold w-full py-2 rounded-md hover:bg-[#0094da] transition cursor-pointer" onClick={() => setShowPopup(true)}>
                    Plan a Trip
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
};

export default ExploreByLocation;
