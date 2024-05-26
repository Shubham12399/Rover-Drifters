"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaDotCircle,
  FaHotel,
  FaPlaneDeparture,
  FaPlaneSlash,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";

const TabsSelection = ({ setIsOpen, isOpen }) => {
  const pathname = usePathname();
  const [allTags, setAllTags] = useState([
    // {
    //   icon: <IoHome className="text-gray-600 md:text-lg"></IoHome>,
    //   name: "Home",
    //   link:"/home"
    // },
    {
      icon: <FaPlaneDeparture className="text-gray-600 md:text-lg"></FaPlaneDeparture>,
      name: "Tours",
      link:"/home/trips"
    },
    {
      icon: <FaHotel className="text-gray-600 md:text-lg"></FaHotel>,
      name: "Outdoor",
      link:"/home/outdoor"
    },
    {
      icon: <FaHotel className="text-gray-600 md:text-lg"></FaHotel>,
      name: "Attractions",
      link:"/home/attraction"
    },
    {
      icon: <FaHotel className="text-gray-600 md:text-lg"></FaHotel>,
      name: "Transport",
      link:"/home/transport "
    },
    {
      icon: <FaHotel className="text-gray-600 md:text-lg"></FaHotel>,
      name: "Food & Relaxation",
      link:"/home/food-relaxatation"
    },
    {
      icon: <GoPackage className="text-gray-600 md:text-lg"></GoPackage>,
      name: "Packages",
      link:"/home/packages"
    },
  ]);
  return (
    <div className="w-full max-w-maxWidthContent mx-auto border-bl border-gray-200 overflow-auto pl-2 md:px-4 flex items-center sticky top-[50px] z-[100] select-none bg-white pr-2 mt-2">
      <div className="flex justify-start items-center gap-x-2 pr-4">
        {allTags?.map((tag) => {
          const isActive = pathname === tag.link;
          return (
            <Link
              key={tag.name}
              href={tag.link}
               className={`px-3 py-1 flex justify-center items-center gap-x-2 border-b-2 border-transparent text-gray-900 text-sm  font-medium hhover:bg-gray-100 min-w-fit cursor-pointer hover:bg-gray-200 rounded-lg ${
                isActive && "bg-gray-200"
              }`}
            >
              {tag.icon}
              <span>{tag.name}</span>
            </Link>
          );
        })}

        {/* <Link
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
