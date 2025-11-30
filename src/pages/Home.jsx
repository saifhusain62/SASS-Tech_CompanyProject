import React from 'react'
import { Link } from 'react-router-dom'
import LightRays from '../components/HomeComp/LightRays '
import BlurText from '../components/HomeComp/BlurText '
import ServiceHome from '../components/HomeComp/ServiceHome'
import AboutHome from '../components/HomeComp/AboutHome'
import HomeWorkShow from '../components/HomeComp/HomeWorkShow'
import TextType from '../components/HomeComp/TextType '
import LogoLoop from '../components/HomeComp/LogoLoop '
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiWordpress,
  SiWoocommerce,
} from "react-icons/si";
import GlassCards from '../components/HomeComp/GlassCards'
import TestimonialsSection from '../components/HomeComp/Testimonial'
import Footer from '../components/Footer'



const techLogos = [
  // Development
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  
  // Design Tools
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiAdobeillustrator />, title: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
  { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
  
  // CMS & E-commerce
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiWoocommerce />, title: "WooCommerce", href: "https://woocommerce.com" },
  
  // Video Editing (CapCut - using alternative)
  { node: <span className="text-2xl font-bold">CC</span>, title: "CapCut", href: "https://www.capcut.com" },
];
// Alternative with image sources


function Home() {
  return (
    <div 
      style={{ width: '100%', height: '100vh', position: 'relative' }} 
      className='bg-black mt-[-100px]'
    >
      {/* LightRays in the background */}
      <LightRays
        raysOrigin="center"
        raysColor="#3b82f6"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.7}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      {/* BlurText centered in the middle */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 text-center"
      >
        {/* First text - Main Heading */}
       <BlurText
  text="Innovation You Can Trust"
  delay={150}
  animateBy="words"
  direction="bottom"
  className="text-[32px] md:text-7xl font-bold text-white mb-4 justify-center "
/>
        
        {/* Second text - Subtitle */}
        <BlurText
          text="We provide Premium Quality, Fast & secure services, 24/7 Customer Support ."
          delay={300}
          animateBy="words"
          direction="top"
          className="text-sm xs:text-base sm:text-6xl md:text-5xl lg:text-2xl text-gray-300 text-center max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl leading-relaxed align-middle justify-center"
          initialDelay={800}
        />
        
        {/* Animated Button */}
        <div 
          className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.5s_forwards] mt-2 sm:mt-4 md:mt-6"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 border border-black/80 text-sm sm:text-base md:text-lg hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-blue-500/40 z-10"
          >
            Get Started
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* SECOND SECTION */}
     <div className="bg-black min-h-12 flex items-center justify-center">
  
</div>

<GlassCards/>

               {/* lOGO loop */}
<div className='bg-black min-h-5 py-4'>
     <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
       logoColor="blue-dark"
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="black"
        ariaLabel="Technology partners"
      /> 
    </div>
</div>
<ServiceHome/>
<AboutHome/>
<HomeWorkShow/>
<TestimonialsSection/>
<div className='bg-black py-5'>
  <Footer/>

</div>


    </div>
  )
}

export default Home