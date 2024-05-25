"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaHotel,
  FaPlaneDeparture,
  FaPlaneSlash,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const TabsSelection = ({ setIsOpen, isOpen }) => {
  const pathname = usePathname();
  const [allTags, setAllTags] = useState([
    {
      icon: <FaPlaneDeparture className="text-gray-600"></FaPlaneDeparture>,
      name: "Trips",
    },
    {
      icon: <FaHotel className="text-gray-600"></FaHotel>,
      name: "Hotels",
    },
    {
      icon: <GoPackage className="text-gray-600"></GoPackage>,
      name: "Packages",
    },
  ]);
  return (
    <div className="w-full max-w-maxWidthContent mx-auto border-b border-gray-200 overflow-auto pl-2 md:px-4 flex items-center sticky top-[50px] z-[100] select-none bg-white pr-2 mt-2">
      <div className="flex justify-start items-center gap-x-2">
        {allTags?.map((tag) => {
          const isActive = pathname === `/home/${tag.name.toLocaleLowerCase()}`;
          return (
            <Link
              key={tag.name}
              href={`/home/${tag.name.toLocaleLowerCase()}`}
              className={`px-2 mx-1 py-1 flex flex-col gap-y-1 justify-center items-center gap-x-2 border-b-2 border-transparent text-gray-900 text-sm font-medium hhover:bg-gray-100 rounded-none min-w-fit cursor-pointer ${
                isActive && "border-b-black"
              }`}
            >
              {tag.icon}
              <span>{tag.name}</span>
            </Link>
          );
        })}

        {/* <Link
          href={"/home/hotels"}
          className={`px-2 mx-1 py-1 flex flex-col gap-y-1 justify-center items-center gap-x-2  text-gray-900 text-sm font-medium hhover:bg-gray-100 rounded-none min-w-fit cursor-pointer${
            pathname === "/home/trips" && "border-b-black"
          }`}
        >
          <span>Hotels</span>
        </Link>
        <Link
          href={"/home/packages"}
          className={`px-2 mx-1 py-1 flex flex-col gap-y-1 justify-center items-center gap-x-2  text-gray-900 text-sm font-medium hhover:bg-gray-100 rounded-none min-w-fit cursor-pointer${
            pathname === "/home/trips" && "border-b-black"
          }`}
        >
          
          <span></span>
        </Link> */}
      </div>
      {/* <div
        className="bg-white shadow-lg shadow-white p-2 hhover:bg-gray-100 cursor-pointer rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaChevronDown
          className={`text-sm text-gray-700 transition-transform ${
            isOpen && "rotate-180"
          }`}
        ></FaChevronDown>
      </div> */}
    </div>
  );
};

export default TabsSelection;
