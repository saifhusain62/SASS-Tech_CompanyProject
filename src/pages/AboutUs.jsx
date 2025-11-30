import React from 'react'
import AboutHero from '../components/AboutComp/AboutHero'
import MissionSection from '../components/AboutComp/Mission'
import VisionSection from '../components/AboutComp/Vission'
import TeamSection from '../components/AboutComp/TeamSection'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div>
      <AboutHero/>
      <MissionSection/>
      <VisionSection/>
      <TeamSection/>
      <div className='bg-black py-5'>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutUs
