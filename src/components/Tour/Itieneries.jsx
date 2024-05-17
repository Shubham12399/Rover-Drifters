import React from 'react'

const Itieneries = ({tour}) => {
    
  // get Meriadian date formate 
  const getMeridianTime = (time) => {
    const result = {};
    // get Day
    let day = 0;
    if (time.split(":")[0] > 12) {
      result.meridian = "PM";
      day = time.split(":")[0] - 12;
    } else {
      result.meridian = "AM";
      day = time.split(":")[0];
    }
    result.time = `${day}:${time.split(":")[1]}`;
    return result;
  };

  return (
    <div>
    <div className="pt-2">
      <h3 className="text-xs text-[#ff612c]">Destination</h3>
      <h2 className="mt-1 text-sm">
        {tour?.destination?.name}
      </h2>
    </div>

    <div className="my-2">
      <h3 className="text-xs text-[#ff612c]">City</h3>
      <h2 className="mt-1 text-sm">{tour?.city?.name}</h2>
    </div>
    <hr />
    <div className="my-2">
      <h3 className="text-xs text-[#ff612c]">Itieneries Details</h3>
      {tour?.itenries?.map((e, i) => {
        // itenrary_name: 'Uriah Hess',
        //       itenery_from_time: '04:58',
        //       itenery_to_time
        return (
          <div className="flex gap-x-2 mt-2" key={i + 1}>
            <span className="text-xs text-gray-400">{i + 1}</span>
            <div>
              <h3 className="text-sm">{e?.itenrary_name}</h3>
              <div>
                <h2 className="mt-1 text-xs">
                  {getMeridianTime(e?.itenery_from_time)?.time}{" "}
                  {getMeridianTime(e?.itenery_from_time)?.meridian} -{" "}
                  {getMeridianTime(e?.itenery_to_time)?.time}{" "}
                  {getMeridianTime(e?.itenery_to_time)?.meridian}
                </h2>
              </div>
              <img src={e?.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
    <div className="pt-2">
      <h3 className="text-xs text-[#ff612c]">Duration Hours</h3>
      <h2 className="mt-1 text-sm">
        {tour?.duration_hours}
      </h2>
    </div>
  </div>
  )
}

export default Itieneries;