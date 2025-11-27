// RecentWorks.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'web', label: 'Web Development' },
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'video', label: 'Video Editing' },
    { id: 'graphics', label: 'Graphics Design' },
  ];

  const works = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with React & Node.js',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500',
      link: 'https://example.com/project1',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Brand Identity Campaign',
      category: 'digital',
      description: 'Complete digital marketing strategy for startup',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      link: 'https://example.com/project2',
      tags: ['SEO', 'Social Media', 'Analytics'],
    },
    {
      id: 3,
      title: 'Corporate Promo Video',
      category: 'video',
      description: 'High-quality promotional video production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500',
      link: 'https://example.com/project3',
      tags: ['After Effects', 'Premiere Pro'],
    },
    {
      id: 4,
      title: 'Brand Logo Design',
      category: 'graphics',
      description: 'Modern minimalist logo and brand guidelines',
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500',
      link: 'https://example.com/project4',
      tags: ['Illustrator', 'Photoshop'],
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Responsive portfolio with animations',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500',
      link: 'https://example.com/project5',
      tags: ['React', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'digital',
      description: 'Viral marketing campaign with 1M+ reach',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500',
      link: 'https://example.com/project6',
      tags: ['Instagram', 'Facebook Ads'],
    },
    {
      id: 7,
      title: 'Product Launch Video',
      category: 'video',
      description: 'Cinematic product reveal video',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=500',
      link: 'https://example.com/project7',
      tags: ['Cinema 4D', 'DaVinci Resolve'],
    },
    {
      id: 8,
      title: 'UI/UX Design System',
      category: 'graphics',
      description: 'Complete design system for mobile app',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500',
      link: 'https://example.com/project8',
      tags: ['Figma', 'Adobe XD'],
    },
  ];

  const filteredWorks =
    activeCategory === 'all'
      ? works
      : works.filter((work) => work.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      web: 'from-blue-500 to-cyan-500',
      digital: 'from-purple-500 to-pink-500',
      video: 'from-red-500 to-orange-500',
      graphics: 'from-green-500 to-emerald-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      web: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      digital: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      video: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      graphics: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    };
    return icons[category];
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Recent{' '}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects across different categories. Each work represents
            dedication, creativity, and technical excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorks.map((work, index) => (
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
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
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
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(work.category)} text-white text-xs font-medium flex items-center gap-2`}>
                    {getCategoryIcon(work.category)}
                    <span className="capitalize">{work.category}</span>
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
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
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
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(work.category)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;