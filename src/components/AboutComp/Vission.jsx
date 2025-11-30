// VisionSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye, FaChartLine, FaHandshake, FaStar } from 'react-icons/fa';
import { HiSparkles, HiArrowRight } from 'react-icons/hi';
import { BsLightningChargeFill } from 'react-icons/bs';

const VisionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const visionPoints = [
    {
      icon: <FaEye className="w-5 h-5" />,
      title: 'Clear Perspective',
      text: 'Seeing beyond the horizon to anticipate future trends',
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: 'Sustainable Growth',
      text: 'Building scalable solutions for long-term success',
    },
    {
      icon: <FaHandshake className="w-5 h-5" />,
      title: 'Global Partnership',
      text: 'Connecting businesses across borders seamlessly',
    },
    {
      icon: <FaStar className="w-5 h-5" />,
      title: 'Excellence First',
      text: 'Setting new standards in digital innovation',
    },
  ];

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Section Label */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20"
            >
              <HiSparkles className="text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                Our Vision
              </span>
            </div>

            {/* Title */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Shaping The </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white">Of Innovation</span>
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-400 text-lg leading-relaxed"
            >
              We envision a world where technology seamlessly integrates with 
              human potential, creating limitless possibilities for growth and 
              transformation. Our goal is to be at the forefront of digital 
              revolution, pioneering solutions that redefine industries and 
              empower the next generation of innovators.
            </p>

            {/* Vision Points Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                  className="group p-5 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {point.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                <BsLightningChargeFill className="relative z-10" />
                <span className="relative z-10">Explore Our Vision</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group inline-flex items-center gap-2 px-6 py-4 rounded-full text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">
                <span>Read More</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div> */}
          </div>

          {/* Right Side - Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative group order-1 lg:order-2"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                  alt="Vision of the future - Digital world"
                  className="w-full h-[400px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-cyan-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Floating Stats */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="absolute bottom-6 left-6 right-6 z-20"
                >
                  <div className="flex justify-between items-end">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/30">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        2030
                      </div>
                      <div className="text-gray-400 text-sm">Vision Target</div>
                    </div>
                    
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/30">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        100+
                      </div>
                      <div className="text-gray-400 text-sm">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Top Badge */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="absolute top-6 right-6 z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-bounce">
                    <FaEye className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Shapes */}
              <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-blue-500/30 rounded-2xl rotate-12 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-cyan-500/30 rounded-full -z-10"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-400/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default VisionSection;