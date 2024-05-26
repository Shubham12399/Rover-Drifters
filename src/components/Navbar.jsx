"use client";

import Link from "next/link";
// import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart, GoSearch } from "react-icons/go";
import { usePathname } from "next/navigation";
import FullLogo from "./FullLogo";
import { FiSearch } from "react-icons/fi";
import WhereTo from "./HomePage/WhereTo";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
// const logo = "/short_logo.png";
const logo = "/amfeza_logo.png";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full sticky bg-white top-0 z-[9999]">
        <nav className="relative z-50 max-w-maxWidthContent mx-auto pr-4 pl-2 flex items-center justify-between min-h-[40px]">
          <div className="flex gap-x-3 items-center pl-2 md:pl-4">
            <div>
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="ui-svg-inline"
              >
                <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path>
              </svg>
            </div>
            <Link
              href={"/"}
              className="select-none "
            >
              <Image
                src={logo}
                alt="company_logo"
                className="w-[100px] sm:w-[100px] md:w-[110px] md:-mt-2"
                // sizes="(max-width:400px) width:80px;"
                width={100}
                height={60}
              />
            </Link>
            {/* <Link href={"/"}>
              <FullLogo></FullLogo>
            </Link> */}
          </div>

          <div className="flex gap-x-3 items-center">
            <WhereTo className="hidden sm:flex !drop-shadow-none !border-none !rounded-none"></WhereTo>

            {/* <div className="hidden md:block mr-4">
              <ul className="flex gap-x-8 items-center text-gray-900">
                <Link
                  href={"/"}
                  shallow={true}
                  className={`${pathname == "/" && "text-[#333] underline"}`}
                >
                  Home
                </Link>
                <Link
                  href={"/tours"}
                  shallow={true}
                  className={`${
                    pathname == "/tours" && "text-[#333] underline"
                  }`}
                >
                  Tours
                </Link>
                <Link
                  href={"/packages"}
                  shallow={true}
                  className={`${
                    pathname == "/packages" && "text-[#333] underline"
                  }`}
                >
                  Packages
                </Link>
                <Link
                  href={"/hotels"}
                  shallow={true}
                  className={`${
                    pathname == "/hotels" && "text-[#333] underline"
                  }`}
                >
                  Hotels
                </Link>
                <Link
                  href={"/planners"}
                  shallow={true}
                  className={`${
                    pathname == "/planners" && "text-[#333] underline"
                  }`}
                >
                  Planners
                </Link>
              </ul>
            </div> */}
            <div>
              <Link
                href={"/search"}
                className="block text-richblack-900 cursor-pointer "
              >
                {/* <GoSearch className="text-lg"></GoSearch> */}
                <FiSearch className="text-lg"/>
              </Link>
            </div>
            <div>
              <Link
                href={"/cart"}
                className="block text-richblack-900 cursor-pointer "
              >
                <AiOutlineHeart className="text-xl"></AiOutlineHeart>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
