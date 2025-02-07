import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

const inter = Inter({
  subsets: ['vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

interface serverdata {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = () => {
  const [data, setData] = useState<serverdata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://simple-books-api.glitch.me/books/');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: serverdata[] = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <div className="w-full h-full bg-gray-900">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-[15px] font-bold text-center text-[#2b9fbd] sm:text-[20px] md:text-[50px]">
            Server-Side Fetched Books
          </h1>

          {/* Loading State */}
          {loading && <p className="text-center text-gray-500">Loading...</p>}

          {/* Error State */}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[40px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white w-full h-full rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div>
                  <h1 className="text-[15px] text-[#2b9fbd] font-bold">Name: {item.name}</h1>
                  <p className="text-[15px] font-bold text-[#2b2ebd]">Type: {item.type}</p>
                </div>

                <div>
                  <p
                    className={`mt-2 ${
                      item.available ? 'text-indigo-500 font-semibold' : 'text-red-500 font-semibold'
                    }`}
                  >
                    {item.available ? 'Available' : 'Not Available'}
                  </p>
                </div>

                <div>
                  <button
                    className={`mt-4 w-full py-3 px-7 rounded ${
                      item.available
                        ? 'bg-indigo-400 hover:bg-indigo-400'
                        : 'bg-red-500 cursor-not-allowed'
                    } text-white transition duration-300`}
                    disabled={!item.available}
                  >
                    {item.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
