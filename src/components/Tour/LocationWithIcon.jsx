import React from "react";
import { GoLocation, GoTag } from "react-icons/go";

const LocationWithIcon = ({tour}) => {
  return (
     <div className="flex gap-x-2 items-center my-2">
       {/* <span className="text-[13px] text-richblack-400 !GTE_light mr-4 py-1 rounded-md">
 <span className="GTE_light text-richblack-600">Type - </span>{" "}
 Adventure
 </span>
 <span className="text-[13px] text-richblack-400 !GTE_light py-1 rounded-md">
 <span className="GTE_light text-richblack-600">
 Destination -{" "}
 </span>{" "}
 Dubai
 </span> */}
       <span className="text-sm text-richblue-600 py-1 flex gap-x-2 items-center">
         <GoLocation></GoLocation>
         {tour?.city?.name} , {tour?.destination?.name}
       </span>
       <span className="text-sm text-richblue-600 py-1 flex gap-x-2 items-center">
         <GoTag></GoTag>
         {tour?.tour_type?.name}
       </span>
     </div>
  );
};

export default LocationWithIcon;
