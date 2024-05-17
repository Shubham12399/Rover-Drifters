"use client";

import React, { Suspense, useCallback, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { useSelector } from "react-redux";
const SelectModal = React.lazy(() => import("../SelectModal"));

const HomePageSelection = () => {
  const [destinationValue, setDestinationValue] = useState({});
  const [tourType, setTourType] = useState({});
  const [selectionType, setSelectionType] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const handleSelectionType = useCallback(
    (typeString, setStateFun, stateValue) => {
      setSelectionType([typeString, setStateFun, stateValue]);
      setIsModal(true);
    },
    []
  );

  // before:bg-white before:h-[17px] before:absolute before:top-0 before:right-0 before:z-[999] before:blur-sm
  return (
    <>
      <div className="relative z-40 pb-2 pt-6 md:py-6 mb-4 px-2 pl-4 md:pl-2 md:max-w-maxContent mx-1 md:m-0 md:pb-9 sm:!mx-auto md:rounded-none md:shadow-none border-[#ff621c] md:border-none rounded-xl md:bg-transparent before:block before:w-full ">
        <div className="sm:w-full md:w-fit mx-auto lg:mt-10 grid grid-cols-[40%_30%_30%] md:grid-cols-[repeat(1,_minmax(0,_1fr))_130px_130px] md:border border-[#08aca0] md:px-6 md:rounded-full md:py-7 md:!pr-0 gap-y-2 md:gap-x-0 md:!gap-0 ">
          <div className="flex sm:pl-2 md:border-r border-[#08aca0] mr-1">
            <div className="w-full md:w-full md:bg-transparent md:shadow-none">
              <h3 className="text-base md:text-sm font-medium text-[#2e3844] flex gap-x-2 items-center  after:w-[34%] ">
                Destination
              </h3>
              <span
                className="text-xs text-richblack-200 select-none cursor-pointer GTE_light flex justify-between pr-1 mt-1 items-center w-full max-w-[110px] md:max-w-full md:pr-6"
                onClick={() => {
                  handleSelectionType(
                    "tourDestination",
                    setDestinationValue,
                    destinationValue
                  );
                }}
              >
                {destinationValue?.name ? (
                  <span className="text-richblack-900">
                    {" "}
                    {destinationValue?.name}{" "}
                  </span>
                ) : (
                  <>Search Location</>
                )}{" "}
                <GoChevronRight className="rotate-90 ml-0 md:ml-8"></GoChevronRight>
              </span>
            </div>
          </div>
          <div className="flex md:pl-7 md:border-r md:border-[#08aca0]  pl-1">
            <div className="w-full rounded-lg bg-white md:pl-0 md:bg-transparent md:shadow-none ">
              <h3 className="text-base md:text-sm font-medium text-[#2e3844] flex gap-x-2 items-center after:w-[50%]  ">
                Type
              </h3>
              <span
                className="text-xs text-richblack-200 select-none cursor-pointer GTE_light flex justify-between pr-1 mt-1 w-full items-center max-w-[80px]"
                onClick={() => {
                  handleSelectionType("tourType", setTourType, tourType);
                }}
              >
                {tourType?.name ? (
                  <span className="text-richblack-900"> {tourType?.name} </span>
                ) : (
                  <>Tour Type</>
                )}{" "}
                <GoChevronRight className="rotate-90"></GoChevronRight>
              </span>
            </div>
          </div>

          <div className="flex md:ml-4 w-full md:col-span-1 md:px-0 items-center ml-1">
            <button
              className="normal-case w-[80px] bg-[#ff621c] text-white text-xs rounded-full md:rounded-full font-medium !px-0 md:px-4 drop-shadow-[0_0_8px_#ff641c6a] py-2"
              onClick={() => {
                if (!destinationValue?.name || !tourType?.name) return;
                navigate(
                  `/searched?destination=${destinationValue?.name}&tourType=${tourType?.name}`
                );
              }}
            >
              Find Trip
            </button>
          </div>
        </div>
      </div>

      <Suspense fallback={""}>
        <SelectModal
          isSelectModal={isModal}
          setIsSelectModal={setIsModal}
          setSelectValue={selectionType[1]}
          selectValue={selectionType[2]}
          type={selectionType[0]}
        ></SelectModal>
      </Suspense>
    </>
  );
};

export default HomePageSelection;
