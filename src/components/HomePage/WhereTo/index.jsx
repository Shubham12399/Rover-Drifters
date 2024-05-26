import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

const WhereTo = ({ className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);

  return (
    <div className={`w-full mx-auto py-2 px-4 md:max-w-fit`}>
      <div
        className={`rounded-full bg-white border border-gray-300 flex drop-shadow-md cursor-pointer w-full max-w-[400px] ${className} `}
        onClick={() => setIsOpenModal(true)}
      >
        <div className="py-2 pl-4 pr-3 flex items-center">
          <FiSearch className="text-lg"></FiSearch>
        </div>
        <div className="py-2">
          <h2 className="text-base font-medium">Going where?</h2>
          <p className="text-xs text-gray-500 font-normal flex items-center  gap-x-1">
            <span>Destination</span> • <span>Type</span> • <span>Lessgo</span>
          </p>
        </div>
      </div>
      <AnimatePresence>
      {isOpenModal && (
        <motion.div
        exit={{opacity:"0"}}
        transition={{
          y: { type: "spring", bounce: 0 },
          delay:.3
        }}
          className="w-full h-full fixed top-[42px] md:top-[70px] left-0 bg-[rgba(0,_0,_0,_0.4)] z-[1000]"
          onClick={() => setIsOpenModal(false)}
        ></motion.div>
      )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            exit={{y:"100%"}}
            transition={{
              y: { type: "spring", bounce: 0 },
            }}
            className={`w-full fixed bottom-0 min-h-[400px] rounded-tl-2xl rounded-tr-2xl bg-white z-[1003] left-0 `}
          >
            <div className="w-full mt-4 px-6">
            <h1 className="text-lg font-medium mb-2">Plan Your Trip!</h1>
            </div>
            <div className="px-6 py-3">

            </div>  
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhereTo;
