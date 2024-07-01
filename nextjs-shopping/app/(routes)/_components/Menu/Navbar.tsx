import Logo from '@/components/Logo'
import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <header className=' flex py-4 border-b border-one bg-one'>

        <div className='container flex items-center justify-between mx-auto px-4'>
            <Logo/>
            <Search/>
            <div className='space-x-4 flex items-center'></div>

        </div>
        
    </header>
  )
}

export default Navbar