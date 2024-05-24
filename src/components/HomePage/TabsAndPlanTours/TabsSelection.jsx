import React from "react";
import {
  FaChevronDown,
  FaHotel,
  FaPlaneDeparture,
  FaPlaneSlash,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const TabsSelection = ({ setIsOpen, isOpen }) => {
  return (
    <div className="w-full max-w-maxContent mx-auto border-b border-gray-200 py-2 overflow-auto pl-2 flex items-center sticky top-[50px] z-[100] select-none bg-white">
      <div className="flex justify-start items-center gap-x-3">
        <div className="px-3 py-1 flex justify-center items-center gap-x-2  text-gray-900 text-base font-medium hover:bg-gray-100 rounded-md min-w-fit cursor-pointer">
          <FaPlaneDeparture className="text-gray-600"></FaPlaneDeparture>
          <span>Trips</span>
        </div>
        <div className="px-3 py-1 flex justify-center items-center gap-x-2  text-gray-900 text-base font-medium hover:bg-gray-100 rounded-md min-w-fit cursor-pointer">
          <FaHotel className="text-gray-600"></FaHotel>
          <span>Hotels</span>
        </div>
        <div className="px-3 py-1 flex justify-center items-center gap-x-2  text-gray-900 text-base font-medium hover:bg-gray-100 rounded-md min-w-fit cursor-pointer">
          <GoPackage className="text-gray-600"></GoPackage>
          <span>Packages</span>
        </div>
      </div>
      <div
        className="bg-white shadow-lg shadow-white p-2 hover:bg-gray-100 cursor-pointer rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaChevronDown
          className={`text-sm text-gray-700 transition-transform ${
            isOpen && "rotate-180"
          }`}
        ></FaChevronDown>
      </div>
    </div>
  );
};

export default TabsSelection;
