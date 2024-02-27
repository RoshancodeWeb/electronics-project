"use client"
import React, { createContext, useRef, useState } from 'react' 
export const MyContext=createContext();
const Context = ({ children }) => {
  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const servicesRef=useRef(null);
  const contactRef=useRef(null);

  return (
    <div>
       <MyContext.Provider value={{ homeRef,aboutRef,servicesRef,contactRef }}>
          {children}
       </MyContext.Provider>
    </div>
  )
}

export default Context
