import React, { useEffect, useState } from "react";
import TabsSelection from "./TabsSelection";
import PlanTours from "./PlanTours";

const TabsAndPlanTours = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);
  return (
    <div>
      <TabsSelection setIsOpen={setIsOpen} isOpen={isOpen}></TabsSelection>
      {/* <PlanTours setIsOpen={setIsOpen} isOpen={isOpen}></PlanTours> */}
    </div>
  );
};

export default TabsAndPlanTours;
