"use client";

import Image from "next/image";
import LoginPage from "./login/page";
import DashNavi from "@/components/dashbord/dashNavi";
import Headder from "@/components/dashbord/headder";
import { useMe } from "@/lib/hooks/auth";

export default function Home() {


  const {data, isLoading, isError} = useMe(); // TODO: fetch user auth status

  return (
    <>
      {data ? (
        <div className="flex flex-col ">
          {/* <Navigation /> */}
          <div className=' container-padding h-full w-full flex justify-center items-center font-raleway text-3xl font-bold'>
            {/* Grid top */}
            <div className='flex w-full border-b border-t px-4 justify-between py-6'>
              <Headder />
            </div>
          </div>
          <div className='container-padding h-full w-full flex justify-center items-center  '>
            {/* Dashboard */}
            <div className='grid md:grid-cols-[280px_4fr] grid-cols-[55px_1fr] h-[90vh] w-full'>
              {/* navigation */}
              <div className='flex w-full border-r '>
                <DashNavi />
              </div>
              {/* Content pages */}
              <div className='flex border-l'>
                Welcome to the Earth Bound User Dashboard!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
