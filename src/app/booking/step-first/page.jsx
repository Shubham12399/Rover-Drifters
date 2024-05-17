"use client";
import ChooseDate from "@/components/Booking/Step1/ChooseDate";
import DateItem from "@/components/Booking/Step1/DateItem";
import SelectTravellers from "@/components/Booking/Step1/SelectTravellers";
import Modal from "@/components/Modal";
import ActionButton from "@/components/utils/ActionButton";
import useFetch from "@/customehooks/useFetch";
import { tourApi } from "@/services/apis";
import getNextSevenDays from "@/utils/booking/GetNextSevenDays";
import getWeekName from "@/utils/booking/getWeekName";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "@/styles/calender.module.css";
import Calendar from "react-calendar";

import {
  GoCalendar,
  GoChevronLeft,
  GoChevronRight,
  GoDash,
  GoPlus,
} from "react-icons/go";
import { useSelector } from "react-redux";

const Page = () => {
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const pathname = usePathname();

  const tourId = searchParams.get("tourId");
  const adults = searchParams.get("adults");
  const selectedDate = useMemo(() => searchParams.get("date"), [searchParams]);
  //   const dayStatus = searchParams.get("dayStatus");
  const selectBookingDate = useSelector((store) => store.selectBookingDate);
  const allNextWeekendDates = useMemo(() => getNextSevenDays, []);
  const [isDateModal, setIsDateModal] = useState(false);
  const [allDates, setAllDates] = useState([...allNextWeekendDates]);
  const { tourData, isLoading } = useFetch({
    queryKey: [`tour_booking_onboard_${tourId}`],
    method: "GET",
    url: tourApi.GET_TOUR_BY_ID + "/" + tourId,
    defaultRes: true,
    resName: "tour",
    varName: "tourData",
  });
  const date = useMemo(() => new Date(selectedDate), [selectedDate]);

  const isDateHere = allDates.findIndex(
    (e) =>
      new Date(JSON.parse(e?.date)).toLocaleDateString() ===
      date.toLocaleDateString()
  );
  const setParams = useCallback(
    (name, value) => {
      params.set(name, value);
      history.replaceState(null, "", `${pathname}?${params.toString()}`);
    },
    [params, pathname]
  );
  useEffect(() => {
    if (!selectedDate || !date) {
      setParams("date", new Date(Date.now()).toLocaleDateString());
      setParams("dayStatus", getWeekName(new Date(Date.now())));
    }
  }, [selectedDate, date, setParams]);
  const selectedDateObj = {
      date: JSON.stringify(date),
      day: date.getDate(),
      status: getWeekName(date),
      year: date.getFullYear(),
    };

  useEffect(() => {
    console.log(selectedDateObj?.year)
    if (isDateHere < 0 && selectedDateObj?.year > 2000) {
      setAllDates((prev) => [
        selectedDateObj,
        ...prev.filter((e) => e.date !== selectedDateObj?.date),
      ]);
    }
  }, [isDateHere, selectedDateObj]);

  const handleSelectedDate = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString().split("/")[1];
    const year = date.getFullYear();
    console.log(month);
    const weekendDay = date.getDay();

    console.log(new Date(date));
    console.log(day);

    // const arr = [
    //   ...[...selectDatesStore]
    //     .map((e) => ({ ...e, active: false }))
    //     .filter((e) => {
    //       if (!(e.day == day && e.month == month)) {
    //         //statement
    //         return e;
    //       }
    //     }),
    // ];
    // arr.splice(1, 0, {
    //   month: month,
    //   day: day,
    //   year: year,
    //   date: JSON.stringify(new Date(date)),
    //   active: true,
    // });
    // dispatch(setselectDateSlice([...arr]));
    // shiftActiveFlagToSelectedDate();
    // setSelectedDate({
    //   month: month,
    //   day: day,
    //   year: year,
    //   date: JSON.stringify(new Date(date)),
    //   active: true,
    // });
    setIsDateModal(false);

    // this code will help to full left to div
    // const allDatesContainer = document.querySelector(".all-dates-container");
    // allDatesContainer.scrollLeft = allDatesContainer.scrollWidth;
  };

  return (
    <>
      <div className="w-full max-w-maxWidthContent mx-auto py-3 pb-20">
        <div>
          <div className="flex justify-between px-4 items-center ">
            <h1>Select Date</h1>
          </div>
          {/* Dates */}
          <div className="px-4 mt-2">
            <div className="bg-white rounded-xl">
              <div className="py-3 border-b px-0 grid grid-cols-2">
                <div className="col-span-1">
                  <ChooseDate></ChooseDate>
                </div>

                <div className="col-span-1">
                  <Image
                    src={"/images/undraw_Traveling_yhxq.png"}
                    alt=""
                    className="w-full -mt-8"
                    width={100}
                    height={60}
                  />
                </div>
              </div>
              {/* <button
                to={"/all-tours"}
                className="text-xs block w-fit px-3 py-1 rounded-full border border-richblack-900 text-richblack-900 mt-2"
              >
                View Some Dates
              </button> */}
            </div>
            <div className="flex justify-between items-center mt-4 ">
              <span className="text-xs text-[#ff612c] block">
                Choose other dates
              </span>
              <div
                className="flex gap-x-2 text-sm items-center cursor-pointer"
                onClick={() => setIsDateModal(true)}
              >
                <GoCalendar className="text-[#ff612c]"></GoCalendar>
                <p className="GTE_light text-xs">More Dates</p>
              </div>
            </div>

            {/* Dates */}
            <div className="flex gap-x-2 overflow-auto mt-4 hide-scrollbar all-dates-container pl-2 pb-4 pt-2 pr-4">
              {/* All cards */}

              {allDates.map((e, i) => {
                return (
                  <DateItem
                    key={i}
                    e={e}
                    selectedDate={selectedDate}
                    setParams={setParams}
                  ></DateItem>
                );
              })}
            </div>

            <div className="pb-4 border-t mt-2">
              <span className="text-xs text-[#ff612c] block mt-3">Price</span>
              <p className="text-sm">
                {tourData?.tour?.currency?.symbol}{" "}
                {(adults ? adults : 1) * tourData?.tour?.price?.sharing_price}
              </p>
            </div>
          </div>

          {/* Quantity Selection */}
          <SelectTravellers></SelectTravellers>
        </div>

        {/* Next Button  */}
        <div className="fixed z-20 bottom-0 w-full max-w-maxWidthContent bg-white py-2 px-4 flex items-center justify-center">
          <ActionButton
            onClick={() => {
              if (usersQuantity.adults > 0) {
                dispatch(
                  setBookingData({
                    key: "selectBookingDate",
                    value: selectBookingDate,
                  })
                );
                dispatch(setBookingData({ key: "adults", value: adults }));
                dispatch(setBookingData({ key: "children", value: children }));
                handleNextProcess();
              } else {
                alert("Please Select At Least One Adult 😊");
              }
            }}
          >
            Next
          </ActionButton>
        </div>

        {/* select Date Modal */}
        {isDateModal && (
          <Modal
            title={"Select Date"}
            setModal={setIsDateModal}
            className="pb-14"
          >
            <Calendar
              className={"!border-none !select-none"}
              onChange={(value) => {
                handleSelectedDate(value);
                setParams("date", value?.toLocaleDateString());
                setParams("dayStatus", getWeekName(value));
              }}
              value={new Date(selectedDate)}
              prevLabel={
                <div className="flex items-center justify-center ">
                  <GoChevronLeft></GoChevronLeft>
                </div>
              }
              nextLabel={
                <div className="flex items-center justify-center ">
                  <GoChevronRight></GoChevronRight>
                </div>
              }
            ></Calendar>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Page;
