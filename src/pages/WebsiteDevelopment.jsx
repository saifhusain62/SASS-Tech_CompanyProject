import React from 'react'
import Footer from '../components/Footer'
import Webpage from  '../components/Webcomp/Webpage'
import Cardpage from '../components/Webcomp/Cardpage'
import GlassCards from '../components/HomeComp/GlassCards'
import Showpro from '../components/Webcomp/Showpor'

function WebsiteDevelopment() {
  return (
    <div>
      <Webpage/>
      <Cardpage/>
      <Showpro/>
      <GlassCards/>
      <Footer/>
    </div>
  )
}

export default WebsiteDevelopment
