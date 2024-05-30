import { Button, Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { PiHeartLight } from "react-icons/pi";
const TourCard = ({
  _id,
  price,
  tour_name,
  destination,
  description,
  currency,
  images,
}) => {
  return (
    <div className="min-w-[140px] w-[140px] sm:w-[160px] md:min-w-[160px] md:w-[160px] rounded-xl overflow-hidden relative bg-white shadow-lgg">
      <div className="absolute top-2 left-3">
        <div className="bg-green-500 text-white text-[11px] rounded-full px-1 GTE_light flex gap-x-1 items-center">
          <IoPricetag></IoPricetag> Adventure
        </div>
      </div>
      <div className="w-full">
        <img
          loading="lazy"
          src={images && images[0]}
          alt="tour Img"
          className="w-full h-[130px] sm:h-[120px] object-cover rounded-xl drop-shadow-sms"
        />
      </div>
      <div className="px-3 mt-1">
        <span className="text-[11px] text-gray-800 GTE_light ">Musqat</span>
        {/* <Tooltip content={tour_name}> */}
        <h3 className="text-sm sm:text-sm font-medium line-clamp-1">
          {tour_name}
        </h3>
        {/* </Tooltip> */}

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:mt-1">
          {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}

          <div>
            <div className="flex mt-1 sm:mt-1 gap-x-1 items-center">
              <FaStar className="text-yellow-400 text-[8px]"></FaStar>
              <FaStar className="text-yellow-400 text-[8px]"></FaStar>
              <FaStar className="text-yellow-400 text-[8px]"></FaStar>
              <FaStar className="text-yellow-400 text-[8px]"></FaStar>
              <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            </div>
            <h3 className="text-[13px] font-medium text-richblack-900 mt-2">
              {currency?.symbol} {price?.sharing_price}
            </h3>
          </div>
          <div
            className="w-[22px] h-[22px] p-1 bg-white flex items-center justify-center rounded-full cursor-pointer"
            // style={{ boxShadow: "0px 0 4px rgba(0,0,0,0.1)" }}
            style={{
              boxShadow: "-2px 4px 4px rgba(255, 97, 44, 0.2)",
            }}
          >
            <PiHeartLight className="text-[#ff612c]"></PiHeartLight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
