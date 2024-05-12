"use client";

import useFetch from "@/customehooks/useFetch";
import { countryApi } from "@/services/apis";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
const ChooseDestinationItems = React.lazy(() =>
  import("./ChooseDestinationItems")
);
const Mappedcities = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const countryName = searchParams.get("country");
  const destination = { _id: searchParams.get("con_uuid") };
  const allDestinations = useSelector((store) => store.allDestinations);

  useEffect(() => {
    if (
      (!countryName &&
        !destination?._id &&
        allDestinations[0]?.name &&
        allDestinations[0]?._id) ||
      (allDestinations[0]?._id !== destination?._id &&
        !countryName &&
        !destination?._id &&
        allDestinations[0]?.name &&
        allDestinations[0]?._id)
    ) {
      console.log(allDestinations[0]?._id !== destination?._id);
      console.log("hello");
      if ("URLSearchParams" in window) {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.set("country", allDestinations[0]?.name);
        urlSearchParams.set("con_uuid", allDestinations[0]?._id);
        // window.location.search = searchParams.toString();
        history.replaceState(
          null,
          "",
          `${pathname}?${urlSearchParams.toString()}`
        );
      }
    }
  }, [countryName, allDestinations, destination?._id, searchParams, pathname]);

  const { cities, isLoading } = useFetch({
    queryKey: "destinationOfCity" + destination?._id,
    url: countryApi.GET_CITIES_BY_COUNTRY_ID + "/" + destination?._id,
    varName: "cities",
    resName: "cities",
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
