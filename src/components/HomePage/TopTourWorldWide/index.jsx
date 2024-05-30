import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import TourCard from "../TypesTour/TourCard";

const TopTourWorldWide = () => {
  return (
    <div className="w-full max-w-maxWidthContent mx-auto">
      {/* <div className="rounded-3xl bg-gradient-to-b from-orange-50 via-transparent to-transparent py-4"> */}

      <h1 className="text-lg px-6">Top Things to Do Worldwide</h1>
      <div>
        <div className="flex gap-x-2 py-2 items-center  px-6">
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-black rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-black rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-black rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-black rounded-full">
              India
            </span>
          </div>
        </div>

        <div className="py-4 flex gap-x-4 md:gap-x-3 items-center overflow-auto hide-scrollbar  px-6">
         <TourCard _id={"dasd"} currency={{symbol:"AED"}} tour_name={"Adu Dhabi Safari"} destination={"Dubai"} images={["/images/banner-1.jpg"]} price={{sharing_price:"390"}} key={"sd"}></TourCard>
         <TourCard _id={"dasd"} currency={{symbol:"AED"}} tour_name={"Adu Dhabi Safari"} destination={"Dubai"} images={["/images/banner-1.jpg"]} price={{sharing_price:"390"}} key={"sd"}></TourCard>
         <TourCard _id={"dasd"} currency={{symbol:"AED"}} tour_name={"Adu Dhabi Safari"} destination={"Dubai"} images={["/images/banner-1.jpg"]} price={{sharing_price:"390"}} key={"sd"}></TourCard>
         <TourCard _id={"dasd"} currency={{symbol:"AED"}} tour_name={"Adu Dhabi Safari"} destination={"Dubai"} images={["/images/banner-1.jpg"]} price={{sharing_price:"390"}} key={"sd"}></TourCard>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TopTourWorldWide;
