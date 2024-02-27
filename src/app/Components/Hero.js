"use client"
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MyContext } from '../Helper/Context';
import Link from 'next/link';



const HeroContent = ({ title,subtitle,Tag,linkAddress }) => {
  return (
          <div className='w-full h-full absolute top-0 z-30 bg-black/15 '>
                      <div className='w-full h-fit relative top-[50%] translate-y-[-50%]'>
                         <p className='w-full h-fit text-white font-bold text-lg mb-1 text-center md:text-2xl'>{title}</p>
                         <p className='text-white text-sm w-[80%] text-center mx-auto md:text-lg'>{subtitle}</p>
                         <button className='bg-[#064D8A] text-white px-3 py-2 rounded mt-2 hover:bg-[#2669a4] hover:scale-105 transition-all ease-linear '><Link className='w-full h-full' href={linkAddress}>{Tag}</Link></button>
                      </div>
           </div>
  )
}





const Hero = () => {
 
  return (
    <div className='w-full h-[100vh]' id='homeSection'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full h-full  relative'>
                <img src="https://www.fixdar.com/images/samples/air%20condtioner%20filter.jpg" className='w-full h-full bg-cover bg-fit bg-no-repeat'/>
                <HeroContent title="Feeling stress about your AC?"  subtitle="Hire our best Air Conditioning Repair Company in Fujairah" Tag="Hire Now"  linkAddress="/Hire" />
            </div>
            
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-full h-full relative'>
              <img src="https://www.capitanappliance.com/wp-content/uploads/2023/01/g9e2BwkAVS6touFGLqCCap7df6DguSwj1673541070.jpg" className='w-full h-full bg-cover bg-fit bg-no-repeat'/>
              <HeroContent title="Troubled by washing machine issues? "  subtitle="Hire our professionals." Tag="Hire Now"  linkAddress="/Hire" />
            </div>
            
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-full h-full '>
               <img src="https://library.homeserve.com/m/2cefd6aaed32c073/webimage-RefrigeratorRepair.png" className='w-full h-full bg-cover bg-fit bg-no-repeat'/>
               <HeroContent title="In need of Refrigerator Repair? "  subtitle="Put an end to fridge headaches without breaking the bank." Tag="Book Now"  linkAddress="/Hire" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='w-full h-full '>
               <img src="https://www.fixdar.com/images/samples/air%20condtioner%20filter.jpg" className='w-full h-full bg-cover bg-fit bg-no-repeat'/>
               <HeroContent title="Al-Warda Electronics"  subtitle="Provides you with professional and experienced mechanics"  Tag="View All Mechanics"  linkAddress="/Mechanic" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
