"use client";

import React, { Suspense } from "react";
const GetDestinationTags = React.lazy(() =>
  import("../GetHomePageDetails/ChooseDestination/GetDestinationTags")
);
const Mappedcities = React.lazy(() => import("./MappedDestnations"));

const ChooseDestination = () => {
  return (
    <>
      {/* Choose Destination  ------------------------------------------------------------------------------- */}
      <div className="md:mt-2 max-w-maxWidthContent mx-auto -mt-2 pl-3 md:px-6 mb-6 ">
        {/* <h2 className="text-lg md:text-2xl font-medium">Choose Destination </h2> */}
        {/* Tags */}
        <Suspense fallback="">
          <GetDestinationTags></GetDestinationTags>
        </Suspense>

        {/* <h1 className="text-lg md:text-2xl font-medium">America</h1> */}
        <div className="my-3 flex gap-x-2 md:gap-x-4 md:mt-6 overflow-auto hide-scrollbar pr-3 select-none">
          <Suspense fallback="">
            <Mappedcities></Mappedcities>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ChooseDestination;
