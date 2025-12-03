import React from 'react'
import ContactSection from '../components/ContactComp/ContactHero'
import LocationSection from '../components/ContactComp/LocationSection'
import ContactForm from '../components/ContactComp/ContactForm'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <ContactSection/>
      <LocationSection/>
      <ContactForm/>
      <div className='bg-black py-5'>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
