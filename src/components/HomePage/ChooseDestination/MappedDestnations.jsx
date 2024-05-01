"use client";

import React, { Suspense } from "react";
const ChooseDestinationItems = React.lazy(() =>
  import("./ChooseDestinationItems")
);
import { useQuery } from "@tanstack/react-query";
import apiconnector from "@/services/apiconnector";
import { countryApi } from "@/services/apis";

const Mappedcities = () => {
  const { data: cities, isLoading } = useQuery({
    queryKey: ["destinationOfCity"],
    queryFn: async () => {
      const res = await apiconnector(
        "GET",
        countryApi.GET_CITIES_BY_COUNTRY_ID + "/" + "65e451b92b9e74dc1442089d"
      );
      return res?.data?.cities;
    },
    staleTime: Infinity,
  });
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