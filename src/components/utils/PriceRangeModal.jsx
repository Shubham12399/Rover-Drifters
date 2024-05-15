"use client";
import "@/styles/pricerange.css";
import "react-range-slider-input/dist/style.css";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useState } from "react";
import { GoCheck } from "react-icons/go";
const RangeSlider = React.lazy(() => import("react-range-slider-input"));
const Modal = React.lazy(() => import("../Modal"));
const ActionButton = React.lazy(() => import("./ActionButton"));

const PriceRangeModal = ({ handleCloseModal }) => {
  const searchParams = useSearchParams();
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const pathname = usePathname();
  const [priceRange, setPriceRange] = useState([min, max]);

  const handlePriceRange = useCallback((rangeValue) => {
    setPriceRange(rangeValue);
  }, []);

  const handleSelectPriceRange = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("min", priceRange[0]);
    params.set("max", priceRange[1]);
    // delete modal
    // params.delete("modalType");
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
    handleCloseModal();
    console.log(priceRange);

  }, [searchParams, pathname, priceRange,handleCloseModal]);

  // useEffect(() => {
  //   setPriceRange([min, max]);
  // }, [min,max]);

  return (
    <Suspense fallback="">
      <Modal title={"Price Range"} setModal={handleCloseModal}>
        <div className="max-w-[300px] mt-5 mx-auto">
          <div className="flex justify-between">
            <div>
              <span className="text-sm ">Min: {priceRange[0]}</span>
            </div>
            <div>
              <span className="text-sm ">Max: {priceRange[1]}</span>
            </div>
          </div>
          <Suspense fallback="">
            <RangeSlider
              min={300}
              max={800}
              value={priceRange}
              className={"bg-[rgba(0,0,0,0.05)] !h-[6px] mt-3"}
              onInput={handlePriceRange}
              step={10}
            />
          </Suspense>
        </div>

        <div className="flex justify-end mt-2">
          <Suspense fallback="">
            <ActionButton
              className={"w-fit py-1 px-2 rounded-md GTE_light"}
              onClick={handleSelectPriceRange}
            >
              <Suspense fallback=""><GoCheck></GoCheck></Suspense>
              Select
            </ActionButton>
          </Suspense>
        </div>
      </Modal>
    </Suspense>
  );
};

export default PriceRangeModal;
