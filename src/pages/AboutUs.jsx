import React from 'react'
import AboutHero from '../components/AboutComp/AboutHero'
import MissionSection from '../components/AboutComp/Mission'
import VisionSection from '../components/AboutComp/Vission'
import TeamSection from '../components/AboutComp/TeamSection'
import Footer from '../components/Footer'
import WorkSection from '../components/AboutComp/Work'

function AboutUs() {
  return (
    <div>
      <AboutHero/>
      <MissionSection/>
      <VisionSection/>
      <WorkSection/>
      <TeamSection/>
      <div className='bg-black py-5'>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutUs
