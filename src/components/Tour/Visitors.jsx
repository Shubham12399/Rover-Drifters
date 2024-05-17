import React from 'react'

const Visitors = ({visitors}) => {
  return (
    <>
    
    {visitors && (
            <div>
              <p>Visitors</p>
              <div className="mt-2 flex gap-x-0 ">
                {/* <img
            loading="lazy"
            src={img2}
            alt=""
            className="w-[50px] relative z-[4] rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
                {/* <img
            loading="lazy"
            src={img1}
            alt=""
            className="w-[50px] relative  z-[3] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          />
          <img
            loading="lazy"
            src={img3}
            alt=""
            className="w-[50px] relative z-[2]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
                {/* <img
            loading="lazy"
            src={img4}
            alt=""
            className="w-[50px] relative z-[1] -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          />
          <img
            loading="lazy"
            src={img}
            alt=""
            className="w-[50px] relative z-[0]  -ml-3 rounded-full aspect-square object-cover bg-white shadow-sm p-[2px]"
          /> */}
              </div>
            </div>
          )}
    </>
  )
}

export default Visitors