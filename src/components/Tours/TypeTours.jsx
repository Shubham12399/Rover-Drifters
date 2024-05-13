import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TourCard from "../HomePage/TypesTour/TourCard";
import useFetch from "@/customehooks/useFetch";
import { typeApi } from "@/services/apis";

const TypeTours = () => {
  const selectedType = useSelector((store) => store.selectedType);
  const [tours, setTours] = useState([]);
  console.log(selectedType.tours);
  const { typeIdTours, isLoading } = useFetch({
    queryKey: ["typeIdTours" + selectedType?._id],
    method: "GET",
    url: selectedType?._id && typeApi.GET_TYPE_BY_ID + "/" + selectedType?._id,
    varName: "typeIdTours",
    resName: "tourType",
  });

  console.log(typeIdTours)
  useEffect(() => {
    if (typeIdTours) {
      setTours(typeIdTours.tours);
    }
  }, [typeIdTours]);
  return (
    <div className="mt-3 flex gap-x-2 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6 pr-3">
      {tours?.map((e) => (
        <TourCard key={e._id} {...e}></TourCard>
      ))}
    </div>
  );
};

export default TypeTours;
