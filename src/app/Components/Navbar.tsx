import Link from "next/link"
import Mobilemenu from "./Mobilemenu"

const Navbar = () => {
  return (
    <div className="h-[8vh] w-full justify-between items-center
    flex  text-white">
      {/* left */}
      <div className="md:hidden lg:block w-[20%] text-xl font-bold ">
        <Link href="/">GreenSocial</Link>
      </div>
      {/* center */}
      <div className="hidden md:flex gap-6 w-[50%]">
        <Link href='/' className="flex gap-2">
        <img src="home.png" alt="" width={22} height={18} />
        <span>Home</span>
        </Link>
        <Link href='/' className="flex gap-2">
        <img src="friends.png" alt="" width={22} height={18} />
        <span>Friends</span>
        </Link>
        <Link href='/' className="flex gap-2">
        <img src="stories.png" alt="" width={22} height={18} />
        <span>Stories</span>
        </Link>
      </div>
      {/* right */}
      <div className="w-[30%] flex gap-4 justify-end items-center lg:justify-end lg:gap-8">
        <Mobilemenu/>
      </div>
    </div>

  )
}

export default Navbar
