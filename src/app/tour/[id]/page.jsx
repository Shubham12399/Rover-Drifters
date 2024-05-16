"use client";

import CollapseComp from "@/components/Collapse";
import useFetch from "@/customehooks/useFetch";
import { tourApi } from "@/services/apis";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import {
  GoAlert,
  GoArrowLeft,
  GoCheck,
  GoCheckCircle,
  GoClock,
  GoLocation,
  GoTag,
} from "react-icons/go";

export default function Page() {
  const params = useParams();
  const { tourData, data, isLoading } = useFetch({
    queryKey: [`tour_${params?.id}`],
    method: "GET",
    url: tourApi.GET_TOUR_BY_ID + "/" + params?.id,
    defaultRes: true,
    resName: "tour",
    varName: "tourData",
  });

  const getMeridianTime = (time) => {
    const result = {};
    // get Day
    let day = 0;
    if (time.split(":")[0] > 12) {
      result.meridian = "PM";
      day = time.split(":")[0] - 12;
    } else {
      result.meridian = "AM";
      day = time.split(":")[0];
    }
    result.time = `${day}:${time.split(":")[1]}`;
    return result;
  };
  // price: { sharing_price: 22, private_price: 33 },
  //   _id: '66029532042b9820b02a4fd9',
  //   tour_name: 'Delhi Tour',
  //   destination: {
  // currency: { name: 'Rupees', symbol: 'Rs' },
  // _id: '65e451b92b9e74dc1442089d',
  // name: 'India',
  // cities: Array(6) [
  //   {
  //     _id: '65e492b97b20604df5c73943',
  //     name: 'Mumbai',
  //   city: {
  //     _id: '65e55df4b1c82a504edabf38',
  //     name: 'Delhi',
  //     tours: [ '66029532042b9820b02a4fd9', '6602dd5b267bca393aa231d6' ],
  //     country:
  //     description: 'decription ',
  //   duration_hours: 20,
  //   itenries: [
  //       itenrary_name: 'Uriah Hess',
  //       itenery_from_time: '04:58',
  //       itenery_to_time: '04:43',
  //       _id:
  //       inclusions: [ 'Nulla duis quia quid,inclusion 2' ],
  //       currency: { name: 'Rupees', symbol: 'Rs' },
  //       languages: [ 'english,hindi' ],
  //       tour_type: {

  //           _id: '65e573e3d1308221715b9ff5',
  //           name: 'Adventure',
  //           images: [

  //             'https://res.cloudinary.com/dky0bhd07/image/upload/v1711187913/roverDrifters/yi3tyxq81uvlgya2jccr.png',
  //             'https://res.cloudinary.com/dky0bhd07/image/upload/v1709803139/roverDrifters/mfrkuoftolfefzogznry.jpg'
  //         ],

  console.log(tourData);
  return (
    <div className="max-h-auto min-h-fit">
      <div className="relative h-[170px] w-full md:h-[60vh] select-none">
        <img
          loading="lazy"
          src={tourData?.tour?.images[0]}
          alt="travel 1920x450 banner.png"
          className="w-full h-full object-cover object-cover"
        />
        <div
          className="absolute top-2 left-2 text-xl w-fit cursor-pointer p-2 bg-[#ff612c] rounded-md text-white GTE_light"
          onClick={() => window.history.back()}
        >
          <GoArrowLeft></GoArrowLeft>
        </div>
        <div className="w-full px-8 relative -mt-4">
          <button className="flex-grow w-full normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light">
            Book Now
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-maxWidthContent mx-auto px-4 my-4 pt-4">
        <div>
          <h1 className="GTE_medium text-lg md:text-xl max-w-[80%] sm:max-w-[300px] md:max-w-[600px] text-richblue-700">
            {tourData?.tour?.tour_name}
          </h1>
        </div>
        <div className="mt-3">
          <h3>
            {tourData?.tour?.currency?.symbol}{" "}
            {tourData?.tour?.price?.sharing_price}
          </h3>

          <div className="flex justify-between items-center  mb-4">
            {/* Stars */}
            <div className="flex sm:mt-0 gap-x-1 items-center ">
              <FaStar className="text-yellow-400 text-[14px]"></FaStar>
              <FaStar className="text-yellow-400 text-[14px]"></FaStar>
              <FaStar className="text-yellow-400 text-[14px]"></FaStar>
              <FaStar className="text-yellow-400 text-[14px]"></FaStar>
              <FaStar className="text-yellow-400 text-[14px]"></FaStar>
            </div>
            {/* Type and Destintion  */}
            <div className="flex gap-x-1 items-center">
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
              <span className="text-sm text-richblue-600 px-2 py-1 flex gap-x-2 items-center">
                <GoLocation></GoLocation>
                {tourData?.tour?.city?.name} ,{" "}
                {tourData?.tour?.destination?.name}
              </span>
              <span className="text-sm text-richblue-600 px-2 py-1 flex gap-x-2 items-center">
                <GoTag></GoTag>
                {tourData?.tour?.tour_type?.name}
              </span>
            </div>
          </div>

          {tourData?.tour?.visitors && (
            <div>
              <p>Visitors</p>
              <div className="mt-2 flex gap-x-0 ">
                {/* <img
            loading="lazy"
            src={img2}
            alt=""
            className="w-[50px] relative z-[4] rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
                {/* <img
            loading="lazy"
            src={img1}
            alt=""
            className="w-[50px] relative  z-[3] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          />
          <img
            loading="lazy"
            src={img3}
            alt=""
            className="w-[50px] relative z-[2]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
                {/* <img
            loading="lazy"
            src={img4}
            alt=""
            className="w-[50px] relative z-[1] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          />
          <img
            loading="lazy"
            src={img}
            alt=""
            className="w-[50px] relative z-[0]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
              </div>
            </div>
          )}
        </div>

        <div className="">
          <p>Description</p>
          <p className="GTE_light text-sm pr-4 mt-2 text-richblue-800">
            {tourData?.tour?.description}
          </p>
        </div>
      </div>

      {/* Lists  */}
      <div className="max-w-maxWidthContent mx-auto px-4">
        <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
          <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
            <GoClock></GoClock>
          </div>
          <div className="GTE_light pl-2">
            <h4 className="text-[13px] GTE_regular text-richblue-800">
              Operating Hours
            </h4>
            <p className="text-xs text-richblack-400 GTE_light">
              Activity will start at 02:30 PM (Approx){" "}
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
          <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
            <GoAlert></GoAlert>
          </div>
          <div className="GTE_light pl-2">
            <h4 className="text-[13px] GTE_regular text-richblue-800">
              Instant Confirmations
            </h4>
            <p className="text-xs text-richblack-400 GTE_light">
              Activity will start at 02:30 PM (Approx){" "}
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-lg py-2 pr-3 border-[#ff641c84]">
          <div className="text-richblack-900 p-3 rounded-xl bg-white flex justify-center items-center shadow-md mr-2">
            <GoCheckCircle></GoCheckCircle>
          </div>
          <div className="GTE_light pl-2">
            <h4 className="text-[13px] GTE_regular text-richblue-800">
              Free Cancellation 48 hours prior{" "}
            </h4>
            <p className="text-xs text-richblack-400 GTE_light">
              Activity will start at 02:30 PM (Approx){" "}
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Section */}
      <div className="max-w-maxWidthContent bg-white mx-auto mt-6 flex flex-col mb-28 ">
        <CollapseComp isCollapsed={true} title="Overview" className={"px-4"}>
          <div className="pt-2 pb-3">
            <h1>Dubai Safari Abu Dhabi </h1>
            <p className="text-sm leading-relaxed mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              laudantium aliquam dolorum cumque error, similique voluptate nisi
              consequuntur ipsam suscipit fugiat expedita nobis! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-caribbeangreen-300 text-xs">...more</span>
            </p>

            <ul className=" text-sm mt-4">
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="px-2 py-2 flex gap-x-4 items-start ">
                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
                  <GoCheck className="text-caribbeangreen-300"></GoCheck>
                </div>
                <p className="GTE_regular text-richblack-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </div>
        </CollapseComp>
        <CollapseComp title="Itinerary" className={"px-4"}>
          <div>
            <div className="pt-2">
              <h3 className="text-xs text-[#ff612c]">Destination</h3>
              <h2 className="mt-1 text-sm">
                {tourData?.tour?.destination?.name}
              </h2>
            </div>

            <div className="my-2">
              <h3 className="text-xs text-[#ff612c]">City</h3>
              <h2 className="mt-1 text-sm">{tourData?.tour?.city?.name}</h2>
            </div>
            <hr />
            <div className="my-2">
              <h3 className="text-xs text-[#ff612c]">Itieneries Details</h3>
              {tourData?.tour?.itenries?.map((e, i) => {
                // itenrary_name: 'Uriah Hess',
                //       itenery_from_time: '04:58',
                //       itenery_to_time
                return (
                  <div className="flex gap-x-2 mt-2" key={i + 1}>
                    <span className="text-xs text-gray-400">{i + 1}</span>
                    <div>
                      <h3 className="text-sm">{e?.itenrary_name}</h3>
                      <div>
                        <h2 className="mt-1 text-xs">
                          {getMeridianTime(e?.itenery_from_time)?.time}{" "}
                          {getMeridianTime(e?.itenery_from_time)?.meridian} -{" "}
                          {getMeridianTime(e?.itenery_to_time)?.time}{" "}
                          {getMeridianTime(e?.itenery_to_time)?.meridian}
                        </h2>
                      </div>
                      <img src={e?.image} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CollapseComp>
        <CollapseComp title="Inclusions" className={"px-4"}>
          {tourData?.tour?.inclusions?.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </CollapseComp>
      </div>

      {/* Last Div  */}
      {
        <div className="fixed bottom-14 w-full bg-white py-3 z-[999] flex gap-x-2 items-stretch px-4 max-w-maxContent mx-auto -mt-0 md:-mt-5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] GTE_light">
          <button
            className="flex-grow normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light"
            onClick={() => {
              // dispatch(
              //   setBookingData({ key: "currency", value: "doller" })
              // );
              // dispatch(setBookingData({ key: "price", value: 488 }));
              // dispatch(
              //   setBookingData({
              //     key: "destination",
              //     value: "Dubai Safari",
              //   })
              // );
              // dispatch(setBookingData({ key: "type", value: "Adventure" }));
              // navigate("/booking");
            }}
          >
            Book Now
          </button>
          <button className="normal-case py-2 rounded-md w-fit px-5 text-xs sm:text-lg text-[#ff621c]  border border-[#ff612c] GTE_light">
            Add To Cart
          </button>
        </div>
      }
    </div>
  );
}
