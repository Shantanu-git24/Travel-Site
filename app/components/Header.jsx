"use client";
import Image from "next/image";
import Link from "next/link";
import { Globe, Plane, Hotel, Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" >
          <Image src="/images/LOGO.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
          <Link href="/packages" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Globe className="w-5 h-5" /> <span className="text-[16px]">Packages</span>
          </Link>
          <Link href="/flights" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Plane className="w-4 h-4" /> <span className="text-[16px]">Flights</span>
           </Link>
          <Link href="/hotels" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Hotel className="w-4 h-4" /> <span className="text-[16px]">Hotels</span>
           </Link>
          <Link href="/corporate" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Briefcase className="w-4 h-4" /> <span className="text-[16px]">Corporate Package</span>
           </Link>
           <Link href="/about" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Briefcase className="w-4 h-4" /> <span className="text-[16px]">About Us</span>
           </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="bg-sky-400 hover:bg-sky-400 text-white px-4 py-1 rounded-full text-sm">
            Create a Trip
          </button>
          <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-1 rounded-full text-sm">
            Join club
          </button>
        </div>
      </div>
    </header>
  );
}
