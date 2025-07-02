'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PackagesPage() {
    const [packages, setPackages] = useState([]);
    const [visibleCount, setVisibleCount] = useState(15);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://test-2.e2l.tech/api/get-package-with-filter')
            .then((res) => {
                setPackages(res.data?.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching packages:', err);
                setLoading(false);
            });
    }, []);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 15);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-6">
            {/* Filter Section */}
            <div className="col-span-12 md:col-span-3 bg-white shadow-sm rounded p-4 border border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Filters</h4>
                <div className="col-span-12 md:col-span-3 bg-white shadow-sm rounded p-4 border border-gray-200">
                    <h4 className="text-lg font-semibold mb-4">Filters</h4>

                    <div className="mb-6">
                        <h6 className="font-medium mb-2">Duration (Nights)</h6>
                        <input type="range" min={1} max={10} className="w-full" />
                    </div>

                    <div className="mb-6">
                        <h6 className="font-medium mb-2">Budget Per Person</h6>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> ₹45,000 – ₹55,000
                        </label>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> ₹10,001 – ₹20,000
                        </label>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> ₹10,001 – ₹20,000
                        </label>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> ₹20,001 – ₹30,000
                        </label>
                    </div>

                    <div className="mb-6">
                        <h6 className="font-medium mb-2">Cities</h6>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> Delhi
                        </label>
                        <label className="block text-sm mb-1">
                            <input type="checkbox" className="mr-2" /> Mumbai
                        </label>
                    </div>
                </div>

            </div>

            {/* Card Grid Section */}
            <div className="col-span-12 md:col-span-9">
                {loading ? (
                    <p className="text-center text-gray-600">Loading packages...</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {packages.slice(0, visibleCount).map((pkg, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-300 rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between h-[380px] md:h-[350px] lg:h-[380px]"
                                >
                                    <img
                                        src={pkg.file_path || '/images/default.jpg'}
                                        alt="Package"
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-3">
                                        <h5 className="font-semibold text-gray-800 mb-1 line-clamp-2">{pkg.title}</h5>

                                        {/* Price Section - All in one line */}
                                        <div className="flex items-center gap-2 text-sm text-gray-800 mb-3">
                                            <span className="text-lg font-bold text-green-700">₹ {pkg.lowest_price}</span>
                                            <span className="line-through text-gray-500">₹ {pkg.total_price || '78,262'}</span>
                                            <span className="ml-auto text-xs bg-gray-100 border px-2 py-1 rounded-full whitespace-nowrap">
                                                Per Person
                                            </span>
                                        </div>

                                        {/* Icons Row */}
                                        <div className="flex items-center gap-3 text-sm text-gray-600 ">
                                            <span>🛏 {pkg.no_of_hotels || 3} Hotels</span>
                                            <span>🚌 {pkg.no_of_transport || 2} Transport</span>
                                            <span>🎉 {pkg.no_of_activities || 5} Activities</span>
                                        </div>
                                    </div>

                                    {/* View Itinerary Button – full width + touches card bottom */}
                                   
                                        <button className="bg-[#0094DA]  text-white text-lg w-full py-3  hover:bg-[#0095dae8] transition">
                                            View Itinerary
                                        </button>
                                    

                                </div>
                            ))}
                        </div>

                        {visibleCount < packages.length && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={handleViewMore}
                                    className="bg-[#0094DA] text-white px-6 py-2 rounded hover:bg-[#0095dae8] text-sm"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
