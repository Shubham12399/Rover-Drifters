import React from "react";

const TopPackages = () => {
  return (
    <div>
      <h1 className="text-lg px-6">Top Packages</h1>
      <div className="w-full max-w-maxContent mx-auto flex justify-start p-4 gap-x-2 overflow-auto hide-scrollbar">
        <div className="min-w-full max-w-[430px] h-[220px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-2.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.35)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-400 GTE_light">/</p>
                <p className="text-gray-400 text-xs GTE_light">2 Person</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-full max-w-[430px] h-[220px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-2.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.35)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-400 GTE_light">/</p>
                <p className="text-gray-400 text-xs GTE_light">2 Person</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-full max-w-[430px] h-[220px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/banner-2.jpg"
            alt=""
            className="w-full rounded-2xl absolute top-0 left-0 w-full h-full z-0"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.35)] text-white z-10 rounded-2xl px-4 py-2">
            <div className="relative top-full -translate-y-full flex justify-between w-full">
              <div>
                <p className="text-sm GTE_light text-gray-300">River Galego</p>
                <h1 className="text-lg">Phi Phi Island</h1>
              </div>
              <div className="flex gap-x-1 items-center GTE_light">
                <h1>$599</h1>
                <p className="text-gray-400 GTE_light">/</p>
                <p className="text-gray-400 text-xs GTE_light">2 Person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPackages;
