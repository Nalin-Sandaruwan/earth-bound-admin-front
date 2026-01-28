'use client'

import React from 'react'
import { DiamondPercent, History, UserPen,House } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const userNavigation = [
    {
        id: 1,
        label: 'Home',
        path: '/',
        icon: House
    },
    {
        id: 2,
        label: 'Created Projects',
        path: '/user/created-projects',
        icon: DiamondPercent
    },
    {
        id: 3,
        label: 'Earnnings',
        path: '/user/earnnings',
        icon: History
    },
    {
        id: 4,
        label: 'Profile Details',
        path: '/user/edit-profile',
        icon: UserPen
    },
    
];

const DashNavi = () => {
    const pathname = usePathname(); // Get current route

    return (
        <div className='flex flex-col w-full font-raleway gap-2 py-5'>
            {userNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                    <Link 
                        key={item.id} 
                        href={item.path}
                        className={`flex h-fit gap-3 py-4 w-full  rounded-l-2xl  pl-4 transition-colors ${
                            isActive 
                                ? 'bg-[#D1F8A1] text-green-900  border-r-8 border-green-900' 
                                : ' '
                        }`}
                    >
                        <Icon  />
                        <p className='md:block hidden' >{item.label}</p>
                    </Link>
                );
            })}
        </div>
    )
}

export default DashNavi
