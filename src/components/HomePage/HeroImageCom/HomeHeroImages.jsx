"use client";

import React, { Suspense } from "react";
const FirstImage = React.lazy(() => import("./FirstImage"));
const SecondImage = React.lazy(() => import("./SecondImage"));
const ThirdImage = React.lazy(() => import("./ThirdImage"));
// const { FirstImage, SecondImage, ThirdImage } = React.lazy(() =>
//   import("./HeroImageCom/FirstImage")
// );
const HomeHeroImages = () => {
  return (
    <div className="grid grid-cols-[repeat(13,1fr)] -mb-2 h-[100px] sm:h-[auto] ">
      <Suspense fallback="">
        <FirstImage></FirstImage>
      </Suspense>
      <Suspense fallback="">
        <SecondImage></SecondImage>
      </Suspense>
      <Suspense fallback="">
        <ThirdImage></ThirdImage>
      </Suspense>
    </div>
  );
};

export default HomeHeroImages;
