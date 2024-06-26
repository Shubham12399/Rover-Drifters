"use client"
import React, { useEffect, useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { register } from "swiper/element/bundle";
register();

const CarouselWithNavigate = ({ children }) => {
  const swiperRef = useRef(null);
  const [slideView,setSlideView] = useState(1);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      // These are new...
      injectStyles: [
        `
        .swiper-slide{
            width:70%;
        }
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-size: 20px;
            background-repeat: no-repeat;
            padding:0;
            width:30px;
            height:30px;
            border-radius: 100%;
            font-size:.815rem;
          }
          .swiper-button-next{
            position:absolute !important;
            right:2rem;
            top:84%;
          }
          .swiper-button-prev{
            position:absolute !important;
            left:calc(100% - 7rem);
            top:84%;
          }
          .swiper-button-next svg,
          .swiper-button-prev svg {
            width:40%;
            height:40%;
            color:black;
          }
          .swiper-pagination-bullet{
              display:none;
          }
          @media screen and (max-width:600px){
            .swiper-button-next svg,
          .swiper-button-prev svg {
            width:35% !important;
            height:35% !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width:25px !important;
            height:25px !important;
          }
          .swiper-button-prev{
            left:calc(100% - 6rem);
          }
          }
      `,
      ],
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  useEffect(() => {
    if(typeof window !== "undefined"){
      if(window.innerWidth < 500) setSlideView(1)
      else if(window.innerWidth < 700) setSlideView(3)
      else if(window.innerWidth > 700) setSlideView(4)
    }
  },[]);
  return (
    <div className="relative h-[180px] overflow-hidden max-w-maxContent mx-auto px-4">
      <swiper-container
        ref={swiperRef}
        slides-per-view={slideView}
        init="false"
        class="h-full relative"
      >
        {children}
      </swiper-container>
    </div>
  );
};

export default CarouselWithNavigate;
