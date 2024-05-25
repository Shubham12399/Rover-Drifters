"use client";
import ChooseDestination from "@/components/HomePage/ChooseDestination/ChooseDestination";
import { motion } from "framer-motion";
const Page = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
      <div className="px-2 py-4">
        {/* <h1 className="text-lg">Choose Destinations</h1> */}
        <ChooseDestination></ChooseDestination>
      </div>
    </motion.div>
  );
};

export default Page;
