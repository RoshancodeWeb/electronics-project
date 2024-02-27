import React from 'react'
import Header from '../HireComponents/Header'
import Team from '../MehanicComponents/Team'
import Footer from '../HireComponents/Footer'

const page = () => {
  return (
    <div className='bg-[#F7F7FF] w-full min-h-[100vh]'>
      <Header/>
      <Team />
      <Footer/> 
    </div>
  )
}

export default page
