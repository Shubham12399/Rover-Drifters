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
      icon: (
        <FaPlaneDeparture className="text-gray-600 md:text-lg group-hover:text-white"></FaPlaneDeparture>
      ),
      name: "Tours",
      link: "/home/trips",
      iconImg: "/icons/tours.png",
      shadow: "rgba(244, 210, 160, 0.6)",
    },
    {
      icon: (
        <FaHotel className="text-gray-600 md:text-lg group-hover:text-white"></FaHotel>
      ),
      name: "Outdoor",
      link: "/home/outdoor",
      iconImg: "/icons/outdoors.png",
      shadow: "rgba(184, 243, 243, 0.8)",
    },
    {
      icon: (
        <FaHotel className="text-gray-600 md:text-lg group-hover:text-white"></FaHotel>
      ),
      name: "Attractions",
      link: "/home/attraction",
      iconImg: "/icons/tickets.png",
      shadow: "rgba(125, 154, 200, 0.5)",
    },
    {
      icon: (
        <FaHotel className="text-gray-600 md:text-lg group-hover:text-white"></FaHotel>
      ),
      name: "hotels",
      link: "/home/attraction",
      iconImg: "/icons/stays.png",
      shadow: "rgba(184, 243, 243, 0)",
    },
    {
      icon: (
        <FaHotel className="text-gray-600 md:text-lg group-hover:text-white"></FaHotel>
      ),
      name: "Food & Leisure",
      link: "/home/food-relaxatation",
      iconImg: "/icons/foods.png",
      shadow: "rgba(182, 106, 98, 0.3)",
    },

    {
      icon: <GoPackage className="text-gray-600 md:text-lg"></GoPackage>,
      name: "Packages",
      link: "/home/packages",
      iconImg: "/icons/packages.png",
      shadow: "rgba(79, 138, 192, 0.3)",
    },
    {
      icon: (
        <FaHotel className="text-gray-600 md:text-lg group-hover:text-white"></FaHotel>
      ),
      name: "Transport",
      link: "/home/transport",
      iconImg: "/icons/transport.png",
      shadow: "rgba(170, 174, 178, 0.5)",
    },
  ]);
  return (
    <div className="w-full max-w-maxWidthContent mx-auto border-bl border-gray-200 overflow-auto hide-scrollbar px-4 py-1 md:px-4 flex items-center sticky top-[50px] z-[100] select-none mt-2">
      <div className="flex justify-start items-center gap-x-2 pr-4">
        {allTags?.map((tag) => {
          const isActive = pathname === tag.link;
          return (
            <Link
              key={tag.name}
              href={!isActive ? tag.link : "/home"}
              className={`px-3 flex flex-col justify-center items-center gap-x-2 border-b-2 border-transparent text-gray-900 text-sm font-medium hover:bg-gray-100 min-w-fit cursor-pointer group ${
                isActive && "border-2 border-[#ff612c]"
              }`}
            >
              {/* {tag.icon} */}
              <div
                className={
                  "rounded-2xl bg-[rgba(0,_0,_0,_0.04)] min-w-[50px] flex justify-center items-center min-h-[50px] p-2 border-2 border-transparent"
                }
                style={
                  {
                    // boxShadow: "0 0 20px rgba(0,0,0,0.06)",
                    // border:"1px solid rgba(0,0,0,0.09)"
                  }
                }
              >
                <img
                  src={tag.iconImg}
                  alt=""
                  className={`h-[30px]`}
                  style={{
                    filter:`drop-shadow(0 3px 2px ${tag.shadow})`
                  }}
                />
              </div>

              <span className="mt-2 GTE_light text-gray-600">{tag.name}</span>
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
