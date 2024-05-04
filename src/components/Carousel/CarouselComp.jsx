import React, { Suspense } from "react";
// const Carousel = React.lazy(() => import("./Carousel"));

function CarouselComp() {
  return (
    <div className="slider-container h-[170px] sm:h-[230px] md:h-[300px] px-3">
      {/* <Suspense fallback="">
        <Carousel></Carousel>
      </Suspense> */}
      <img src="https://i.pinimg.com/originals/bf/2e/68/bf2e68beffd4007e9c826bfb9ed6a0dc.jpg" alt="" className="w-full h-full object-cover object-top rounded-lg" />
    </div>
  );
}

export default CarouselComp;
