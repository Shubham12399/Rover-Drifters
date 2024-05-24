import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaGlobe, FaPaperPlane } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
const PlanTours = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative w-full z-10">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{opacity:0}}
            className="h-[calc(100vh_-_100px)] top-auto w-screen fixed bg-[rgba(0,_0,_0,_0.6)] backdrop-blur-[2px]"
            onClick={() => setIsOpen((prev) => !prev)}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "calc(90vh - 100vh)" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "calc(90vh - 100vh)" }}
            className="w-full px-4 py-4 rounded-bl-lg rounded-br-lg z-50 bg-white absolute"
          >
            <h1 className="text-lg">Plan Your Trip!</h1>
            <div className="my-3">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-200 flex gap-x-4 items-center rounded-md my-1 py-2 px-4"
              >
                <FaGlobe className="w-[14px] text-gray-900"></FaGlobe>
                <span>Destination</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-200 flex gap-x-4 items-center rounded-md my-1 py-2 px-4"
              >
                <FaPaperPlane className="w-[14px] text-gray-900"></FaPaperPlane>
                <span>Types</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-200 flex gap-x-4 items-center rounded-md my-1 py-2 px-4"
              >
                <FaCalendar className="w-[14px] text-gray-900"></FaCalendar>
                <span>Date</span>
              </motion.div>
            </div>
            <div className="my-2 mt-6 w-full">
              <button className="rounded-full py-2 flex justify-center text-base text-white bg-[#ff612c] border-none outline-none w-full">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanTours;
