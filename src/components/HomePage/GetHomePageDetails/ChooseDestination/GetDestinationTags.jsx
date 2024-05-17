"use client";

import useFetch from "@/customehooks/useFetch";
import { setDestinations } from "@/redux/slices/allCountries";
import { countryApi } from "@/services/apis";
import findDestinationIdByName from "@/utils/findDestinationIdByName";
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const TagSkeleton = dynamic(() => import("./TagSkeleton"));
const GetDestinationTags = () => {
  const dispatch = useDispatch();
  // const { data: destinationsApi, isLoading } = useQuery({
  //   queryKey: ["allDestinations"],
  //   queryFn: async () => {
  //     const res = await apiconnector("GET", countryApi.GET_ALL_COUNTRIES);
  //     return res?.data?.data;
  //   },
  //   staleTime: Infinity,
  // });
  const { destinationsApi, isLoading } = useFetch({
    queryKey: "allDestinations",
    url: countryApi.GET_ALL_COUNTRIES,
    varName: "destinationsApi"
  });

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const countryName = searchParams.get("country");
  const selectedId = findDestinationIdByName(destinationsApi, countryName);

  useEffect(() => {
    if (destinationsApi) {
      dispatch(setDestinations(destinationsApi));
    }
  }, [destinationsApi, dispatch]);

  return (
    <>
      <div className="flex items-start overflow-auto gap-2 py-2 hide-scrollbar font-normal GTE_light pr-3">
        {!isLoading &&
          destinationsApi?.map((destination, index) => {
            return (
              <div
                // href={`?country=${destination.name}`}
                onClick={() => {
                  params.set("country", destination.name);
                  params.set("con_uuid", destination._id);
                  history.replaceState(
                    null,
                    "",
                    `${pathname}?${params.toString()}`
                  );
                }}
                // href={{ pathname: "/", query: { country: destination.name } }}
                // scroll={false}
                // shallow={true}
                className={`min-w-fit w-fit px-3 py-2 text-[12px] md:text-sm hover:text-white hover:bg-[#ff621c] text-black rounded-full cursor-pointer transition-all border flex items-center gap-x-1 ${destination._id == selectedId?._id &&
                  "text-white bg-[#ff621c] "
                  }`}
                key={index}
              >
                <img
                  //   src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
                  src={destination?.image}
                  className="rounded-full w-[20px] h-[20px] border"
                  alt=""
                  loading="lazy"
                />
                <span className="font-normal">{destination?.name}</span>
              </div>
            );
          })}
        {isLoading &&
          Array.from({ length: 8 }).map((e, i) => (
            <TagSkeleton key={i}></TagSkeleton>
          ))}
      </div>
    </>
  );
};

export default GetDestinationTags;
