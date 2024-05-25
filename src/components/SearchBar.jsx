import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-1 max-w-maxContent mx-auto px-4 z-[500]">
      <div className="w-[97%] mx-auto flex items-center gap-x-3 rounded-full bg-gray-100 py-2 px-4">
        <FaSearch className="w-[20px] text-gray-500"></FaSearch>
        <span className="text-base text-gray-600">Search</span>
      </div>
      {isOpen && <div></div>}
    </div>
  );
};

export default SearchBar;
