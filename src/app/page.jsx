"use client";
// import {onLCP, onFID, onCLS} from 'web-vitals';

import React, { Suspense, useState } from "react";
const HomePageSelection = React.lazy(() =>
  import("@/components/HomePage/HomePageSelection")
);
const HomeHeroImages = React.lazy(() =>
  import("@/components/HomePage/HeroImageCom/HomeHeroImages")
);
// const FetchHomePageData = React.lazy(() =>
//   import("@/components/HomePage/FetchHomePageData")
// );
const ChooseDestination = React.lazy(() =>
  import("@/components/HomePage/ChooseDestination/ChooseDestination")
);
const CarouselComp = React.lazy(() =>
  import("@/components/Carousel/CarouselComp")
);

export default function Home() {
  // const [state, setState] = useState();
  // onCLS(console.log);
  // onFID(console.log);
  // onLCP(console.log);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="w-full pb-14">
        {/* ------------------------------Header section ----------------------------------------------------- */}

        {/* Carousel  */}
        <div className="w-full">
          <Suspense fallback="">
            <CarouselComp></CarouselComp>
          </Suspense>
        </div>

        {/*action center*/}
        <div>
          {/* Heading Title Show on Desktop */}
          <h1 className="text-center text-lg md:text-2xl font-medium pt-4 md:pt-10 hidden md:block ">
            Enjoy the, Dream Place Now!
          </h1>
          {/* Paragraph Show on Desktop */}
          <p className="max-w-maxContentTab text-[10px] px-4 md:px-0 md:text-sm text-richblack-300 text-center mx-auto hidden md:block ">
            Let&apos;s checkout the latest Tourism Places. To book a ticket fill
            some boxes{" "}
          </p>
          {/* Action center Show on Desktop */}
          <div className="mt-4 relative">
            <Suspense fallback="">
              <HomeHeroImages></HomeHeroImages>
            </Suspense>
            <Suspense fallback="">
              <HomePageSelection></HomePageSelection>
            </Suspense>
          </div>
        </div>

        {/* Mutli categories 
        <Suspense fallback="">
          <FetchHomePageData ></FetchHomePageData>
        </Suspense> */}

        {/* All Sections  */}
        <Suspense>
          <ChooseDestination></ChooseDestination>
        </Suspense>
      </div>
    </main>
  );
}