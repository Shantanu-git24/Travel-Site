'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

const TopSellingTours = () => {
    const [tours, setTours] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        fetch('https://test-2.e2l.tech/api/top-selling-pakages')
            .then(res => res.json())
            .then(data => setTours(data.data || []))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="py-12 text-center">
            <h4 className="text-cyan-700 text-lg font-semibold" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Explore</h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Manrope, cursive',fontSize:'42px' }}>Group Tours from India</h2>

            {/* Filter Buttons */}
            <div className="mb-6 flex justify-center gap-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Domestic</button>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full">International</button>
            </div>

            {/* Slider Container */}
            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Custom Nav Buttons */}
                <div ref={prevRef} className="custom-nav-button  left-[-20px] absolute top-1/2 z-10 hidden md:flex"  >
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&lt;</span>
                </div>
                <div ref={nextRef} className="custom-nav-button right-[-20px] absolute top-1/2 z-10 hidden md:flex">
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&gt;</span>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    loop
                >
                    {tours.map((tour, id) => (
                        <SwiperSlide key={id}>
                            <Link href={`/tour/${tour.slug || tour.id}`} passHref>
                            <div className="rounded-xl overflow-hidden shadow-lg bg-white w-[300px] mx-auto">
                                <Image
                                    src={tour.image || '/images/fallback.jpg'}
                                    alt={tour.title}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-[200px]"
                                />
                                <div className="text-center">
                                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 px-2">{tour.title}</h3>
                                    <div className="flex items-center px-2 gap-2 text-sm mb-1">
                                        <span className="font-bold text-lg text-gray-800">₹ {tour.price}</span>
                                        <span className="line-through text-gray-400 text-sm">₹ {tour.actual_price}</span>
                                        <span className="text-gray-500 text-xs bg-gray-200 rounded-full px-2 py-0.5">Per Person</span>
                                    </div>

                                    <div className="flex items-center px-2 gap-2 text-green-600 text-sm mb-2">
                                        <span>🟢 Stay</span>
                                        <span>🟢 Transfers</span>
                                        <span>🟢 {tour.activities || '5 Activities'}</span>
                                    </div>

                                    <div className="flex gap-2 mb-3 px-2">
                                        <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">May</span>
                                        <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">June</span>
                                        <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">July</span>
                                    </div>

                                    <button className="bg-blue-500 w-full text-white py-2  font-medium">
                                        View Itinerary &rarr;
                                    </button>
                                </div>
                            </div>
                            </Link>
                            <div className="py-3">
                                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full">
                                    View PDF
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                {/* <div className="swiper-button-prev text-blue-500 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3">
          <i className="bi bi-chevron-left text-2xl"></i>
        </div>
        <div className="swiper-button-next text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3">
          <i className="bi bi-chevron-right text-2xl"></i>
        </div> */}
            </div>
        </section>
    );
};

export default TopSellingTours;
