"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { IoEarth } from "react-icons/io5";
import dynamic from "next/dynamic";
import GetModalMappedData from "./GetModalMappedData";
import { useSelector } from "react-redux";

const Modal = dynamic(() => import("./Modal"));

const SelectModal = ({
  isSelectModal,
  setIsSelectModal,
  selectValue,
  setSelectValue,
  type,
}) => {
  const [mappedData, setMappedData] = useState([]);
  // const [Destination,setDestination] = useDesti
  // const {data , refetch} = useQuery({
  //   queryKey:["selectionOptions"],
  //   queryFn:async () => {
  //       const response = await axios.get("http://localhost:4000/api/v1/types");
  //       console.log(response);
  //       return response;
  //   },
  //   staleTime:Infinity
  // });
  // const getSelectionOption = useCallback(() => {
  //   (async () => {
  //     const res = await apiconnector(
  //       "get",
  //       typeApi.GET_ALL_TYPE
  //     );
  //     if(!res?.data?.success){
  //      console.log(res);
  //     }
  //     console.log(res);
  //     return res; // Return the Pokémon data
  //   })();
  // }, []);
  const allDestinations = useSelector((store) => store.allDestinations);
  const allTypes = useSelector((store) => store.allTypes);

  const retriveDestinationAndType = useCallback(async () => {
    setMappedData([]);
    if (type == "tourType") {
      // console.log(TourType);
      setMappedData([...allTypes]);
    }
    if (type == "tourDestination") {
      // console.log(Destinations);
      setMappedData([...allDestinations]);
    }
    return () => {
      //return void
      return;
    };
  }, [type, allDestinations, allTypes]);

  // useEffect(() => {
  //   retriveDestinationAndType();
  // }, [retriveDestinationAndType]);

  const handleSelectValue = useCallback(
    (value) => {
      setSelectValue(value);
      setTimeout(() => {
        setIsSelectModal(false);
      }, 300);
    },
    [setSelectValue, setIsSelectModal]
  );

  useEffect(() => {
    if (isSelectModal) {
      retriveDestinationAndType();
    }
  }, [isSelectModal, retriveDestinationAndType]);

  return (
    <>
      {isSelectModal && (
        <Modal
          title={
            <div className="flex items-center gap-x-2 GTE_light">
              {type == "tourDestination" ? (
                <> Choose Destination</>
              ) : type == "tourType" ? (
                <> Choose Type</>
              ) : null}
              <IoEarth className="text-richblack-500"></IoEarth>
            </div>
          }
          setModal={setIsSelectModal}
          isSelectModal={isSelectModal}
        >
          <div className="w-fit mx-auto">
            <div className="flex justify-start flex-wrap gap-y-1 my-2">
              <Suspense fallback="">
                <GetModalMappedData
                  mappedData={mappedData}
                  handleSelectValue={handleSelectValue}
                  selectValue={selectValue}
                ></GetModalMappedData>
              </Suspense>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectModal;
