import React from 'react'
import Footer from '../components/Footer'
import Videocomp from '../components/Videoeditcomp/Videocomp'
import GlassCards from '../components/HomeComp/GlassCards'
import Videocard from '../components/Videoeditcomp/Videocard'
function VideoEditing() {
  return (
    <div>
      <Videocomp/>
      <Videocard/>
      <GlassCards/>
      <Footer/>
    </div>
  )
}

export default VideoEditing
