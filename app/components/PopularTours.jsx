'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function PopularTours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchTours() {
    try {
      const res = await fetch('https://test-2.e2l.tech/api/get-explore-by-states');
      const data = await res.json();

      console.log('API response:', data); // 👈 Add this line to inspect

      // If the real data is under data.data or data.tours or similar, adjust here:
      setTours(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setLoading(false);
    }
  }

  fetchTours();
}, []);


  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Loading tours...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#f0f8ff] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="text-cyan-700 text-lg mb-2" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Best Place For You</h4>
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Manrope, cursive',fontSize:'42px' }}>Most Popular Tour</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto"
      >
        {tours.map((tour, id) => (
          <SwiperSlide key={id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative h-full">
              <div className="relative h-48">
                <Image
                  src={tour.file_path}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-yellow-500 text-sm">
                  ★★★★☆ <span className="text-gray-500"> Rating</span>
                </p>
                <p className="text-xl font-bold text-gray-800">
                  ₹{tour.starting_price} <span className="text-sm text-gray-500">/Person</span>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">{tour.name}</span>
                  <button className="bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-cyan-700 transition">
                    View Itinerary
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
}
