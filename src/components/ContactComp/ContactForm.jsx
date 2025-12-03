import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FiSend, 
  FiUser, 
  FiMail, 
  FiMessageSquare, 
  FiFileText,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { MdVerified, MdSecurity, MdSpeed } from 'react-icons/md';

const ContactSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <MdVerified className="text-3xl" />,
      title: "Verified Professionals",
      description: "Connect with authenticated investors and experts",
      delay: 0
    },
    {
      icon: <BiSupport className="text-3xl" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries",
      delay: 100
    },
    {
      icon: <MdSecurity className="text-3xl" />,
      title: "Secure Platform",
      description: "Enterprise-grade security for your data",
      delay: 200
    },
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "Fast Response",
      description: "Get replies within 12 hours guaranteed",
      delay: 300
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sasstechbd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact: ${formData.subject}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Moving Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Why Ideanect Cards */}
          <div className="space-y-6">
            <div data-aos="fade-right">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Why{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    SassTech
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                </span>
                ?
              </h3>
              <p className="text-gray-400 mt-3">
                Discover what makes us the preferred choice for entrepreneurs and investors.
              </p>
            </div>

            <div className="grid gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={feature.delay}
                  className="group cursor-pointer"
                >
                  <div className="relative p-5 md:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/50 transition-all duration-500 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] overflow-hidden">
                    {/* Card Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-blue-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[-1px] bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-2xl blur-sm"></div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500">
                        {feature.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Online Status Card */}
            <div 
              className="mt-8 p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-cyan-500/[0.08] to-blue-600/[0.08] border border-cyan-500/20 relative overflow-hidden group"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-green-400 font-medium">We're Online</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Our team is available to assist you. Average response time:{' '}
                  <span className="text-cyan-400 font-semibold">under 2 hours</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative"
          >
            {/* Form Container */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-cyan-500/20 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Glass Card */}
              <div className="relative p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
                {/* Inner subtle gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <FiMail className="text-white text-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                  </div>
                  <p className="text-gray-400 mb-8 ml-[52px]">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    {/* Hidden fields for FormSubmit */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    {/* Name Field */}
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                          <FiUser className="text-gray-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/5 group-focus-within:to-blue-500/5 pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                          <FiMail className="text-gray-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/5 group-focus-within:to-blue-500/5 pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                          <FiFileText className="text-gray-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                          className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/5 group-focus-within:to-blue-500/5 pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-4 left-0 pl-4 pointer-events-none z-10">
                          <FiMessageSquare className="text-gray-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          placeholder="Tell us more about your inquiry..."
                          className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/5 group-focus-within:to-blue-500/5 pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group py-4 px-6 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-[0.98]"
                    >
                      {/* Button Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] animate-gradient-x"></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div 
                        className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 animate-fade-in-up"
                      >
                        <FiCheckCircle className="text-xl flex-shrink-0" />
                        <div>
                          <p className="font-medium">Message sent successfully!</p>
                          <p className="text-sm text-green-400/80">We'll get back to you within 12 hours.</p>
                        </div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div 
                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 animate-fade-in-up"
                      >
                        <FiAlertCircle className="text-xl flex-shrink-0" />
                        <div>
                          <p className="font-medium">Failed to send message</p>
                          <p className="text-sm text-red-400/80">Please try again or email us directly.</p>
                        </div>
                      </div>
                    )}
                  </form>

                  {/* Privacy Note */}
                  <p className="text-gray-500 text-xs text-center mt-6">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;