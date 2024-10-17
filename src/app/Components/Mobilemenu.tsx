"use client"
import React, { useState } from 'react'
import Link from 'next/link'
const Mobilemenu = () => {
  const [set, uset] = useState(false)
  return (
    <div className='md:hidden'>
      <div className='flex-col cursor-pointer flex gap-1 justify-center items-center' onClick={() => {
        uset((prev) => !prev)
      }
      }
      >
        <div className={`w-6 h-[3px] bg-white ${set ? "rotate-45 transform" : ""} origin-left ease-in-out duration-200`} />
        {/* Arrow head (top) */}
        <div className={`w-6 h-[3px] bg-white ${set ? "opacity-0 " : ""}`} />
        {/* Arrow head (bottom) */}
        <div className={`w-6 h-[3px] bg-white ${set ? "opacity-100 translate-y-0.5 transform -rotate-45" : ""} origin-left ease-in-out duration-200`} />


      </div>
      {
        set && (
          <div className='w-full left-0 bg-green-700 text-white justify-center flex-col gap-3 flex items-center my-[1rem] absolute h-screen '>
            <Link href="/" className='text-2xl'>Home</Link>
            <Link href="/" className='text-2xl'>Profile</Link>
            <Link href="/" className='text-2xl'>Friends</Link>
            <Link href="/" className='text-2xl'>About</Link>
            <Link href="/" className='text-2xl'>About</Link>
            <Link href="/" className='text-2xl'>About</Link>
          </div>
        )

      }
    </div>
  )
}

export default Mobilemenu
