import { useState, useEffect } from 'react';
import {
  FaRocket,
  FaCode,
  FaPaintBrush,
  FaArrowRight,
} from 'react-icons/fa';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

          {/* Animated Glow Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-40 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-40 right-80 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-40 left-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />

          {/* Right Side - Animated Tech Visual */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-20">
            <div className="relative h-full flex items-center justify-center pr-20">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-500/20 overflow-hidden w-[500px]">
                  {/* Code Content Only (Removed Browser Header Box) */}
                  <div className="p-6 font-mono text-sm space-y-3 bg-gradient-to-b from-gray-900/50 to-gray-900">
                    <div className="text-gray-500">// Building amazing websites</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">import</span>
                      <span className="text-cyan-400">{'{ Success }'}</span>
                      <span className="text-blue-400">from</span>
                      <span className="text-green-400">'webcraft'</span>
                    </div>

                    <div className="h-2" />

                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">const</span>
                      <span className="text-cyan-300">website</span>
                      <span className="text-white">=</span>
                      <span className="text-yellow-400">{'{'}</span>
                    </div>

                    <div className="pl-6 space-y-2">
                      <div>
                        <span className="text-blue-300">design</span>
                        <span className="text-white">: </span>
                        <span className="text-green-400">"stunning"</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div>
                        <span className="text-blue-300">performance</span>
                        <span className="text-white">: </span>
                        <span className="text-green-400">"blazing"</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div>
                        <span className="text-blue-300">responsive</span>
                        <span className="text-white">: </span>
                        <span className="text-orange-400">true</span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-300">launch</span>
                        <span className="text-white">: </span>
                        <span className="text-green-400">"ready"</span>
                        <span className="animate-pulse text-blue-400 ml-1">▊</span>
                      </div>
                    </div>

                    <div className="text-yellow-400">{' }'}</div>

                    <div className="h-2" />

                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">export default</span>
                      <span className="text-cyan-300">website</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/50 flex items-center justify-center animate-bounce">
                  <FaRocket className="text-2xl text-white" />
                </div>

                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/50 flex items-center justify-center animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                >
                  <FaPaintBrush className="text-xl text-white" />
                </div>

                <div
                  className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center animate-bounce"
                  style={{ animationDelay: '1s' }}
                >
                  <FaCode className="text-lg text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Left Side */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2" />
              <span className="text-sm text-blue-400 font-medium">Next-Gen Web Development</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white">Build Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Perfect Website
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Transform your digital presence with cutting-edge design and development.
              We create stunning, high-performance websites that drive results and
              captivate your audience.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Your Project
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}