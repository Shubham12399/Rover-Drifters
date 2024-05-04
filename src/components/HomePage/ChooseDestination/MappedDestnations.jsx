"use client";

import React, { Suspense, useCallback, useEffect, useMemo } from "react";
const ChooseDestinationItems = React.lazy(() =>
  import("./ChooseDestinationItems")
);
import { useQuery } from "@tanstack/react-query";
import apiconnector from "@/services/apiconnector";
import { countryApi } from "@/services/apis";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import findDestinationIdByName from "@/utils/findDestinationIdByName";
const Mappedcities = () => {
  const searchParams = useSearchParams();
  const countryName = searchParams.get("country");
  const allDestinations = useSelector((store) => store.allDestinations);
  const destination = findDestinationIdByName(allDestinations, countryName);
  console.log(allDestinations);
  useEffect(() => {
    if (!countryName && allDestinations) {
      if ("URLSearchParams" in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("country", allDestinations[0].name);
        window.location.search = searchParams.toString();
      }
    }
  } , [countryName ,allDestinations ]);
  // const countryId =
  const { data: cities, isLoading } = useQuery({
    queryKey: ["destinationOfCity" + destination?._id],
    queryFn: async () => {
      const res = await apiconnector(
        "GET",
        // countryApi.GET_CITIES_BY_COUNTRY_ID + "/" + (process.env.NODE_ENV == "development") ? "65dd9e31286f2da11a97da2b" : "65e451b92b9e74dc1442089d"
        countryApi.GET_CITIES_BY_COUNTRY_ID + "/" + destination?._id
      );
      return res?.data?.cities;
    },
    staleTime: Infinity,
  });
  //   if (paramsObj.current?.categoryId) {
  //     (async () => {
  //         const response = await categoryPageDetails(
  //             paramsObj.current.categoryId
  //         );
  //     })();
  // }

  return (
    <>
      {!isLoading &&
        cities?.map((destination, index) => (
          <Suspense fallback="" key={index}>
            <ChooseDestinationItems item={destination}></ChooseDestinationItems>
          </Suspense>
        ))}
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((e, i) => (
            <div
              className="min-w-[120px] w-[130px] h-[140px] sm:min-w-[160px] sm:w-[160px] sm:h-[200px] md:min-w-[230px] md:w-[230px] md:h-[280px] rounded-lg overflow-hidden relative "
              key={i}
            >
              <div className="w-full h-full bg-gray-100"></div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default Mappedcities;
