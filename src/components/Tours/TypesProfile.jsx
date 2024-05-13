"use client";

import useFetch from "@/customehooks/useFetch";
import { setSelectedTypeInTourPage } from "@/redux/slices/tourPage/selectedType";
import { typeApi } from "@/services/apis";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const TypesProfile = () => {
  const searchParams = useSearchParams();
  const typeName = searchParams.get("type");
  const typeId = searchParams.get("type_id");
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { typesData = [], isLoading } = useFetch({
    queryKey: ["typesData"],
    url: typeApi.GET_ALL_TYPE,
    method: "GET",
    varName: "typesData",
    staleTime: Infinity,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if ("URLSearchParams" in window && typesData.length && !typeId && !typeName) {
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
    if(typeId && typeName){
        const [filteredType] = typesData?.filter(e=>e._id === typeId)
        dispatch(setSelectedTypeInTourPage(filteredType));
    }
  }, [typesData, searchParams, pathname,dispatch,typeId,typeName]);
  //   useEffect()
  //   // handle Tour type changes
  const handleType = (type) => {
    params.set("type", type.name);
    params.set("type_id", type._id);
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
    dispatch(setSelectedTypeInTourPage(type));
  };

  return (
    <div className="md:ml-0 flex justify-start md:justify-center gap-x-0 md:gap-x-4 items-start mt-3 overflow-auto hide-scrollbar pl-4">
      {typesData?.map((type, index) => {
        // console.log(type);
        return (
          <div
            key={index}
            onClick={() => handleType(type)}
            className="cursor-pointer min-w-[70px] group"
          >
            <img
              src={type?.image}
              className={`w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full p-[1px] border-2 border-transparent object-cover group-hover:border-[#ff621c]
              ${type?._id == typeId && " !border-[#ff621c] "}
             `}
            />
            <p className="text-xs md:text-sm text-center mt-1">{type.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TypesProfile;
