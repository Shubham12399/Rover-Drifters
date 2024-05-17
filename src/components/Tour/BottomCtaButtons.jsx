import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const BottomCtaButtons = ({bookNowHref , cartHandler}) => {
  const [showBottomCtaBtn,setShowBottomCtaBtn] = useState(false);

  const windowScrollEvent = useCallback(function () {
    var top = this.scrollY;
    console.log(Math.floor(top));
    if (window.innerWidth <= 600) {
      if (Math.floor(top) > 168) setShowBottomCtaBtn(true);
      else setShowBottomCtaBtn(false);
    } else {
      if (Math.floor(top) > 280) setShowBottomCtaBtn(true);
      else setShowBottomCtaBtn(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", windowScrollEvent);
    return () => {
      window.removeEventListener("scroll", windowScrollEvent);
    };
  }, [windowScrollEvent]);

  return (
    <div
      className={`fixed  w-full bg-white py-3 z-[999] px-4 max-w-maxContent mx-auto -mt-0 md:-mt-5 left-1/2 -translate-x-1/2 shadow-[0_0_16px_rgba(0,0,0,0.1)] GTE_light transition-all ${
        showBottomCtaBtn ? " bottom-[55px] md:bottom-0 " : " -bottom-full "
      }`}
    >
      <div className="flex gap-x-2 items-stretch max-w-maxContentTab mx-auto relative">
        <Link href={bookNowHref} className="flex-grow ">
        <button
          className="w-full ormal-case py-2 rounded-md px-2 text-xs sm:text-base text-white bg-[#ff612c] hover:border-[#f77031] GTE_light shine_btn "
          onClick={() => {}}
        >
          Book Now
        </button>
        </Link>
        <button className="normal-case py-2 rounded-md w-fit px-5 text-xs sm:text-base text-[#ff621c]  border border-[#ff612c] GTE_light" onClick={cartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default BottomCtaButtons;
