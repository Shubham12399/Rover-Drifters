import React, { Suspense, useState } from "react";
// import Slider from "react-slick";
// import "@/styles/carousel.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
const CarouselItem = React.lazy(() => import("./CarouselItem"));
const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd-iqX7ydfiQ1mjgnBFXJqd0Z3_3PpPD34zyug7olMA&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZkG40O7d5tuNusdy1Lgmu2-P1SxCy4dmx7R-AYZx2w&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrY3RfXM6PJBaq-dKUJEWx5B1KK8VRfzPwYhNv8qPDA&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ApxCg-GiyMlykBec6QxMviQTnLobIZHwZyx3YjVxAw&s",
    },
  ]);
  const settings = {
    //   dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    // <Slider {...settings}>
    //   {carouselItems?.map((item, index) => (
    //     <Suspense key={index} fallback="">
    //       {" "}
    //       <CarouselItem item={item}></CarouselItem>
    //     </Suspense>
    //   ))}
    // </Slider>
    <></>
  );
};

export default Carousel;
