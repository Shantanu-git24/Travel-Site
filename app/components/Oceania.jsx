'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { usePopup } from './PopupContext';



export default function OceaniaSlider() {
  const [locations, setLocations] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('india');
  const { setShowPopup } = usePopup();



  const fetchData = (type) => {
    fetch(`/api/location?type=${type}`)
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error('Failed to fetch:', err));
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);



  // Predefined vertical offsets for curve (center lowest, sides higher)
  // const yOffsets = ['translate-y-8', 'translate-y-4', 'translate-y-0', 'translate-y-4', 'translate-y-8', 'translate-y-12'];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        {/* <h3 className="text-2xl  text-cyan-700" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Lorem Ipsum</h3> */}
        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Manrope, cursive', fontSize: '40px' }}>Wildlife Tours</h2>
      </div>

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

      <div className="relative max-w-7xl  mx-auto px-4">
        {/* Navigation Arrow */}
        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-swiper-button left-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white", textAlign: "center" }}>&lt;</span>
        </div>
        <div
          ref={nextRef}
          className="custom-swiper-button right-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white", textAlign: "center" }} >&gt;</span>
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
            1024: { slidesPerView: 5 },
          }}
        >
          {locations.map((item, index) => {
            // const offset = yOffsets[index % yOffsets.length];
            return (
              <SwiperSlide key={index}>
                <div className={`text-center group transform transition duration-300`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm">Starting at {item.price} Per person</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

         {/* Hover button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#0094da] text-black font-semibold w-full py-2 rounded-md hover:bg-[#0094da] transition cursor-pointer" onClick={() => setShowPopup(true)}>
                    Plan a Trip
                  </button>
                </div>


      </div>
    </section>
  );
}
