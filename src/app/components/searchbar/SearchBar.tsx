import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void; // ✅ Define expected prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query); // ✅ Calls function from props
    }
  };

  return (
    <div className="flex items-center bg-black border border-neon-green px-4 py-2 rounded-full w-full md:w-96">
      <input
        type="text"
        placeholder="Search listings and sellers"
        value={query}
        onChange={handleChange}
        className="ml-2 bg-transparent outline-none w-full text-white placeholder-gray-400"
      />
      {/* ✅ Clickable Search Icon */}
      <button onClick={handleSearch} className="ml-2">
        <FaSearch className="text-neon-green w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;