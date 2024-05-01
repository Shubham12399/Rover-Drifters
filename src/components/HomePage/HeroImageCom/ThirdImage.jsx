"use client";

import Image from "next/image"
const Icon3 = "/images/sun-safari.png";

const ThirdImage = () => {
    return (
      <div className="col-span-4">
      <Image
        src={Icon3}
        alt="sun_image"
        className="block w-full !h-full select-none cursor-auto relative z-50"
        width={140}
        height={80}
      />
    </div>
    )
  };

  export default ThirdImage;