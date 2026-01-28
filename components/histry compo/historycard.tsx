import React from 'react'
import Readeem from '../readeam point/readeem'

const HistoryCard = () => {
  return (
    <div className='flex w-full  flex-row max-w-sm  items-center py-3  rounded-xl border font-raleway '>
      <div className='flex flex-col mx-4 gap-1 w-full'>
        <div className='flex flex-col gap-0'>
          <h3 className='font-bold text-lg line-clamp-1'>Samagi Sharamadhana Campaign</h3>
          <p className='text-gray-400'>Location</p>
        </div>
        <div className='flex w-full  flex-row gap-2 justify-between items-end'>
          
            <p>Date Doneted on 2025/25/01</p>
            <div className='flex flex-col'>
              <Readeem/>
              <p>Rs. 2000</p>
            </div>

        </div>
      </div>

    </div>
  )
}

export default HistoryCard
