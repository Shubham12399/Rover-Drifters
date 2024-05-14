import apiconnector from "@/services/apiconnector";
import { useQuery } from "@tanstack/react-query";

const useFetch = ({
  queryKey,
  queryFn = null,
  url,
  method = "GET",
  staleTime = Infinity,
  varName = "data",
  resName = "data",
  defaultRes = false
}) => {

  const result = useQuery({
    queryKey: queryKey,
    queryFn: queryFn
      ? queryFn
      : async () => {
          const res = await apiconnector(method, url);
          return  (!defaultRes ? res?.data[resName] : res?.data);
        },
    staleTime: staleTime,
  });
  
  return { [varName]: result.data, ...result  };
};

export default useFetch;
