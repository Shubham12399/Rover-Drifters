import React from 'react'
import { GoCheck } from 'react-icons/go';

const Overview = ({tour}) => {
  return (
    <div className="pt-2 pb-3">
    <h1>{tour?.tour_name}</h1>
    <p className="text-sm leading-relaxed mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
      laudantium aliquam dolorum cumque error, similique voluptate nisi
      consequuntur ipsam suscipit fugiat expedita nobis! Lorem ipsum,
      dolor sit amet consectetur adipisicing elit.{" "}
      <span className="text-caribbeangreen-300 text-xs">...more</span>
    </p>

    <ul className=" text-sm mt-4">
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
      <li className="px-2 py-2 flex gap-x-4 items-start ">
        <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-green-50 mt-1">
          <GoCheck className="text-caribbeangreen-300"></GoCheck>
        </div>
        <p className="GTE_regular text-richblack-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </li>
    </ul>
  </div>
  )
}

export default Overview;