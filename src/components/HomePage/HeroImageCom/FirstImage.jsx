"use client";

const Icon2 = "/images/ezgif.com-gif-to-mp4-converter 2.mp4";

export const FirstImage = () => {
  return (
         <div className="col-span-5 -ml-3">
        <video
          // src={Icon2}
          // alt=""
          className="block w-full relative z-0 !h-full select-none cursor-auto"
          autoPlay
          muted
          loop
          width={200}
          height={160}
          preload
          
        >
           <source src={Icon2} type="video/mp4"/>
        </video>
    </div>
  )
};

export default FirstImage;