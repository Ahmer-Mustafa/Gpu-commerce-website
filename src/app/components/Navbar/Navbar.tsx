"use client";
import Link from "next/link";
import { Bell, ShoppingCart, User, Heart, Menu } from "lucide-react";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
  // Handle search function
  const handleSearch = (query: string) => {
    console.log("User searched for:", query);

    // Redirect to a search results page (optional)
    window.location.href = `/search?query=${query}`;
  };

  return (
    <nav className="w-full shadow-md bg-black px-6 py-3 flex items-center justify-between border-b-2 border-neon-green relative z-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,255,0,0.2),_transparent)] blur-xl opacity-50" />

      {/* Left Section */}
      <div className="flex items-center space-x-4 relative z-10">
        <div className="flex items-center">
          {/* Update this Link to point to the homepage */}
          <Link href="/" passHref>
            <div className="w-8 h-8 bg-neon-green rounded-md shadow-lg" />
            <span className="text-xl font-bold ml-2 text-neon-green">QuantumPixel</span>
          </Link>
        </div>

        {/* Search Bar Component */}
        <div>
        <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-5 relative z-10">
        <Link href="/shop">
          <button className="bg-neon-green hover:bg-green-500 text-black px-4 py-2 rounded-full font-semibold transition shadow-lg">
            SHOP NOW
          </button>
        </Link>
        <Heart className="w-6 h-6 text-neon-green hover:text-green-400 transition cursor-pointer" />
        <Bell className="w-6 h-6 text-neon-green hover:text-green-400 transition cursor-pointer" />

        {/* Cart Link */}
        <Link href="/cart">
          <ShoppingCart className="w-6 h-6 text-neon-green hover:text-green-400 transition cursor-pointer" />
        </Link>

        {/* User Menu */}
        <div className="relative">
          <button>
            <User className="w-6 h-6 text-neon-green hover:text-green-400 transition cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
