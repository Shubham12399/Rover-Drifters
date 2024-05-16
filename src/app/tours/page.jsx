import React, { Suspense } from "react";

const MainTours = React.lazy(() => import("@/components/Tours/MainTourPage"));

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
