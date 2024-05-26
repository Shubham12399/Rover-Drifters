import React from 'react'
import TourCard from '../TypesTour/TourCard';
import TripCard from '@/components/TripCard';

const TravelsFirstChoice = () => {
  return (
    <div className='px-4 '>
        <h1>Traveller &qote;s first choice</h1>
        <div className='flex gap-x-3 py-3'>
            <TripCard></TripCard>
        </div>
    </div>
  )
}

export default TravelsFirstChoice;