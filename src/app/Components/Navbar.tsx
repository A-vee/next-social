"use client"
import Link from "next/link"
import Mobilemenu from "./Mobilemenu"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
  return (
    <div className="h-[8vh] w-full justify-between items-center
    flex  text-white">
      {/* left */}
      <div className="md:hidden lg:block w-[20%] text-xl font-bold ">
        <Link href="/">GreenSocial</Link>
      </div>
      {/* center */}
      <div className="hidden md:flex gap-7 w-[50%] items-center justify-between">
        <Link href='/' className="flex justify-between items-center gap-1">
          <img src="home.png" alt="" width={22} height={10} />
          <span className="text-sm">Home</span>
        </Link>
        <Link href='/' className="flex justify-between items-center gap-1">
          <img src="friends.png" alt="" width={22} height={10} />
          <span className="text-sm">Friends</span>
        </Link>
        <Link href='/' className="flex justify-between items-center gap-1">
          <img src="stories.png" alt="" width={22} height={10} />
          <span className="text-sm">Stories</span>
        </Link>

        <div className="pl-4 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search..."/>
        <button type="submit" className="absolute right-0 top-0 mt-[0.4rem] mr-4">
          <svg className="text-green-700 h-5 w-5 fill-current" 
            viewBox="0 0 56.966 56.966"  
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex gap-4 justify-end items-center lg:justify-end lg:gap-8">
        <ClerkLoading>
          <svg className="h-6 w-6 animate-spin" viewBox="0 0 100 100"></svg>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer flex gap-[0.5rem] md:gap-3">
              <div>
                <img className="hidden md:block" src="/people.png" alt="" width={25} height={20} />
              </div>

              <div className="flex items-center justify-center">
                <img className="" src="/notifications.png" alt="" width={25} height={20} />
              </div>


              <div> <img className="hidden md:flex items-center justify-center" src="/messages.png" alt="" width={25} height={20} /></div>



              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-1 text-sm">
              <Link href="/sign-in">
                <img src="/sign.png" alt="" width={24} height={24} />
              </Link>
              <Link href="sign-in" className="hidden md:block text-sm">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <Mobilemenu />
      </div>
    </div>

  )
}

export default Navbar
