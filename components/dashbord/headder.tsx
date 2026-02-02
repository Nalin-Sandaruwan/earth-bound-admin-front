import React from 'react'
import { Button } from '../ui/button'
import { useLogout } from '@/lib/hooks/auth';
import { useRouter } from 'next/navigation';


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
      toast.success("Sucessfully Logged Out")
    } catch (error) {
      console.error('An error occurred during logout', error)
      
      
    }
  }
    return (
        <>
            <div className='md:text-2xl text-lg font-bold'>Admin Page</div>
            <Button  variant="outline" size="sm">Logout</Button>
        </>
    )
}

export default Headder
