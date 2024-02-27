import Link from 'next/link'
import React from 'react'



export const BackHome = ({ pageName }) => {
  return (
    <div className='w-full h-fit'>
          <div className='w-full h-fit flex items-center pl-5 pt-5 justify-center gap-1 '>
             <img src='/home.png' className='w-5 h-5 ' />
             <p className='text-sm hover:scale-105 transition-transform duration-300 cursor-pointer'><Link href="/">Home</Link></p>
             <i className="ri-arrow-right-double-fill text-[#056CB3]"></i>
             <p className='text-sm'>{pageName}</p>
          </div>
       </div>
  )
}




const TeamMember = ({ name,rank,experience,imageUrl }) => {
  return (
    <div className='w-[180px] md:w-[200px] min-h-[40vh] shadow-sm shadow-slate-500 mb-2'>
       <div className='w-full h-[40vh] overflow-hidden'>
          <img src={imageUrl} className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'/> 
       </div>
       <div className='w-full h-fit bg-[#181516] rounded-e-sm text-white pl-2 pt-2 pb-5'>
           <p className='font-bold'>{name}</p>
           <p className='text-sm '><span className="pr-2 font-bold">Experience:</span>{experience}</p>
           <p className='h-[5vh] '><span className="pr-2 font-bold ">Ability:</span>{rank}</p>

       </div>
    </div>
  )
}




const Team = () => {
  return (
    <div className='w-full min-h-[80vh] '>
       <BackHome  pageName="Our Team"/>
       <div className='w-full min-h-[50vh] flex flex-col gap-4 items-center pt-5 md:flex-row md:justify-center md:gap-20'> 
           <TeamMember name="Roshan Ali" rank="AC Technician" experience="7+ years" imageUrl="/reviews/reviewOne.jpg"/>
           <TeamMember name="Umair Ali" rank="Washing Machine Technician" experience="7+ years" imageUrl="/reviews/reviewThree.png"/>
       </div>
    </div>
  )
}

export default Team
