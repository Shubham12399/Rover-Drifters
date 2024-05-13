// export const metadata = {
//   title: "Rover Drifters - Explore Tours",
//   description: "The Next feeling of Tour & Travel.",
// };
"use client";

import { Button, Tooltip } from "@material-tailwind/react";
import React, { Suspense, useState } from "react";
import { FaPlane, FaStar } from "react-icons/fa";
import { GoCheck, GoChevronRight } from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
// import Modal from "../components/Modal";
// import TourType from "../data/TourType";
// import HeaderSkl from "../components/skelaton/HeaderSkl";
// import PostSkl from "../components/skelaton/home/PostSkl";
// import TagsSkl from "../components/skelaton/home/TagsSkl";
// import SearchInput from "../components/common/SearchInput";
// import activities from "../data/Activities";
import PostsSkl from "@/components/skelton/PostSkl";
import ActionButton from "@/components/utils/ActionButton";
import FilterModal from "@/components/utils/FilterModal";
import PriceRangeModal from "@/components/utils/PriceRangeModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import MainHeading from "@/components/Tours/MainHeading";
import TourBanner from "@/components/Tours/TourBanner";
import TypeTours from "@/components/Tours/TypeTours";
const TypesProfile = React.lazy(() =>
  import("@/components/Tours/TypesProfile")
);
// import { setType } from "../redux/slices/typeSlice";
// import NormalFilter from "../data/NormalFilter";
// import FilterModal from "../components/common/FilterModal";
// import PostsSkl from "../components/skelaton/common/PostsSkl";
// import PriceRangeModal from "../components/common/PriceRangeModal";
// import ActionButton from "../components/common/ActionButton";

