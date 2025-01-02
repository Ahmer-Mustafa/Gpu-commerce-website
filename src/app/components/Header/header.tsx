"use client"; // Enables client-side rendering for this component

import React, { useState } from "react";
import Link from "next/link"; // Next.js Link for navigation
import { Inter } from "next/font/google"; // Import the Inter font from Google

// Configure the Inter font with specific subsets and weights
const interFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Header component
const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileToggle, setMobileToggle] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMobileToggle(!isMobileToggle);
  };

  return (
    <div className={`${interFont.className}`}>
      {/* Main header container */}
      <header className="w-full h-16 flex justify-between items-center px-6 bg-green-700 text-black font-medium shadow-md">
        {/* Title/Logo section */}
        <div>
          <h1 className="text-3xl font-extrabold">DATA FETCHING</h1>
        </div>

        {/* Desktop navigation menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            <li className="text-lg font-semibold hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg font-semibold hover:underline">
              <Link href="/client">Client-Side-Data</Link>
            </li>
            <li className="text-lg font-semibold hover:underline">
              <Link href="/server">Server-Side-Data</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={toggleMenu} // Toggle menu visibility on click
          >
            ☰
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileToggle && (
          <div className="absolute top-16 left-0 w-full bg-green-700 text-black p-6 shadow-lg z-10">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="block text-lg font-semibold hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/client" className="block text-lg font-semibold hover:text-gray-300">
                  Client-Side-Data
                </Link>
              </li>
              <li>
                <Link href="/server" className="block text-lg font-semibold hover:text-gray-300">
                  Server-Side-Data
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
