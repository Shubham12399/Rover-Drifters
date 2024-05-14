import React, { Suspense } from "react";

const MainTours = React.lazy(() => import("@/components/Tours/MainTourPage"));

export const metadata = {
  title: "Rover Drifters - Explore Tours",
  description: "The Next feeling of Tour & Travel.",
};

const Tours = () => {
  return (
    <div className="pb-8">
      <Suspense fallback="">
        <MainTours></MainTours>
      </Suspense>
    </div>
  );
};

export default Tours;
