import React from 'react'
import { FaStar } from 'react-icons/fa';

const Stars = () => {
  return (
    <div className="flex sm:mt-0 gap-x-1 items-center ">
    <FaStar className="text-yellow-400 text-[14px]"></FaStar>
    <FaStar className="text-yellow-400 text-[14px]"></FaStar>
    <FaStar className="text-yellow-400 text-[14px]"></FaStar>
    <FaStar className="text-yellow-400 text-[14px]"></FaStar>
    <FaStar className="text-yellow-400 text-[14px]"></FaStar>
  </div>
  )
}

export default Stars;