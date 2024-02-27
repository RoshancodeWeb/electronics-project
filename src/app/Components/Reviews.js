import React   from 'react'




const PersonReviews = ({ review,name,rank,url,size}) => {
  return (
    <div className={size==true?'w-[250px] h-[400px] shadow-sm shadow-slate-500 flex lg:scale-105 flex-col justify-between mb-2':'w-[250px] h-[400px] shadow-sm shadow-slate-500 flex flex-col lg:scale-90 justify-between mb-2'}>
      <p className='w-full h-[250px]  overflow-y-auto text-sm pl-5 pr-5 pt-2'>{review}</p>
      
      <div className='w-full h-fit pb-5 pl-5 flex gap-2'>
        
           <img src={url} className='w-[70px] h-[70px] rounded object-cover object-top' />
           <div className='w-full h-fit'>
              <p className='font-bold pb-3 '>{name}</p>
              <p className='text-sm'>{rank}</p>
           </div>

      </div>
         
    </div>
  )
}





const Reviews = () => {
   
  return (
    <div className='w-full min-h-[100vh] flex flex-col  '>
         <div className='w-full h-fit flex flex-col gap-3'>
             <p className='w-full h-fit text-center text-2xl font-bold pt-2 lg:text-3xl'>Happy Customers</p>
             <p className='text-center text-lg font-semibold pb-4 lg:text-xl'>Evidence Of Our Professional Work</p>
         </div>
         <div className='w-full h-fit flex flex-col items-center gap-5 md:flex-row md:justify-around lg:justify-center'>
              <PersonReviews review="Recently Al-Warda Electronics had  install my AC and they did an excellent job. They were careful, followed proper procedures, and checked thoroughly for leaks. Also, they efficiently handled minor repairs on my older AC. Overall, I'm highly satisfied with their amazing service." name="Hussnain Ali" rank="(Worker)" url="/reviews/reviewOne.jpg" size={false}/>
              <PersonReviews review="Al-Warda Electronics swiftly responded to my washing machine repair request and delivered exceptional service. Their professional approach, quick diagnosis, and efficient repair left me thoroughly impressed. Highly recommend their services!." name="Hamza Ali" rank="(Sales Man)" url="/reviews/reviewTwo.jpg" size={true} />
              <PersonReviews review="I needed much ac maintenence done. I needed, cleaning, filling of gas, shifting the outside unit to the roof. I messaged for a quote and within minutes I booked an appointment for the next day. They were on time, polite, professional, and did a Masha Allah fantastic job. Recommend them!" name="Mubashir Ali" rank="(Worker Man)" url="/reviews/reviewThree.png" size={false}/>
         </div>
        
    </div>
  )
}

export default Reviews
