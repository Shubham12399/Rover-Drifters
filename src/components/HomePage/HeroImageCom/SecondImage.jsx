"use client";
import React from "react";
const Icon1 = "/images/ezgif.com-gif-to-mp4-converter.mp4";

const SecondImage = () => {
  return (
    <div className="col-span-4 -ml-2 -mb-7 sm:-mb-10 md:-mb-16 ">
      <video
      // src={Icon1}
      // alt=""
      className="block w-full relative z-0 !h-full select-none cursor-auto"
      autoPlay
      muted
      loop
      controls={false}
      preload="none"
    
      >
        <source src={Icon1} type="video/mp4"/>
      </video>
    </div>
  );
};

export default SecondImage;
