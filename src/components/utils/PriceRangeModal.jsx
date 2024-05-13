"use client"
import { useRef } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "@/styles/pricerange.css"
import Modal from "../Modal";
const PriceRangeModal = ({
  value,
  setValue,
  setIsPriceRangeModal,
  children,
}) => {
  const hasRender = useRef(false);
  const handlePriceRange = (rangeValue) => {
    setValue ? setValue(rangeValue) : null;
    hasRender.current = true;
    // setValue(rangeValue);
  };

  return (
    <div>
      <Modal title={"Price Range"} setModal={setIsPriceRangeModal}>
        <div className="max-w-[300px] mt-5 mx-auto">
          <div className="flex justify-between">
            <div>
              <span className="text-sm ">Min: {value[0]}</span>
            </div>
            <div>
              <span className="text-sm ">Max: {value[1]}</span>
            </div>
          </div>

          <RangeSlider
            min={300}
            max={1000}
            value={value}
            className={"bg-[rgba(0,0,0,0.05)] !h-[6px] mt-3"}
            onInput={handlePriceRange}
            step={10}
          />
        </div>

        {children}
      </Modal>
    </div>
  );
};

export default PriceRangeModal;
