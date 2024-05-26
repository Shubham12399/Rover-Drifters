"use client";
import React, { Suspense } from "react";

import CarouselWithNavigate from "@/components/CarouselWithNavigate";
import ChooseDestination from "@/components/HomePage/ChooseDestination/ChooseDestination";
import TravelsFirstChoice from "@/components/HomePage/TravelsFavChoice";
const TypesToursSec = React.lazy(() =>
  import("@/components/HomePage/TypesTour/TypesToursSec")
);
import { motion } from "framer-motion";
const Page = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="px-2 pt-4 pb-0 mt-3">
        {/* <h1 className="text-lg">Choose Destinations</h1> */}
        <ChooseDestination></ChooseDestination>
      </div>

      <Suspense>
        <TypesToursSec></TypesToursSec>   
      </Suspense>
    </motion.div>
  );
};

export default Page;
