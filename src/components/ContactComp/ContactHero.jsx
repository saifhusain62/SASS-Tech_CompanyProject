import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      info: "Ashkona, Airport, Dhaka, Bangladesh",
      action: "Get Directions",
      href: "https://maps.google.com/?q=Ashkona,+Airport,+Dhaka,+Bangladesh",
      isExternal: true,
      delay: 0
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      info: "+880 1320-463125",
      action: "Call Now",
      href: "tel:+8801320463125",
      isExternal: false,
      delay: 100
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      info: "sasstechbd@gmail.com",
      action: "Send Email",
      href: "mailto:sasstechbd@gmail.com",
      isExternal: false,
      delay: 200
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "+880 1320-463125",
      action: "Chat Now",
      href: "https://wa.me/8801320463125",
      isExternal: true,
      delay: 300
    }
  ];

  const handleClick = (e, card) => {
    if (!card.isExternal) {
      window.location.href = card.href;
    }
  };

  return (
    <section className="min-h-[100vh] bg-black relative overflow-hidden flex items-center justify-center py-28 px-4 mt-[-100px]">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of these channels.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <a
                key={index}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleClick(e, card)}
                data-aos="fade-up"
                data-aos-delay={card.delay}
                className="group relative block"
              >
                {/* Glass Card */}
                <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl 
                              transition-all duration-300 ease-out
                              hover:bg-white/10 hover:border-cyan-500/30
                              hover:-translate-y-1 cursor-pointer">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 inline-flex">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                                  flex items-center justify-center border border-white/10
                                  transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-cyan-400 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Info */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    {card.info}
                  </p>

                  {/* Action Button */}
                  <div className="inline-flex items-center text-sm font-medium text-cyan-400 
                                group-hover:text-cyan-300 transition-colors duration-300">
                    {card.action}
                    <BsArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 
                                opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="400">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
    </section>
  );
};

export default ContactSection;