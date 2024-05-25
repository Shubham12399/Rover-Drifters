import React from "react";
import { GoSearch } from "react-icons/go";

const WhereTo = ({ className }) => {
  return (
    <div className={`w-full max-w-maxContent mx-auto py-2 px-4 ${className} `}>
      <div className="w-full rounded-full bg-white border border-gray-300 flex drop-shadow-md">
        <div className="py-2 pl-4 pr-3 flex items-center">
          <GoSearch className="text-lg"></GoSearch>
        </div>
        <div className="py-2">
          <h2 className="text-base font-medium">Going where?</h2>
          <p className="text-xs text-gray-500 font-normal flex items-center  gap-x-1">
            <span>Destination</span> • <span>Type</span> • <span>Lessgo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhereTo;
