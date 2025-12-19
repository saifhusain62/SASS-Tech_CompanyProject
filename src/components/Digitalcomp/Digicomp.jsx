import { useState, useEffect } from 'react';
import {
  FaRocket,
  FaChartLine,
  FaBullhorn,
  FaArrowRight,
  FaSearch,
  FaBolt,
  FaGlobe,
  FaUsers,
  FaEnvelope,
  FaHashtag,
  FaMousePointer,
  FaChartBar,
  FaChartPie,
  FaLightbulb,
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
        @keyframes growBar {
          0% { height: 0; }
          100% { height: var(--target-height); }
        }
        @keyframes countUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes rocketFly {
          0%, 100% { transform: translate(0, 0) rotate(-45deg); }
          50% { transform: translate(10px, -10px) rotate(-45deg); }
        }
        @keyframes dataFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
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
        .rocket-animation {
          animation: rocketFly 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Digital Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Binary/Data Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='15' fill='%233b82f6' font-size='10'%3E101%3C/text%3E%3Ctext x='30' y='45' fill='%2306b6d4' font-size='10'%3E010%3C/text%3E%3C/svg%3E")`,
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

          {/* Right Side - Digital Marketing Visuals */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-20">
            <div className="relative h-full flex items-center justify-center">
              
              {/* Main Dashboard SVG */}
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

                  <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1f2e" />
                    <stop offset="100%" stopColor="#0f0f1a" />
                  </linearGradient>

                  <linearGradient id="growthGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
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

                {/* Dashboard Background */}
                <rect x="80" y="60" width="340" height="380" rx="20" fill="url(#dashboardGradient)" filter="url(#shadow)" />
                <rect x="80" y="60" width="340" height="380" rx="20" fill="none" stroke="url(#blueCyanGradient)" strokeWidth="2" />

                {/* Dashboard Header */}
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

                {/* Dashboard Title */}
                <text x="250" y="85" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">Marketing Dashboard</text>

                {/* Growth Chart */}
                <g transform="translate(100, 120)">
                  {/* Chart Background */}
                  <rect width="180" height="100" rx="10" fill="#1a1a2e" opacity="0.5" />
                  
                  {/* Chart Title */}
                  <text x="10" y="20" fill="#9ca3af" fontSize="10">Traffic Growth</text>
                  <text x="10" y="35" fill="#3b82f6" fontSize="16" fontWeight="bold">+247%</text>
                  
                  {/* Growth Line Chart */}
                  <path
                    d="M20 80 Q 40 75, 60 65 T 100 50 T 140 30 T 170 20"
                    fill="none"
                    stroke="url(#blueCyanGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="path-draw"
                    filter="url(#glow)"
                  />
                  
                  {/* Area under chart */}
                  <path
                    d="M20 80 Q 40 75, 60 65 T 100 50 T 140 30 T 170 20 L 170 90 L 20 90 Z"
                    fill="url(#growthGradient)"
                    opacity="0.3"
                  >
                    <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                  </path>

                  {/* Data Points */}
                  <circle cx="60" cy="65" r="4" fill="#3b82f6" className="bounce-animation" />
                  <circle cx="100" cy="50" r="4" fill="#06b6d4" className="bounce-animation" style={{ animationDelay: '0.2s' }} />
                  <circle cx="140" cy="30" r="4" fill="#0ea5e9" className="bounce-animation" style={{ animationDelay: '0.4s' }} />
                </g>

                {/* Conversion Funnel */}
                <g transform="translate(300, 120)">
                  <rect width="100" height="100" rx="10" fill="#1a1a2e" opacity="0.5" />
                  <text x="10" y="20" fill="#9ca3af" fontSize="10">Conversions</text>
                  
                  {/* Funnel Shape */}
                  <path d="M20 35 L80 35 L70 55 L30 55 Z" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M30 58 L70 58 L60 78 L40 78 Z" fill="#06b6d4" opacity="0.8">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </path>
                  <path d="M40 81 L60 81 L55 95 L45 95 Z" fill="#0ea5e9" opacity="0.8">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </path>
                </g>

                {/* Bar Chart - Campaign Performance */}
                <g transform="translate(100, 240)">
                  <rect width="180" height="80" rx="10" fill="#1a1a2e" opacity="0.5" />
                  <text x="10" y="18" fill="#9ca3af" fontSize="10">Campaign ROI</text>
                  
                  {/* Bars */}
                  <rect x="20" y="55" width="20" height="0" rx="3" fill="#3b82f6">
                    <animate attributeName="height" from="0" to="25" dur="1s" fill="freeze" />
                    <animate attributeName="y" from="55" to="30" dur="1s" fill="freeze" />
                  </rect>
                  <rect x="50" y="55" width="20" height="0" rx="3" fill="#06b6d4">
                    <animate attributeName="height" from="0" to="35" dur="1s" fill="freeze" begin="0.2s" />
                    <animate attributeName="y" from="55" to="20" dur="1s" fill="freeze" begin="0.2s" />
                  </rect>
                  <rect x="80" y="55" width="20" height="0" rx="3" fill="#0ea5e9">
                    <animate attributeName="height" from="0" to="45" dur="1s" fill="freeze" begin="0.4s" />
                    <animate attributeName="y" from="55" to="10" dur="1s" fill="freeze" begin="0.4s" />
                  </rect>
                  <rect x="110" y="55" width="20" height="0" rx="3" fill="#2563eb">
                    <animate attributeName="height" from="0" to="30" dur="1s" fill="freeze" begin="0.6s" />
                    <animate attributeName="y" from="55" to="25" dur="1s" fill="freeze" begin="0.6s" />
                  </rect>
                  <rect x="140" y="55" width="20" height="0" rx="3" fill="#1d4ed8">
                    <animate attributeName="height" from="0" to="40" dur="1s" fill="freeze" begin="0.8s" />
                    <animate attributeName="y" from="55" to="15" dur="1s" fill="freeze" begin="0.8s" />
                  </rect>
                </g>

                {/* Pie Chart - Traffic Sources */}
                <g transform="translate(350, 280)">
                  <circle cx="0" cy="0" r="35" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="55 165" transform="rotate(-90)">
                    <animate attributeName="stroke-dasharray" values="0 220;55 165" dur="1s" fill="freeze" />
                  </circle>
                  <circle cx="0" cy="0" r="35" fill="none" stroke="#06b6d4" strokeWidth="12" strokeDasharray="44 176" strokeDashoffset="-55" transform="rotate(-90)">
                    <animate attributeName="stroke-dasharray" values="0 220;44 176" dur="1s" fill="freeze" begin="0.3s" />
                  </circle>
                  <circle cx="0" cy="0" r="35" fill="none" stroke="#0ea5e9" strokeWidth="12" strokeDasharray="33 187" strokeDashoffset="-99" transform="rotate(-90)">
                    <animate attributeName="stroke-dasharray" values="0 220;33 187" dur="1s" fill="freeze" begin="0.6s" />
                  </circle>
                  <circle cx="0" cy="0" r="35" fill="none" stroke="#2563eb" strokeWidth="12" strokeDasharray="88 132" strokeDashoffset="-132" transform="rotate(-90)">
                    <animate attributeName="stroke-dasharray" values="0 220;88 132" dur="1s" fill="freeze" begin="0.9s" />
                  </circle>
                  <circle cx="0" cy="0" r="20" fill="#1a1a2e" />
                  <text x="0" y="5" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">100%</text>
                </g>

                {/* Stats Cards */}
                <g transform="translate(100, 340)">
                  {/* Leads */}
                  <rect width="85" height="45" rx="8" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="1" opacity="0.8" />
                  <text x="10" y="18" fill="#9ca3af" fontSize="8">Leads</text>
                  <text x="10" y="35" fill="#3b82f6" fontSize="14" fontWeight="bold">12.5K</text>
                  <text x="55" y="35" fill="#10b981" fontSize="10">↑ 24%</text>
                </g>

                <g transform="translate(195, 340)">
                  {/* CTR */}
                  <rect width="85" height="45" rx="8" fill="#1a1a2e" stroke="#06b6d4" strokeWidth="1" opacity="0.8" />
                  <text x="10" y="18" fill="#9ca3af" fontSize="8">CTR</text>
                  <text x="10" y="35" fill="#06b6d4" fontSize="14" fontWeight="bold">4.8%</text>
                  <text x="50" y="35" fill="#10b981" fontSize="10">↑ 12%</text>
                </g>

                <g transform="translate(290, 340)">
                  {/* Revenue */}
                  <rect width="110" height="45" rx="8" fill="#1a1a2e" stroke="#0ea5e9" strokeWidth="1" opacity="0.8" />
                  <text x="10" y="18" fill="#9ca3af" fontSize="8">Revenue</text>
                  <text x="10" y="35" fill="#0ea5e9" fontSize="14" fontWeight="bold">$847K</text>
                  <text x="70" y="35" fill="#10b981" fontSize="10">↑ 38%</text>
                </g>

                {/* Cursor */}
                <g className="bounce-animation">
                  <path d="M280 280 L280 310 L295 300 L305 320 L315 315 L305 295 L320 295 Z" fill="white" stroke="#3b82f6" strokeWidth="2">
                    <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
                  </path>
                </g>
              </svg>

              {/* Floating Marketing Icons */}
              
              {/* Rocket - Growth */}
              <div className="absolute top-20 right-32 float-animation" style={{ animationDelay: '0s' }}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="35" fill="#1a1a2e" stroke="url(#rocketGradient)" strokeWidth="2" />
                  <g transform="translate(25, 20) rotate(45, 15, 20)" className="rocket-animation">
                    <path d="M15 5 L25 25 L15 22 L5 25 Z" fill="url(#rocketGradient)" />
                    <path d="M10 25 L8 35 L15 28 L22 35 L20 25" fill="#06b6d4" />
                    <circle cx="15" cy="15" r="3" fill="#fff" />
                  </g>
                </svg>
              </div>

              {/* Target - Ads */}
              <div className="absolute bottom-32 left-20 float-reverse" style={{ animationDelay: '1s' }}>
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <defs>
                    <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <circle cx="35" cy="35" r="30" fill="#1a1a2e" stroke="url(#targetGradient)" strokeWidth="2" />
                  <circle cx="35" cy="35" r="20" fill="none" stroke="url(#targetGradient)" strokeWidth="2" opacity="0.8">
                    <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="35" cy="35" r="12" fill="none" stroke="url(#targetGradient)" strokeWidth="2" opacity="0.6" />
                  <circle cx="35" cy="35" r="5" fill="url(#targetGradient)">
                    <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Analytics Wheel */}
              <div className="absolute top-1/3 left-10 spin-slow">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="20 80" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-25" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-50" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-75" />
                  <circle cx="30" cy="30" r="12" fill="#1a1a2e" />
                </svg>
              </div>

              {/* SEO Magnifier */}
              <div className="absolute bottom-20 right-20 float-animation" style={{ animationDelay: '2s' }}>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <defs>
                    <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <circle cx="32.5" cy="32.5" r="28" fill="#1a1a2e" stroke="url(#seoGradient)" strokeWidth="2" />
                  <circle cx="28" cy="28" r="12" fill="none" stroke="url(#seoGradient)" strokeWidth="3">
                    <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <line x1="36" y1="36" x2="48" y2="48" stroke="url(#seoGradient)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Email Marketing */}
              <div className="absolute top-2/3 right-10 float-reverse" style={{ animationDelay: '0.5s' }}>
                <svg width="55" height="55" viewBox="0 0 55 55">
                  <defs>
                    <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="27.5" cy="27.5" r="24" fill="#1a1a2e" stroke="url(#emailGradient)" strokeWidth="2" />
                  <rect x="14" y="18" width="27" height="19" rx="3" fill="none" stroke="url(#emailGradient)" strokeWidth="2" />
                  <path d="M14 20 L27.5 30 L41 20" fill="none" stroke="url(#emailGradient)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0 50;50 0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

              {/* Social Media Icons */}
              <div className="absolute top-1/2 left-5 float-animation" style={{ animationDelay: '1.5s' }}>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="22" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="2" />
                  <text x="25" y="30" fill="#3b82f6" fontSize="16" textAnchor="middle" fontWeight="bold">#</text>
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

              {/* Data Stream Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
                <line x1="10%" y1="20%" x2="40%" y2="40%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="10;0" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="60%" y1="70%" x2="90%" y2="50%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="10;0" dur="1.5s" repeatCount="indefinite" />
                </line>
              </svg>

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
              <span className="text-sm text-blue-400 font-medium">Digital Marketing Agency</span>
              <FaBolt className="ml-2 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Headline with Animated Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white mb-2">Marketing That</span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3b82f6, #06b6d4, #0ea5e9, #2563eb, #3b82f6)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite',
                }}
              >
                Drives Real Growth
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
              Supercharge your business with data-driven digital marketing strategies.
              From SEO to paid ads, social media to email campaigns, we deliver
              measurable results that scale your revenue.
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
                  <FaRocket className="mr-2 group-hover:rotate-12 transition-transform" />
                  Start Growing Now
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            
            </div>

            {/* Services Icons */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Our expertise:</span>
              <div className="flex space-x-4">
                {/* SEO */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all">
                  <FaSearch className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Social Media */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-all">
                  <FaHashtag className="text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* PPC */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-all">
                  <FaMousePointer className="text-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Email Marketing */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 transition-all">
                  <FaEnvelope className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Analytics */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-600/10 hover:bg-cyan-600/20 transition-all">
                  <FaChartBar className="text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-8">
                <span className="text-gray-500 text-sm">Trusted by:</span>
                <div className="flex space-x-6 opacity-50">
                  {['Google Partner', 'Meta Partner', 'HubSpot'].map((partner, i) => (
                    <span key={i} className="text-gray-400 text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}