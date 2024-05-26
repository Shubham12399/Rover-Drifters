import React from 'react'

const TripCard = ({img}) => {
  return (
    <div className='min-w-[190px] w-[190px] rounded-md border'>
        <img src={img} alt="" className='rounded-tl-md rounded-tr-md h-[130px] w-full object-cover' />
        <div className='px-3 py-2'>
        <p className='text-xs text-gray-500'>London • Moscow</p>
            <h2 className='text-base font-medium'>Moscow Aladdin City</h2>
            {/* <span>Bestseller</span> */}
            <p className='text-sm mt-1'>Rs 3300</p>
            <div className='flex flex-wrap mt-2'>
              <span className='text-xs bg-gray-100 rounded-sm px-1'>Adventure</span>
            </div>
        </div>
    </div>
  )
}

export default TripCard;