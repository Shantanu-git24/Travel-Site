'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-xl font-bold">Impulse Wings</div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/flights">Flights</Link>
        <Link href="/hotels">Hotels</Link>
        <Link href="/packages">Packages</Link>
      </nav>
    </header>
  );
}
