// OrderForm.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCode, 
  FaStar, 
  FaComment, 
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    serviceType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate random bubbles data
  const [bubbles] = useState(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15
    }))
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    try {
      await fetch('https://formsubmit.co/ajax/sasstechbd@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'video-editing', label: 'Video Editing' },
    { value: 'graphics-design', label: 'Graphics Design' }
  ];

  const serviceTypes = [
    { value: '', label: 'Select Package' },
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' }
  ];

  return (
    <section className="min-h-screen py-28 px-4 bg-black relative overflow-hidden mt-[-100px]">
      
      {/* Cyan Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full animate-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: '-150px',
              background: `radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.4), rgba(6, 182, 212, 0.1), transparent)`,
              border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: `
                inset 0 0 20px rgba(6, 182, 212, 0.2),
                0 0 30px rgba(6, 182, 212, 0.15),
                0 0 60px rgba(6, 182, 212, 0.1)
              `,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`
            }}
          >
            {/* Bubble shine effect */}
            <div 
              className="absolute w-1/3 h-1/3 rounded-full bg-gradient-to-br from-cyan-300/50 to-transparent"
              style={{
                top: '15%',
                left: '15%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Additional Floating Small Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full animate-bubble-small"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              background: `radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.6), rgba(6, 182, 212, 0.2))`,
              boxShadow: `0 0 10px rgba(6, 182, 212, 0.3)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 8 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-300 rounded-full filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Place Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Order
            </span>
          </h2>
          <p className="text-cyan-100/80 text-lg">
            Fill out the form below and let's bring your vision to life
          </p>
        </div>

        {/* Glass Form Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="backdrop-blur-xl bg-white/10 border border-cyan-500/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10"
        >
          {isSubmitted ? (
            <div 
              className="text-center py-16"
              data-aos="zoom-in"
            >
              <FaCheckCircle className="text-6xl text-cyan-400 mx-auto mb-6 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-3">Order Submitted!</h3>
              <p className="text-cyan-100/80 mb-6">
                Thank you for your order. We'll contact you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for Formsubmit.co */}
              <input type="hidden" name="_subject" value="New Order from Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Name Field */}
              <div data-aos="fade-right" data-aos-delay="300">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaUser className="text-cyan-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div data-aos="fade-left" data-aos-delay="400">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaEnvelope className="text-cyan-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                />
              </div>

              {/* Phone Field */}
              <div data-aos="fade-right" data-aos-delay="500">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaPhone className="text-cyan-400" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                />
              </div>

              {/* Service Select */}
              <div data-aos="fade-left" data-aos-delay="600">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaCode className="text-cyan-400" />
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2306b6d4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {services.map((service) => (
                    <option 
                      key={service.value} 
                      value={service.value}
                      className="bg-gray-900 text-white"
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Type Select */}
              <div data-aos="fade-right" data-aos-delay="700">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaStar className="text-cyan-400" />
                  Package Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2306b6d4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {serviceTypes.map((type) => (
                    <option 
                      key={type.value} 
                      value={type.value}
                      className="bg-gray-900 text-white"
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div data-aos="fade-left" data-aos-delay="800">
                <label className="flex items-center gap-2 text-white/90 mb-2 font-medium">
                  <FaComment className="text-cyan-400" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your project requirements..."
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div data-aos="fade-up" data-aos-delay="900">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Confirm Order
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bottom Text */}
        <p 
          className="text-center text-cyan-200/50 text-sm mt-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          By submitting this form, you agree to our terms and conditions
        </p>
      </div>

      {/* Custom Styles for Bubble Animations */}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes bubble-small {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(30px);
            opacity: 0;
          }
        }
        
        .animate-bubble {
          animation: bubble linear infinite;
        }
        
        .animate-bubble-small {
          animation: bubble-small linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OrderForm;