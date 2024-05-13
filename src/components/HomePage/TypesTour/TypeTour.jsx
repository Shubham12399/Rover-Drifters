"use client";

import useFetch from "@/customehooks/useFetch";
import TourCard from "./TourCard";
import { typeApi } from "@/services/apis";

const TypeTour = ({ _id, title,tours }) => {
  // const { typeData, isLoading } = useFetch({
  //   queryKey: ["typeData" + _id],
  //   url: typeApi.GET_TYPE_BY_ID + "/"+_id,
  //   method: "GET",
  //   varName: "typeData",
  // });

  // console.log(typeData);

  return (
    <div className="md:mt-12 max-w-[970px] mb-4 md:mb-0 mx-auto pl-3 md:px-6">
      <h1 className="text-lg md:text-2xl font-medium md:top-0 flex justify-between items-baseline pr-2">
        {title}
        <button className="min-w-fit normal-case hover:bg-[#ff621c] hover:text-white text-[#ff621c] text-[10px] rounded-full font-medium md:px-4 drop-shadow-[0_0_4px_#ff641c6a] px-2">
          See All
        </button>
      </h1>
      <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block ">
        Experience the thrill of discovering off-the-beaten-path gems and famous
        landmarks in top destinations worldwide - your wanderlust awaits!
      </p>
      <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar md:pb-6 pr-3">
        {
          tours?.map((e) => (
            <TourCard
              {...e}
              key={e._id}
            ></TourCard>
          ))}
      </div>
    </div>
  );
};

export default TypeTour;
