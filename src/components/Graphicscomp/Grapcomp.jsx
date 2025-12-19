import { useState, useEffect } from 'react';
import {
  FaPaintBrush,
  FaPalette,
  FaPenNib,
  FaArrowRight,
  FaLayerGroup,
  FaMagic,
  FaBezierCurve,
  FaVectorSquare,
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
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes draw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes colorShift {
          0%, 100% { fill: #3b82f6; }
          25% { fill: #06b6d4; }
          50% { fill: #0ea5e9; }
          75% { fill: #2563eb; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes morphShape {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
        }
        @keyframes drawPath {
          0% { stroke-dashoffset: 500; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-reverse {
          animation: floatReverse 5s ease-in-out infinite;
        }
        .draw-animation {
          stroke-dasharray: 1000;
          animation: draw 3s ease-in-out forwards;
        }
        .color-shift {
          animation: colorShift 4s ease-in-out infinite;
        }
        .spin-slow {
          animation: spin 20s linear infinite;
        }
        .morph-shape {
          animation: morphShape 8s ease-in-out infinite;
        }
        .path-draw {
          stroke-dasharray: 500;
          animation: drawPath 2s ease-out forwards;
        }
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Creative Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

          {/* Animated Glow Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-40 right-80 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />

          {/* Morphing Shape Background */}
          <div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-sky-500/10 morph-shape blur-2xl"
          />

          {/* Right Side - Animated Design Visuals */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-20">
            <div className="relative h-full flex items-center justify-center">
              
              {/* Main Design Canvas SVG */}
              <svg
                viewBox="0 0 500 500"
                className="w-[600px] h-[600px] float-animation"
                style={{ animationDelay: '0.5s' }}
              >
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="blueCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6">
                      <animate attributeName="stop-color" values="#3b82f6;#06b6d4;#3b82f6" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#06b6d4">
                      <animate attributeName="stop-color" values="#06b6d4;#3b82f6;#06b6d4" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="cyanSkyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>

                  <linearGradient id="canvasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1f2e" />
                    <stop offset="100%" stopColor="#0f0f1a" />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.3"/>
                  </filter>
                </defs>

                {/* Design Canvas Background */}
                <rect x="80" y="60" width="340" height="380" rx="20" fill="url(#canvasGradient)" filter="url(#shadow)" />
                <rect x="80" y="60" width="340" height="380" rx="20" fill="none" stroke="url(#blueCyanGradient)" strokeWidth="2" />

                {/* Canvas Header */}
                <rect x="80" y="60" width="340" height="40" rx="20" ry="0" fill="#1a1a2e" />
                <circle cx="105" cy="80" r="6" fill="#ff6b6b">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="125" cy="80" r="6" fill="#ffd93d">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </circle>
                <circle cx="145" cy="80" r="6" fill="#6bcb77">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="0.6s" />
                </circle>

                {/* Animated Bezier Curve */}
                <path
                  d="M120 200 Q 180 120, 250 180 T 380 160"
                  fill="none"
                  stroke="url(#blueCyanGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="path-draw"
                  filter="url(#glow)"
                />

                {/* Control Points */}
                <circle cx="120" cy="200" r="8" fill="#3b82f6" className="bounce-animation" />
                <circle cx="250" cy="180" r="8" fill="#06b6d4" className="bounce-animation" style={{ animationDelay: '0.2s' }} />
                <circle cx="380" cy="160" r="8" fill="#0ea5e9" className="bounce-animation" style={{ animationDelay: '0.4s' }} />

                {/* Control Lines */}
                <line x1="120" y1="200" x2="180" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="180" x2="180" y2="120" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </line>

                {/* Animated Shape 1 - Morphing Rectangle */}
                <rect x="120" y="250" width="80" height="80" rx="10" fill="url(#blueCyanGradient)" opacity="0.8">
                  <animate attributeName="rx" values="10;40;10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </rect>

                {/* Animated Shape 2 - Circle */}
                <circle cx="280" cy="290" r="40" fill="none" stroke="url(#cyanSkyGradient)" strokeWidth="3">
                  <animate attributeName="r" values="35;45;35" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Animated Shape 3 - Triangle */}
                <polygon points="360,250 400,330 320,330" fill="url(#blueCyanGradient)" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="rotate" values="0 360 290;10 360 290;0 360 290" dur="4s" repeatCount="indefinite" />
                </polygon>

                {/* Color Palette */}
                <g transform="translate(120, 360)">
                  <rect x="0" y="0" width="30" height="30" rx="5" fill="#3b82f6">
                    <animate attributeName="y" values="0;-5;0" dur="1.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="40" y="0" width="30" height="30" rx="5" fill="#06b6d4">
                    <animate attributeName="y" values="0;-5;0" dur="1.5s" repeatCount="indefinite" begin="0.1s" />
                  </rect>
                  <rect x="80" y="0" width="30" height="30" rx="5" fill="#0ea5e9">
                    <animate attributeName="y" values="0;-5;0" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
                  </rect>
                  <rect x="120" y="0" width="30" height="30" rx="5" fill="#2563eb">
                    <animate attributeName="y" values="0;-5;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                  </rect>
                  <rect x="160" y="0" width="30" height="30" rx="5" fill="#1d4ed8">
                    <animate attributeName="y" values="0;-5;0" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
                  </rect>
                </g>

                {/* Cursor */}
                <g className="bounce-animation">
                  <path d="M300 320 L300 350 L315 340 L325 360 L335 355 L325 335 L340 335 Z" fill="white" stroke="#3b82f6" strokeWidth="2">
                    <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Layer Icons */}
                <g transform="translate(400, 150)">
                  <rect x="0" y="0" width="25" height="25" rx="3" fill="#3b82f6" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="5" y="30" width="25" height="25" rx="3" fill="#06b6d4" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </rect>
                  <rect x="10" y="60" width="25" height="25" rx="3" fill="#0ea5e9" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.3;0.5" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </rect>
                </g>
              </svg>

              {/* Floating Design Tools */}
              
              {/* Pen Tool */}
              <div className="absolute top-20 right-32 float-animation" style={{ animationDelay: '0s' }}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="35" fill="#1a1a2e" stroke="url(#penGradient)" strokeWidth="2" />
                  <path d="M30 50 L40 25 L50 50 L40 45 Z" fill="url(#penGradient)" />
                  <circle cx="40" cy="25" r="3" fill="#fff" />
                </svg>
              </div>

              {/* Brush Tool */}
              <div className="absolute bottom-32 left-20 float-reverse" style={{ animationDelay: '1s' }}>
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <defs>
                    <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <circle cx="35" cy="35" r="30" fill="#1a1a2e" stroke="url(#brushGradient)" strokeWidth="2" />
                  <rect x="25" y="20" width="8" height="25" rx="2" fill="url(#brushGradient)" />
                  <ellipse cx="29" cy="48" rx="8" ry="5" fill="url(#brushGradient)" />
                </svg>
              </div>

              {/* Color Wheel */}
              <div className="absolute top-1/3 left-10 spin-slow">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="20 80" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-25" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-50" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-75" />
                  <circle cx="30" cy="30" r="12" fill="#1a1a2e" />
                </svg>
              </div>

              {/* Shape Tool */}
              <div className="absolute bottom-20 right-20 float-animation" style={{ animationDelay: '2s' }}>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <defs>
                    <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <circle cx="32.5" cy="32.5" r="28" fill="#1a1a2e" stroke="url(#shapeGradient)" strokeWidth="2" />
                  <rect x="18" y="18" width="12" height="12" fill="url(#shapeGradient)" />
                  <circle cx="45" cy="24" r="7" fill="none" stroke="url(#shapeGradient)" strokeWidth="2" />
                  <polygon points="24,48 32,35 40,48" fill="url(#shapeGradient)" />
                </svg>
              </div>

              {/* Eyedropper */}
              <div className="absolute top-2/3 right-10 float-reverse" style={{ animationDelay: '0.5s' }}>
                <svg width="55" height="55" viewBox="0 0 55 55">
                  <defs>
                    <linearGradient id="dropperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="27.5" cy="27.5" r="24" fill="#1a1a2e" stroke="url(#dropperGradient)" strokeWidth="2" />
                  <ellipse cx="27.5" cy="20" rx="6" ry="8" fill="url(#dropperGradient)" />
                  <rect x="24" y="26" width="7" height="15" fill="url(#dropperGradient)" />
                  <path d="M24 41 L27.5 48 L31 41" fill="url(#dropperGradient)" />
                </svg>
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${['#3b82f6', '#06b6d4', '#0ea5e9', '#2563eb'][i % 4]}, ${['#06b6d4', '#0ea5e9', '#2563eb', '#3b82f6'][i % 4]})`,
                    top: `${15 + (i * 10)}%`,
                    right: `${10 + (i * 8)}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: `0 0 10px ${['#3b82f6', '#06b6d4', '#0ea5e9', '#2563eb'][i % 4]}`,
                  }}
                />
              ))}

            </div>
          </div>
        </div>

        {/* Hero Content - Left Side */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8 group hover:bg-blue-500/20 transition-all duration-300 cursor-pointer">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm text-blue-400 font-medium">Creative Design Studio</span>
              <FaMagic className="ml-2 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Headline with Animated Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white mb-2">Design That</span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3b82f6, #06b6d4, #0ea5e9, #2563eb, #3b82f6)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite',
                }}
              >
                Inspires & Converts
              </span>
            </h1>

            <style jsx>{`
              @keyframes gradient {
                0% { background-position: 0% center; }
                100% { background-position: 200% center; }
              }
            `}</style>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Transform your brand with stunning visual designs that captivate audiences.
              From logos to complete brand identities, we craft pixel-perfect designs
              that tell your unique story.
            </p>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div 
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <span className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  <FaPaintBrush className="mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your Design
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 bg-transparent border-2 border-blue-500/50 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center text-blue-400 hover:text-blue-300">
                <FaLayerGroup className="mr-2 group-hover:scale-110 transition-transform" />
                View Portfolio
              </button>
            </div>

            {/* Tools We Use */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Tools we master:</span>
              <div className="flex space-x-4">
                {/* Figma Icon */}
                <div className="group cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                    <path fill="#3b82f6" d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                    <path fill="#06b6d4" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                    <path fill="#0ea5e9" d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
                    <path fill="#2563eb" d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                    <path fill="#1d4ed8" d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                  </svg>
                </div>
                {/* Photoshop Icon */}
                <div className="group cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                    <rect width="24" height="24" rx="4" fill="#001e36"/>
                    <text x="4" y="17" fill="#31a8ff" fontSize="12" fontWeight="bold">Ps</text>
                  </svg>
                </div>
                {/* Illustrator Icon */}
                <div className="group cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                    <rect width="24" height="24" rx="4" fill="#330000"/>
                    <text x="5" y="17" fill="#ff9a00" fontSize="12" fontWeight="bold">Ai</text>
                  </svg>
                </div>
                {/* Sketch Icon */}
                <div className="group cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                    <polygon points="12,2 22,9 12,22 2,9" fill="url(#sketchGrad)"/>
                    <defs>
                      <linearGradient id="sketchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}