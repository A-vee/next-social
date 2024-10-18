import React from 'react'

const AddPost = () => {
  return (
    <div className='w-full  flex flex-col rounded-md gap-4 justify-between p-4 shadow-lg'>
        {/* image */}
       
        {/* post */}
        <div></div>
        {/* input */}
        <div className='flex flex-1 justify-center items-center gap-4'> 
        <img src="https://i.pinimg.com/236x/19/04/7c/19047c8421b6333baf892c6ab601c9a0.jpg" alt="" width={48} height={48} className='w-12  h-12 rounded-full object-cover' />
        <textarea placeholder='Whats on your mind?' name="" id="" className='focus:outline-none scrollbar-hide flex-1 p-2 rounded-md bg-green-100 text-md'></textarea>
        <img src="emoji.png" alt="" width={20} height={20} className='w-5 h-5  rounded-full object-cover cursor-pointer self-end'/>
        </div>
       {/* post option */}
       <div className='flex w-full pl-[4rem] items-start justify-start gap-4 text-gray-400 mt-2'>
        <div className='flex text-sm justify-center items-center gap-2 cursor-pointer'>
            <img src="addimage.png" width={20} height={15} alt="" />
            <span>Image</span>
        </div>
        <div className='flex text-sm justify-center items-start gap-2 cursor-pointer'>
            <img src="addevent.png" width={20} height={15} alt="" />
            <span>Event</span>
        </div>
        <div className='flex text-sm justify-center items-start gap-2 cursor-pointer'>
            <img src="addVideo.png" width={20} height={20} alt="" />
            <span>Video</span>
        </div>
       </div>
    </div>
    
  )
}

export default AddPost
