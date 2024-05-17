import React from 'react'
import { GoAlert, GoCheckCircle, GoClock } from 'react-icons/go';

const Specifications = () => {
  return (
    <div className="max-w-maxWidthContent mx-auto px-4">
    <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
      <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
        <GoClock></GoClock>
      </div>
      <div className="GTE_light pl-2">
        <h4 className="text-[13px] GTE_regular text-richblue-800">
          Operating Hours
        </h4>
        <p className="text-xs text-richblack-400 GTE_light">
          Activity will start at 02:30 PM (Approx){" "}
        </p>
      </div>
    </div>
    <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
      <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
        <GoAlert></GoAlert>
      </div>
      <div className="GTE_light pl-2">
        <h4 className="text-[13px] GTE_regular text-richblue-800">
          Instant Confirmations
        </h4>
        <p className="text-xs text-richblack-400 GTE_light">
          Activity will start at 02:30 PM (Approx){" "}
        </p>
      </div>
    </div>
    <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
      <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
        <GoCheckCircle></GoCheckCircle>
      </div>
      <div className="GTE_light pl-2">
        <h4 className="text-[13px] GTE_regular text-richblue-800">
          Free Cancellation 48 hours prior{" "}
        </h4>
        <p className="text-xs text-richblack-400 GTE_light">
          Activity will start at 02:30 PM (Approx){" "}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Specifications;