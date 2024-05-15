"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import PriceRangeModal from "../utils/PriceRangeModal";
import FilterModal from "../utils/FilterModal";
const TypesProfile = React.lazy(() => import("./TypesProfile"));
const MainHeading = React.lazy(() => import("./MainHeading"));
const TourBanner = React.lazy(() => import("./TourBanner"));
const TypeTours = React.lazy(() => import("./TypeTours"));

const MainTours = () => {
  // // tours is data of all tours
  const searchParams = useSearchParams();
  // const modalType = searchParams.get("modalType");
  const minPrice = searchParams.get("min");
  const maxPrice = searchParams.get("max");
  const filterValue = searchParams.get("filterValue");
  const pathname = usePathname();
  const [isModal, setIsModal] = useState("");

  useEffect(() => {
    if (!minPrice && !maxPrice && !filterValue) {
      const params = new URLSearchParams(searchParams);
      params.set("min", 300);
      params.set("max", 800);
      params.set("filterValue", "No Filter");
      // params.
      history.replaceState(null, "", `${pathname}?${params.toString()}`);
    }
  }, [minPrice, maxPrice, pathname, searchParams, filterValue]);

  // const handleCloseModal = useCallback(() => {
  //   const params = new URLSearchParams(searchParams);
  //   params.delete("modalType");
  //   // params.
  //   history.replaceState(null, "", `${pathname}?${params.toString()}`);
  // }, [searchParams, pathname]);

  // const handleOpenModel = useCallback(
  //   (type) => {
  //     const params = new URLSearchParams(searchParams);
  //     if(modalType){ params.delete("modalType")}
  //     else{ params.set("modalType", type)};
  //     // params.
  //     history.replaceState(null, "", `${pathname}?${params.toString()}`);
  //   },
  //   [searchParams, pathname,modalType]
  // ,[]);

  // console.log(modalType)

  const handleCloseModal = () => {
    setIsModal("");
  };
  const handleOpenModel = (type) => {
    setIsModal(type);
  };
  console.log(isModal);
  return (
    <div className="pb-8">
      <Suspense fallback="">
        <TourBanner></TourBanner>
      </Suspense>
      {/* seacrh Box  */}
      <div className="-mt-5 relative z-[999]">
        {/* <SearchInput></SearchInput> */}
      </div>

      {/* Hightlighted Section   */}
      <div className="bg-deep-orange-50 py-5 -mt-8 pt-10 ">
        <div className="max-w-maxWidthContent mx-auto">
          <Suspense fallback="">
            <MainHeading></MainHeading>
          </Suspense>
          <Suspense fallback="">
            <TypesProfile></TypesProfile>
          </Suspense>
        </div>
      </div>

      {/* Heading Area and Post  */}
      <div className="p-4 max-w-maxWidthContent mx-auto md:pt-8 pb-0">
        {/* Tourse heading and view all btn */}
        <div>
          <h3 className="text-sm md:text-lg font-medium flex gap-x-2 items-center">
            <FaPlane className="group-hover:text-[#ff612c]"></FaPlane>
            {/* {changedType?.name} */}
            Tours in Cities
          </h3>
          <Link
            href={"/all-tours"}
            className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-4"
            onClick={() => setAllToursModal(true)}
          >
            View All Tours
          </Link>
        </div>

        {/* Result , sort by Option and All Tour Container */}
        <div>
          {/* Result , sort by Option Container */}
          <div className="flex justify-between items-center pt-4 pb-2">
            {/* Result Container */}
            <span className="flex gap-x-2">
              Result:{" "}
              {/* {loading ? (
                <div className="w-[40px] bg-[var(--sklClr)] rounded-md inline-block"></div>
              ) : (
                tours.length
              )} */}
            </span>

            {/*Sort by Option Container */}
            <div className="flex items-center">
              <span className="min-w-max mr-3 text-xs md:text-sm hidden md:block">
                Sort By :
              </span>
              <div className="w-max flex gap-x-3 items-center md:bg-transparent md:shadow-none">
                {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Most Popular
                </h3> */}

                <label
                  htmlFor="select"
                  className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                  onClick={() => handleOpenModel("filter")}
                >
                  {filterValue}
                  <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                </label>
                {/* <div className="flex">
                <div className="w-full rounded-lg bg-white md:bg-transparent md:shadow-none ">
                  {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Price
                </h3> */}
                <span
                  className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 w-full items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                  onClick={() => handleOpenModel("price-range")}
                >
                  Price ({minPrice} - {maxPrice})
                  <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                </span>
                {/* </div>
              </div> */}
              </div>
            </div>
          </div>

          {/* All Tours  */}

          <div className="w-full">
            <Suspense fallback="">
              {" "}
              <TypeTours></TypeTours>
            </Suspense>
          </div>
        </div>
      </div>

      {/* filter Modal */}
      {isModal == "price-range" && (
      <PriceRangeModal handleCloseModal={handleCloseModal} />
      )}
      {/*---------------------------------- Open Service Modal ---------------------------- */}
      {isModal == "filter" && (
        <FilterModal handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default MainTours;
