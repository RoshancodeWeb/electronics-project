"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { sendContactForm } from '@/lib/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
   const formContact=useForm(); 
   const { register,control,handleSubmit,formState }=formContact;
   const { errors } =formState;

   const submitForm=async (data)=>{
    
    formContact.reset();

    toast.success('Message Sended Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
    await sendContactForm(data);
   
  }
   
  return (
    <div className='w-full min-h-[80vh] pl-5'>
      <p className='w-full h-fit font-bold text-lg pt-5 '>Contact Us</p>  
         <form noValidate onSubmit={handleSubmit(submitForm)} className='w-full md:w-[40%] min-h-fit pl-2 flex flex-col gap-5'>

             <div className='w-full h-fit pt-2 flex flex-col items-start'>
                  <label for="name">Name:</label>
                  <div className='w-full h-fit flex gap-1'>
                          <input id='name' type='text' className='w-[80%] outline-none rounded text-sm py-2 px-2 border-2' placeholder='Enter Your Name' 
                          {...register("name",{
                            required:"*"
                          })}
                          />
                          <p className='w-fit h-fit text-red-600'>{errors.name?.message}</p>
                  </div>
                 
             </div>

             <div className='w-full h-fit  flex flex-col items-start'>
                  <label for="email">Email:</label>
                  <div className='w-full h-fit flex gap-1 '>
                          <input id="email" type='text' className='w-[80%] outline-none rounded text-sm py-2 px-2 border-2' placeholder='Enter Your Email' 
                          {...register("email",{
                            required:"*"
                          })}
                           
                          />
                          <p className='w-fit h-fit text-red-600'>{errors.email?.message}</p>
                  </div>
                 
             </div>

             <div className='w-full h-fit  flex flex-col items-start'>
                  <label for="mobile">Mobile No:</label>
                  <div className='w-full h-fit flex gap-1'>
                          <input id='mobile' type='text' className='w-[80%] outline-none rounded text-sm py-2 px-2 border-2' placeholder='Enter Your Mobile' 
                          {...register("mobile",{
                            required:"*"
                          })}
                          />
                          <p className='w-fit h-fit text-red-600'>{errors.mobile?.message}</p>
                  </div>
                 
             </div>

             <div className='w-full h-fit  flex flex-col items-start '>
                  <label for="message">Message:</label>
                  <div className='w-full h-fit flex gap-1'>
                          <input type="text" id='message' name='comment' className='w-[80%] h-[20vh] outline-none rounded text-sm py-2 px-2 border-2 ' placeholder='Enter Your Message' 
                          {...register("message",{
                            required:"*"
                          })}
                          />
                          <p className='w-fit h-fit text-red-600'>{errors.message?.message}</p>
                  </div>
                 
             </div>
             
             <button className='w-fit h-fit mb-5 px-5 py-4 font-bold bg-[#086EB4] text-white rounded-lg hover:scale-105 transition-transform duration-300'>Send Message</button>
             
         </form>
         <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="light"
              />

            
         {/* <DevTool control={control} /> */}
    </div>
  )
}

export default Contact
