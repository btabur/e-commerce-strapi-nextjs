import React from 'react'
import Footer from './_components/Footer'
import Navbar from './_components/Menu/Navbar'

interface RouterLayoutProbs {
    children: React.ReactNode
}
const RouterLayout = ({children}:RouterLayoutProbs) => {
  return (
    <main>
        <Navbar/>
        <div className='min-h-screen'>
            {children}
        </div>
        <Footer/>
    </main>
  )
}

export default RouterLayout