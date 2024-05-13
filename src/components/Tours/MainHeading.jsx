"use client";

import { useSelector } from "react-redux";

const MainHeading = () => {
  const selectedType = useSelector((store) => store.selectedType);

  return (
    <h3 className="text-lg md:text-2xl text-center GTE_bold mt-2 sm:mt-4 ">
      {/* {typeSlice?.name} */}
      <span className="text-orange-600">{selectedType?.name}</span> & Activities
    </h3>
  );
};

export default MainHeading;
