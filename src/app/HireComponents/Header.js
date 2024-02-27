import React from 'react'

const Block = ({ description,url }) => {
    return (
      <div className='w-fit h-fit flex items-center  gap-2 pb-2'>
            <img src={url} className='w-4 h-4' alt='ac repairing shop' />
            <p className='text-[#056CB3] font-bold text-sm'>{description}</p>

      </div>
    )
}

const Header = () => {
  return (
    <div className='w-full min-h-[20vh] box-border pl-5 pr-6 pt-5 '>
        <div className='w-full h-fit  md:flex md:justify-between'>
           <p className='text-sm'>We have 21+ years of Experience</p>
           <Block description="Al Nakheer Street,Fujairah" url="/locationNew.png" />
        </div>
        <div className='w-full h-[20vh] bg-[#181516] rounded flex justify-between items-center'>
            <img src='/logo.png' className='w-24 h-24' alt='al warda electronics' />
            <div className='w-fit h-fit  flex'>
               <div className='w-full h-fit flex items-center pr-2'>
                  <img src='/mobile.png' className='w-9 h-9' />
                    <div className='w-full h-fit text-white '>
                        <p className='text-sm font-bold'>Sadaqat Ali</p>
                        <p className='text-sm '>00971 50 8407963</p>
                    </div>
                  
               </div>
               <div className='w-full h-fit items-center hidden md:flex border-l-2 border-white ml-2 pl-2 pr-2'>
                  <img src='/mobile.png' className='w-9 h-9' />
                    <div className='w-full h-fit text-white '>
                        <p className='text-sm font-bold'>Rafaqat Ali</p>
                        <p className='text-sm'>00971 55 8404598</p>
                    </div>
               </div>
                
            </div>
        </div>

      
    </div>
  )
}

export default Header
