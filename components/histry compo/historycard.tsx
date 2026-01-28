'use client';

import React, { useState } from 'react'
import Readeem from '../readeam point/readeem'
import { motion } from 'framer-motion'

const HistoryCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full  flex-row max-w-sm  items-center py-3  rounded-xl border font-raleway '
        whileHover={{
          scale: 1.02,
          borderColor: '#8DC63F',
          // backgroundColor: '#EFFFDB',
          boxShadow: '0 4px 20px rgba(141, 198, 63, 0.3)',
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className='flex flex-col mx-4 gap-1 w-full'>
          <div className='flex flex-col gap-0'>
            <h3 className='font-bold text-lg line-clamp-1'>Samagi Sharamadhana Campaign</h3>
            <p className='text-gray-400'>Location</p>
          </div>
          <div className='flex w-full  flex-row gap-2 justify-between items-end'>

            <p>Finished Date</p>
            <div className='flex flex-col'>
              Earnnings
              <p className='flex font-raleway font-bold text-2xl'>Rs. 2000</p>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HistoryCard
