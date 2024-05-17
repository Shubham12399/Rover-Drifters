import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { GoDash, GoPlus } from "react-icons/go";

const SelectTravellers = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");
  const group = searchParams.get("group");
  const travellerType = searchParams.get("traveller");
  const setParams = useCallback((name, value) => {
    params.set(name, value);
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  },[params,pathname]);
  
  useEffect(() => {
    if (!adults || !children) {
        setParams("adults", 1);
        setParams("children", 0);
      }
    if (!travellerType) {
      setParams("traveller", "Indivisual");
    }
    if (!group) {
      setParams("group", 0);
    }
    
  }, [travellerType, group,adults,children,searchParams,params,setParams]);

  return (
    <div className="px-4 tour_quantity_selection mt-8">
      <h1 className="mb-2">Select Travellers</h1>

      <div className="flex gap-x-2 w-fit p-1 rounded-lg relative ">
        <div
          className={`relative z-10 text-sm text-richblack-800 p-2 tab_item cursor-pointer select-none ${
            travellerType == "Indivisual" && " active "
          }`}
          onClick={() => setParams("traveller", "Indivisual")}
        >
          <p className="select-none GTE_light">Indivisual</p>
        </div>
        <div
          className={`relative z-10 text-sm text-richblack-800 p-2 tab_item cursor-pointer select-none ${
            travellerType == "Group" && " active "
          }`}
          onClick={() => setParams("traveller", "Group")}
        >
          <p className="select-none GTE_light">Group</p>
        </div>
        <div className="absolute z-0 top-0 h-full py-1 bg_tab_switcher_parent select-none">
          <div className="text-sm h-full text-richblack-800 shadow-sm p-2 rounded-md bg-white border border-richblack-100 bg_tab_switcher"></div>
        </div>
      </div>

      <div className="py-2 ">
        <div className="b-white rounded-xl drop-shadow-2xl p-4 pt-3 border shadow-md">
          {/* Adults */}
          {travellerType == "Indivisual" && (
            <>
              <div className="flex justify-between items-center pr-4 pb-3 text-sm select-none border-b">
                <h2 className="GTE_light">Adults</h2>
                <div className="flex gap-x-6 items-center">
                  <div
                    className="p-2 rounded-full bg-[#eee] cursor-pointer"
                    onClick={() =>
                      setParams(
                        "adults",
                        parseInt(adults) > 0 ? parseInt(adults) - 1 : 1
                      )
                    }
                  >
                    <GoDash></GoDash>
                  </div>
                  <div className="w-[10px]">
                    {parseInt(adults) ? parseInt(adults) : 1}
                  </div>
                  <div
                    className="p-2 rounded-full bg-white shadow-md cursor-pointer"
                    onClick={() => setParams("adults", parseInt(adults) + 1)}
                  >
                    <GoPlus></GoPlus>
                  </div>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center pr-4 pt-3 text-sm select-none">
                <h2 className="GTE_light">
                  Children ( 0 - 3 year ){" "}
                  <span className="text-xs text-[#ff612c]">Free</span>
                </h2>
                <div className="flex gap-x-6 items-center">
                  <div
                    className="p-2 rounded-full bg-[#eee] cursor-pointer"
                    onClick={() =>
                      setParams(
                        "children",
                        parseInt(children) > 0 ? parseInt(children) - 1 : 0
                      )
                    }
                  >
                    <GoDash></GoDash>
                  </div>
                  <div className="w-[10px]">{parseInt(children)}</div>
                  <div
                    className="p-2 rounded-full bg-white shadow-md cursor-pointer"
                    onClick={() =>
                      setParams("children", parseInt(children) + 1)
                    }
                  >
                    <GoPlus></GoPlus>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Group */}
          {travellerType == "Group" && (
            <div>
              <div className="flex justify-between items-center pr-4 text-sm select-none border-b pb-3">
                <h2 className="GTE_light">Group</h2>
                <div className="flex gap-x-6 items-center">
                  <div
                    className="p-2 rounded-full bg-[#eee] cursor-pointer"
                    onClick={() =>
                      setParams(
                        "group",
                        parseInt(group) > 0 ? parseInt(group) - 1 : 0
                      )
                    }
                  >
                    <GoDash></GoDash>
                  </div>
                  <div className="w-[10px]">{parseInt(group)}</div>
                  <div
                    className="p-2 rounded-full bg-white shadow-md cursor-pointer"
                    onClick={() => setParams("group", parseInt(group) + 1)}
                  >
                    <GoPlus></GoPlus>
                  </div>
                </div>
              </div>
              <span className="text-xs mt-2 block GTE_light">
                * A group must have at least 25 adults.
              </span>
              <span className="text-xs block GTE_light">
                * The price per group is {tourData?.tour?.currency?.symbol}{" "}
                {tourData?.tour?.price?.sharing_price * 25} .
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectTravellers;
