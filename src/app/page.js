import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import WhyuS from './Components/WhyuS'
import Parameters from './Components/Parameters'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Reviews from './Components/Reviews'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyuS />
      <Parameters />
      <Service/>
      <Portfolio/>
      <Reviews/>
      <Footer />
    </div>
  )
}

export default page
