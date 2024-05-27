"use client";

import BottomBar from "@/components/BottomBar";
import Carousel from "@/components/Carousel/Carousel";
import CarouselWithNavigate from "@/components/CarouselWithNavigate";
import DefaultHome from "@/components/HomePage/DefaultHome";
import TabsAndPlanTours from "@/components/HomePage/TabsAndPlanTours";
import TravelsFirstChoice from "@/components/HomePage/TravelsFavChoice";
import WhereTo from "@/components/HomePage/WhereTo";
// import { Carousel } from '@material-tailwind/react';
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Home = () => {
  // console.log(window?.innerWidth)
  return (
    <div className="w-full pb-14 mt-4 bg-[#f9f9f9]">
      <div className="w-full max-w-maxWidthContent mx-auto px-4">
        <h1 className="text-lg font-medium mb-1">Top destinations</h1>
        <div className="mt-2 mb-6 flex gap-x-4  overflow-auto hide-scrollbar">
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
        </div>
      </div>
      <TravelsFirstChoice></TravelsFirstChoice>

      <div className="w-full max-w-maxWidthContent mx-auto px-4">
        <h1 className="text-lg font-medium mb-3">Top Attractions</h1>
        <CarouselWithNavigate>
          <swiper-slide key={0} class="px-1 ">
            <div className="min-w-full h-[170px] rounded-md bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full object-cover rounded-lg h-[170px]"
              />
            </div>
          </swiper-slide>
          <swiper-slide key={1} class="px-1">
            <div className="min-w-full h-[170px] rounded-md bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full object-cover rounded-lg h-[170px]"
              />
            </div>
          </swiper-slide>
          <swiper-slide key={2} class="px-1">
            <div className="min-w-full h-[170px] rounded-md bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full object-cover rounded-lg h-[170px]"
              />
            </div>
          </swiper-slide>
          <swiper-slide key={3} class="px-1">
            <div className="min-w-full h-[170px] rounded-md bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full object-cover rounded-lg h-[170px]"
              />
            </div>
          </swiper-slide>
        </CarouselWithNavigate>
      </div>
      <div className="w-full max-w-maxWidthContent mx-auto px-4 mt-4">
        <h1 className="text-lg font-medium mb-3">Best Trips</h1>
        <div className="flex gap-x-2 px-1 overflow-auto hide-scrollbar">
          <div className="min-w-[45%] md:min-w-[20%] md:max-w-[20%] transition-all hover:min-w-[60%] md:hover:min-w-[30%] bg-red-300 rounded-lg h-[170px] flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="w-full overflow-auto hide-scrollbar absolute bottom-2 left-1 z-20">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto  hide-scrollbar overflow-auto ">
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[45%] md:min-w-[20%] md:max-w-[20%] transition-all hover:min-w-[60%] md:hover:min-w-[30%] bg-red-300 rounded-lg h-[170px] flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="w-full overflow-auto hide-scrollbar absolute bottom-2 left-1 z-20">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto ">
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[45%] md:min-w-[20%] md:max-w-[20%] transition-all hover:min-w-[60%] md:hover:min-w-[30%] bg-red-300 rounded-lg h-[170px] flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560633721-224b8a71ca9d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="w-full overflow-auto hide-scrollbar absolute bottom-2 left-1 z-20">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto ">
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[45%] md:min-w-[20%] md:max-w-[20%] transition-all hover:min-w-[60%] md:hover:min-w-[30%] bg-red-300 rounded-lg h-[170px] flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1680806489485-013a79bf44c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="w-full overflow-auto hide-scrollbar absolute bottom-2 left-1 z-20">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto ">
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[45%] md:min-w-[20%] md:max-w-[20%] transition-all hover:min-w-[60%] md:hover:min-w-[30%] bg-red-300 rounded-lg h-[170px] flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502700559166-5792585222ef?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="w-full overflow-auto hide-scrollbar absolute bottom-2 left-1 z-20">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto ">
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
                <div className="text-xs px-1 rounded-md text-white border">
                  Adventure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const DestinationCard = () => {
  return (
    <div className="bg-white rounded-2xl p-2 min-w-[130px] w-[130px] max-w-[120px] select-none" 
    style={{ boxShadow: "var(--cardShadow)" }}
    >
      <img
        src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[116px] rounded-xl select-none"
        style={{ boxShadow: "var(--softShadow)" }}
      />
      <div className="flex pl-2 pt-3 pb-1 items-center justify-between">
        <div>
          <h2 className="text-xs GTE_medium text-gray-900">Banjir Kanal</h2>
          <p className="text-xs GTE_light text-gray-400 flex gap-x-1 py-1 GTE_regular"> <HiLocationMarker className="text-sm text-[#ff612c]"></HiLocationMarker>South Asia</p>
        </div>
        <div className="w-[22px] h-[22px] p-1 mt-1 bg-white flex items-center justify-center rounded-full" style={{ boxShadow: "0 0 8px rgba(0,0,0,0.09)" }}>
          <FiHeart></FiHeart>
        </div>
      </div>
    </div>
  );
};
