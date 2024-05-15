"use client";

import useFetch from "@/customehooks/useFetch";
import { typeApi } from "@/services/apis";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect } from "react";

const TourCard = React.lazy(() => import("../HomePage/TypesTour/TourCard"));
const PostsSkl = React.lazy(() => import("../skelton/PostSkl"));
const PaginationComp = React.lazy(() => import("../utils/PaginationComp"));

const TypeTours = () => {
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");
  const selectedIdQuery = searchParams.get("type_id");
  const selectedContryIdQuery = searchParams.get("con_id");
  const pathname = usePathname();

  const { typeIdTours, isLoading } = useFetch({
    queryKey: ["typeIdTours" + selectedIdQuery + (pageQuery || 1)],
    method: "GET",
    url:
      typeApi.GET_TYPE_BY_ID +
      "/" +
      selectedIdQuery +
      `?page=${pageQuery || 1}&limit=10`,
    varName: "typeIdTours",
    defaultRes: true,
  });

  // Setting current page
  // useEffect(() => {
  //   if (typeIdTours?.currentPage) {
  //     setActivePage(typeIdTours?.currentPage);
  //   }
  // }, [typeIdTours]);

  useEffect(() => {
    if (!pageQuery) {
      if (typeIdTours?.currentPage) {
        const params = new URLSearchParams(searchParams);
        params.set("page", 1);
        history.replaceState(null, "", `${pathname}?${params.toString()}`);
      }
    }
  }, [typeIdTours, pathname, pageQuery, searchParams]);

  const nextPage = useCallback(() => {
    if (pageQuery === typeIdTours?.totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", pageQuery + 1);
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
    // setActivePage(prev => prev + 1);
  }, [pathname, searchParams, pageQuery, typeIdTours]);

  const prevPage = useCallback(() => {
    if (pageQuery === 1) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", pageQuery - 1);
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
    // setActivePage(prev => prev - 1);
  }, [pathname, searchParams, pageQuery]);

  return (
    <div>
      <div className="mt-3 flex justify-start md:justify-start gap-y-2 gap-x-6 md:gap-x-4 md:mt-4 overflow-auto hide-scrollbar pb-6 md:pr-3 flex-wrap w-fit md:w-full mx-auto ">
        {!isLoading &&
          typeIdTours?.tourType &&
          typeIdTours?.tourType?.tours?.filter(e=>e.destination === selectedContryIdQuery)?.map((e) =>(
            <Suspense key={e._id} fallback="">
              <TourCard {...e}></TourCard>
            </Suspense>
          ))}
        {isLoading && (
          <Suspense fallback="">
            <PostsSkl></PostsSkl>
          </Suspense>
        )}
      </div>
      <div className="flex justify-end ">
        <Suspense fallback="">
          <PaginationComp
            pageQuery={pageQuery}
            // setActivePage={setActivePage}
            totalPages={typeIdTours?.totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
          ></PaginationComp>
        </Suspense>
      </div>
    </div>
  );
};

export default TypeTours;
