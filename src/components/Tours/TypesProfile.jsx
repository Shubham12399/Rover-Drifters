"use client";

import useFetch from "@/customehooks/useFetch";
import { setIsProfileLoading } from "@/redux/slices/tourPage/isProfileLoading";
import { setSelectedTypeInTourPage } from "@/redux/slices/tourPage/selectedType";
import { countryApi, typeApi } from "@/services/apis";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const TypeProfileItem = React.lazy(() => import("./TypeProfileItem"));

const TypesProfile = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const typeName = searchParams.get("type");
  const typeId = searchParams.get("type_id");
  const countryId = searchParams.get("con_id");
  // Getting api tour Types Data
  const { typesData = [], isLoading } = useFetch({
    queryKey: ["typesData"],
    url: typeApi.GET_ALL_TYPE,
    method: "GET",
    varName: "typesData",
    staleTime: Infinity,
  });
  const { countryData = [], isLoading: isCountryLoading } = useFetch({
    queryKey: ["countryApiData"],
    url: countryApi.GET_ALL_COUNTRIES,
    method: "GET",
    varName: "countryData",
  });
  const dispatch = useDispatch();

  // console.log(countryData)s
  // Heandling New Search Query (Adding Defult product query when url is empty)
  useEffect(() => {
    if (
      "URLSearchParams" in window &&
      typesData.length &&
      !typeId &&
      !typeName &&
      !countryId
    ) {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set("type", typesData[0]?.name);
      urlSearchParams.set("type_id", typesData[0]?._id);
      urlSearchParams.set("con_id", countryData[0]?._id);
      dispatch(setSelectedTypeInTourPage(typesData[0]));
      // window.location.search = searchParams.toString();
      history.replaceState(
        null,
        "",
        `${pathname}?${urlSearchParams.toString()}`
      );
    }
    if (typeId && typeName) {
      const [filteredType] = typesData?.filter((e) => e._id === typeId);
      dispatch(setSelectedTypeInTourPage(filteredType));
    }
  }, [
    typesData,
    searchParams,
    pathname,
    countryData,
    typeId,
    typeName,
    countryId,
    dispatch
  ]);

  // this code block will update redux profile loading value
  useEffect(() => {
    dispatch(setIsProfileLoading(isLoading));
  }, [dispatch, isLoading]);

  // handle Tour type changes
  const handleSelectItem = useCallback(
    (item) => {
    
      const params = new URLSearchParams(searchParams);
      if (item.type == "typeItem") {
        params.set("type", item.name);
        params.set("type_id", item._id);
        console.log(item)
      }
      if (item.type == "countryItem") {
        params.set("con_id", item._id);
      }
      history.replaceState(null, "", `${pathname}?${params.toString()}`);
      // dispatch(setSelectedTypeInTourPage(type));
    },
    [searchParams, pathname]
  );

  return (
    <div className="sticky bg-white top-20">
      <div className="md:ml-0 flex justify-start md:justify-center gap-x-0 md:gap-x-4 items-start mt-3 overflow-auto hide-scrollbar pl-4 ">
        {!isLoading &&
          typesData?.map((type) => (
            <Suspense key={type._id}>
              <TypeProfileItem
                onClick={() => handleSelectItem({...type ,type:"typeItem"})}
                item={type}
                itemId={typeId}
              ></TypeProfileItem>
            </Suspense>
          ))}

        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              className="min-w-[65px] mr-3 h-[65px] md:min-w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover bg-[var(--sklClr)] "
              key={i}
            ></div>
          ))}
      </div>
      <div className="md:ml-0 flex justify-start md:justify-center gap-x-0 md:gap-x-4 items-start mt-3 overflow-auto hide-scrollbar pl-4 ">
        {!isCountryLoading &&
          countryData?.map((country) => (
            <Suspense key={country._id}>
              <TypeProfileItem
                onClick={() => handleSelectItem({...country ,type:"countryItem"})}
                item={country}
                itemId={countryId}
              ></TypeProfileItem>
            </Suspense>
          ))}

        {isCountryLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              className="min-w-[65px] mr-3 h-[65px] md:min-w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover bg-[var(--sklClr)] "
              key={i}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default TypesProfile;
