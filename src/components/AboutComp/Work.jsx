import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FaCode, FaChartLine, FaPaintBrush, FaVideo } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { TbSeo } from 'react-icons/tb';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="w-10 h-10" />,
      title: "Web Development",
      description: "We build responsive, fast, and modern websites using cutting-edge technologies. From simple landing pages to complex web applications, we deliver solutions that drive results.",
      delay: 0
    },
    {
      icon: <FaChartLine className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies. SEO, social media marketing, PPC campaigns, and content marketing tailored to your brand.",
      delay: 100
    },
    {
      icon: <FaPaintBrush className="w-10 h-10" />,
      title: "Graphics Design",
      description: "Transform your ideas into stunning visuals. Our creative designers craft logos, branding materials, UI/UX designs, and marketing collaterals that captivate your audience.",
      delay: 200
    },
    {
      icon: <FaVideo className="w-10 h-10" />,
      title: "Video Editing",
      description: "Professional video editing services that bring your stories to life. From promotional videos to social media content, we create engaging videos that leave lasting impressions.",
      delay: 300
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px]"></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] h-full">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Icon container with gradient */}
                <div className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    {/* Clone icon with gradient stroke */}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500" style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {React.cloneElement(service.icon, {
                        className: "w-10 h-10",
                        style: { fill: 'url(#icon-gradient)' }
                      })}
                    </span>
                  </div>
                </div>

                {/* SVG Gradient Definition */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Services;