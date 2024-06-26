import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { VscSettings } from "react-icons/vsc";
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
    <div className={`w-full mx-auto py-2 px-4 md:max-w-fit mt-2`}>
      <div
        className={`rounded-full bg-white border-gray-300 flex items-center justify-between shadow-[0_0_10px_rgba(0,_0,_0,_0.09)] md:shadow-none cursor-pointer w-full max-w-[400px] ${className} `}
        onClick={() => setIsOpenModal(true)}
      >
        {/* <div className="pl-5 py-2 flex items-center"> */}
          
          <div className="pl-8">
            <h2 className="text-sm GTE_regular">Yo! Going where?</h2>
            <div className="text-[11px] text-gray-500 font-normal gap-x-2 GTE_light flex items-center">
              <span className="GTE_light">Destination</span> 
              <span className="inline-block w-[2px] h-[2px] bg-gray-500 rounded-full "></span> 
              <span className="GTE_light">Type</span>
               <span className="inline-block w-[2px] h-[2px] bg-gray-500 rounded-full "></span> 
               <span className="GTE_light">Let’s Go!</span>
            </div>
          </div>
        {/* </div> */}

        <div className="py-2 pr-2 flex items-center">
          <div className="bg-white border rounded-full w-[40px] h-[40px] flex justify-center items-center md:hidden">
            <VscSettings className="text-lg"></VscSettings>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            exit={{ opacity: "0" }}
            transition={{
              y: { type: "spring", bounce: 0 },
              delay: 0.3,
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
            exit={{ y: "100%" }}
            transition={{
              y: { type: "spring", bounce: 0 },
            }}
            className={`w-full fixed bottom-0 min-h-[400px] rounded-tl-2xl rounded-tr-2xl bg-white z-[1003] left-0 `}
          >
            <div className="w-full mt-4 px-6">
              <h1 className="text-lg font-medium mb-2">Plan Your Trip!</h1>
            </div>
            <div className="px-6 py-3"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhereTo;
