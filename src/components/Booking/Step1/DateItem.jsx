import months from "@/utils/months";
import React from "react";

const DateItem = ({ e, setParams, selectedDate }) => {
  const isMatchDate =
    new Date(JSON.parse(e?.date)).toLocaleDateString() ===
    new Date(selectedDate).toLocaleDateString();
  // console.log(new Date(JSON.parse(e?.date)).toLocaleDateString() ,new Date(selectedDate).toLocaleDateString())

  return (
    <div
      className={`min-w-[80px] flex flex-col justify-center text-richblack-200 text-xs border bg-white shadow-lg rounded-lg border-richblack-25 cursor-pointer ${
        isMatchDate && " outline !outline-[#ff612c] !"
      }   `}
      onClick={() => {
        setParams("date", new Date(JSON.parse(e?.date)).toLocaleDateString());
        setParams("dayStatus", e?.status);
      }}
    >
      <div className="py-3 flex flex-col">
        <h1 className="px-3 GTE_light ">
          <p className="text-xs GTE_light border-b pb-1">
            {e?.status
              ? e.status
              : new Date(JSON.parse(e?.date))
                  .toLocaleDateString("en-US", options)
                  .trim()
                  .split(",")[0]}
          </p>
          <p className="text-[13px] GTE_light mt-1 text-richblack-900">
            {" "}
            {e?.day} <br /> {months[new Date(JSON.parse(e?.date)).getMonth()]}
          </p>
          {/* <p className="text-xs GTE_light">
            {bookingData?.currency == "doller" ? "AED " : "RS "}{" "}
          {adults * bookingData?.price}
            </p> */}
        </h1>
      </div>

      {/* <span className="GTE_light text-xs">Starting</span> */}
    </div>
  );
};

export default DateItem;
