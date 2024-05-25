"use client";

import CarouselWithNavigate from "@/components/CarouselWithNavigate";
import ChooseDestination from "@/components/HomePage/ChooseDestination/ChooseDestination";
import { motion } from "framer-motion";
const Page = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="px-2 pt-4 pb-0 mt-3">
        {/* <h1 className="text-lg">Choose Destinations</h1> */}
        <ChooseDestination></ChooseDestination>
      </div>
      <div className="w-full max-w-maxWidthContent mx-auto px-4">
        <h1 className="text-lg font-medium mb-3">Top destinations</h1>
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
            <div className="w-full overflow-auto hide-scrollbar">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto absolute bottom-2 left-1 z-20">
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
            <div className="w-full overflow-auto hide-scrollbar">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto absolute bottom-2 left-1 z-20">
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
            <div className="w-full overflow-auto hide-scrollbar">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto absolute bottom-2 left-1 z-20">
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
            <div className="w-full overflow-auto hide-scrollbar">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto absolute bottom-2 left-1 z-20">
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
            <div className="w-full overflow-auto hide-scrollbar">
              <div className="flex items-start gap-x-1 px-4 hide-scrollbar overflow-auto absolute bottom-2 left-1 z-20">
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
    </motion.div>
  );
};

export default Page;
