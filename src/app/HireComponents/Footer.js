import React from 'react'

const Footer = () => {
  return (
    <div className='w-full min-h-[50vh] bg-[#181516] md:flex md:items-start md:justify-around '>
         <img src='/logo.png' className='w-32 h-32 lg:w-48 lg:h-48 mt-[-10px]' />
  
        <div className='w-full lg:w-[30%]   h-fit pl-5 pr-5 text-start flex flex-col items-center'>
                <p className='w-full   h-fit font-bold text-[#064d8a] text-xl pb-2'>About Us</p>
                <p className='text-white text-sm lg:text-lg'>Welcome to <span className='text-[#064d8a]'>Al-Warda Electronics</span>, your trusted destination for expert AC, Washing Machine, and Refrigerator repairs in <span className='text-[#064d8a]'>Fujairah,Dubai</span>. Nestled in the bustling <span className='text-[#064d8a]'>Al Nakheel Street</span> , we take pride in offering top-quality repair services coupled with exceptional customer care. With a team of skilled technicians and years of experience, we specialize in diagnosing and fixing issues with precision and efficiency. </p>
        </div>
        <div className='w-full lg:w-fit  h-fit md:w-[40%]  pl-5 pb-4  '>
            <p className='text-[#064d8a] text-2xl font-bold  '>Contact Us</p>
            <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Phone:</span>00971 50 8407963</p> 
            <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Phone:</span>00971 55 8404598</p> 
            <p className='text-white text-sm'><span className='font-bold text-white text-lg pr-2'>Email:</span>miansadaqatali8686@gmail.com</p> 
        </div>
    </div>     
       
    
    
  )
}

export default Footer
