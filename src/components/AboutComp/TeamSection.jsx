// TeamSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiUsers, HiSparkles } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import Saifimg from '/saif.png'
import Shakibimg from '/sakib.jpg'
import Ruhulimg from '/Ruhul.png'
import Prantoimg from '/Pranto.jpg'
import Shantoimg from '/shanto.jpg'
import Arafatimg from '/Arafat.png'
import { Link } from 'react-router-dom';

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Saif Husain',
      role: 'CO-Founder & Head of Development Branch',
      image: Saifimg,
      bio: 'Visionary leader with 4+ years of industry experience in 3 companies in too many Projects.',
    },
    {
      id: 2,
      name: 'Shabbir Ahmed Shakib',
      role: 'CO-Founder & Head of Grapichs Branch',
      image: Shakibimg,
      bio: 'A highly skilled graphics designer with strong expertise in branding, creative visuals, and modern design trends.',
    },
    {
      id: 3,
      name: 'Arafat Islam',
      role: 'Co-Founder & Senior Wordpress Developer',
      image: Arafatimg,
      bio: 'A highly experienced Senior Wordpress Developer skilled in building fast, secure, and scalable web applications.',
    },
    {
      id: 4,
      name: 'Ariful Islam Pranta',
      role: 'Co-Founder & Senior Web Developer',
      image: Prantoimg,
      bio: 'A highly experienced Senior Web Developer skilled in building fast, secure, and scalable web applications.',
    },
    {
      id: 5,
      name: 'Hasibul Hasan Shanto',
      role: 'Co-Founder & Head of HR Depertment',
      image: Shantoimg,
      bio: 'An experienced HR professional with strong expertise in recruitment, employee relations, performance management, and organizational development.',
    },
    {
      id: 6,
      name: 'Ruhul Amin',
      role: 'Product Manager & Accountent',
      image: Ruhulimg,
      bio: 'A strategic Product Manager experienced in turning ideas into successful market-ready products. Skilled in product research & roadmap planning.',
    },
  ];

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 mb-6"
          >
            <HiUsers className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
              Meet Our Experts
            </span>
          </div>

          {/* Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Meet the talented individuals behind our success. Our diverse team brings
            together expertise, creativity, and passion to deliver exceptional results.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                {/* Gradient Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Image Container - MUCH BIGGER SIZE */}
                  <div className="relative mb-6">
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto">
                      {/* Rotating Border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500" style={{ padding: '3px' }}>
                        <div className="w-full h-full rounded-full bg-gray-900"></div>
                      </div>
                      
                      {/* Image - BIGGER */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-3 border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Online Indicator */}
                      {/* <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-3 border-gray-900 group-hover:animate-pulse"></div> */}
                    </div>

                    {/* Sparkle Effect */}
                    <HiSparkles className="absolute top-0 right-1/4 text-cyan-400 text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card Shadow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 translate-y-4"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-center mt-16"
        >
            <Link
            to="/contact"
            >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-md text-white font-semibold hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
            <span>Join Our Team</span>
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          </Link>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-500/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-blue-500/20 rounded-full"></div>
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-500"></div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default TeamSection;