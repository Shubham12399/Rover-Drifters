"use client";

import { useSelector } from "react-redux";

const TourBanner = () => {
    const selectedType = useSelector((store) => store.selectedType);
    console.log(selectedType) 
  return (
      <img
        src={selectedType?.image}
        alt=""
        className="w-full h-[160px] md:h-[270px] object-cover object-right"
      />
  )
};

export default TourBanner