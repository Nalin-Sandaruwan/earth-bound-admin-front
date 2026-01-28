import React from 'react'
import Readeem from '../readeam point/readeem'


const Offercomp = () => {
  return (
    <div className='flex w-full  flex-row max-w-sm justify-center items-center py-3 px-4 rounded-xl border font-raleway'>
        <div className='flex  '>
            <div className='w-14 h-14 rounded-full bg-gray-300'>

            </div>
        </div>
        <div className='flex flex-col ml-4 gap-1'>
            <h3 className='font-bold text-lg line-clamp-1'>50% Off on Arpico</h3>
            <div className='flex flex-row gap-2'>
                <p className='font-semibold'>Food</p>
                <Readeem/>

            </div>
            <p className='text-sm line-clamp-1'>Redeem 500 star points to get a 50% discount on our range of eco-friendly products, including reusable bags, bamboo utensils, and more.</p>
        </div>
      
    </div>
  )
}

export default Offercomp
