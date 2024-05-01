import React, { Suspense } from "react";
// const Carousel = React.lazy(() => import("./Carousel"));

function CarouselComp() {
  return (
    <div className="slider-container h-[170px] sm:h-[230px] md:h-[300px]">
      <Suspense fallback="">
        {/* <Carousel></Carousel> */}
      </Suspense>
    </div>
  );
}

export default CarouselComp;
