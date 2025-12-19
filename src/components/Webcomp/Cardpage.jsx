import { FaStar, FaCrown, FaGem, FaCheck, FaRocket, FaShieldAlt, FaBolt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState('BDT'); // 'BDT' or 'USD'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById("pricing-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      icon: FaStar,
      price: { BDT: "৳1,300", USD: "$12" },

      description: "Perfect for personal or startup landing pages",
      features: [
        "1 Page Landing Website",
        "Fully Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Days Delivery",
        "Live Checking",
        "Life Time Support",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      delay: 0,
    },
    {
      name: "Standard",
      icon: FaCrown,
      price: { BDT: "৳3,500", USD: "$35" },
    
      description: "Best for growing businesses & professionals",
      features: [
        "3–4 Pages Professional Website",
        "Smooth Scroll & Animations",
        "Advanced SEO Optimization",
        "Mobile-First Design",
        "Speed Optimization (<2s load)",
        "5 Days Delivery",
        "Google Analytics Setup",
        "Live Checking",
        "Life Time Support",
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: true,
      ribbon: "Most Popular",
      delay: 150,
    },
    {
      name: "Premium",
      icon: FaGem,
      price: { BDT: "৳8,000", USD: "$89" },
  
      description: "Complete solution with admin panel & e-commerce",
      features: [
        "8–10 Pages Dynamic Website",
        "Custom Animations & Effects",
        "Full On-Page SEO + Schema",
        "Admin Dashboard (Optional)",
        "E-commerce Functionality",
        "Priority Support (24/7)",
        "Free Domain + Hosting (1 Year)",
        "Monthly Backup & Updates",
        "Live Checking",
        "Life Time Support",
      ],
      gradient: "from-orange-500 to-red-600",
      popular: false,
      ribbon: "Best Value",
      delay: 300,
    },
  ];

  return (
    <section id="pricing-section" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px),
                              linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <HiSparkles className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Transparent Pricing</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            Professional websites at honest prices. Switch between BDT & USD anytime.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center bg-gray-900/80 border border-gray-700 rounded-full p-1.5">
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  currency === 'BDT'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                BDT (৳)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: plan.delay / 1000 }}
              className="relative group"
            >
              {plan.ribbon && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className={`px-5 py-2 rounded-full text-white text-xs font-bold shadow-2xl bg-gradient-to-r ${plan.gradient}`}>
                    <FaBolt className="inline mr-1 text-yellow-300" />
                    {plan.ribbon}
                  </div>
                </div>
              )}

              <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000`} />

              <div className="relative bg-gray-900/90 border border-gray-800 rounded-3xl p-8 lg:p-10 backdrop-blur-xl h-full flex flex-col hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <div className="flex justify-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} p-5 shadow-xl`}>
                    <plan.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
                <p className="text-gray-400 text-center mt-3 text-sm">{plan.description}</p>

                <div className="my-8 text-center">
                  <div className="text-5xl font-extrabold text-white">{plan.price[currency]}</div>
                  <div className="text-gray-500 text-sm mt-2">{plan.period}</div>
                </div>

                <ul className="space-y-4 flex-1 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${plan.gradient} hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3`}>
                  <FaRocket className="text-lg" />
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-green-500 text-xl" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-3">
            <FaBolt className="text-yellow-500 text-xl" />
            <span>Super Fast Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck className="text-blue-500 text-xl" />
            <span>No Hidden Charges</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
