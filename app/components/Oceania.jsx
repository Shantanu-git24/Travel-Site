'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const destinations = [
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
  { name: 'Vietnam', price: '₹4,400', image: 'https://img.freepik.com/free-photo/clean-cascade-scenery-green-shore-tourism_1417-1353.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740' },
];

export default function OceaniaSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Predefined vertical offsets for curve (center lowest, sides higher)
  const yOffsets = ['translate-y-8', 'translate-y-4', 'translate-y-0', 'translate-y-4', 'translate-y-8', 'translate-y-12'];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-2xl  text-cyan-700" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Lorem Ipsum</h3>
        <h2 className="text-4xl font-bold text-cyan-900" style={{ fontFamily: 'Manrope, cursive',fontSize:'40px' }}>Oceania</h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
        >
          {destinations.map((item, index) => {
            const offset = yOffsets[index % yOffsets.length];
            return (
              <SwiperSlide key={index}>
                <div className={`text-center transform ${offset} transition duration-300`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Starting at {item.price} Per person</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrow */}
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-cyan-600 text-white shadow hover:bg-cyan-700"
          >
            ➤
          </button>
        </div>
      </div>
    </section>
  );
}
