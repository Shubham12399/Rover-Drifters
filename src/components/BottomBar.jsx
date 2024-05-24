import React from "react";
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";

const BottomBar = () => {
  return (
    // <div className="fixed flex justify-center items-center bottom-0 py-2 h-[60px] w-full z-50">
      <div className="fixed rounded-full w-full max-w-max mx-auto flex items-center justify-between overflow-hidden border drop-shadow-md bg-white z-50 left-1/2 -translate-x-1/2 bottom-6">
        <div className="min-w-[33%] w-1/3 hover:bg-gray-100 py-3 px-4 cursor-pointer">
          <FaHeart></FaHeart>
        </div>
        <div className="min-w-[33%] w-1/3 hover:bg-gray-100 py-3 px-4 cursor-pointer">
          <FaSearch></FaSearch>
        </div>
        <div className="min-w-[33%] w-1/3 hover:bg-gray-100 py-3 px-4 cursor-pointer">
          <FaUser></FaUser>
        </div>
      </div>
    // </div>
  );
};

export default BottomBar;
