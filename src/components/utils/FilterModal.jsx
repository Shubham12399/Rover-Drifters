"use client";

import React, { Suspense, useCallback, useState } from "react";
const Modal = React.lazy(()=>import("../Modal"));
// import NormalFilter from "../../data/NormalFilter";

const FilterModal = ({ handleCloseModal}) => {
   // filter configurations
   const [filterValue, setFilterValue] = useState({
     checkbox_0: true,
     name: "No Filter",
   });

  const handleFilter = useCallback((e) => {
    setFilterValue({
      [e.target.id]: e.target.checked,
      name: e.target.value,
  });
  },[]);

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
              {[{name:"Most Popular"}].map((item, index) => {
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
                      onChange={handleFilter}
                      checked={
                        Object?.entries(filterValue)[0][0] ==
                        "checkbox_" + index
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