const Tours = () => {
  // filter configurations
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState({
    checkbox_0: true,
    name: "No Filter",
  });

  const [loading, setLoading] = useState(true);
  const [priceRangeModal, setIsPriceRangeModal] = useState(false);
  const [priceRangeValue, setPriceRangeValue] = useState([300, 1000]);
  const [allToursModal, setAllToursModal] = useState(false);
  // const [changedType, setChangedType] = useState(TourType);
  const [tours, setTours] = useState([]);
  const typeSlice = useSelector((store) => store.typeSlice);
  // tours is data of all tours

  const handlePriceRange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
    console.log(priceRangeValue);
    setIsPriceRangeModal(false);
  };
  return (
    <div className="pb-8">
      <TourBanner></TourBanner>
      {/* seacrh Box  */}
      <div className="-mt-5 relative z-[999]">
        {/* <SearchInput></SearchInput> */}
      </div>

      {/* Hightlighted Section   */}
      <div className="bg-deep-orange-50 py-5 -mt-8 pt-10 ">
        <div className="max-w-maxWidthContent mx-auto">
          <MainHeading></MainHeading>
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
              {loading ? (
                <div className="w-[40px] bg-[var(--sklClr)] rounded-md inline-block"></div>
              ) : (
                tours.length
              )}
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
                  onClick={() => setIsFilterModal(true)}
                >
                  {filterValue?.name}
                  <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                </label>
                {/* <div className="flex">
                <div className="w-full rounded-lg bg-white md:bg-transparent md:shadow-none ">
                  {/* <h3 className="text-[13px] md:text-sm GTE_light text-[#2e3844] flex gap-x-2 items-center ">
                  Price
                </h3> */}
                <span
                  className="text-xs text-richblack-900 select-none cursor-pointer GTE_light flex justify-between pr-1 w-full items-center min-w-max px-2 py-1 border border-richblack-900 rounded-md "
                  onClick={() => setIsPriceRangeModal(true)}
                >
                  Price{" "}
                  {priceRangeValue && (
                    <>
                      ({priceRangeValue[0]} - {priceRangeValue[1]})
                    </>
                  )}
                  <GoChevronRight className="rotate-90 ml-3"></GoChevronRight>
                </span>
                {/* </div>
              </div> */}
              </div>
            </div>
          </div>

          {/* All Tours  */}
          {!loading && (
            <div className="w-full">
              <div className="mt-3 flex flex-wrap justify-start gap-3 md:gap-4  md:mt-4 pb-6 ">
                {tours?.map((tour, index) => {
                  console.log(tour);
                  const {
                    title,
                    image,
                    price: { aed, rupees },
                    tourType,
                    city,
                    rating,
                  } = tour;
                  return (
                    <div
                      key={index}
                      className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl "
                    >
                      <div className="absolute flex gap-x-2 items-center top-2 left-2 text-xs text-white">
                        {typeSlice.name.trim().toLowerCase() == "top tour" && (
                          <span className="text-xs text-white bg-caribbeangreen-200 px-1 rounded-md">
                            {tourType}
                          </span>
                        )}
                        <span className="text-xs text-white bg-[#ff612c] px-1 rounded-md">
                          {city}
                        </span>
                      </div>

                      <div className="w-full">
                        <img
                          src={image}
                          alt=""
                          className="w-full h-[100px] sm:h-[100px] object-cover"
                        />
                      </div>
                      <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
                        <Tooltip content={title}>
                          <h3 className="text-[13px] sm:text-sm font-medium line-clamp-1">
                            {title}
                          </h3>
                        </Tooltip>
                        <h3 className="text-xs font-medium text-richblack-900 mt-1">
                          AED {aed}.00
                        </h3>
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
                          {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
                          <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
                            {[...new Array(rating)].map((e, i) => (
                              <FaStar
                                key={i}
                                className="text-yellow-100 text-[8px]"
                              ></FaStar>
                            ))}
                          </div>
                        </div>
                        <div className="flex !items-strech gap-1 mt-3">
                          <Button
                            size="sm"
                            variant="outlined"
                            className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
                          >
                            Book Now
                          </Button>
                          <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
                            <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Loading Skleton  */}
          {loading && <PostsSkl></PostsSkl>}
        </div>

        <div className="pb-4 max-w-maxWidthContent mx-auto ">
          <h3 className="text-lg md:text-lg font-medium flex gap-x-2 items-center">
            Tours Types
          </h3>
          <TypeTours></TypeTours>
          <div className="md:mt-10 max-w-maxWidthContent mx-auto pl-0 md:px-6 flex gap-x-3 mt-2 overflow-auto hide-scrollbar">
            {/* <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img2}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                Adventure
              </h2>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img3}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  City Tours
                </h2>
              </div>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img1}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  Water Activities
                </h2>
              </div>
            </div>
            <div className="min-w-[110px] w-[110px] sm:w-[160px] md:w-[230px] rounded-lg ">
              <img
                src={img1}
                alt=""
                className="w-full h-[117px] object-cover rounded-lg"
              />
              <div className="">
                <h2 className="text-sm py-2 px-3 pl-1 w-full text-richblack-900 transition-all md:text-xl md:hover:text-2xl GTE_light">
                  Attraction
                </h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* filter Modal */}
      <FilterModal
        isFilterModal={isFilterModal}
        setIsFilterModal={setIsFilterModal}
        setFilterValue={setFilterValue}
        setLoading={setLoading}
        filterValue={filterValue}
      ></FilterModal>
      {/*---------------------------------- Open Service Modal ---------------------------- */}
      {priceRangeModal && (
        <PriceRangeModal
          setIsPriceRangeModal={setIsPriceRangeModal}
          setValue={setPriceRangeValue}
          value={priceRangeValue}
        >
          <div className="flex justify-end mt-2">
            <ActionButton
              className={"w-fit py-1 px-2 rounded-md GTE_light"}
              onClick={handlePriceRange}
            >
              <GoCheck></GoCheck>
              Select
            </ActionButton>
          </div>
        </PriceRangeModal>
      )}
      {allToursModal && (
        // <Modal
        //   title={
        //     <div className="flex items-center gap-x-2 GTE_light">All Tours</div>
        //   }
        //   setModal={setAllToursModal}
        // >
        //   <div className="px-2">
        //     <input
        //       type="search"
        //       placeholder="Search Tour ..."
        //       className="text-xs placeholder:text-richblack-500 outline-none my-2 px-4 w-full py-2 border rounded-lg GTE_light"
        //     />
        //   </div>
        //   <div className="w-full max-h-[79vh] overflow-auto hide-scrollbar px-2">
        //     <div className="mt-3 flex flex-wrap justify-between gap-3 md:gap-4 md:mt-4 pb-3 ">
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img2}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <Tooltip content={"Evenning Desert Saudi Arabia, late Night"}>
        //             <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //               Evening Desert S...{" "}
        //             </h3>
        //           </Tooltip>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img1}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 fex items-center mt-1">277 Reviews</p> */}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img3}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img4}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img2}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img3}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img2}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img3}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img4}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="min-w-[140px] w-[48%] transition-all sm:w-[160px] md:min-w-[170px] md:w-[173px] rounded-xl overflow-hidden relative bg-white shadow-xl ">
        //         <div className="w-full">
        //           <img
        //             src={img2}
        //             alt=""
        //             className="w-full h-[100px] sm:h-[100px] object-cover"
        //           />
        //         </div>
        //         <div className="px-3 sm:px-4 my-2 mb-3 sm:my-4 ">
        //           <h3 className="text-[13px] sm:text-sm font-medium line-clamp-2">
        //             Evening Desert S...{" "}
        //           </h3>
        //           <h3 className="text-xs font-medium text-richblack-900 mt-1">
        //             AED 135.00
        //           </h3>
        //           <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
        //             {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}{" "}
        //             <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //               <FaStar className="text-yellow-100 text-[8px]"></FaStar>
        //             </div>
        //           </div>
        //           <div className="flex !items-strech gap-1 mt-3">
        //             <Button
        //               size="sm"
        //               variant="outlined"
        //               className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
        //             >
        //               Book Now
        //             </Button>
        //             <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
        //               <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </Modal>
        <></>
      )}
    </div>
  );
};

export default Tours;
