import React from 'react'
import TourCard from '../TypesTour/TourCard';
import TripCard from '@/components/TripCard';
import { PiStarFourBold } from "react-icons/pi";
import { WiStars } from "react-icons/wi";

const TravelsFirstChoice = () => {
  return (
    <div className='max-w-maxWidthContent mx-auto md:my-10'>
        <h1 className='text-lg font-medium flex px-4'>Traveller first choice <WiStars className=' text-3xl -mt-1'></WiStars>
        </h1>
        <div className='flex gap-x-3 py-3 hide-scrollbar overflow-auto px-4'>
            <TripCard img={"https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1699632197159"}></TripCard>
            <TripCard img={"https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1699632197159"}></TripCard>
            <TripCard img={"https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1699632197159"}></TripCard>
        </div>
    </div>
  )
}

export default TravelsFirstChoice;