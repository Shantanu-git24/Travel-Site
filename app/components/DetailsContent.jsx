"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function BaliPackagePage() {
    const [activeTab, setActiveTab] = useState('Tour Itinerary');


    // const [data, setData] = useState(null);
    // const [activeTab, setActiveTab] = useState('Tour Itinerary');

    // useEffect(() => {
    //     fetch('/api/tour')
    //         .then(res => res.json())
    //         .then(json => {
    //             setData(json);
    //             setActiveTab(json.tabs[0]); // default tab
    //         });
    // }, []);

    // if (!data) return <div className="p-10 text-center">Loading...</div>;

    const tabs = [
        'Tour Itinerary',
        'Tour Inclusion',
        'Tour Exclusion',
        'Booking Policy',
        'Cancellation Policy',
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Section */}
            <div className="lg:col-span-3 space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">Romantic Bali Getaway: Ubud, Kuta</h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium mb-2">Highlights of the Tour</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>✔ Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>✔ Lorem Ipsum has been the industry's standard dummy text.</li>
                        <li>✔ Survived not only five centuries but also the leap into electronic typesetting.</li>
                        <li>✔ Remaining essentially unchanged.</li>
                    </ul>
                </div>

                <div className="relative ">
                    <div className="flex space-x-4 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`py-3 px-4 text-sm font-medium relative ${activeTab === tab ? 'text-white rounded-[10px] bg-[#0094da] font-semibold' : 'text-gray-600'
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute left-0 right-0 h-[3px] bg-[#0094da] rounded-t" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {activeTab === 'Tour Itinerary' && (
                    <div className="bg-white border-1 p-4 rounded-lg shadow text-sm">
                        <h4 className="text-lg font-semibold mb-4">Trip Summary</h4>
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Day</th>
                                        <th className="border border-gray-300 px-4 py-2">Location</th>
                                        <th className="border border-gray-300 px-4 py-2">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 01</td>
                                        <td className="border border-gray-300 px-4 py-2">Ubud</td>
                                        <td className="border border-gray-300 px-4 py-2">Arrive in Denpasar Bali airport. Get transferred to your hotel in Ubud.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 02</td>
                                        <td className="border border-gray-300 px-4 py-2">Ubud</td>
                                        <td className="border border-gray-300 px-4 py-2">Visit Volcano, Waterfalls, Rice Fields, Monkeys & Swing Thrills. Jeep Volcano tour.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="border border-gray-300 px-4 py-2">Get transferred from Ubud to Kuta by car.</h4>

                        <div className="border border-gray-300 rounded overflow-hidden">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Day</th>
                                        <th className="border border-gray-300 px-4 py-2">Location</th>
                                        <th className="border border-gray-300 px-4 py-2">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 03</td>
                                        <td className="border border-gray-300 px-4 py-2">Kuta</td>
                                        <td className="border border-gray-300 px-4 py-2">Handara Gate, Tanah Lot Temple</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 04</td>
                                        <td className="border border-gray-300 px-4 py-2">Kuta</td>
                                        <td className="border border-gray-300 px-4 py-2">Nusa Penida With Snorkeling & Private Transfers</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 05</td>
                                        <td className="border border-gray-300 px-4 py-2">Kuta</td>
                                        <td className="border border-gray-300 px-4 py-2">Leisure Day</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Day 06</td>
                                        <td className="border border-gray-300 px-4 py-2">Kuta</td>
                                        <td className="border border-gray-300 px-4 py-2">Take your flight back home. Hope you end up with a lot of memories and a few souvenirs too.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* <div className="bg-white border-1 shadow p-4 rounded">
                    <h4 className="text-lg font-semibold mb-2">Your Route</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>🏁 Arrival at DPS</li>
                        <li>📍 Ubud</li>
                        <li>📍 Transfer by car</li>
                        <li>📍 Kuta</li>
                        <li>🚀 Departure at DPS</li>
                    </ul>
                    <div className="mt-3 flex justify-between">
                        <button className="text-blue-600 text-xs underline">Edit Route</button>
                        <button className="text-blue-600 text-xs underline">Add City</button>
                    </div>
                </div> */}

                <div className="flex gap-2 text-xs">
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Contact</button>
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Whatsapp</button>
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Write Us</button>
                </div>

                <button className="w-full bg-blue-600 text-white rounded px-4 py-2 text-sm">Download PDF</button>

                <div className="bg-white border-0.5 shadow p-4 rounded">
                    <h4 className="text-lg font-semibold mb-2">Related Packages</h4>
                    <div className="space-y-3">
                        {[1, 2, 3].map((pkg) => (
                            <div key={pkg} className="flex gap-3 items-start text-sm">
                                <div className="w-20 h-16 bg-gray-200 rounded" />
                                <div>
                                    <p className="font-medium">Thailand 5N</p>
                                    <p className="text-gray-500 text-xs">₹29,999 Onwards</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
