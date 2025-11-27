// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png'
import { 
  HiHome, 
  HiCog, 
  HiUserGroup, 
  HiMail,
  HiMenuAlt3,
  HiX,
  HiChevronDown,
  HiCode,
  HiColorSwatch,
  HiSpeakerphone,
  HiFilm
} from 'react-icons/hi';
import { BiSolidCategory } from "react-icons/bi";
import { RiMenu4Line } from "react-icons/ri";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    
    if (window.innerWidth >= 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const servicesSubmenu = [
    { name: 'Website Development', path: '/services/website-development', icon: HiCode },
    { name: 'Graphics Design', path: '/services/graphics-design', icon: HiColorSwatch },
    { name: 'Digital Marketing', path: '/services/digital-marketing', icon: HiSpeakerphone },
    { name: 'Video Editing', path: '/services/video-editing', icon: HiFilm },
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith('/services');

  // Glass effect classes for nav items
  const glassItemBase = "backdrop-blur-md bg-gray-500/10 border border-gray-400/20 shadow-lg shadow-gray-900/10";
  const glassItemHover = "hover:bg-gray-400/20 hover:border-gray-300/30 hover:shadow-blue-500/10";
  const glassItemActive = "bg-gray-400/25 border-gray-300/40 shadow-blue-500/20 text-blue-300";

  return (
    <nav 
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-4xl z-50 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-black-100/80 backdrop-blur-3xl shadow-2xl shadow-gray-900/50 border-gray-500/30' 
          : 'bg-black-100/80  backdrop-blur-xl border-gray-500/20'
      } border`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-24  flex items-center justify-center transform  transition-transform duration-300 shadow-lg ">
              <img src={logo} alt="" />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? glassItemActive 
                  : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-500`
              }`}
              title="Home"
            >
              <HiHome className="w-5 h-5" />
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                  isServiceActive() 
                    ? glassItemActive 
                    : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-500`
                }`}
                title="Services"
              >
                <BiSolidCategory  className="w-5 h-5" />
                <HiChevronDown 
                  className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full right-0 mt-2 w-64 rounded-xl bg-gray-800/80 backdrop-blur-2xl border border-gray-500/30 shadow-2xl shadow-gray-900/50 overflow-hidden transition-all duration-300 ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-4'
                }`}
              >
                <div className="p-2 space-y-1">
                  {servicesSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300 shadow-lg shadow-blue-500/10'
                          : 'text-gray-200 hover:bg-gray-500/20 hover:text-blue-400 border border-transparent hover:border-gray-400/20'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg ${isActive(item.path) ? 'bg-blue-500/20' : 'bg-gray-500/20'}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us */}
            <Link
              to="/about"
              className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                isActive('/about') 
                  ? glassItemActive 
                  : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
              }`}
              title="About Us"
            >
              <HiUserGroup className="w-5 h-5" />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                isActive('/contact') 
                  ? glassItemActive 
                  : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
              }`}
              title="Contact"
            >
              <HiMail className="w-5 h-5" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 border border-black/80"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (!isOpen) {
                setIsServicesOpen(false);
              }
            }}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <RiMenu4Line  className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-2 pt-4 border-t border-gray-500/30">
            {/* Mobile Nav Icons Row */}
            <div className="flex items-center justify-center space-x-2">
              {/* Home */}
              <Link
                to="/"
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300 shadow-lg shadow-blue-500/10' 
                    : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
                }`}
                title="Home"
              >
                <HiHome className="w-5 h-5" />
              </Link>

              {/* Services */}
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                  isServiceActive() 
                    ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300 shadow-lg shadow-blue-500/10' 
                    : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
                }`}
                title="Services"
              >
                <BiSolidCategory className="w-5 h-5" />
                <HiChevronDown 
                  className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* About Us */}
              <Link
                to="/about"
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300 shadow-lg shadow-blue-500/10' 
                    : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
                }`}
                title="About Us"
              >
                <HiUserGroup className="w-5 h-5" />
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300 shadow-lg shadow-blue-500/10' 
                    : `${glassItemBase} ${glassItemHover} text-gray-200 hover:text-blue-400`
                }`}
                title="Contact"
              >
                <HiMail className="w-5 h-5" />
              </Link>
            </div>
              
            {/* Mobile Services Submenu */}
            <div 
              className={`w-full transition-all duration-300 ease-in-out ${
                isServicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                overflow: 'hidden'
              }}
            >
              <div className="px-3 pt-2 space-y-1">
                {servicesSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsServicesOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-gray-400/25 border border-gray-300/30 text-blue-300'
                        : `${glassItemBase} text-gray-300 hover:bg-gray-500/20 hover:text-blue-400`
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              className="w-full flex items-center justify-center mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 border border-black/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;