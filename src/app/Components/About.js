"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'

const AboutComponents = ({ title,subtitle,icon }) => {
  return (
    <div className='w-full h-fit flex mb-3'>
       <img  className='w-fit h-fit mr-1 mt-[2px]' src="/circleTick.png"/>
       <div className='w-full h-fit'>
            <p className='text-lg font-bold'>{title}</p>
            <p className='text-sm text-slate-600'>{subtitle}</p>
       </div>
    </div>
  )
}




const About = () => {
 

  return (
    <div className='w-full min-h-fit bg-[#F7F7FF] md:flex md:flex-row-reverse' id='aboutSection'>
        <div className='w-full h-fit md:h-[80vh]  md:w-[50%] '>
           <img src="/appliances.png" className='w-full  lg:w-[80%] md:relative md:top-[50%] md:translate-y-[-50%] md:left-[50%] md:translate-x-[-50%] '  alt='appliances photo'/> 
        </div>
        
        <div className='w-full  min-h-[50vh] md:w-[50%]'>
            <p className='w-full h-fit text-black font-bold text-2xl pl-5 md:text-3xl pb-5 pt-2'>What We Do?</p>
            <AboutComponents title="AC Expertise" subtitle="Diagnosing and fixing AC issues, from inefficiencies to malfunctions, for optimal performance restoration." />
            <AboutComponents title="Precision Fridge Repairs" subtitle="Our team excels in diagnosing and fixing everything from cooling problems to faulty components, ensuring seamless fridge operation." />
            <AboutComponents title="Washing Machine Solutions" subtitle=" Experts in diagnosing and repairing issues, from mysterious leaks to unusual noises, providing comprehensive solutions for restored functionality." />
            <AboutComponents title="Multi-dimensional Appliance Care" subtitle="Holistic services covering ACs, refrigerators, and washing machines. Addressing diverse problems to keep your essential home devices running smoothly." />
        </div>
    </div>
  )
}

export default About
