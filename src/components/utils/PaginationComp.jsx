"use client"
import { Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiArrowNarrowLeft } from "react-icons/hi";
const PaginationComp = ({activePage, totalPages ,nextPage ,prevPage}) => {
      // handler functions to handle pagination data
  // const nextPage = () => {
  //   if (activePage === totalPages) return;
  //   setActivePage((prev) => prev + 1);
  // };

  // const prevPage = () => {
  //   if (activePage === 1) return;
  //   setActivePage((prev) => prev - 1);
  // };

  return (
    <div className="flex items-center gap-4 mb-4 !select-none">
    <button
      onClick={prevPage}
      disabled={activePage === 1}
      className="cursor-pointer "
    >
      <FaArrowLeft className="" />
    </button>
    <Typography color="gray" className="font-normal flex items-center gap-x-1">
      Page <span className="text-gray-900">{activePage} {" "} </span> of {" "}
      <span className="text-gray-900">{totalPages}</span>
    </Typography>
    <button
      onClick={nextPage}
      disabled={activePage === totalPages}
      className="cursor-pointer"
    >
      <FaArrowRight className=""/>
    </button>
  </div>
  )
}

export default PaginationComp;