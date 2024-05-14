"use client";

import { useState } from "react";
import { GoX } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ title,setModal, children, className }) => {
  const [modalBottom, setModalBottom] = useState(true);
  const bottomModal = () => {
    setModalBottom(false);
    setTimeout(() => {
      setModal();
    }, 300);
  };
  return (
    <div
      className="w-full h-screen fixed left-0 top-0 z-[999999] "
      onClick={(e) => {
        e.stopPropagation();
        bottomModal();
      }}
    >
      <div className="fixed left-0 top-0 z-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm h-screen w-full"></div>
      <AnimatePresence>
        {modalBottom && (
          <motion.div
            initial={{
              bottom: "-300px",
            }}
            animate={{
              bottom: 0,
            }}
            exit={{
              bottom: "-500px",
            }}
            className={`w-full rounded-tl-2xl rounded-tr-2xl -bottom-[600px] bg-white p-4 fixed min-h-[10vh] drop-shadow-lg pb-20 z-[9999] max-w-[600px] left-1/2 -translate-x-1/2 ${className} 
      `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" max-w-maxContentTab mx-auto ">
              <div className="flex justify-between px-2 items-center border-b">
                <div className="select-none text-sm">{title}</div>
                <div
                  className="relative before:w-full before:h-full before:rounded-full before:absolute before:top-0 before:left-0  before:hover:bg-[rgba(0,0,0,0.04)] rounded-full p-2 -mr-2 cursor-pointer"
                  onClick={() => {
                    bottomModal();
                  }}
                >
                  <GoX className="text-lg text-richblack-900"></GoX>
                </div>
              </div>
              <div>{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
