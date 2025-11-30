// MissionSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRocket, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const MissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const missionPoints = [
    {
      icon: <FaRocket className="w-5 h-5" />,
      text: 'Drive innovation in every project we undertake',
    },
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      text: 'Deliver creative solutions that exceed expectations',
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      text: 'Build lasting relationships with our clients',
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      text: 'Create positive impact on a global scale',
    },
  ];

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="relative group"
          >
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Team collaborating on mission"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl relative z-10"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl z-20"></div>
                
                {/* Floating Badge */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="absolute bottom-6 left-6 z-30 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full"
                >
                  <span className="text-white font-semibold flex items-center gap-2">
                    <FaRocket className="animate-pulse" />
                    Since 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-500/30 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-blue-500/30 rounded-2xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                Our Mission
              </span>
            </div>

            {/* Title */}
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold"
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Mission
              </span>
              <span className="text-white"> is Client Satisfaction </span>
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-400 text-lg leading-relaxed"
            >
              We are dedicated to transforming ideas into reality through innovative 
              technology solutions. Our mission is to empower businesses worldwide 
              by delivering cutting-edge digital experiences that drive growth, 
              inspire change, and create lasting value for our clients and their 
              communities.
            </p>

            {/* Mission Points */}
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={500 + index * 100}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay="900"
              className="pt-4"
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="relative z-10">Learn More About Us</span>
                <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default MissionSection;