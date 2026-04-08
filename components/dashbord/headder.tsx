'use client';

import React from 'react'
import { Button } from '../ui/button'
import { useLogout } from '@/lib/hooks/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


const Headder = () => {

    const { data, isPending, mutate } = useLogout();
    const router = useRouter();

const handleLogout = () => {
    try {
      mutate(undefined, {
        onSuccess: () => {
          // cookies are already set by backend 🎉
          router.push('/login')
          router.refresh()
        }
      })
      toast.success("Successfully Logged Out")
    } catch (error) {
      console.error('An error occurred during logout', error)
      toast.error("Failed to logout. Please try again.")
      
    }
  }
    return (
        <>
            <div className='md:text-2xl text-lg font-bold'>Admin Page</div>
            <Button  variant="outline" size="sm" onClick={handleLogout} >Logout</Button>
        </>
    )
}

export default Headder
