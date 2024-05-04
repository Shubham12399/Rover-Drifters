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
    <div className="relative grid grid-cols-[repeat(13,1fr)] -mb-2 before:bg-white before:h-[17px] before:absolute before:-bottom-[0.5rem] before:right-0 before:z-[999] before:blur-sm before:w-full">
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
