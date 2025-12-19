import { FaVideo, FaRocket, FaCheck, FaShieldAlt, FaBolt, FaGem, FaFilm, FaCut, FaUsers, FaPlay, FaMagic, FaYoutube } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoEditingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState('BDT');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById("video-editing-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const videoEditingPlans = [
    {
      name: "Basic Edit",
      icon: FaCut,
      price: { BDT: "৳3,000", USD: "$30" },
      description: "Perfect for simple video edits & content creators",
      features: [
        "Up to 5 Minutes Video",
        "Basic Cuts & Transitions",
        "Background Music",
        "Text & Title Overlays",
        "Color Correction",
        "1 Revision Round",
        "720p/1080p Export",
        "3-5 Days Delivery",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      delay: 0,
    },
    {
      name: "Pro Edit",
      icon: FaFilm,
      price: { BDT: "৳10,000", USD: "$100" },
      description: "Advanced editing for professional content",
      features: [
        "Up to 15 Minutes Video",
        "Advanced Transitions & Effects",
        "Motion Graphics & Animations",
        "Professional Color Grading",
        "Sound Design & Mixing",
        "Custom Thumbnails",
        "Subtitles & Captions",
        "3 Revision Rounds",
        "4K Export Available",
        "2-4 Days Delivery",
      ],
      gradient: "from-violet-600 to-purple-600",
      popular: true,
      ribbon: "Most Popular",
      delay: 150,
    },
    {
      name: "Premium Edit",
      icon: FaMagic,
      price: { BDT: "৳25,000", USD: "$250" },
      description: "Cinematic quality for brands & businesses",
      features: [
        "Up to 30 Minutes Video",
        "Cinematic Editing Style",
        "VFX & Special Effects",
        "3D Elements & Animation",
        "Professional Voice-Over",
        "Multi-Camera Editing",
        "Advanced Color Grading",
        "Custom Music & Sound",
        "Unlimited Revisions",
        "4K/8K Export",
        "Priority 1-2 Days Delivery",
      ],
      gradient: "from-amber-500 to-orange-600",
      popular: false,
      ribbon: "Best Value",
      delay: 300,
    },
  ];

  return (
    <section id="video-editing-section" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 25%),
                              radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 25%)`,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px),
                              linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Design Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-48 h-48 border border-purple-500/20 rounded-full"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 text-blue-500/20 text-6xl hidden lg:block"
      >
        <FaYoutube />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 text-purple-500/20 text-6xl hidden lg:block"
      >
        <FaFilm />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <FaVideo className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Video Editing Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transform Your Content with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Professional Video Editing
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            Bring your vision to life with stunning visuals, seamless transitions, and cinematic quality editing.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center bg-gray-900/80 border border-gray-700 rounded-full p-1.5">
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currency === 'BDT'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                BDT (৳)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Video Editing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoEditingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: plan.delay / 1000 }}
              className="relative group perspective-1000"
            >
              {/* Ribbon Badge */}
              {plan.ribbon && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`px-5 py-2 rounded-full text-white text-xs font-bold shadow-2xl bg-gradient-to-r ${plan.gradient}`}
                  >
                    <HiSparkles className="inline mr-1 text-yellow-300" />
                    {plan.ribbon}
                  </motion.div>
                </div>
              )}

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000`}
              />

              {/* Card Content */}
              <div
                className={`relative bg-gray-900/90 border border-gray-800 rounded-3xl p-8 lg:p-10 backdrop-blur-xl h-full flex flex-col hover:border-gray-600 hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} p-5 shadow-xl shadow-blue-500/20`}
                  >
                    <plan.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
                <p className="text-gray-400 text-center mt-3 text-sm leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="my-8 text-center">
                  <motion.div
                    key={currency}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-baseline justify-center gap-1"
                  >
                    <span
                      className={`text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                    >
                    </span>
                    <span className="text-gray-400 text-lg">/project</span>
                  </motion.div>
                  <div className="text-gray-500 text-sm mt-2">Per video project</div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 flex-1 mb-10">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}
                      >
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-blue-500/25 transform transition-all duration-300 flex items-center justify-center gap-3`}
                >
                  <FaPlay className="text-lg" />
                  Start Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Additional Services:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'YouTube Videos',
              'Reels & Shorts',
              'Wedding Films',
              'Corporate Videos',
              'Music Videos',
              'Documentary Editing',
              'Podcast Editing',
              'Social Media Ads',
            ].map((service, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-blue-500/50 hover:text-blue-300 transition-all cursor-pointer"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-2xl"
            >
              <stat.icon className="text-3xl text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-3 bg-gray-900/50 px-5 py-3 rounded-full border border-gray-800">
            <FaShieldAlt className="text-green-500 text-xl" />
            <span>100% Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 px-5 py-3 rounded-full border border-gray-800">
            <FaBolt className="text-yellow-500 text-xl" />
            <span>Fast Turnaround Time</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 px-5 py-3 rounded-full border border-gray-800">
            <FaGem className="text-purple-500 text-xl" />
            <span>Premium Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}