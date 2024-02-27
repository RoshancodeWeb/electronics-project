"use client"
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { MyContext }  from '../Helper/Context'



const Navbar = () => {


  const  handleClick = (location)=>{
          document.getElementById(location).scrollIntoView(
            {behavior:'smooth'}
            );
            setshowMenu(!showMenu);
        
         }
  const handleClickOnMd =(location)=>{
      document.getElementById(location).scrollIntoView(
      {behavior:'smooth'}
      );
  }


  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className={showMenu==false?'w-[95%] left-[50%]  transition-[height] ease-linear  mt-5 translate-x-[-50%] h-[15vh] pr-2  bg-[#181516]  box-border rounded fixed z-50':'w-[95%] left-[50%] transition-[height] ease-linear mt-5 translate-x-[-50%] h-[50vh]  pr-2  bg-[#181516]  box-border rounded fixed z-50'}>
       
       <div className='w-full h-fit flex justify-between items-center'>
          <img src="/logo.png" className='w-20 h-20 object-cover' alt="Electronics Logo" />
          
          
          <ul className={showMenu==false?"w-fit h-fit font-bold text-white hidden cursor-pointer pl-5 fixed top-20 md:relative md:top-0  md:flex md:gap-5":"w-fit h-fit font-bold text-white   pl-5 fixed top-20 flex flex-col md:relative md:top-0 md:flex gap-4 "} >
            <li  className='hover:scale-110 hover:ml-2 transition-all ease-linear'>
              <span className='md:hidden'  onClick={()=>{handleClick("homeSection")}}>Home</span> 
              <span className='hidden md:block'  onClick={()=>{handleClickOnMd("homeSection")}}>Home</span>
            </li>
            <li  className='hover:scale-110 hover:ml-2 transition-all ease-linear'>
              <span className='md:hidden' onClick={()=>{handleClick("portfolioSection")}}>Portfolio</span>
              <span className='hidden md:block'  onClick={()=>{handleClickOnMd("portfolioSection")}}>Portfolio</span>
            </li>
            <li  className='hover:scale-110 hover:ml-2 transition-all ease-linear'>
              <span className='md:hidden' onClick={()=>{handleClick("serviceSection")}}>Services</span>
              <span className='hidden md:block'  onClick={()=>{handleClickOnMd("serviceSection")}}>Services</span>
            </li>
            <li  className='hover:scale-110 hover:ml-2 transition-all ease-linear'>
            <Link href="/Hire">Contact Us</Link> 
            </li>
          </ul>

          <div className='w-fit h-fit flex'>
             <i onClick={()=>{ setshowMenu(!showMenu);}} className={showMenu==false?"ri-menu-3-line hover:scale-110 text-white font-bold text-xl transition-all ease-linear md:hidden":"ri-close-line hover:scale-125 text-white font-bold text-xl transition-all ease-linear md:hidden"}></i>
             <button className='hidden md:block text-white bg-[#064D8A] px-4 py-4  font-bold cursor-pointer  h-full'>Appointment-Call us</button>
          </div>

       </div>
       
    </div>
  )
}

export default Navbar
