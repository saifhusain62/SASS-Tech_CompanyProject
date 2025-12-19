import { useState, useEffect } from 'react';
import {
  FaPlay,
  FaVideo,
  FaFilm,
  FaArrowRight,
  FaCut,
  FaMagic,
  FaVolumeUp,
  FaAdjust,
  FaExpand,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaCogs,
  FaPhotoVideo,
} from 'react-icons/fa';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
        @keyframes playhead {
          0% { transform: translateX(0); }
          100% { transform: translateX(260px); }
        }
        @keyframes waveform {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
        @keyframes filmRoll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }
        @keyframes recordBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes frameSlide {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes colorGrade {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(20deg); }
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
        .playhead-animation {
          animation: playhead 4s linear infinite;
        }
        .waveform-animation {
          animation: waveform 0.5s ease-in-out infinite;
        }
        .record-blink {
          animation: recordBlink 1s ease-in-out infinite;
        }
        .film-roll {
          animation: filmRoll 3s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Film Strip Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 48px,
                rgba(59, 130, 246, 0.1) 48px,
                rgba(59, 130, 246, 0.1) 50px
              )`,
            }}
          />

          {/* Video Grid Pattern */}
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

          {/* Right Side - Video Editing Visuals */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-20">
            <div className="relative h-full flex items-center justify-center">
              
              {/* Main Video Editor SVG */}
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

                  <linearGradient id="editorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1f2e" />
                    <stop offset="100%" stopColor="#0f0f1a" />
                  </linearGradient>

                  <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="50%" stopColor="#2a2a4e" />
                    <stop offset="100%" stopColor="#1a1a2e" />
                  </linearGradient>

                  <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
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

                  <clipPath id="videoClip">
                    <rect x="100" y="110" width="300" height="170" rx="5" />
                  </clipPath>
                </defs>

                {/* Editor Background */}
                <rect x="80" y="60" width="340" height="380" rx="20" fill="url(#editorGradient)" filter="url(#shadow)" />
                <rect x="80" y="60" width="340" height="380" rx="20" fill="none" stroke="url(#blueCyanGradient)" strokeWidth="2" />

                {/* Editor Header */}
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

                {/* Editor Title */}
                <text x="250" y="85" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">Video Editor Pro</text>

                {/* Video Preview Window */}
                <rect x="100" y="110" width="300" height="170" rx="8" fill="url(#videoGradient)" />
                <rect x="100" y="110" width="300" height="170" rx="8" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />

                {/* Video Content Placeholder - Animated Scene */}
                <g clipPath="url(#videoClip)">
                  {/* Gradient Background Scene */}
                  <rect x="100" y="110" width="300" height="170" fill="#0a0a1a" />
                  
                  {/* Animated Mountains */}
                  <polygon points="100,280 180,180 260,280" fill="#1e3a5f" opacity="0.8">
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
                  </polygon>
                  <polygon points="180,280 280,160 380,280" fill="#2563eb" opacity="0.6">
                    <animate attributeName="opacity" values="0.5;0.7;0.5" dur="4s" repeatCount="indefinite" />
                  </polygon>
                  <polygon points="280,280 360,190 440,280" fill="#0ea5e9" opacity="0.4">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite" />
                  </polygon>

                  {/* Sun/Moon */}
                  <circle cx="350" cy="150" r="25" fill="#06b6d4" opacity="0.8">
                    <animate attributeName="r" values="23;27;23" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
                  </circle>

                  {/* Stars */}
                  {[...Array(5)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={120 + i * 50}
                      cy={130 + (i % 3) * 20}
                      r="2"
                      fill="#fff"
                      opacity="0.6"
                    >
                      <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                </g>

                {/* Play Button Overlay */}
                <circle cx="250" cy="195" r="25" fill="rgba(0,0,0,0.5)" stroke="#fff" strokeWidth="2">
                  <animate attributeName="r" values="23;27;23" dur="2s" repeatCount="indefinite" />
                </circle>
                <polygon points="243,185 243,205 263,195" fill="#fff">
                  <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
                </polygon>

                {/* Recording Indicator */}
                <circle cx="115" cy="125" r="5" fill="#ef4444" className="record-blink" />
                <text x="128" y="129" fill="#ef4444" fontSize="10" fontWeight="bold">REC</text>

                {/* Timecode */}
                <text x="370" y="270" fill="#3b82f6" fontSize="11" textAnchor="end" fontFamily="monospace">00:01:24:15</text>

                {/* Video Controls */}
                <g transform="translate(100, 285)">
                  <rect width="300" height="30" rx="5" fill="#1a1a2e" />
                  
                  {/* Control Buttons */}
                  <g transform="translate(15, 8)">
                    <polygon points="0,7 10,0 10,14" fill="#9ca3af" opacity="0.7" />
                  </g>
                  <g transform="translate(35, 8)">
                    <rect width="4" height="14" fill="#9ca3af" opacity="0.7" />
                    <rect x="7" width="4" height="14" fill="#9ca3af" opacity="0.7" />
                  </g>
                  <g transform="translate(60, 8)">
                    <polygon points="10,7 0,0 0,14" fill="#9ca3af" opacity="0.7" />
                  </g>

                  {/* Progress Bar */}
                  <rect x="90" y="10" width="180" height="10" rx="5" fill="#2a2a4e" />
                  <rect x="90" y="10" width="80" height="10" rx="5" fill="url(#blueCyanGradient)">
                    <animate attributeName="width" values="0;180;0" dur="8s" repeatCount="indefinite" />
                  </rect>

                  {/* Volume */}
                  <g transform="translate(280, 7)">
                    <rect width="3" height="6" y="10" fill="#3b82f6" />
                    <rect x="5" width="3" height="10" y="6" fill="#3b82f6" />
                    <rect x="10" width="3" height="16" fill="#3b82f6" />
                  </g>
                </g>

                {/* Timeline Section */}
                <g transform="translate(100, 330)">
                  <rect width="300" height="100" rx="8" fill="#1a1a2e" opacity="0.8" />
                  
                  {/* Timeline Header */}
                  <text x="10" y="18" fill="#9ca3af" fontSize="10">Timeline</text>
                  
                  {/* Time Markers */}
                  <g transform="translate(10, 25)">
                    {[...Array(7)].map((_, i) => (
                      <g key={i}>
                        <line x1={i * 45} y1="0" x2={i * 45} y2="5" stroke="#4b5563" strokeWidth="1" />
                        <text x={i * 45} y="12" fill="#6b7280" fontSize="7" textAnchor="middle">
                          {`0:${String(i * 5).padStart(2, '0')}`}
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Video Track */}
                  <g transform="translate(10, 40)">
                    <rect width="280" height="20" rx="3" fill="#2a2a4e" />
                    
                    {/* Video Clips */}
                    <rect x="5" y="2" width="60" height="16" rx="2" fill="#3b82f6" opacity="0.8">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="70" y="2" width="80" height="16" rx="2" fill="#06b6d4" opacity="0.8">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.3s" />
                    </rect>
                    <rect x="155" y="2" width="50" height="16" rx="2" fill="#0ea5e9" opacity="0.8">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.6s" />
                    </rect>
                    <rect x="210" y="2" width="65" height="16" rx="2" fill="#2563eb" opacity="0.8">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.9s" />
                    </rect>

                    {/* Clip Thumbnails */}
                    <rect x="8" y="5" width="10" height="10" rx="1" fill="#1a1a2e" opacity="0.5" />
                    <rect x="73" y="5" width="10" height="10" rx="1" fill="#1a1a2e" opacity="0.5" />
                    <rect x="158" y="5" width="10" height="10" rx="1" fill="#1a1a2e" opacity="0.5" />
                    <rect x="213" y="5" width="10" height="10" rx="1" fill="#1a1a2e" opacity="0.5" />
                  </g>

                  {/* Audio Track */}
                  <g transform="translate(10, 65)">
                    <rect width="280" height="15" rx="3" fill="#1e293b" />
                    
                    {/* Audio Waveform */}
                    {[...Array(56)].map((_, i) => (
                      <rect 
                        key={i}
                        x={5 + i * 5}
                        y={7 - Math.sin(i * 0.5) * 5}
                        width="3"
                        height={2 + Math.abs(Math.sin(i * 0.5)) * 10}
                        rx="1"
                        fill="#06b6d4"
                        opacity="0.6"
                      >
                        <animate 
                          attributeName="height" 
                          values={`${2 + Math.abs(Math.sin(i * 0.5)) * 10};${4 + Math.abs(Math.sin(i * 0.5 + 1)) * 10};${2 + Math.abs(Math.sin(i * 0.5)) * 10}`}
                          dur="0.5s"
                          repeatCount="indefinite"
                          begin={`${i * 0.02}s`}
                        />
                      </rect>
                    ))}
                  </g>

                  {/* Playhead */}
                  <g className="playhead-animation">
                    <line x1="15" y1="25" x2="15" y2="85" stroke="#3b82f6" strokeWidth="2" />
                    <polygon points="10,25 20,25 15,20" fill="#3b82f6" />
                  </g>
                </g>

                {/* Effects Panel - Right Side */}
                <g transform="translate(405, 110)">
                  <text x="0" y="0" fill="#9ca3af" fontSize="9">Effects</text>
                  
                  {/* Effect Icons */}
                  <rect x="0" y="10" width="30" height="30" rx="5" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <text x="15" y="30" fill="#3b82f6" fontSize="8" textAnchor="middle">Fx</text>

                  <rect x="0" y="50" width="30" height="30" rx="5" fill="#1a1a2e" stroke="#06b6d4" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </rect>
                  <text x="15" y="70" fill="#06b6d4" fontSize="8" textAnchor="middle">CC</text>

                  <rect x="0" y="90" width="30" height="30" rx="5" fill="#1a1a2e" stroke="#0ea5e9" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </rect>
                  <text x="15" y="110" fill="#0ea5e9" fontSize="8" textAnchor="middle">T</text>
                </g>
              </svg>

              {/* Floating Video Tools */}
              
              {/* Camera */}
              <div className="absolute top-20 right-32 float-animation" style={{ animationDelay: '0s' }}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="35" fill="#1a1a2e" stroke="url(#cameraGradient)" strokeWidth="2" />
                  <rect x="22" y="28" width="28" height="24" rx="3" fill="none" stroke="url(#cameraGradient)" strokeWidth="2" />
                  <polygon points="50,32 62,25 62,55 50,48" fill="url(#cameraGradient)" />
                  <circle cx="36" cy="40" r="6" fill="none" stroke="url(#cameraGradient)" strokeWidth="2">
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Film Strip */}
              <div className="absolute bottom-32 left-20 float-reverse" style={{ animationDelay: '1s' }}>
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <defs>
                    <linearGradient id="filmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <circle cx="35" cy="35" r="30" fill="#1a1a2e" stroke="url(#filmGradient)" strokeWidth="2" />
                  <rect x="18" y="20" width="34" height="30" rx="2" fill="none" stroke="url(#filmGradient)" strokeWidth="2" />
                  {/* Film Perforations */}
                  <rect x="20" y="23" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  <rect x="20" y="32" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  <rect x="20" y="41" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  <rect x="46" y="23" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  <rect x="46" y="32" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  <rect x="46" y="41" width="4" height="6" rx="1" fill="url(#filmGradient)" opacity="0.6" />
                  {/* Frames */}
                  <rect x="27" y="25" width="16" height="10" rx="1" fill="url(#filmGradient)" opacity="0.4" />
                  <rect x="27" y="38" width="16" height="10" rx="1" fill="url(#filmGradient)" opacity="0.4" />
                </svg>
              </div>

              {/* Color Wheel - Color Grading */}
              <div className="absolute top-1/3 left-10 spin-slow">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="20 80" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-25" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-50" />
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-75" />
                  <circle cx="30" cy="30" r="12" fill="#1a1a2e" />
                </svg>
              </div>

              {/* Scissors - Cut Tool */}
              <div className="absolute bottom-20 right-20 float-animation" style={{ animationDelay: '2s' }}>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <defs>
                    <linearGradient id="cutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <circle cx="32.5" cy="32.5" r="28" fill="#1a1a2e" stroke="url(#cutGradient)" strokeWidth="2" />
                  {/* Scissor Blades */}
                  <ellipse cx="24" cy="24" rx="8" ry="4" fill="none" stroke="url(#cutGradient)" strokeWidth="2" transform="rotate(-30, 24, 24)" />
                  <ellipse cx="41" cy="24" rx="8" ry="4" fill="none" stroke="url(#cutGradient)" strokeWidth="2" transform="rotate(30, 41, 24)" />
                  <line x1="24" y1="28" x2="32" y2="45" stroke="url(#cutGradient)" strokeWidth="2" />
                  <line x1="41" y1="28" x2="33" y2="45" stroke="url(#cutGradient)" strokeWidth="2" />
                </svg>
              </div>

              {/* Waveform - Audio */}
              <div className="absolute top-2/3 right-10 float-reverse" style={{ animationDelay: '0.5s' }}>
                <svg width="55" height="55" viewBox="0 0 55 55">
                  <defs>
                    <linearGradient id="audioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="27.5" cy="27.5" r="24" fill="#1a1a2e" stroke="url(#audioGradient)" strokeWidth="2" />
                  {/* Waveform Bars */}
                  {[...Array(7)].map((_, i) => (
                    <rect 
                      key={i}
                      x={12 + i * 5}
                      y={27.5 - 5 - Math.sin(i) * 8}
                      width="3"
                      height={10 + Math.sin(i) * 16}
                      rx="1"
                      fill="url(#audioGradient)"
                    >
                      <animate 
                        attributeName="height" 
                        values={`${10 + Math.sin(i) * 16};${15 + Math.sin(i + 1) * 16};${10 + Math.sin(i) * 16}`}
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  ))}
                </svg>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-5 float-animation" style={{ animationDelay: '1.5s' }}>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="22" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="2">
                    <animate attributeName="stroke-width" values="2;3;2" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <polygon points="20,15 20,35 38,25" fill="#3b82f6">
                    <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
                  </polygon>
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

              {/* Film Strip Decoration */}
              <div className="absolute top-10 left-1/4 opacity-20">
                <svg width="100" height="30" viewBox="0 0 100 30">
                  <rect width="100" height="30" fill="#1a1a2e" />
                  {[...Array(5)].map((_, i) => (
                    <g key={i}>
                      <rect x={5 + i * 20} y="3" width="4" height="6" rx="1" fill="#3b82f6" />
                      <rect x={5 + i * 20} y="21" width="4" height="6" rx="1" fill="#3b82f6" />
                      <rect x={11 + i * 20} y="5" width="8" height="20" rx="1" fill="#06b6d4" opacity="0.5" />
                    </g>
                  ))}
                </svg>
              </div>

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
              <span className="text-sm text-blue-400 font-medium">Professional Video Editing</span>
              <FaFilm className="ml-2 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Headline with Animated Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white mb-2">Videos That</span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3b82f6, #06b6d4, #0ea5e9, #2563eb, #3b82f6)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite',
                }}
              >
                Captivate & Engage
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
              Transform your raw footage into cinematic masterpieces. From color grading
              to motion graphics, sound design to visual effects — we bring your
              vision to life with professional video editing.
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
                  <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                  Start Your Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 bg-transparent border-2 border-blue-500/50 rounded-full font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center text-blue-400 hover:text-blue-300">
                <FaVideo className="mr-2 group-hover:scale-110 transition-transform" />
                View Showreel
              </button>
            </div>

            {/* Services Icons */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Our services:</span>
              <div className="flex space-x-4">
                {/* Color Grading */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all">
                  <FaAdjust className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Cutting */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-all">
                  <FaCut className="text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* VFX */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-all">
                  <FaMagic className="text-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Sound Design */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 transition-all">
                  <FaVolumeUp className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                {/* Motion Graphics */}
                <div className="group cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-600/10 hover:bg-cyan-600/20 transition-all">
                  <FaPhotoVideo className="text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
            </div>

            {/* Software Expertise */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-6">
                <span className="text-gray-500 text-sm">Software we use:</span>
                <div className="flex space-x-4">
                  {/* Premiere Pro */}
                  <div className="group cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 28 28" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                      <rect width="28" height="28" rx="4" fill="#00005b"/>
                      <text x="5" y="19" fill="#9999ff" fontSize="11" fontWeight="bold">Pr</text>
                    </svg>
                  </div>
                  {/* After Effects */}
                  <div className="group cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 28 28" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                      <rect width="28" height="28" rx="4" fill="#00005b"/>
                      <text x="5" y="19" fill="#9999ff" fontSize="11" fontWeight="bold">Ae</text>
                    </svg>
                  </div>
                  {/* DaVinci Resolve */}
                  <div className="group cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 28 28" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                      <rect width="28" height="28" rx="4" fill="#1a1a2e"/>
                      <text x="5" y="19" fill="#ff6b35" fontSize="11" fontWeight="bold">Dr</text>
                    </svg>
                  </div>
                  {/* Final Cut Pro */}
                  <div className="group cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 28 28" className="opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                      <rect width="28" height="28" rx="4" fill="#3b3b3b"/>
                      <text x="4" y="19" fill="#fff" fontSize="10" fontWeight="bold">FCP</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Types */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {['YouTube', 'Corporate', 'Music Videos', 'Commercials', 'Documentaries', 'Social Media'].map((type, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}