"use client"
import { Button } from "@material-tailwind/react";
import React from "react";

const ActionButton = ({ children, onClick, className }) => {
  return (
    <Button
      variant="outlined"
      className={`px-4 py-2 mt-1 md:mt-0 rounded-xl text-sm w-full border-[#ff612c] bg-[#ff612c] text-white shadow-none hover:shadow-lg flex gap-x-2 items-center justify-center font-normal normal-case ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
