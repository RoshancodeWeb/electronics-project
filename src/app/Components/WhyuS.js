import React from 'react'

const WhyuS = () => {
  return (
    <div className='w-full min-h-fit bg-[#F7F7FF]  md:flex'>
        <div className='w-full h-[50vh] md:w-[50%] pl-5 pr-5 '>
            <img src="https://williamsservicecompany.com/wp-content/uploads/ac-repair-1080x675.jpg" className='w-full h-[50vh] object-cover ' alt='Why Us' /> 
        </div>

        <div className='w-full min-h-[50vh] md:w-[50%] md'>
            <p className='w-full h-fit text-black font-bold text-2xl pl-5 md:text-3xl pb-2 md:pb-0 pt-2 md:pt-0 '>Why Us</p>
            <p className='w-full h-fit text-sm text-slate-600 pl-5 lg:w-[80%] md:leading-7'>Choose us for your appliance repair needs because we bring a unique blend of expertise and dedication to the table. Our skilled technicians specialize in AC, refrigerator, and washing machine repairs, ensuring that your essential home devices operate at optimal efficiency. With a focus on precision and comprehensive solutions, we diagnose and fix a wide range of issues, from cooling inefficiencies to mysterious leaks. Our commitment to excellence extends across all dimensions of appliance care, providing you with holistic services that address diverse problems. </p>
        </div>

    </div>
  )
}

export default WhyuS
