import React, { useEffect } from 'react';
import { 
  MdSupportAgent, 
  MdHighQuality, 
  MdSpeed, 
  MdDesignServices 
} from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlassCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const cardsData = [
    {
      icon: <MdSupportAgent className="text-3xl" />,
      title: "24 Hour Support",
      subtitle: "Always Here For You",
      description: "Our dedicated support team is available around the clock to assist you with any questions or issues you may have.",
      delay: 0
    },
    {
      icon: <MdHighQuality className="text-3xl" />,
      title: "Premium Quality",
      subtitle: "Excellence Guaranteed",
      description: "We deliver top-notch quality in every project, ensuring your complete satisfaction with pixel-perfect results.",
      delay: 100
    },
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "Fast Loading",
      subtitle: "Lightning Speed",
      description: "Optimized performance ensures your website loads instantly, providing the best user experience possible.",
      delay: 200
    },
    {
      icon: <MdDesignServices className="text-3xl" />,
      title: "Premium Design",
      subtitle: "Creative Excellence",
      description: "Modern and elegant designs that capture attention and elevate your brand to the next level.",
      delay: 300
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-5">

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-aos="fade-down"
          >
            Why Choose Us
          </h2>
          <p 
            className="text-lg text-white/60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide the best services for your business
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8
                         flex flex-col items-center text-center
                         transition-all duration-300 ease-out
                         hover:-translate-y-3 hover:border-blue-500/40 hover:bg-white/10 hover:z-10"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-cyan-400 font-medium text-sm mb-4">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlassCards;