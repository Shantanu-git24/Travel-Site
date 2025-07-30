'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import PhonePopup from './PhonePopup';

const Kolkata = () => {
    const [places, setPlaces] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        fetch('https://test-2.e2l.tech/api/get-explore-the-unexplored-states')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setPlaces(data.data);
                } else {
                    console.error('Expected array but got:', data);
                    setPlaces([]); // fallback
                }
            })
            .catch((err) => console.error('API fetch failed:', err));
    }, []);


    return (
        <section className="py-14 bg-white text-center relative">
            <h3 className="text-cyan-700 text-lg mb-2 " style={{ fontFamily: 'Montez, cursive', fontSize: '40px' }}>Weekend Gateways</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Manrope, cursive', fontSize: '48px' }}>From Kolkata</h2>

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Custom Nav Buttons */}
                <div ref={prevRef} className="custom-nav-button  left-[-20px] absolute top-1/2 z-10 hidden md:flex"  >
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&lt;</span>
                </div>
                <div ref={nextRef} className="custom-nav-button right-[-20px] absolute top-1/2 z-10 hidden md:flex">
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&gt;</span>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
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
                    {places.map((place, id) => (
                        <SwiperSlide key={id}>
                            <div
                                className="relative rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
                                onClick={() => setPopupOpen(true)}
                            >
                                <div className="relative h-[260px] w-full">
                                    <Image
                                        src={place.image || '/images/fallback.jpg'}
                                        alt={place.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute text-left bottom-0 w-full text-gray-800 bg-opacity-60 px-4 py-3">
                                        <h4 className="font-semibold text-base">{place.name || 'Unknown Place'}</h4>
                                    </div>
                                </div>

                                <div className="py-2 px-4 text-gray-800 text-sm text-left">
                                    Starting at ₹{place.price || '4,400'} <br />
                                    Per person
                                </div>
                            </div>
                        </SwiperSlide>


                    ))}
                </Swiper>
                 <PhonePopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
            </div>
        </section>
    );
};

export default Kolkata;
