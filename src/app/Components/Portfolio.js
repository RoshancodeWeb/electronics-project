"use client"
import React, { useEffect, useState } from 'react'

const portfoli_pictures =[
        {
            url:"/portfolio/ac_one.jpg",
            category:"Ac Repairing"
        },
        {
            url:"/portfolio/ac_two.webp",
            category:"Ac Repairing"
        },
        {
            url:"/portfolio/ac_three.jpg",
            category:"Ac Repairing"
        },
        {
            url:"/portfolio/wm_one.jpg",
            category:"Washing Machine"
        },
        {
            url:"/portfolio/wm_two.jpg",
            category:"Washing Machine"
        },
        {
            url:"/portfolio/wm_three.jpg",
            category:"Washing Machine"
        },
        {
            url:"/portfolio/fridge_one.png",
            category:"Fridge Repairing"
        },
        {
            url:"/portfolio/fridge_two.webp",
            category:"Fridge Repairing"
        },
        {
            url:"/portfolio/fridge_three.webp",
            category:"Fridge Repairing"
        },

        
];

const Portfolio = () => {
  const [extractedCategories, setextractedCategories] = useState([]);
  const [tempArray, settempArray] = useState(portfoli_pictures);
  let categories=["All"];

  useEffect(() => {
    
    portfoli_pictures.map((value)=>{
          if(!categories.includes(value.category)){
                categories.push(value.category);
          }
    });
    setextractedCategories(categories);
  }, []);

  const changeImages=(categoryName)=>{
       if(categoryName!=="All")
       {
          let findCategoryArray=[];

            portfoli_pictures.forEach(element => {
                if(categoryName===element.category)
                {
                    findCategoryArray.push(element);
                }
            });
            settempArray(findCategoryArray);
       }
       else{
        settempArray(portfoli_pictures);
       }
       
  }


  return (
    <div className='w-full min-h-fit bg-[#F7F7FF]' id='portfolioSection'>
        <h1 className='w-full  text-center text-2xl font-bold pt-5'>Our Portfolio</h1>
        <p className='w-full  h-fit text-center text-lg font-medium md:text-xl'>Evidence of our commitment to our work </p>
            <div className='w-full h-fit flex gap-2 flex-wrap pt-5 pl-1'>
                
                {extractedCategories.map((value,id)=>{
                    return(
                    <button  onClick={()=>{changeImages(value)}} key={id} className=' bg-[#DBE3F1] border-2 border-[#064D8A] px-2 py-3 rounded hover:shadow-md hover:shadow-[#064D8A] transition-shadow ease-linear hover:bg-[#377dba] hover:border-none text-bold hover:text-white' >{value}</button> 
                    );
                })
            }
            
            
            </div>

        <div className='w-full md:w-[90%] lg:w-[60%]   min-h-fit flex items-center  flex-col gap-4 pt-5 md:flex-row md:flex-wrap md:items-start md:pl-5 md:relative md:left-[50%] md:translate-x-[-50%] pb-5'> 
             {tempArray.map((value,index)=>{
                return (
                    <img key={index} src={value.url} className='w-[200px] h-[200px] object-cover' />
                )
             })}
        </div>

    </div>
  )
}

export default Portfolio
