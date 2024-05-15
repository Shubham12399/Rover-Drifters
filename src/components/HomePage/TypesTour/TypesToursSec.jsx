import useFetch from "@/customehooks/useFetch";
import React from "react";
import { typeApi } from "@/services/apis";
import TypeTour from "./TypeTour";
const TypesToursSec = () => {
  const { typesTours, isLoading } = useFetch({
    queryKey: "typesTours",
    url: typeApi.GET_ALL_TYPE,
    varName: "typesTours",
  });
  console.log(typesTours);
  // price,tour_name,destination,description,currency,price
  // price: { sharing_price: 304, private_price: 398 },
  // _id: '65e71352829fbe61f6c203ee',
  // tour_name: 'Brenna Hudson',
  // destination: '65e4555c2b9e74dc144208cb',
  // city: '65e70d52e2c499a008fc0c00',
  // description: 'Alias aut illo quis ',
  // duration_hours: 60,
  // inclusions: [ 'Et corporis voluptat' ],
  // currency: { name: 'AED', symbol: 'AED' },
  // languages: [ 'english,hindi' ],
  // tour_type: '65e573e3d1308221715b9ff5',
  // images: [

  //     'https://www.swarnatara.tours/images/upload/days/Dubai-Delights-tour-agency-in-chennai-D1-3.jpg'
  // ],
  // itineries: [],
  // __v: 0,
  // itenries: []
  return (
    <div>
      {typesTours?.map((e) => {
        if (!e.tours.length) return;
        return (
          <TypeTour
            _id={e._id}
            title={e.name}
            paragraph={e.paragraph}
            key={e._id}
          ></TypeTour>
        );
      })}
    </div>
  );
};

export default TypesToursSec;
