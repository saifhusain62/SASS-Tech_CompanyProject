import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FaCode, FaChartLine, FaPaintBrush, FaVideo } from 'react-icons/fa';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      id: 1,
      title: 'Website Development',
      description:
        'We build stunning, responsive, and high-performance websites tailored to your business needs. From landing pages to full-stack web applications.',
      icon: <FaCode className="w-10 h-10 md:w-12 md:h-12" />,
      link: '/services/website-development',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description:
        'Boost your online presence with our data-driven digital marketing strategies. SEO, PPC, social media marketing, and content marketing solutions.',
      icon: <FaChartLine className="w-10 h-10 md:w-12 md:h-12" />,
      link: '/services/digital-marketing',
    },
    {
      id: 3,
      title: 'Graphics Design',
      description:
        'Creative and eye-catching visual designs that communicate your brand message. Logos, branding, UI/UX design, and marketing materials.',
      icon: <FaPaintBrush className="w-10 h-10 md:w-12 md:h-12" />,
      link: '/services/graphics-design',
    },
    {
      id: 4,
      title: 'Video Editing',
      description:
        'Professional video editing services that bring your vision to life. From promotional videos to social media content and cinematic productions.',
      icon: <FaVideo className="w-10 h-10 md:w-12 md:h-12" />,
      link: '/services/video-editing',
    },
  ];

  return (
    <section className="bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Which Type of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Service
            </span>{' '}
            We Provided
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in
            the modern digital landscape. Our expert team delivers excellence in
            every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative h-full"
            >
              {/* Card */}
              <div
                className="h-full p-6 md:p-8 rounded-2xl 
                           backdrop-blur-xl bg-white/5 
                           border border-white/10 
                           hover:bg-gradient-to-br hover:from-blue-600 hover:via-blue-500 hover:to-cyan-500
                           transition-all duration-500 ease-out
                           hover:border-cyan-400/50
                           hover:shadow-2xl hover:shadow-cyan-500/20
                           hover:-translate-y-2
                           cursor-pointer
                           flex flex-col items-center text-center"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-600/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500 blur-xl -z-10"></div>

                {/* Icon Container */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 mb-6 
                              flex items-center justify-center 
                              rounded-2xl 
                              bg-gradient-to-br from-cyan-500/20 to-blue-600/20
                              border border-cyan-500/30
                              text-cyan-400 
                              group-hover:bg-white/20 
                              group-hover:border-white/30
                              group-hover:text-white
                              group-hover:scale-110
                              transition-all duration-500"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-bold 
                             text-cyan-400 
                             group-hover:text-white 
                             mb-4 
                             transition-colors duration-500"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-400 
                             group-hover:text-white/90 
                             mb-6 
                             text-sm md:text-base
                             leading-relaxed
                             transition-colors duration-500
                             flex-grow"
                >
                  {service.description}
                </p>

                {/* More Button with Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center gap-2 
                             px-6 py-3 
                             bg-gradient-to-r from-cyan-500 to-blue-600
                             text-white text-sm font-semibold 
                             rounded-md
                             group-hover:bg-none
                             group-hover:bg-white/10
                             group-hover:backdrop-blur-md 
                             group-hover:border 
                             group-hover:border-white/30
                             transition-all duration-500 
                             hover:scale-105
                             active:scale-95
                             mt-auto"
                >
                  <span>More</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-20" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 mb-6">
            Need a custom solution? Let's discuss your project!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 
                       bg-transparent
                       border-2 border-cyan-500 
                       text-cyan-400 
                       font-semibold 
                       rounded-md
                       hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600
                       hover:border-transparent
                       hover:text-white
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;