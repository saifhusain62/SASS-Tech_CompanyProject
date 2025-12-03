import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaPlane,
  FaCalendarAlt
} from 'react-icons/fa';
import { 
  MdAccessTime, 
  MdLocationOn,
  MdEmail,
  MdPhone
} from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { HiOfficeBuilding } from 'react-icons/hi';

const LocationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const officeHours = [
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Sunday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Monday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Friday', hours: 'Closed', isOpen: false },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  // Check if currently open based on day and time
  const isCurrentlyOpen = () => {
    const today = officeHours.find(item => item.day === currentDay);
    if (!today || !today.isOpen) return false;
    
    const now = new Date();
    const currentHour = now.getHours();
    // Assuming office hours are 9 AM to 6 PM
    return currentHour >= 9 && currentHour < 18;
  };

  const openStatus = isCurrentlyOpen();

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
            <MdLocationOn className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Find Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Location</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit us at Hazrat Shahjalal International Airport, Dhaka, Bangladesh
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side - Live Map */}
          <div 
            className="relative group"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Map Container */}
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm -z-10"></div>
              
              {/* Google Map Embed - Hazrat Shahjalal International Airport, Dhaka */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5438518545806!2d90.39764731498256!3d23.85125598455089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e5765a5%3A0x2d24ebec7e5a0b1c!2sHazrat%20Shahjalal%20International%20Airport!5e0!3m2!1sen!2sbd!4v1699900000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(50%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="absolute inset-0"
              ></iframe>

              {/* Map Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Location Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-cyan-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Live Location</span>
              </div>

              {/* Location Info Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-md rounded-xl border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPlane className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hazrat Shahjalal International Airport</h4>
                    <p className="text-gray-400 text-sm">Ashkona, Dhaka 1229, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl"></div>
          </div>

          {/* Right Side - Office Hours Card */}
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {/* Glass Card */}
            <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-sm animate-pulse"></div>
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <HiOfficeBuilding className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Office Hours</h3>
                    <p className="text-gray-400 text-sm">When we're available for you</p>
                  </div>
                </div>

                {/* Current Status - Dynamic based on actual time */}
                <div className={`mb-6 p-4 rounded-xl border ${
                  openStatus 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20' 
                    : 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BiTime className={`text-2xl ${openStatus ? 'text-cyan-400' : 'text-red-400'}`} />
                      <span className="text-white font-medium">Current Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${
                        openStatus 
                          ? 'bg-green-400 shadow-green-400/50' 
                          : 'bg-red-400 shadow-red-400/50'
                      }`}></div>
                      <span className={`font-semibold ${openStatus ? 'text-green-400' : 'text-red-400'}`}>
                        {openStatus ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office Hours List */}
                <div className="space-y-3 mb-8">
                  {officeHours.map((item, index) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        currentDay === item.day
                          ? item.isOpen 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                            : 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 shadow-lg shadow-red-500/10'
                          : 'bg-white/5 border border-white/5 hover:bg-white/10'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={100 + index * 50}
                    >
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className={`${
                          currentDay === item.day 
                            ? item.isOpen ? 'text-cyan-400' : 'text-red-400'
                            : 'text-gray-500'
                        }`} />
                        <span className={`font-medium ${
                          currentDay === item.day ? 'text-white' : 'text-gray-300'
                        }`}>
                          {item.day}
                        </span>
                        {currentDay === item.day && (
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            item.isOpen 
                              ? 'bg-cyan-500/20 text-cyan-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            Today
                          </span>
                        )}
                      </div>
                      <span className={`font-semibold ${
                        item.isOpen 
                          ? currentDay === item.day ? 'text-cyan-400' : 'text-gray-300'
                          : 'text-red-400'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                    Quick Contact
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <a 
                      href="tel:+8801320463125"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                        <FaPhone className="text-cyan-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Phone</p>
                        <p className="text-white text-sm font-medium">+880 1320463125</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                      href="mailto:sasstechbd@gmail.com"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                        <FaEnvelope className="text-cyan-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Email</p>
                        <p className="text-white text-sm font-medium">sasstechbd@gmail.com</p>
                      </div>
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Address</p>
                      <p className="text-white text-sm font-medium">
                        Hazrat Shahjalal International Airport,<br />
                        Ashkona, Dhaka 1229, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;