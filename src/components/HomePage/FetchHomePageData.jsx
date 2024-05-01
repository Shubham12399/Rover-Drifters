import apiconnector from "@/services/apiconnector";
import { typeApi } from "@/services/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";
const FetchHomePageData = () => {
  const { data } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      // setState({ name: "shubham kumar" });
      // return { name: "shubham kumar" };
      const res = await apiconnector("GET", typeApi.GET_ALL_TYPE);
      return res;
    },
    // staleTime: Infinity,
  });
  return <></>;
};

export default FetchHomePageData;
