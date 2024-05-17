import months from "@/utils/months";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const ChooseDate = () => {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get("date");
  const dayStatus = searchParams.get("dayStatus");
  const date = new Date(selectedDate);
  return (
    <>
      {" "}
      <span className="text-xs text-[#ff612c] block">Choosen date</span>
      <span className="">
        {dayStatus}
        {/* //   ? date */}
        {/* //   : date.toLocaleDateString("en-US", options).trim().split(",")[0]} */}
      </span>
      <h3>
        {date?.getDate()}{" "}
        {date
          ? months[date.getMonth()]
          : null}{" "}
        ,{" "}
        {date
          ? date.getFullYear()
          : null}
      </h3>
    </>
  );
};

export default ChooseDate;
