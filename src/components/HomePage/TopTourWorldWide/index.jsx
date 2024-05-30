import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";

const TopTourWorldWide = () => {
  return (
    <div className="w-full max-w-maxWidthContent mx-auto px-4">
      <h1 className="text-lg">Top Tours World Wide</h1>
      <div>
        <div className="flex gap-x-2 py-2 items-center">
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm bg-white hover:bg-gray-100 text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-gray-700 rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm bg-white hover:bg-gray-100 text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-gray-700 rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm bg-white hover:bg-gray-100 text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-gray-700 rounded-full">
              India
            </span>
          </div>
          <div className="min-w-fit w-fit px-2 py-2 text-[12px] md:text-sm bg-white hover:bg-gray-100 text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-2">
            <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" className="w-[20px] h-[20px] rounded-xl object-cover" />
            <span className="GTE_light text-xs sm:text-sm text-gray-700 rounded-full">
              India
            </span>
          </div>
        </div>

        <div className="mt-2 flex gap-x-4 items-center">
          <div className="w-[150px] h-[200px] shadow-sm bg-gray-300 rounded-lg relative overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.4)]"></div>
            <img
              src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.pngbanner-1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end p-2 px-3 z-50">
              <div className=" text-white flex items-center gap-x-2 mt-1 GTE_regular">
                <HiLocationMarker className="text-sm text-[#ff612c]"></HiLocationMarker>
                <p className="GTE_light"> South Asia</p>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-[200px] shadow-sm bg-gray-300 rounded-lg relative overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.4)]"></div>
            <img
              src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.pngbanner-1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end p-2 px-3 z-50">
              <div className=" text-white flex items-center gap-x-2 mt-1 GTE_regular">
                <HiLocationMarker className="text-sm text-[#ff612c]"></HiLocationMarker>
                <p className="GTE_light"> South Asia</p>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-[200px] shadow-sm bg-gray-300 rounded-lg relative overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.4)]"></div>
            <img
              src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.pngbanner-1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end p-2 px-3 z-50">
              <div className=" text-white flex items-center gap-x-2 mt-1 GTE_regular">
                <HiLocationMarker className="text-sm text-[#ff612c]"></HiLocationMarker>
                <p className="GTE_light"> South Asia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTourWorldWide;
