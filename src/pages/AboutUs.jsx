import React from 'react'
import AboutHero from '../components/AboutComp/AboutHero'
import MissionSection from '../components/AboutComp/Mission'
import VisionSection from '../components/AboutComp/Vission'
import TeamSection from '../components/AboutComp/TeamSection'

function AboutUs() {
  return (
    <div>
      <AboutHero/>
      <MissionSection/>
      <VisionSection/>
      <TeamSection/>
    </div>
  )
}

export default AboutUs
