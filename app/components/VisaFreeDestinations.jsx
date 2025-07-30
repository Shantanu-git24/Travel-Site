'use client';

import { usePopup } from './PopupContext';
export default function VisaFreeDestinations() {
  const destinations = [
    {
      title: 'Lorem Ipsum is text',
      amount: 4400,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Lorem Ipsum is text',
      amount: 4400,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Lorem Ipsum is text',
      amount: 4400,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Lorem Ipsum is text',
      amount: 4400,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Lorem Ipsum is text',
      amount: 4400,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
    },

  ];

  const { setShowPopup } = usePopup();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* <h3 className="text-cyan-700 text-lg mb-2 " style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Lorem Ipsum</h3> */}
        <h2 className="text-4xl font-bold mb-10" style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}>Visa Free & On Arrival</h2>

        <div className="grid group grid-cols-3 grid-rows-2 gap-6">
          {destinations.map((item, index) => {
            const isTallCard = index === 1;

            return (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-lg ${isTallCard ? 'row-span-2 h-[500px]' : 'h-[240px]'
                  }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4 text-left">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-sm">
                    Starting at ₹{item.amount.toLocaleString()} <br />
                    Per person
                  </p>
                </div>
                {/* Hover button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#0094da] text-black font-semibold w-full py-2 rounded-md hover:bg-[#0094da] transition cursor-pointer" onClick={() => setShowPopup(true)}>
                    Plan a Trip
                  </button>
                </div>
              </div>
            );
          })}



        </div>
      </div>
    </section>
  );
}
