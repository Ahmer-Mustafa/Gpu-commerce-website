"use client"; // Enables client-side rendering for this page
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "../components/Header/header";

// Configure the Inter font with specified subsets and weights
const interFont = Inter({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define a TypeScript interface for the product data
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Main page component
const Page = () => {
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch("https://fakestoreapi.com/products"); // Fetch data from the API
        const data = await response.json(); // Parse JSON response
        setProducts(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts(); // Call the fetchProducts function
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={`${interFont.className}`}> {/* Render the header component */}
      <Header />
      <div className="min-h-full bg-gray-900">
        <div className="container mx-auto p-4">
          {/* Page title */}
          <h1 className="text-[15px] font-bold text-center text-[#2b9fbd] sm:text-[20px] md:text-[50px]">
            Client-Side Data
          </h1>

          {/* Display a loading spinner or product grid based on the loading state */}
          {loading ? (
            <div role="status" className="flex gap-2 justify-center items-center mt-8">
              {/* Loading spinner */}
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="text-[30px] font-bold text-[#22ccb5]">Loading...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[40px]">
              {/* Render each product */}
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform p-4">
                  {/* Product image */}
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={500} 
                    height={300} 
                    className="w-full h-48 object-contain p-4 rounded-lg" 
                  />
                  <div>
                    {/* Product title and ID */}
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600 text-lg font-light">ID: {product.id}</p>
                    
                    {/* Product price and category */}
                    <div className="flex justify-between">
                      <h3 className="font-normal text-md text-[#ff0000]">PRICE: ${product.price}</h3>
                      <h3 className="font-normal text-md">{product.category}</h3>
                    </div>

                    {/* Product description */}
                    <p className="text-black mt-[20px] line-clamp-3 overflow-hidden">{product.description}</p>
                    <p className="text-red-600 text-sm font-normal">Read more...</p>

                    {/* Product rating */}
                    <div className="flex justify-between mt-6">
                      <p className="text-emerald-700 text-sm font-normal">Rate: {product.rating.rate}</p>
                      <p className="text-emerald-700 text-sm font-normal">Count: {product.rating.count}</p>
                    </div>

                    {/* Add to Cart button */}
                    <button className="mt-4 w-full bg-indigo-500 py-2 px-4 rounded text-white hover:bg-indigo-600 transition">
                      <p className="text-lg font-medium">ADD TO CART</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
