"use client";
import BottomBar from "@/components/BottomBar";
import Carousel from "@/components/Carousel/Carousel";
import DefaultHome from "@/components/HomePage/DefaultHome";
import TabsAndPlanTours from "@/components/HomePage/TabsAndPlanTours";
import TabsSelection from "@/components/HomePage/TabsAndPlanTours/TabsSelection";
import WhereTo from "@/components/HomePage/WhereTo";
import SearchBar from "@/components/SearchBar";
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

const TypesToursSec = React.lazy(() =>
  import("@/components/HomePage/TypesTour/TypesToursSec")
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-full pb-14">
        {/* ------------------------------Header section ----------------------------------------------------- */}
        <Carousel></Carousel>
        {/* <SearchBar></SearchBar> */}
        <WhereTo></WhereTo>
        <TabsAndPlanTours></TabsAndPlanTours>
        <DefaultHome></DefaultHome>
        <BottomBar></BottomBar>
      </div>
    </main>
  );
}