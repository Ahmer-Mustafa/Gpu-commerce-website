// Importing necessary libraries and components
import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

// Configuring the "Inter" font with specific weights and subsets
const interFont = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

// Functional Component: HERO
const HERO = () => {
  return (
    // Applying the imported "Inter" font class to the entire component
    <div className={`${interFont.className}`}>
      {/* Hero Title Section */}
      <div className='flex justify-center items-center mt-12 text-center'>
        <h1 className='text-2xl font-extrabold text-[#2b9fbd] bg-green-700 p-6 rounded-lg shadow-lg sm:text-3xl md:text-5xl'>
          Data Fetching Assignment
        </h1>
      </div>

      {/* Client-Side Data Fetching Section */}
      <div className='text-center mt-12 p-6'>
        <h1 className='text-xl font-bold sm:text-2xl'>Client-Side Data Fetching</h1>
        <p className='text-sm font-normal sm:text-base'>
          Dynamically fetch data on the client side using React hooks, providing a seamless user experience.
        </p>
      </div>

      {/* Server-Side Data Fetching Section */}
      <div className='text-center mt-12 p-6'>
        <h1 className='text-xl font-bold sm:text-2xl'>Server-Side Data Fetching</h1>
        <p className='text-sm font-normal sm:text-base'>
          Pre-fetch data on the server side to improve performance, SEO optimization, and load time.
        </p>
      </div>

      {/* Links to Client and Server Side Data Fetching Pages */}
      <section className='flex flex-col gap-4 justify-center items-center w-full mt-8 mb-20 sm:flex-row'>
        {/* Client-Side Data Button */}
        <div className='p-4'>
          <h1 className='bg-green-700 text-white text-lg font-medium text-center p-3 rounded-lg shadow-md hover:shadow-xl sm:text-xl md:text-2xl lg:text-3xl'>
            <Link href="/client">Client-Side-Data</Link>
          </h1>
        </div>

        {/* Server-Side Data Button */}
        <div className='p-4'>
          <h1 className='bg-green-700 text-white text-lg font-medium text-center p-3 rounded-lg shadow-md hover:shadow-xl sm:text-xl md:text-2xl lg:text-3xl'>
            <Link href="/server">Server-Side-Data</Link>
          </h1>
        </div>
      </section>
    </div>
  );
};

// Exporting the HERO component for use in other parts of the application
export default HERO;
