import React, { useEffect } from 'react';
import { FaWhatsapp, FaCode, FaWordpress, FaBullhorn, FaPaintBrush, FaVideo } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Custom Website",
      description: "Tailored web solutions"
    },
    {
      icon: <FaWordpress className="text-2xl" />,
      title: "WordPress",
      description: "CMS development"
    },
    {
      icon: <FaBullhorn className="text-2xl" />,
      title: "Digital Marketing",
      description: "SEO & Social Media"
    },
    {
      icon: <FaPaintBrush className="text-2xl" />,
      title: "Graphics Design",
      description: "Creative visuals"
    },
    {
      icon: <FaVideo className="text-2xl" />,
      title: "Video Editing",
      description: "Professional editing"
    }
  ];

  const whatsappNumber = "8801320463125";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20SASS%20Tech!%20I'm%20interested%20in%20your%20services.`;

  return (
    <section className="bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1">
            {/* Section Badge */}
            <div 
              data-aos="fade-right"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                          border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 text-sm font-medium">About Us</span>
            </div>

            {/* Main Heading */}
            <h2 
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 
                             bg-clip-text text-transparent">
                SASS Tech
              </span>
            </h2>

            {/* Description */}
            <p 
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              For the past <span className="text-cyan-400 font-semibold">2 years</span>, 
              SASS Tech has been delivering exceptional digital solutions to businesses worldwide. 
              We specialize in crafting stunning websites, whether it's a 
              <span className="text-cyan-400"> custom-built solution</span> or a powerful 
              <span className="text-cyan-400"> WordPress</span> platform tailored to your needs.
            </p>

            <p 
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Our team of <span className="text-cyan-400 font-semibold">Digital Marketing specialists</span> helps 
              you reach your target audience effectively. Combined with our 
              <span className="text-cyan-400 font-semibold"> quality graphics design</span> and 
              professional <span className="text-cyan-400 font-semibold">video editing services</span>, 
              we provide a complete digital transformation package for your brand.
            </p>

            {/* Services Grid */}
            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {services.map((service, index) => (
                <div 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={600 + (index * 100)}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10
                           hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10
                           hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{service.title}</h4>
                  <p className="text-gray-500 text-xs">{service.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="1100"
              className="flex flex-col sm:flex-row gap-4">
              {/* Contact Us Button */}
              <Link 
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 
                         px-8 py-4 rounded-xl font-semibold text-white
                         bg-white/10 backdrop-blur-xl border border-white/20
                         overflow-hidden transition-all duration-500
                         hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                <HiMail className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Contact Us</span>
                
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                               bg-gradient-to-r from-transparent via-white/20 to-transparent
                               transition-transform duration-1000"></span>
              </Link>

              {/* WhatsApp Button */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 
                         px-8 py-4 rounded-xl font-semibold text-white
                         bg-white/10 backdrop-blur-xl border border-white/20
                         overflow-hidden transition-all duration-500
                         hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                <FaWhatsapp className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">WhatsApp</span>
                
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                               bg-gradient-to-r from-transparent via-white/20 to-transparent
                               transition-transform duration-1000"></span>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Background Glow Effects */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div 
              data-aos="fade-left"
              data-aos-delay="300"
              className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div 
              data-aos="fade-left"
              data-aos-delay="400"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Main Image Container */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="500"
              className="relative z-10">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 
                            rounded-2xl rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 
                            rounded-2xl -rotate-3 opacity-20"></div>
              
              {/* Image */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-2xl
                            border border-white/10 backdrop-blur-xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="SASS Tech - Digital Solutions"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                              rounded-xl"></div>

                {/* Floating Badge */}
                <div 
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="absolute bottom-6 left-6 right-6 p-4 
                              bg-black/60 backdrop-blur-xl rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 
                                  rounded-xl flex items-center justify-center">
                      <FaCode className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">IT - Solutions</h4>
                      <p className="text-gray-400 text-sm">Design • Develop • Deploy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div 
                data-aos="fade-down-right"
                data-aos-delay="900"
                className="absolute -top-4 -left-4 p-3 bg-black/80 backdrop-blur-xl 
                            rounded-xl border border-cyan-500/30 animate-bounce">
                <FaWordpress className="text-2xl text-cyan-400" />
              </div>
              
              <div 
                data-aos="fade-down-left"
                data-aos-delay="1000"
                className="absolute -top-4 -right-4 p-3 bg-black/80 backdrop-blur-xl 
                            rounded-xl border border-purple-500/30 animate-bounce delay-100">
                <FaBullhorn className="text-2xl text-purple-400" />
              </div>
              
              <div 
                data-aos="fade-up-right"
                data-aos-delay="1100"
                className="absolute -bottom-4 -left-4 p-3 bg-black/80 backdrop-blur-xl 
                            rounded-xl border border-blue-500/30 animate-bounce delay-200">
                <FaPaintBrush className="text-2xl text-blue-400" />
              </div>
              
              <div 
                data-aos="fade-up-left"
                data-aos-delay="1200"
                className="absolute -bottom-4 -right-4 p-3 bg-black/80 backdrop-blur-xl 
                            rounded-xl border border-pink-500/30 animate-bounce delay-300">
                <FaVideo className="text-2xl text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;