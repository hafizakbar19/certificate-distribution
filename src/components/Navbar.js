import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between mx-10 bg-[#dfe7f6] shadow-md'>
        <Image
              src="/smit-logo.jpg"
              alt="SMIT Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

            {/* <button className='bg-[#3b71ca] h-10 rounded-md px-3 mx-5 my-6 text-white'>Logout</button> */}
        </div>
       
    </>
  )
}

export default Navbar