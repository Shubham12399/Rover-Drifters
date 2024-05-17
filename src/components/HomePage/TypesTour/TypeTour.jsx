"use client";

import useFetch from "@/customehooks/useFetch";
import TourCard from "./TourCard";
import { typeApi } from "@/services/apis";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostsSkl from "@/components/skelton/PostSkl";
import { useDispatch } from "react-redux";
import { setAllTypes } from "@/redux/slices/allTypes";

const TypeTour = ({ _id, title }) => {
  const searchParams = useSearchParams();
  const countryId = searchParams.get("con_uuid");
  const { homeTypeData, isLoading } = useFetch({
    queryKey: ["homeTypesData" + _id + countryId],
    url: typeApi.GET_TYPE_BY_ID + "/" + _id + `?countryId=${countryId}`,
    method: "GET",
    varName: "homeTypeData",
    defaultRes: true,
  });
 
  return (
    <>
      {homeTypeData?.tourType?.tours.length !== 0 && (
        <div className="md:mt-2 w-full max-w-[970px] md:mb-0 mx-auto md:px-6">
          <h1 className="text-lg md:text-2xl font-medium md:top-0 flex justify-between items-baseline pl-3">
            {title}
            <button className="min-w-fit normal-case hover:bg-[#ff621c] hover:text-white text-[#ff621c] text-[10px] rounded-full font-medium md:px-4 drop-shadow-[0_0_4px_#ff641c6a] px-2">
              See All
            </button>
          </h1>
          <p className="text-xs md:text-sm mt-1 text-richblack-500 hidden md:block pl-3">
            Experience the thrill of discovering off-the-beaten-path gems and
            famous landmarks in top destinations worldwide - your wanderlust
            awaits!
          </p>
          <div className="flex gap-x-2 md:gap-x-4 md:mt-4 pb-6 overflow-visible overflow-x-auto hide-scrollbar md:pb-6 pr-3 mt-4 pl-4 snap-x snap-proximity"> 
            {!isLoading && homeTypeData?.tourType?.tours?.map((e) => (
              <TourCard {...e} key={e._id}></TourCard>
            ))}</div>
          <div>
            {isLoading && <PostsSkl></PostsSkl>}
          </div>
        </div>
      ) }
    </>
  );
};

export default TypeTour;
