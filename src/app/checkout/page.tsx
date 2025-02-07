'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Order placed successfully! (Demo)"); // Placeholder
  };

  return (
    <div className="bg-dark-bg text-neon-green font-orbitron min-h-screen">
      <Navbar />

      <main className="container mx-auto px-6 md:px-16 lg:px-24 py-12">
        <h2 className="text-4xl font-semibold text-neon-green text-center mb-8 neon-text animate__animated animate__fadeInUp">
          Checkout
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-xl neon-glow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-medium mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-lg font-medium mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
                required
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-lg font-medium mb-2">ZIP Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="paymentMethod" className="block text-lg font-medium mb-2">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full bg-dark-bg border border-neon-green text-neon-green rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-neon-green text-dark-bg font-semibold rounded-lg py-3 hover:neon-glow transition-all duration-300 transform hover:scale-105">
            Place Order
          </button>
        </form>
      </main>

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