import React, { useEffect, useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { register } from "swiper/element/bundle";
register();

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([...Array(9)]);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      // These are new...
      injectStyles: [
        `
        
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
            top:86%;
          }
          .swiper-button-prev{
            position:absolute !important;
            left:calc(100% - 7rem);
            top:86%;
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
            display:none;
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
  return (
    <div className="relative h-[160px] md:h-[400px] overflow-hidden max-w-maxContent mx-auto">
      <swiper-container ref={swiperRef} init="false" class="h-full">
        {carouselItems?.map((item, index) => (
          <swiper-slide key={index}>
            <div className="max-h-full">
              <img
                src={`/images/banner-${index + 1}.jpg`}
                className="!w-full h-[150px] md:h-[390px] object-cover overflow-hidden"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;