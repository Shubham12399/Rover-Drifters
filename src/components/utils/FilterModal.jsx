"use client";

import normalFilter from "@/data/NormalFilter";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useState } from "react";
const Modal = React.lazy(()=>import("../Modal"));
// import NormalFilter from "../../data/NormalFilter";

const FilterModal = ({ handleCloseModal}) => {
   // filter configurations
   const [filterValue, setFilterValue] = useState(normalFilter);
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const filterValueQuery = searchParams.get("filterValue");
  
  const handleFilter = useCallback((e,item) => {
    setFilterValue({
      [e.target.id]: e.target.checked,
      name: e.target.value,
  });
  const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.set("filterValue", item.name);
  history.replaceState(
    null,
    "",
    `${pathname}?${urlSearchParams.toString()}`
  );
  handleCloseModal();

  },[searchParams,pathname,handleCloseModal]);

  return (
    <Suspense fallback="">
      {/* Modal section  */}
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              Filter Options
            </div>
          }
          setModal={() => handleCloseModal()}
        >
          <div className="mx-auto select-none">
            <div className="flex flex-col w-full flex-wrap px-1 gap-y-1 my-2">
              {[{name:"Most Popular" },{name:"No Filter" }].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center py-1 text-richblack-700 cursor-pointer"
                  >
                    <input
                      key={index}
                      type="radio"
                      id={"checkbox_" + index}
                      name="normalfilter"
                      value={item.name}
                      onChange={(e)=>handleFilter(e,item)}
                      checked={
                        // Object?.entries(filterValue)[0][0] ==
                        // "checkbox_" + index
                        `${filterValueQuery}` === `${item.name}`
                      }
                    />
                    <label
                      htmlFor={"checkbox_" + index}
                      className="text-sm select-none GTE_light cursor-pointer pl-3 "
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
    </Suspense>
  );
};

export default FilterModal;
