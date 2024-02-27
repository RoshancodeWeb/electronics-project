"use client"
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Helper/Context';

const serviceArray=[
    {
        icon:"/service/ac.png",
        title:"AC Fitting",
        description:"The Fujairah Services can provide truly affordable  AC installation, and AC Fitting in lahore. It is an air conditioner doorstep repairs service and installs all types of AC at your window. Split AC installation, Reconnect AC Installation, Croma AC Installation in Islamabad, Samsung AC Installation in Islamabad, LG AC Installation in Fujairah."
    },
    {
        icon:"/service/first_aid.png",
        title:"AC Gas Filling",
        description:"Providing you AC Gas Refilling Fujairah, When you are living in the hot city like Lahore then Air conditioner is must thing that should be at your place. You should have to get the AC Gas refill in 1 or 2 years, but it depends on how your AC is cooling. It would be best unless the refrigerant leak in you AC or when AC is not cooling."
    },
    {
        icon:"/service/repair_gear.png",
        title:"AC Repairing",
        description:" Our team is the one you can rely on to get things done for all your air conditioner problems, regardless of the unit type, make, and model. If you suspect something in your AC, we would be more than happy to provide you with free diagnostics. Our expert, AC repair technicians will perform inspection and diagnose the damage."
    },
    {
        icon:"/service/thumb.png",
        title:"AC Service",
        description:"Call us for your AC Servicing & Cleaning Service. Fujairah services amd Maintenance is a Fujairah based company. We are specialized in AC repair, Servicing, maintenance, supply and installation across Fujairah and near areas With a team of technicians on the road and with extensive experience in the AC servicing."
    },
    {
        icon:"/service/ac.png",
        title:"AC Maintenance",
        description:" Each and every air conditioner need servicing & Cleaning. The filter in a central air conditioner should never be allowed to get dirty enough to impede air flow, as this could cause damage to the unit. The condenser should be cleaned by a professional every 3 months, or even two months in dusty locations."
    },
    {
        icon:"/service/wm.png",
        title:"Washing Machine",
        description:"Home appliances are the main enabler of our own personal comfort at home. From dishwashers to washing machines, water heaters to fridges, these appliances can take care us. When they break down, it becomes clear how much we rely on them. Instead of trying to deal with the mess, call Fujairah services for Washing Machine repair."
    },
    {
        icon:"/service/fridge.png",
        title:"Fridge Repair",
        description:"We offer the best refrigerator repair service at Fujairah to offer the best price with genuine part at doorstep solution. The most affordable Fridge repair in Fujairah. We provide same-day Fridge repair service, Freezer repair in Fujairah, Deep Freezer repair, Refrigerator repair in Fujairah, Whirlpool Refrigerator repair in Fujairah."
    },
];



const Service = () => {
 
 

  return (
    <div className='w-full min-h-[100vh] bg-white ' id='serviceSection'> 
        <h1 className='w-full  h-fit text-center text-2xl font-bold pt-5 pb-5 md:text-3xl'>Our Services</h1>
    <div className='w-full h-fit flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-5 items-center pt-5'>
        {serviceArray.map((value,index)=>{
            return(
               <div key={index} className='w-[280px] cursor-pointer h-[400px] mb-5 border-2 border-[#064D8A] rounded  hover:shadow-md hover:shadow-gray-700 transition-shadow ease-linear flex flex-col items-center gap-1'>
                  <div className='w-fit h-fit p-3 mt-1 bg-[#064D8A] rounded-full'>
                    <img src={value.icon} className='' alt="electronics-icons" />
                  </div>
                  <h1 className='w-full h-fit text-2xl font-bold text-center'>{value.title}</h1>
                  <p className='w-full h-fit text-center text-md text-slate-500'>{value.description}</p>
               </div>
            );
        })}
        
    </div>
    </div>
  )
}

export default Service
