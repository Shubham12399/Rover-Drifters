"use client"

import BottomBar from '@/components/BottomBar';
import Carousel from '@/components/Carousel/Carousel';
import DefaultHome from '@/components/HomePage/DefaultHome';
import TabsAndPlanTours from '@/components/HomePage/TabsAndPlanTours';
import WhereTo from '@/components/HomePage/WhereTo';
// import { Carousel } from '@material-tailwind/react';
import React from 'react'


const Home = () => {
  // console.log(window?.innerWidth)
  return (
    <div className="w-full pb-14">
    {/* ------------------------------Header section ----------------------------------------------------- */}
    <Carousel></Carousel>
    {/* <SearchBar></SearchBar> */}
    <TabsAndPlanTours></TabsAndPlanTours>
   
    <DefaultHome></DefaultHome>

    {
        //{ /* {/*action center*/}
        //<div>
        //  {/* Heading Title Show on Desktop */}
        //  <h1 className="text-center text-lg md:text-2xl font-medium pt-4 md:pt-10 hidden md:block ">
        // Enjoy the, Dream Place Now!
        //  </h1>
        //</main> {/* Paragraph Show on Desktop */}
        //   <p className="max-w-maxContentTab text-[10px] px-4 md:px-0 md:text-sm text-richblack-300 text-center mx-auto hidden md:block ">
        // Let&apos;s checkout the latest Tourism Places. To book a ticket fill
        // some boxes{" "}
        //  </p>
        //  {/* Action center Show on Desktop */}
        //  <div className="mt-4 relative">
        //  <Suspense fallback="">
        //    <HomeHeroImages></HomeHeroImages>
        //  </Suspense>
        //  <Suspense fallback="">
        //    <HomePageSelection></HomePageSelection>
        //  </Suspense>
        //  </div>
        //  </div>
        //  {/* All Sections  */}
        //  <Suspense>
        //    <ChooseDestination></ChooseDestination>
        //  </Suspense>
        //  <Suspense fallback="">
        //    <TypesToursSec></TypesToursSec>
        //  </Suspense>
    }

    <BottomBar></BottomBar>
</div>
  )
}

export default Home;