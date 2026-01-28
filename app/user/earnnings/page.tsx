

import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Headder from '@/components/dashbord/headder'
import DashNavi from '@/components/dashbord/dashNavi'
import HistoryCard from '@/components/histry compo/historycard'
import { Button } from '@/components/ui/button'
import ViewChart from '@/components/earnning/viewchart'




const page = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className='container-padding h-full w-full flex justify-center items-center font-raleway text-3xl font-bold'>
        <div className='flex w-full border-b border-t px-4 justify-between py-6'>
          <Headder />
        </div>
      </div>

      <div className='container-padding h-full w-full flex justify-center items-center'>
        <div className='grid md:grid-cols-[280px_4fr] grid-cols-[55px_1fr] h-[80vh] w-full'>
          <div className='flex w-full border-r'>
            <DashNavi />
          </div>

          <div className='flex flex-col border-l p-6 font-raleway justify-between'>
            <div className='flex  flex-col '>
              <div className='flex  flex-row justify-between items-center '>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold'>Donations</h2>
                  <p>Donations</p>
                </div>

                <ViewChart/>
                
              </div>

              <div>

              </div>
              {/* Add your redeem offer content here */}
              <div className='w-full md:grid-cols-3 grid-cols-1 grid gap-4 my-6'>
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />

              </div>
            </div>
            <div className='flex mb-20'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default page
