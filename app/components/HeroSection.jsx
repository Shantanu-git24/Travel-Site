'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url("images/3d-view-sun-sky-from-airplane.png")' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-start justify-center p-10 text-white">
        <h1 className="text-4xl font-bold mb-4">The Sky is Waiting for You</h1>
        <p className="max-w-lg mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-end pr-16">
        <div className="bg-white p-6 rounded-xl text-black w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="From*" className="input" />
            <input type="text" placeholder="To*" className="input" />
            <input type="date" placeholder="Departure Date" className="input" />
            <input type="date" placeholder="Return Date" className="input" />
            <input type="number" placeholder="Adults (12+ yrs)" className="input" />
            <input type="text" placeholder="Class*" className="input" />
            <input type="tel" placeholder="Contact Number*" className="input col-span-2" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded col-span-2">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
