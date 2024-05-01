"use client";

import Image from "next/image";
import Link from "next/link";
const Home  = "/icons/home.svg";
const TourIcon  = "/icons/plane-line.svg";
const HotelsIcon  = "/icons/hotel.svg";
const PacakgesIcon  = "/icons/package.svg";
const CalenderIcon  = "/icons/calendar-line.svg";

const BottomNav = () => {
  return (
    <>
      <div
        className="md:hidden bg-white fixed bottom-0 z-[99999] shadow-md rounded-tl-md rounded-tr flex gap-x-0 justify-start items-center w-full "
        style={{
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <Link
          href={"/"}
          className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex gap-x-0 justify-start items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c] relative z-50 h-[55px]"
        >
          <Image
            src={Home}
            width={20}
            height={20}
            className="w-[20px] my-1 group-hover:text-[#ff612c]"
            alt="Home_icons"
          ></Image>
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href={"/tours"}
          className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c] relative z-50 h-[55px]"
        >
          <Image
            src={TourIcon}
            width={20}
            height={20}
            className="w-[24px] block h-[24px]"
            alt="Tour_icons"
          ></Image>
          <div className="text-xs mt-[2px] pt-[2px]">Tours</div>{" "}
        </Link>
        <Link
          href={"/"}
          className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c] relative z-50 h-[55px]"
        >
          <Image
            src={PacakgesIcon}
            width={20}
            height={20}
            className="w-[20px] my-1 group-hover:text-[#ff612c]"
            alt="Packages_icons"
          ></Image>
          <span className="text-xs">Packages</span>{" "}
        </Link>
        <Link
          href={"/"}
          className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c] relative z-50 h-[55px]"
        >
          <Image
            src={HotelsIcon}
            width={20}
            height={20}
            className="w-[16px] my-1 group-hover:text-[#ff612c]"
            alt="Hotels_icons"
          ></Image>
          <span className="text-xs">Hotels</span>{" "}
        </Link>
        <Link
          href={"/"}
          className="normal-case text-[10px] bg-white text-richblack-700 cursor-pointer flex gap-x-0 justify-start items-center flex-col px-3 w-1/4 select-none py-1 transition-all group hover:border-t-2 border-t-[#ff621c] relative z-50 h-[55px]"
        >
          <Image
            src={CalenderIcon}
            width={16}
            height={16}
            className="w-[17px] my-1 group-hover:text-[#ff612c]"
            alt="Calender_icons"
          ></Image>
          <span className="text-xs">Planner</span>{" "}
        </Link>
      </div>
    </>
  );
};

export default BottomNav;