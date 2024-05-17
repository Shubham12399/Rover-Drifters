import { Button, Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const TourCard = ({_id,price,tour_name,destination,description,currency ,images}) => {
  return (
    <div className="min-w-[150px] w-[130px] sm:w-[160px] md:min-w-[170px] md:w-[170px] rounded-xl overflow-hidden relative bg-white shadow-lg">
      <div className="w-full">
        <img
          loading="lazy"
          src={images && images[0]}
          alt="tour Img"
          className="w-full h-[110px] sm:h-[110px] object-cover drop-shadow-sm"
        />
      </div>
      <div className="px-4 sm:px-4 my-2 mb-3 sm:my-4 ">
        <Tooltip content={tour_name}>
        <h3 className="text-[12px] sm:text-sm font-medium line-clamp-1">
        {tour_name}
        </h3>
        </Tooltip>
        <h3 className="text-xs font-medium text-richblack-900 mt-1">
          {currency?.symbol} {" "} {price?.sharing_price}
        </h3>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap mt-0 sm:mt-1">
          {/* <p className="text-[8px] text-richblack-200 flex items-center mt-1">277 Reviews</p> */}
          <div className="flex mt-1 sm:mt-0 gap-x-1 items-center">
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
            <FaStar className="text-yellow-400 text-[8px]"></FaStar>
          </div>
        </div>
        <div className="flex !items-strech gap-1 mt-3">
        <Link href={`/tour/${_id}`} legacyBehavior={true}>
           <a> <Button
              size="sm"
              variant="outlined"
              className="normal-case py-[.4rem] rounded-md w-[70px] px-2 text-[10px] sm:text-[10px] hover:bg-[#ff621c] hover:text-white text-[#ff612c] border-[#ff612c] font-normal"
            >
              Book Now
            </Button>
            </a>
          </Link>

         <button className="bg-none relative z-20 px-1 pl-2 ml-3 border-none before:w-full before:h-full before:bg-none before:hover:bg-richblack-25 before:absolute before:top-0 before:left-[1px] before:py-2 before:rounded-full before:z-0" >
            <MdOutlineAddShoppingCart className="text-lg relative z-30 text-richblack-500"></MdOutlineAddShoppingCart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
