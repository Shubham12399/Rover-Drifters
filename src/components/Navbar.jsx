"use client";

import Link from "next/link";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { usePathname } from "next/navigation";
import FullLogo from "./FullLogo";
const logo = "/images/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full sticky bg-white top-0 z-[9999]">
        <nav className="relative z-50 max-w-maxContent mx-auto py-0 md:py-2 pr-4 pl-2 flex items-center justify-between h-[50px]">
        
          <div className="flex gap-x-3 items-center pl-4">
          <div>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ui-svg-inline"><path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
          </div>
            {/* <Link
              href={"/"}
              className="select-none w-[120px] sm:w-[125px] md:w-[160px] bg-gray-300"
            >
              <Image
                src={logo}
                alt="company_logo"
                className="block !w-full"
                // sizes="(max-width:400px) width:80px;"
                width={120}
                height={60}
              />
            </Link> */}
            <Link href={"/"} ><FullLogo></FullLogo></Link>
          </div>

          <div className="flex gap-x-3 items-center">
            <div className="hidden md:block mr-4">
              <ul className="flex gap-x-8 items-center font-thin text-gray-600">
                <Link
                  href={"/"}
                  shallow={true}
                  className={`font-thin ${
                    pathname == "/" && "text-[#333] underline"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href={"/tours"}
                  shallow={true}
                  className={`font-thin ${
                    pathname == "/tours" && "text-[#333] underline"
                  }`}
                >
                  Tours
                </Link>
                <Link
                  href={"/packages"}
                  shallow={true}
                  className={`font-thin ${
                    pathname == "/packages" && "text-[#333] underline"
                  }`}
                >
                  Packages
                </Link>
                <Link
                  href={"/hotels"}
                  shallow={true}
                  className={`font-thin ${
                    pathname == "/hotels" && "text-[#333] underline"
                  }`}
                >
                  Hotels
                </Link>
                <Link
                  href={"/planners"}
                  shallow={true}
                  className={`font-thin ${
                    pathname == "/planners" && "text-[#333] underline"
                  }`}
                >
                  Planners
                </Link>
              </ul>
            </div>
            <div>
              <Link
                href={"/search"}
                className="block text-richblack-900 cursor-pointer "
              >
                <GoSearch className="text-lg"></GoSearch>
              </Link>
            </div>
            <div>
              <Link
                href={"/cart"}
                className="block text-richblack-900 cursor-pointer "
              >
                <IoCartOutline className="text-xl"></IoCartOutline>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
