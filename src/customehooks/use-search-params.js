"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const useSearchQuery = () => {
    const searchSize = useSearchParams();
    const [paramsObj , setParamsObj] = useState({});
    useEffect(() => {
        window.location.search
            .split("?")[1]
            ?.split("&")
            .forEach((e) => {
                const key = e.split("=")[0];
                const value = decodeURIComponent(e.split("=")[1]);
                // paramsObj.current[key] = value;
                setParamsObj({[key]:value})
            });
    }, [searchSize]);
    return paramsObj;
};

export default useSearchQuery;
