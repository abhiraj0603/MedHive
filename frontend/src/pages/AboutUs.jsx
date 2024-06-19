import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
const AboutUs = () => {
  return (
    <div>
      <Hero title={"Know More About Us "} imageUrl={"/about.png"} />
      <Biography imageUrl={"/whoweare.png"} />
    </div>
  )
}

export default AboutUs
