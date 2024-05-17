"use client";
import CollapseComp from "@/components/Collapse";
import Stars from "@/components/Stars";
import BottomCtaButtons from "@/components/Tour/BottomCtaButtons";
import Itieneries from "@/components/Tour/Itieneries";
import LocationWithIcon from "@/components/Tour/LocationWithIcon";
import Overview from "@/components/Tour/Overview";
import Specifications from "@/components/Tour/Specifications";
import Visitors from "@/components/Tour/Visitors";
import BannerSkl from "@/components/skelton/BannerSkl";
import TitleSkl from "@/components/skelton/TitleSkl";
import useFetch from "@/customehooks/useFetch";
import { tourApi } from "@/services/apis";
import "@/styles/shine.button.css";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // getting api data of indivisual tour by its id
  const { tourData, isLoading } = useFetch({
    queryKey: [`tour_${params?.id}`],
    method: "GET",
    url: tourApi.GET_TOUR_BY_ID + "/" + params?.id,
    defaultRes: true,
    resName: "tour",
    varName: "tourData",
  });

  // useEffect(()=>{
  //   dispatch
  // },[]);

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

  return (
    <div className="max-h-auto min-h-fit">
      <div className="relative w-full h-[170px] md:h-[60vh] select-none">
        {!isLoading && (
          <img
            loading="lazy"
            src={tourData?.tour?.images[0]}
            alt="travel 1920x450 banner.png"
            className="w-full h-full object-cover object-cover"
          />
        )}
        {isLoading && (
          <BannerSkl className="w-full h-[170px] md:h-[60vh]"></BannerSkl>
        )}
        <div
          className="absolute top-2 left-2 text-xl w-fit cursor-pointer p-2  rounded-md GTE_light "
          onClick={() => window.history.back()}
        >
          <GoArrowLeft className="mix-blend-color-dodge"></GoArrowLeft>
        </div>
        {
          <div className="w-full px-4 relative -mt-4 max-w-maxContentTab mx-auto flex gap-2">
            <button className="w-full normal-case py-2 rounded-md px-2 text-xs sm:text-lg text-white bg-[#ff612c] hover:border-[#f77031] GTE_light shine_btn">
              Book Now
            </button>
            <button className="normal-case py-2 rounded-md min-w-fit px-3 flex-grow text-xs sm:text-base text-[#ff621c]  border border-[#ff612c] GTE_light bg-white">
              Add To Cart
            </button>
          </div>
        }
      </div>

      {/* title , starts , place details and descriptions section */}
      <div className="max-w-maxWidthContent mx-auto px-4 my-4 pt-4 md:mt-12">
        <div>
          {
            <h1 className="GTE_medium text-lg md:text-xl max-w-[80%] sm:max-w-[300px] md:max-w-[600px] text-richblue-700">
              {!isLoading && tourData?.tour?.tour_name}
              {isLoading && <TitleSkl className={"w-[150px]"}></TitleSkl>}
            </h1>
          }
        </div>

        {/* Price , stars, location  */}
        <div className="mt-3">
          <h3>
            {!isLoading && tourData?.tour?.currency?.symbol}{" "}
            {!isLoading && tourData?.tour?.price?.sharing_price}
            {isLoading && <TitleSkl className={"w-[90px]"}></TitleSkl>}
          </h3>
          <Stars></Stars>
          <LocationWithIcon tour={tourData?.tour}></LocationWithIcon>
          <Visitors visitors={tourData?.tour?.visitors}></Visitors>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p>Description</p>
          <p className="GTE_light text-sm pr-4 mt-2 text-richblue-800">
            {tourData?.tour?.description}
          </p>
        </div>
      </div>

      {/* Specifications  */}
      <Specifications></Specifications>

      {/* Collapse Section */}
      <div className="max-w-maxWidthContent bg-white mx-auto mt-6 flex flex-col mb-28 ">
        <CollapseComp isCollapsed={true} title="Overview" className={"px-4"}>
          <Overview tour={tourData?.tour}></Overview>
        </CollapseComp>
        <CollapseComp title="Itinerary" className={"px-4"}>
          <Itieneries tour={tourData?.tour}></Itieneries>
        </CollapseComp>
        <CollapseComp title="Inclusions" className={"px-4"}>
          {tourData?.tour?.inclusions?.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </CollapseComp>
      </div>

      <BottomCtaButtons
        id={tourData?.tour?._id}
        bookNowHref={`/booking/step-first/?tourId=${params?.id}`}
        cartHandler={() => {}}
      ></BottomCtaButtons>
    </div>
  );
}
