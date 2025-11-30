import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons imports
import { 
  FaGlobe, 
  FaChartLine, 
  FaPaintBrush, 
  FaVideo,
  FaLaptopCode,
  FaMobileAlt,
  FaBullseye,
  FaMagic,
  FaArrowRight
} from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Services data with React Icons
  const services = [
    { name: 'Web Development', icon: <FaGlobe className="text-cyan-400" /> },
    { name: 'Digital Marketing', icon: <FaChartLine className="text-cyan-400" /> },
    { name: 'Graphics Design', icon: <FaPaintBrush className="text-cyan-400" /> },
    { name: 'Video Editing', icon: <FaVideo className="text-cyan-400" /> },
  ];

  // Overlay icons
  const overlayIcons = [
    <FaLaptopCode className="text-cyan-400" />,
    <FaMobileAlt className="text-cyan-400" />,
    <FaBullseye className="text-cyan-400" />,
    <FaMagic className="text-cyan-400" />,
  ];

  return (
    <section className="bg-black py-28 px-4 sm:px-6 lg:px-8 -mt-[100px] relative overflow-hidden min-h-[110vh] flex items-center">
      {/* Background Gradient Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - About Content */}
          <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
            {/* About Us Heading with Gradient */}
            <div className="relative">
              <span 
                className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Who We Are
              </span>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                About Us
              </h2>
              {/* Decorative Line */}
              <div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"
                data-aos="fade-right"
                data-aos-delay="300"
              ></div>
            </div>

            {/* Company Description */}
            <p 
              className="text-gray-300 text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Welcome to <span className="text-cyan-400 font-semibold">SASS Tech</span>, 
              your trusted partner in digital innovation. We are a leading IT company 
              who served 2+ years in Bangladesh . Dedicated to transforming your ideas into powerful digital solutions.
            </p>

            <p 
              className="text-gray-400 text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Our team of experts specializes in crafting exceptional digital experiences 
              through our comprehensive range of services:
            </p>

            {/* Services List with React Icons */}
            <ul 
              className="space-y-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {services.map((service, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg border border-cyan-500/30 text-lg group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                    {service.icon}
                  </span>
                  <span className="font-medium">{service.name}</span>
                </li>
              ))}
            </ul>

            <p 
              className="text-gray-400 text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              At SASS Tech, we believe in delivering excellence, innovation, and 
              results that drive your business forward in the digital landscape.
            </p>

            {/* Contact Us Button */}
            <div data-aos="fade-up" data-aos-delay="800">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 group"
              >
                Contact Us
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div 
            className="lg:w-1/2 relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur-lg"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                {/* Replace this with your actual image */}
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="SASS Tech Team Working"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with React Icons */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <div className="flex justify-center gap-6">
                    {overlayIcons.map((icon, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-cyan-500/30 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div 
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px] rounded-xl shadow-lg shadow-cyan-500/20"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="bg-gray-900 rounded-xl px-6 py-4">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">2+</p>
                <p className="text-cyan-400 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px] rounded-xl shadow-lg shadow-blue-500/20"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="bg-gray-900 rounded-xl px-6 py-4">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">450+</p>
                <p className="text-cyan-400 text-sm">Projects Done</p>
              </div>
            </div>

            {/* Additional Floating Element */}
            <div 
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px] rounded-xl shadow-lg shadow-cyan-500/20 hidden lg:block"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="bg-gray-900 rounded-xl px-4 py-3">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">150+</p>
                <p className="text-cyan-400 text-xs">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default AboutUs;