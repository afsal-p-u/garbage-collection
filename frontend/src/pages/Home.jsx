import React from 'react'

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import About from '../components/About'
import Map from '../components/Map'

const Home = () => {
  return (
    <>  
        <Navbar />
        <Hero />
        <Features />
        <Map />
        <About />
    </>
  )
}

export default Home