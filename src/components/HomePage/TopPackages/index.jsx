import React from "react";
import { FaHeart } from "react-icons/fa";

const TopPackages = () => {
  return (
    <div>
      <h1 className="text-lg px-6 mt-2">Top Packages</h1>
      <div className="w-full max-w-maxContent mx-auto flex justify-start p-4 gap-x-2 overflow-auto hide-scrollbar">
        <div className="min-w-full max-w-[430px] h-[200px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-1.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0 object-cover"
          />

          {/* Top text container */}
          <div className="absolute w-full top-0 left-0 z-50 text-white px-4 py-3 flex gap-x-2 justify-end bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent">
          
            <div>
              <div className="text-white bg-[rgba(299,299,299,0.2)] backdrop-blur-sm flex gap-x-1 items-center rounded-full px-1 py-1 ">
                <div className="w-[30px] h-[30px] rounded-full bg-[rgba(299,299,299,0.2)] flex items-center justify-center ">
                <FaHeart></FaHeart>
                </div>
                
              </div>
            </div>
          </div>
          {/* Bottom text container */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-300 GTE_light">/</p>
                <p className="text-gray-300 text-xs GTE_light"> Person</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-full max-w-[430px] h-[200px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-2.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0 object-cover"
          />

          {/* Top text container */}
          <div className="absolute w-full top-0 left-0 z-50 text-white px-4 py-3 flex gap-x-2 justify-end bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent">
          
            <div>
              <div className="text-white bg-[rgba(299,299,299,0.2)] backdrop-blur-sm flex gap-x-1 items-center rounded-full px-1 py-1 ">
                <div className="w-[30px] h-[30px] rounded-full bg-[rgba(299,299,299,0.2)] flex items-center justify-center ">
                <FaHeart></FaHeart>
                </div>
                
              </div>
            </div>
          </div>
          {/* Bottom text container */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-300 GTE_light">/</p>
                <p className="text-gray-300 text-xs GTE_light"> Person</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-full max-w-[430px] h-[200px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-3.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0 object-cover"
          />

          {/* Top text container */}
          <div className="absolute w-full top-0 left-0 z-50 text-white px-4 py-3 flex gap-x-2 justify-end bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent">
          
            <div>
              <div className="text-white bg-[rgba(299,299,299,0.2)] backdrop-blur-sm flex gap-x-1 items-center rounded-full px-1 py-1 ">
                <div className="w-[30px] h-[30px] rounded-full bg-[rgba(299,299,299,0.2)] flex items-center justify-center ">
                <FaHeart></FaHeart>
                </div>
                
              </div>
            </div>
          </div>
          {/* Bottom text container */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-300 GTE_light">/</p>
                <p className="text-gray-300 text-xs GTE_light"> Person</p>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default TopPackages;
