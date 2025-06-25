'use client';

import { useState, useEffect } from 'react';
import { FaPlane } from 'react-icons/fa';


export default function AirFareDeals() {
  const [activeTab, setActiveTab] = useState('domestic');
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Simulate API call
    fetchDeals(activeTab);
  }, [activeTab]);

  const fetchDeals = async (type) => {
    // Replace this with actual API
    const fakeApi = {
      domestic: Array(5).fill({
        title: 'Lorem Ipsum is Simply Dummy Text',
        desc: 'Printing and typesetting industry. Lorem Ipsum has been standard dummy text.',
        price: '₹ 62,609',
        strike: '₹ 79,942',
      }),
      international: Array(4).fill({
        title: 'International Dummy Deal',
        desc: 'International destinations, great prices, dummy text.',
        price: '₹ 82,999',
        strike: '₹ 99,999',
      }),
    };
    setDeals(fakeApi[type]);
  };

  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Air Fare Deals</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {['domestic', 'international'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 mx-2 rounded-full border ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-black'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="flex overflow-x-auto gap-4 px-2">
        {deals.map((deal, index) => (
          <div key={index} className="min-w-[260px] bg-white rounded-lg shadow-md border p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <FaPlane className="text-blue-500 text-xl" />
            </div>
            <h3 className="font-semibold text-center text-md mb-2">{deal.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-4">{deal.desc}</p>
            <div className="flex items-center justify-center gap-2 text-center">
              <span className="text-lg font-bold">{deal.price}</span>
              <span className="line-through text-gray-400">{deal.strike}</span>
            </div>
            <p className="text-xs text-center mt-1 text-gray-600">Per Person</p>
          </div>
        ))}
      </div>
    </section>
  );
}
