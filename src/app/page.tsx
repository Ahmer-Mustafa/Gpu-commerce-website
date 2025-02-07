'use client';

import React, { useState } from 'react';
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number): void => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = (): void => {
    setSelectedIndex(null);
  };

  const handleClick = (index: number): void => {
    console.log(`Image ${index + 1} clicked!`);
  };

  return (
    <div className="bg-dark-bg text-neon-green font-orbitron">
      <Navbar />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-dark-bg text-neon-green">
        <div className="absolute inset-0 flex animate-slider">
          <img
            src="/images/gpu1.jpg"
            alt="GPU 1"
            className={`min-w-full object-cover transition-all duration-500 ${selectedIndex === 0 ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(0)}
          />
          <img
            src="/images/gpu2.jpg"
            alt="GPU 2"
            className={`min-w-full object-cover transition-all duration-500 ${selectedIndex === 1 ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(1)}
          />
          <img
            src="/images/gpu3.jpg"
            alt="GPU 3"
            className={`min-w-full object-cover transition-all duration-500 ${selectedIndex === 2 ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          />
        </div>

        <div className="relative z-10 text-center py-24 px-6 md:px-16 lg:px-24">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider neon-text animate__animated animate__fadeInUp">
            GPU Universe Marketplace
          </h2>
          <p className="mt-4 text-green-400 max-w-2xl mx-auto font-light animate__animated animate__fadeInUp">
            Discover the best selection of new and certified pre-owned GPUs for every budget and performance need.
          </p>
          <Link href="/shop">
            <button className="mt-6 px-8 py-3 bg-neon-green text-dark-bg font-semibold rounded-lg shadow-lg hover:neon-glow transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>
      </header>

      {/* Featured GPUs Section */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-dark-bg">
        <h3 className="text-4xl font-semibold text-neon-green text-center mb-8 animate__animated animate__fadeInUp">
          Featured GPUs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-black p-6 rounded-lg shadow-xl hover:neon-glow transition-transform ease-in-out transform hover:scale-105">
            <h4 className="text-xl font-bold text-neon-green">NVIDIA GeForce RTX 3080</h4>
            <p className="text-green-400 mt-2">Brand new model for high-end gaming.</p>
            <button className="mt-4 px-6 py-2 bg-neon-green text-dark-bg rounded hover:neon-glow transition-all duration-300">
              Buy Now
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-black p-6 rounded-lg shadow-xl hover:neon-glow transition-transform ease-in-out transform hover:scale-105">
            <h4 className="text-xl font-bold text-neon-green">AMD Radeon RX 5700 XT</h4>
            <p className="text-green-400 mt-2">Certified pre-owned with quality assurance.</p>
            <button className="mt-4 px-6 py-2 bg-neon-green text-dark-bg rounded hover:neon-glow transition-all duration-300">
              Buy Now
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-black p-6 rounded-lg shadow-xl hover:neon-glow transition-transform ease-in-out transform hover:scale-105">
            <h4 className="text-xl font-bold text-neon-green">Intel Arc A770</h4>
            <p className="text-green-400 mt-2">New generation GPU with innovative performance.</p>
            <button className="mt-4 px-6 py-2 bg-neon-green text-dark-bg rounded hover:neon-glow transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-black">
        <h3 className="text-4xl font-semibold text-neon-green text-center mb-8 animate__animated animate__fadeInUp">
          Why Shop With Us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src="/images/quality.svg" alt="Quality Assurance" className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-bold">Quality Assured</h4>
            <p className="mt-2 text-green-400">Every GPU is rigorously tested and certified for peak performance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/images/support.svg" alt="Expert Support" className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-bold">Expert Reviews</h4>
            <p className="mt-2 text-green-400">Our team offers detailed insights and comparisons to help you choose.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/images/innovation.svg" alt="Latest Technology" className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-bold">Wide Selection</h4>
            <p className="mt-2 text-green-400">From the latest releases to trusted pre-owned options, we have it all.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-dark-bg">
        <h3 className="text-4xl font-semibold text-neon-green text-center mb-8 animate__animated animate__fadeInUp">
          What Our Customers Say
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-xl hover:neon-glow transition-transform transform hover:scale-105">
            <p className="text-green-400 italic">"I found the perfect pre-owned GPU at an unbeatable price. Quality and support are top-notch!"</p>
            <h4 className="text-xl font-bold mt-4">- Jordan S.</h4>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-xl hover:neon-glow transition-transform transform hover:scale-105">
            <p className="text-green-400 italic">"Amazing selection of new and used GPUs. The reviews helped me make an informed choice."</p>
            <h4 className="text-xl font-bold mt-4">- Casey L.</h4>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-black">
        <h3 className="text-4xl font-semibold text-neon-green text-center mb-8 animate__animated animate__fadeInUp">
          GPU Trends & Tips
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-bg border border-neon-green p-6 rounded-lg shadow-xl hover:neon-glow transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold">Latest Market Trends</h4>
            <p className="text-green-400 mt-2">
              Stay updated on the current trends in new and used GPU markets.
            </p>
            <Link href="/news/market-trends" className="mt-4 inline-block text-neon-green hover:underline">
              Read More
            </Link>
          </div>
          <div className="bg-dark-bg border border-neon-green p-6 rounded-lg shadow-xl hover:neon-glow transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold">Maintenance Tips</h4>
            <p className="text-green-400 mt-2">
              Learn how to care for your GPU whether it's new or pre-owned.
            </p>
            <Link href="/news/maintenance-tips" className="mt-4 inline-block text-neon-green hover:underline">
              Read More
            </Link>
          </div>
          <div className="bg-dark-bg border border-neon-green p-6 rounded-lg shadow-xl hover:neon-glow transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold">Buying Guides</h4>
            <p className="text-green-400 mt-2">
              Expert advice on choosing the right GPU for your needs and budget.
            </p>
            <Link href="/news/buying-guides" className="mt-4 inline-block text-neon-green hover:underline">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 0.5px #00ff00, 0 0 1px #00ff00;
        }
        .neon-glow {
          box-shadow: 0 0 0.5px #00ff00, 0 0 2px #00ff00;
        }
        .bg-neon-green {
          background-color: #00ff00;
        }
        .text-neon-green {
          color: #00ff00;
        }
        .bg-dark-bg {
          background-color: #0a0a0a;
        }
        .text-dark-bg {
          color: #0a0a0a;
        }
        /* Animation keyframes */
        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
