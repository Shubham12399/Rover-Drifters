import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
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
    <div className="min-w-[156px] w-[156px] sm:w-[160px] md:min-w-[160px] md:w-[160px] overflow-hidden relative bg-white rounded-2xl borer shadow-lgg p-2 pb-3"  style={{ boxShadow: "var(--cardShadow)" }}>
      
      <div className='flex flex-wrap mt-2 absolute top-3 left-4 z-20'>
              <span className='text-xs bg-white rounded-xl px-1'>Adventure</span>
            </div>
      <div className="w-full relative trend_posts_shadowo">
        <img  
          loading="lazy"
          src={images && images[0]}
          alt="tour Img"
          className="w-full h-[120px] sm:h-[110px] object-cover drop-shadow-sms rounded-xl"
        /> 
      </div>
      <div className="px-2 mt-1">
        <span className="GTE_light text-[11px]">London • Moscow</span>
      </div>
      <div className="px-2 ">
        {/* <Tooltip content={tour_name}> */}
          <h3 className="text-sm sm:text-sm font-medium line-clamp-1">
            {tour_name}
          </h3>
        {/* </Tooltip> */}
       
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:mt-1">
          {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
          <div>


          <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
          </div>

          <h3 className="text-[13px] font-medium text-richblack-900 mt-1">
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
        <div className="flex justify-between !items-strech gap-1 ">
          {/* <Link href={`/tour/${_id}`}>
            <Button
              size="sm"
              variant="outlined"
              className="normal-case py-[.3rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
            >
              Book Now
            </Button>
          </Link> */}

          {/* <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0">
            <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
          </button> */}
           {/* <div
            className="w-[22px] h-[22px] p-1 bg-white flex items-center justify-center rounded-full cursor-pointer"
            // style={{ boxShadow: "0px 0 4px rgba(0,0,0,0.1)" }}
            style={{
              boxShadow: "-2px 4px 4px rgba(255, 97, 44, 0.2)",
            }}
          >
            <PiHeartLight className="text-[#ff612c]"></PiHeartLight>
          </div> */}
        </div>
      
      </div>
      
    </div>
  );
};

export default TourCard;
