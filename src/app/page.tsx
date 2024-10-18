import AddPost from "./Components/AddPost"
import Feed from "./Components/Feed"
import LeftMenu from "./Components/LeftMenu"
import RightMenu from "./Components/RightMenu"
import Stories from "./Components/Stories"

const Homepage = () => {
  return (
    <div className="flex w-full bg-white h-screen gap-6">
      {/* left */}
      <div className="hidden bg-black text-white xl:block w-[20%]">
        <LeftMenu/>
      </div>
      {/* center */}
      <div className="w-full  lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      {/* right */}
      <div className="hidden bg-black lg:block w-[30%]">
        <RightMenu/>
      </div>
    </div>
  )
}

export default Homepage