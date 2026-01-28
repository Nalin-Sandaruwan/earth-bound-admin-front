
import DashNavi from '@/components/dashbord/dashNavi'
import Headder from '@/components/dashbord/headder'
import Logout from '@/components/dashbord/logout'
import { EditProfile } from '@/components/edit-profile/edit-profile'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className='container-padding h-full w-full flex justify-center items-center font-raleway text-3xl font-bold'>
        <div className='flex w-full border-b border-t px-4 justify-between py-6'>
          <Headder />
        </div>
      </div>

      <div className='container-padding h-full w-full flex justify-center items-center font font-raleway'>
        <div className='grid md:grid-cols-[280px_4fr] grid-cols-[55px_1fr] h-[80vh] w-full'>
          <div className='flex w-full border-r flex-col justify-between pb-12'>
            <DashNavi />
            <Logout />
          </div>

          <div className='grid grid-cols-2 grid-flow-row-dense border-l p-6'>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Donatation Intaractions</h2>
              <p>Donation INteraction</p>

              {/* Add your edit profile form here */}
              {/* <DonationChart /> */}
            </div>
            <div className='flex flex-col w-full  ml-16'>
              <h2 className='text-2xl font-bold '>Edit Profile</h2>
              <p className='mb-8'>Update your profile information</p>
              {/* Add your edit profile form here */}
              <div className='flex w-full items-end'>


                <EditProfile />

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page
