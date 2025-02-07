"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/searchbar/SearchBar";

// Define GPU Interface
interface GPU {
  id: number;
  name: string;
  brand: "NVIDIA" | "AMD" | "Intel";
  vram: string;
  price: number;
  image?: string;
  description: string;
}

// GPU Data (Unchanged, but it's better to fetch this data from an API or service)
const gpuList: GPU[] = [
  // GPU data remains unchanged from the previous code...
];

// Sort GPUs by price descending by default
const sortedGpuList = [...gpuList].sort((a, b) => b.price - a.price);

const ShopPage = () => {
  const [gpus, setGpus] = useState<GPU[]>(sortedGpuList);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Handle sorting
  const handleSort = (sortType: string) => {
    let sortedGpus = [...gpuList];
    switch (sortType) {
      case "price-high":
        sortedGpus.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        sortedGpus.sort((a, b) => a.price - b.price);
        break;
      case "latest":
        sortedGpus.sort((a, b) => b.id - a.id);
        break;
      case "oldest":
        sortedGpus.sort((a, b) => a.id - b.id);
        break;
    }
    setGpus(sortedGpus);
  };

  // Filtered GPU list based on search
  const filteredGpus = gpus.filter(gpu =>
    gpu.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
    gpu.brand.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
    gpu.vram.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-neon-green flex flex-col items-center w-full">
      <Navbar />

      <div className="w-full max-w-7xl p-6 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-full">
          <h1 className="text-4xl font-bold border-b-2 border-neon-green pb-2">GPU Marketplace</h1>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="bg-black text-neon-green border border-neon-green p-2 rounded-md mt-4 md:mt-0"
            defaultValue="price-high"
          >
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
            <option value="latest">Date Added: Latest</option>
            <option value="oldest">Date Added: Oldest</option>
          </select>
        </div>

        {/* 🔹 GPU Listings (Filtered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
          {filteredGpus.length > 0 ? (
            filteredGpus.map(gpu => (
              <Link key={gpu.id} href={`/gpu/${gpu.id}`} passHref>
                <motion.div
                  className="bg-black border border-neon-green p-4 rounded-xl shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-neon-green flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={gpu.image || "/default-gpu.png"}
                    alt={gpu.name}
                    className="w-full h-40 object-cover rounded-md border border-neon-green"
                    loading="lazy" // Lazy load images
                  />
                  <h2 className="text-xl font-bold text-neon-green mt-2">{gpu.name}</h2>
                  <p className="text-gray-400">{gpu.brand} - {gpu.vram} - ${gpu.price}</p>
                  <p className="text-neon-green mt-1">{gpu.description}</p>
                </motion.div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full mt-6">No GPUs found.</p>
          )}
        </div>
      </div>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;
