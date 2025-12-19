// RecentWorks.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import forestweb from '/forestweb.png'
import ecommerce1 from '/ecommerce1.png'
import ecommerce2 from '/ecommerce2.png'
import resturant from '/resturant.png'
import moviehub from '/moviehub.png'
import farm from '/farm.png'
import cmit from '/cmit.png'
import esports from '/esports.png'

const RecentWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const works = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with React & Node.js Based on MERN',
      image: ecommerce1,
      link: 'https://idea-nect-hackathon-project-5grs.vercel.app/',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Ecommerce Fruits sell Website',
      category: 'web',
      description: 'Responsive portfolio with animations',
      image: ecommerce2,
      link: 'https://fresh-fruits-shop.vercel.app/',
      tags: ['React', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 9,
      title: 'Forest Web Platform',
      category: 'web',
      description: 'Full-stack Forest web Based on Wordpress',
      image: forestweb,
      link: 'https://gustl-bul.de/',
      tags: ['Wordpress', 'Woocommerce', 'Elementor'],
    },
    {
      id: 10,
      title: 'Resturant Website',
      category: 'web',
      description: 'Full-stack Forest web Based on MERN',
      image: resturant,
      link: 'https://fruits-ecommerce-ten.vercel.app/',
      tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    },
    {
      id: 11,
      title: 'MovieHub Website',
      category: 'web',
      description: 'Full-stack Forest web Based on MERN',
      image: moviehub,
      link: 'https://movie-hub-seven-blond.vercel.app/',
      tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    },
    {
      id: 12,
      title: 'Farm based Website',
      category: 'web',
      description: 'Full-stack Forest web Based on MERN',
      image: farm,
      link: 'https://farm-hub-ten.vercel.app/',
      tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    },
    {
      id: 13,
      title: 'It-Farm based Website',
      category: 'web',
      description: 'Full-stack Forest web Based on Wordpress',
      image: cmit,
      link: 'https://cmitbangladesh.com/',
      tags: ['Wordpress', 'Elementor', 'Woocommerce'],
    },
    {
      id: 14,
      title: 'E-sports Website',
      category: 'web',
      description: 'Full-stack Forest web Based on MERN',
      image: esports,
      link: 'https://tournamentixs.netlify.app/',
      tags: ['React', 'Tailwind', 'Node.js'],
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web Development{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest web development projects. Each work represents
            dedication, creativity, and technical excellence.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              key={work.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Web</span>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {work.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;