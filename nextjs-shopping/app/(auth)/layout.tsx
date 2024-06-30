import Logo from '@/components/Logo'
import Image from 'next/image'
import React from 'react'

interface AuthLayoutProps {
    children:React.ReactNode
}
const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <main className='h-screen flex justify-center items-center bg-one'>
        <div className='hidden lg:block w-1/2 h-full'>
        <Image alt='login'
        width={1080}
        height={1920}
        src="/login.jpg"
        className='h-full w-full object-cover object-top'
        />

        </div>
        <div className='w-full lg:w-1/2 p-10 flex flex-col justify-center items-center'>
        <div className='flex items-center mb-6'>
            <Logo/>
        </div>
        {children}

        </div>
    </main>
  )
}

export default AuthLayout