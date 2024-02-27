import React from 'react'
import Header from '../HireComponents/Header'
import { BackHome } from '../MehanicComponents/Team'
import Location from '../HireComponents/Location'
import Contact from '../HireComponents/Contact'
import Footer from '../HireComponents/Footer'

const page = () => {
  return (
    <div className='bg-[#F7F7FF] w-full min-h-[100vh]'>
       
       <Header />
       <p className='text-center text-xl md:text-2xl font-bold text-[#086EB4] pt-2'>Contact Us</p>
       <BackHome pageName="Contact Us"/>
       <Location />
       <Contact />
       <Footer/>

    </div>
  )
}

export default page
