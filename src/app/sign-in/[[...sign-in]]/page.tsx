import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='justify-center h-[calc(100vh-8vh)] items-center flex'>
            <SignIn />
        </div>
      )
}