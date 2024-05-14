"use client";

import useFetch from "@/customehooks/useFetch";
import { setIsProfileLoading } from "@/redux/slices/tourPage/isProfileLoading";
import { setSelectedTypeInTourPage } from "@/redux/slices/tourPage/selectedType";
import { typeApi } from "@/services/apis";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const TypeProfileItem = React.lazy(() => import("./TypeProfileItem"));

const TypesProfile = () => {
  const searchParams = useSearchParams();
  const typeName = searchParams.get("type");
  const typeId = searchParams.get("type_id");
  const pathname = usePathname();
  // Getting api tour Types Data
  const { typesData = [], isLoading } = useFetch({
    queryKey: ["typesData"],
    url: typeApi.GET_ALL_TYPE,
    method: "GET",
    varName: "typesData",
    staleTime: Infinity,
  });
  const dispatch = useDispatch();

  // Heandling New Search Query (Adding Defult product query when url is empty)
  useEffect(() => {
    if (
      "URLSearchParams" in window &&
      typesData.length &&
      !typeId &&
      !typeName
    ) {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set("type", typesData[0]?.name);
      urlSearchParams.set("type_id", typesData[0]?._id);
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
  }, [typesData, searchParams, pathname, dispatch, typeId, typeName]);

  // this code block will update redux profile loading value
  useEffect(() => {
    dispatch(setIsProfileLoading(isLoading));
  }, [dispatch, isLoading]);

  // handle Tour type changes
  const handleType = useCallback(
    (type) => {
      const params = new URLSearchParams(searchParams);
      params.set("type", type.name);
      params.set("type_id", type._id);
      history.replaceState(null, "", `${pathname}?${params.toString()}`);
      dispatch(setSelectedTypeInTourPage(type));
    },
    [searchParams, pathname, dispatch]
  );

  return (
    <div className="md:ml-0 flex justify-start md:justify-center gap-x-0 md:gap-x-4 items-start mt-3 overflow-auto hide-scrollbar pl-4 sticky top-0">
      {!isLoading &&
        typesData?.map((type) => (
          <Suspense key={type._id}>
            <TypeProfileItem
              onClick={handleType}
              type={type}
              typeId={typeId}
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
  );
};

export default TypesProfile;
