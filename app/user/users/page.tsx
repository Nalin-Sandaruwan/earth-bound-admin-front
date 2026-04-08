'use client';

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Headder from '@/components/dashbord/headder'
import Offercomp from '@/components/offer compo/offercomp'
import DashNavi from '@/components/dashbord/dashNavi'

import axiosClient from '@/lib/api/axios-client'
import { Spinner } from '@/components/ui/spinner';
import Tabel from './tabel/tabel';


const ENDPOINTS: Record<string, string> = {
    "All User": "/auth/getAllUsers",
    "All Business": "/auth/getAllBusinesses",
    "All Organizations": "/auth/getAllOrganizers",
}

const fetchUsers = async (type: string) => {
    const endpoint = ENDPOINTS[type] || ENDPOINTS["All User"]
    const res = await axiosClient.get(endpoint)
    return res.data
}

const page = () => {
    const [selectedType, setSelectedType] = useState<string>("All User")

    const { data, isLoading, error } = useQuery({
        queryKey: ['users', selectedType],
        queryFn: () => fetchUsers(selectedType),
        // keepPreviousData: true,
    })

    return (
        <div>

            <div className='container-padding h-full w-full flex justify-center items-center font-raleway text-3xl font-bold'>
                <div className='flex w-full border-b border-t px-4 justify-between py-6'>
                    <Headder />
                </div>
            </div>

            <div className='container-padding h-full w-full flex justify-center items-center'>
                <div className='grid md:grid-cols-[280px_4fr] grid-cols-[55px_1fr] h-[90vh] w-full'>
                    <div className='flex w-full border-r'>
                        <DashNavi />
                    </div>

                    <div className='flex flex-col border-l p-6 font-raleway justify-between'>
                        <div className='flex  flex-col '>

                            <div className='flex w-[calc(100vw-110px)]  md:flex-row flex-col md:w-full md:justify-between md:items-center border-b pb-8'>
                                <div className='flex flex-col w-fit'>
                                    <h2 className='text-2xl font-bold'>Created Users</h2>
                                    <p>Redeem your star points for exciting offers!</p>
                                </div>
                                <Select value={selectedType} onValueChange={setSelectedType}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select User Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All User">All User</SelectItem>
                                        <SelectItem value="All Business">All Business</SelectItem>
                                        <SelectItem value="All Organizations">All Organizations</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>


                            {/* users show case with with tabele */}
                            <div className='w-[calc(100vw-110px)] md:w-full overflow-x-auto pb-2'>
                                <div className='min-w-[800px]'>
                                    {/* {JSON.stringify(data)} */}
                                    {isLoading && <div className='flex w-full h-[500px] justify-center items-center'><Spinner/></div>}
                                    {error && <div>Error loading users</div>}
                                    {!isLoading && !error && <Tabel data={data} />}
                                </div>
                            </div>
                           
                        </div>
                        <div className='flex'>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive >1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" >
                                            2
                                        </PaginationLink>
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
