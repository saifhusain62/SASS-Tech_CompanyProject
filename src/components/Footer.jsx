import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn 
} from 'react-icons/md';
import logo from '/logo.png'

const Footer = () => {
  const services = [
    { name: 'Web Development', link: '/services/web-development' },
    { name: 'Digital Marketing', link: '/services/digital-marketing' },
    { name: 'Video Editing', link: '/services/video-editing' },
    { name: 'Graphics Design', link: '/services/graphics-design' },
  ];

  const socialLinks = [
    { 
      icon: FaFacebookF, 
      link: 'https://facebook.com', 
      hoverColor: 'hover:bg-blue-600',
      label: 'Facebook'
    },
    { 
      icon: FaTwitter, 
      link: 'https://twitter.com', 
      hoverColor: 'hover:bg-sky-500',
      label: 'Twitter'
    },
    { 
      icon: FaLinkedinIn, 
      link: 'https://linkedin.com', 
      hoverColor: 'hover:bg-blue-700',
      label: 'LinkedIn'
    },
    { 
      icon: FaWhatsapp, 
      link: 'https://wa.me/8801320463125', 
      hoverColor: 'hover:bg-green-500',
      label: 'WhatsApp'
    },
  ];

  return (
    <footer className="relative mx-4 ">
      {/* Glass Effect Container */}
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Grid 1 - Company Logo & Description */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-24 h-24  rounded-xl flex items-center justify-center">
                  <img src={logo} alt="" />
                </div>
                {/* <div>
                  <span className="text-white text-2xl font-bold tracking-tight">TechBrand</span>
                  <span className="text-blue-400 text-2xl font-bold">.</span>
                </div> */}
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                We are a creative digital agency specializing in crafting stunning websites, 
                powerful marketing strategies, and captivating visual content. Let's build 
                something amazing together.
              </p>
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full border border-blue-500/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-gray-300 text-xs">Available for Projects</span>
              </div>
            </div>

            {/* Grid 2 - Quick Links & Services */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-semibold flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 mr-3" />
                Quick Links
              </h3>
              
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/" 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Home
                  </a>
                </li>
                <li className="space-y-2">
                  <span className="text-gray-300 font-medium">Services</span>
                  <ul className="ml-4 space-y-2 border-l border-gray-700 pl-4">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a 
                          href={service.link} 
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-blue-500 rounded-full mr-2 transition-colors" />
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Grid 3 - Social Icons */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-semibold flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 mr-3" />
                Follow Us
              </h3>
              
              <p className="text-gray-400 text-sm">
                Stay connected with us on social media for updates and insights.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center 
                      border border-white/10 ${social.hoverColor} hover:border-transparent 
                      hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <social.icon className="text-gray-300 group-hover:text-white text-lg transition-colors" />
                  </a>
                ))}
              </div>
              
              {/* WhatsApp Direct Link */}
              <a 
                href="https://wa.me/8801320463125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500 
                  rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300 group"
              >
                <FaWhatsapp className="text-green-400 group-hover:text-white text-lg" />
                <span className="text-green-400 group-hover:text-white text-sm font-medium">
                  Chat on WhatsApp
                </span>
              </a>
            </div>

            {/* Grid 4 - Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-semibold flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 mr-3" />
                Contact Us
              </h3>
              
              <ul className="space-y-4">
                {/* Address */}
                <li className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <MdLocationOn className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Address</span>
                    <p className="text-gray-300 text-sm mt-1">
                      123 Ashkona,Airport<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </li>
                
                {/* Email */}
                <li className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <MdEmail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Email</span>
                    <a 
                      href="mailto:info@techbrand.com" 
                      className="text-gray-300 text-sm mt-1 block hover:text-blue-400 transition-colors"
                    >
                      sasstechbd@gmail.com
                    </a>
                  </div>
                </li>
                
                {/* Phone */}
                <li className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <MdPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Phone</span>
                    <a 
                      href="tel:+8801320463125" 
                      className="text-gray-300 text-sm mt-1 block hover:text-green-400 transition-colors"
                    >
                      +880 1320-463125
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} <span className="text-blue-400">SASS Tech</span>. All rights reserved.
              </p>
              
              {/* Bottom Links */}
              <div className="flex items-center space-x-6">
                <a href="/orderpage" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;