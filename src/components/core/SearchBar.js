"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality here
    console.log("Searching for:", query);
  };

  return (
    <div className="flex items-center justify-center my-3">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full p-1.5 pl-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-2 mt-0.5 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
