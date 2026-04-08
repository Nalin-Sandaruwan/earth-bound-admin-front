'use client';

import React, { useState } from 'react'
import Readeem from '../readeam point/readeem'
import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign, CheckCircle, XCircle } from 'lucide-react'

interface HistoryCardProps {
  csrId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isApproved: boolean;
  totalAmount: number;
}

const HistoryCard = ({ csrId, name, description, startDate, endDate, isApproved, totalAmount }: HistoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full flex-row max-w-sm items-center py-3 px-2 rounded-xl border font-raleway'
        whileHover={{
          scale: 1.02,
          borderColor: '#8DC63F',
          boxShadow: '0 4px 20px rgba(141, 198, 63, 0.3)',
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className='flex flex-col mx-4 gap-2 w-full'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-start justify-between gap-2'>
              <h3 className='font-bold text-lg line-clamp-1'>{name}</h3>
              {isApproved ? (
                <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0' />
              ) : (
                <XCircle className='h-5 w-5 text-red-600 flex-shrink-0' />
              )}
            </div>
            <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>
          </div>
          
          <div className='flex w-full flex-row gap-2 justify-between items-end'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-1 text-sm text-gray-600'>
                <Calendar className='h-4 w-4' />
                <span>{formatDate(endDate)}</span>
              </div>
            </div>
            
            <div className='flex flex-col items-end'>
              <span className='text-xs text-gray-500'>Earnings</span>
              <div className='flex items-center gap-1'>
                <DollarSign className='h-5 w-5 text-green-600' />
                <p className='font-raleway font-bold text-2xl text-green-600'>
                  {totalAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HistoryCard
