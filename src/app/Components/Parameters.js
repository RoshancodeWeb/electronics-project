import React from 'react'



const Block = ({ url,title}) => {
  return (
    <div className='w-[170px] h-[150px] bg-[#064c8a1e]  lg:w-[200px] border-2 border-[#064D8A] rounded-xl '>
        <img  src={url} className='w-[60px] h-[60px] object-cover mx-auto mt-5' />
        <p className='w-fit relative left-[50%] translate-x-[-50%] pt-5 text-2xl font-bold text-[#064D8A]'>{title}</p>

    </div>
  )
}




const Parameters = () => {
  return (
    <div className='w-full min-h-fit bg-[#F7F7FF] pt-5 pb-5'>
        <p className='w-full text-center pt-5 font-bold text-xl relative left-[50%] translate-x-[-50%] md:text-3xl md:w-[60%]'>While starting our work , We take care of following parameters</p>
        <div className='w-full h-fit pt-10 md:flex md:justify-between md:pl-32 md:pr-32 '>
           <div  className='flex gap-4 pl-2 pr-2  justify-between lg:w-[60%]  '>
              <Block  url="/quality.png" title="Quality"/>
              <Block  url="/budget.png" title="Budget" />
           </div>
            <div className='w-fit h-fit pt-4 md:pt-0 relative left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0 '>
               <Block url="/tradition.png" title="Tradition" />
            </div>
           
        </div>
    </div>
  )
}

export default Parameters
