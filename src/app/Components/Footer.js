"use client"
import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'




const Block = ({ description,url }) => {
  return (
    <div className='w-full h-fit flex pl-7 gap-2 pb-2'>
          <img src={url} className='w-6 h-6' alt='ac repairing shop' />
          <p className='text-white font-bold'>{description}</p>
    </div>
  )
}


const Footer = () => {

  const handleClick =(location)=>{
    document.getElementById(location).scrollIntoView({behavior:'smooth'});

  }

  return (
  <div  className='w-full min-h-[60vh] bg-[#181516] '  id="contactSection">
    <div className='w-full h-fit border-b-[1px] md:flex md:items-center md:justify-between md:pb-20 '>
      <div className='w-full h-fit md:w-[30%] '>
        <img src='/logo.png' className='w-32 h-32' alt='Electronics Logo' />
        <Block description="Al Nakheer Street,Fujairah" url="/location.png" />
        <Block description="03211096836" url="/phone.png" />
      </div>

      <ul className='w-full h-fit pl-7 pr-7 md:w-[40%]'>
         <li className='text-[#064d8a] text-2xl font-bold pt-5 '>SiteMap</li>
         <li onClick={()=>{handleClick("homeSection")}} className='text-white pt-2 font-bold border-b-[1px] mb-1 cursor-pointer hover:scale-105 transition-scale duration-300 hover:ml-5'>Home</li>
         <li onClick={()=>{handleClick("serviceSection")}} className='text-white pt-2 font-bold border-b-[1px] mb-1 cursor-pointer hover:scale-105 transition-scale duration-300 hover:ml-5'>Services</li>
         <li onClick={()=>{handleClick("portfolioSection")}} className='text-white pt-2 font-bold border-b-[1px] mb-1 cursor-pointer hover:scale-105 transition-scale duration-300 hover:ml-5'>Portfolio</li>
         <li onClick={()=>{handleClick("aboutSection")}} className='text-white pt-2 font-bold border-b-[1px] mb-1 cursor-pointer hover:scale-105 transition-scale duration-300 hover:ml-5'>About Us</li>
      </ul>

      <div className='w-full h-fit md:w-[40%] pl-7 pb-4 '>
        <p className='text-[#064d8a] text-2xl font-bold pt-5 '>Contact Us</p>
        <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Phone:</span>00971 50 8407963</p> 
        <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Phone:</span>00971 55 8404598</p> 
        <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Email:</span>miansadaqatali8686@gmail.com</p> 
      </div>
    
    </div> 
      <p className='w-full h-fit text-white text-[10px] pt-2 pb-5 text-center '>2024 © All Rights Reserved | A Site by Roshan Ali.</p>
    </div>
    
  )
}

export default Footer
