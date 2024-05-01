"use client";

import Link from "next/link";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
const logo = "/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full z-[500] sticky bg-white top-0 ">
        <nav className="relative z-50 max-w-maxContent mx-auto py-0 md:py-2 pr-4 pl-2 flex items-center justify-between h-[50px]">
          <div>
            <Link href={"/"} className="select-none w-[120px] sm:w-[125px] md:w-[160px] bg-gray-300">
              <Image
                src={logo}
                alt="company_logo"
                className="block !w-full"
                // sizes="(max-width:400px) width:80px;"
                width={120}
                height={60}
              />
            </Link>
          </div>
          <div className="flex gap-x-3 items-center">
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
