"use client";

import { useSelector } from "react-redux";

const MainHeading = () => {
  const selectedType = useSelector((store) => store.selectedType);
  const isProfileLoading = useSelector((store) => store.isProfileLoading);

  return (
    <h3 className="text-lg md:text-2xl text-center GTE_bold mt-2 sm:mt-4 flex justify-center ">
      {/* {typeSlice?.name} */}
      {!isProfileLoading && <span className="text-orange-600">{selectedType?.name} & Activities</span>}
      {isProfileLoading && <div className="w-[100px] h-[20px] rounded-sm bg-[var(--sklClr)] mb-2"></div>}
    </h3>
  );
};

export default MainHeading;
