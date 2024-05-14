"use client";

import { useSelector } from "react-redux";
import BannerSkl from "../skelton/BannerSkl";

const TourBanner = () => {
    const selectedType = useSelector((store) => store.selectedType);
    const isProfileLoading = useSelector(store => store.isProfileLoading);
    console.log(selectedType) 
  return (
      <>
      {
        !isProfileLoading && <img
        src={selectedType?.image}
        alt=""
        className="w-full h-[160px] md:h-[270px] object-cover object-right"
      />
      }
      {
        isProfileLoading && <BannerSkl h={"w-full h-[160px] md:h-[270px]"}></BannerSkl>
      }
      </>
  )
};

export default TourBanner