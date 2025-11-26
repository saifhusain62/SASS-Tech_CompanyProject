import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  location: string;
  country: 'BD' | 'USA';
  image: string;
  rating: number;
  service: 'Digital Marketing' | 'Graphics Design' | 'Video Editing';
  feedback: string;
}

const testimonials: Testimonial[] = [
  // Bangladesh Clients
  {
    id: 1,
    name: "Rafiq Ahmed",
    position: "CEO",
    company: "TechBD Solutions",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Outstanding digital marketing services! They helped us increase our online presence by 300%. Our social media engagement has never been better. Highly recommended for any business looking to grow online!"
  },
  {
    id: 2,
    name: "Fatima Begum",
    position: "Marketing Director",
    company: "Fashion House BD",
    location: "Chittagong, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "The graphics team created stunning visuals for our fashion brand. The attention to detail and creativity exceeded our expectations. Our brand identity has been transformed completely!"
  },
  {
    id: 3,
    name: "Kamal Hossain",
    position: "Founder",
    company: "EduTech Bangladesh",
    location: "Sylhet, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.5,
    service: "Video Editing",
    feedback: "Professional video editing that brought our educational content to life. The team understood our vision perfectly and delivered beyond expectations. Will definitely work with them again!"
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    position: "Brand Manager",
    company: "Organic BD",
    location: "Rajshahi, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their SEO strategies doubled our organic traffic within 3 months. The team is responsive, professional, and truly understands the local market. Best investment for our business!"
  },
  {
    id: 5,
    name: "Imran Khan",
    position: "Creative Director",
    company: "MediaX Dhaka",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Exceptional logo design and branding package! They captured our company's essence perfectly. The team's creativity and professionalism are unmatched in the industry."
  },
  // USA Clients
  {
    id: 6,
    name: "Michael Johnson",
    position: "CEO",
    company: "TechStart Inc",
    location: "New York, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Working with this team was a game-changer for our startup. Their digital marketing expertise helped us reach our target audience effectively. ROI increased by 250%!"
  },
  {
    id: 7,
    name: "Sarah Williams",
    position: "Marketing VP",
    company: "GlobalTech Solutions",
    location: "San Francisco, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "The video editing quality is Hollywood-level! They transformed our raw footage into compelling marketing videos. Our YouTube channel grew by 500% after their work!"
  },
  {
    id: 8,
    name: "David Brown",
    position: "Owner",
    company: "Brown's Restaurant Chain",
    location: "Los Angeles, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 4.5,
    service: "Graphics Design",
    feedback: "Beautiful menu designs and promotional materials! The team understood our brand perfectly and delivered stunning graphics that increased our customer engagement."
  },
  {
    id: 9,
    name: "Emily Davis",
    position: "Founder",
    company: "FitLife App",
    location: "Austin, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their app store optimization and social media campaigns were fantastic! Downloads increased by 400% in just 2 months. Incredible team with amazing results!"
  },
  {
    id: 10,
    name: "James Wilson",
    position: "Director",
    company: "Wilson Media Group",
    location: "Chicago, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "Professional, creative, and always on time! They edited our corporate videos with precision and creativity. The final products exceeded all our expectations!"
  },
  // More Bangladesh Clients
  {
    id: 11,
    name: "Shahidul Islam",
    position: "Managing Director",
    company: "GreenTech BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Best digital marketing agency in Bangladesh! They understand the local market while maintaining international standards. Our leads increased by 350%!"
  },
  {
    id: 12,
    name: "Taslima Akter",
    position: "CEO",
    company: "BeautyBD Online",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Stunning product photography editing and social media graphics! Our e-commerce sales jumped 200% after they revamped our visual content. Absolutely amazing work!"
  },
  {
    id: 13,
    name: "Abdul Rahman",
    position: "Founder",
    company: "FoodiesBD",
    location: "Chittagong, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 4.5,
    service: "Video Editing",
    feedback: "They created mouthwatering food videos for our delivery app. The editing style was modern and engaging. Customer orders increased significantly after the campaign!"
  },
  {
    id: 14,
    name: "Sabrina Chowdhury",
    position: "Marketing Head",
    company: "RealEstate BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their Google Ads and Facebook marketing campaigns brought us high-quality leads. Property inquiries increased by 280%. Professional team with excellent communication!"
  },
  {
    id: 15,
    name: "Mahbub Alam",
    position: "Creative Head",
    company: "AdAgency BD",
    location: "Sylhet, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Outstanding creativity and quick turnaround! They designed our entire brand identity including logo, business cards, and marketing materials. Top-notch quality!"
  },
  // More USA Clients
  {
    id: 16,
    name: "Jennifer Martinez",
    position: "Owner",
    company: "Bella Boutique",
    location: "Miami, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "The most creative design team I've ever worked with! They created a stunning visual identity for my boutique. Sales increased 180% after the rebrand!"
  },
  {
    id: 17,
    name: "Robert Taylor",
    position: "CMO",
    company: "FinTech Pro",
    location: "Boston, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their B2B marketing strategies are exceptional! Lead generation improved by 320% and our LinkedIn presence grew significantly. Highly professional team!"
  },
  {
    id: 18,
    name: "Amanda White",
    position: "Content Director",
    company: "StreamMedia",
    location: "Seattle, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 4.5,
    service: "Video Editing",
    feedback: "They edited over 50 videos for our streaming platform. Every single one was perfect! The attention to detail and creative transitions were outstanding!"
  },
  {
    id: 19,
    name: "Christopher Lee",
    position: "Founder",
    company: "GameDev Studios",
    location: "San Diego, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Amazing game art and promotional graphics! They understood our gaming aesthetic perfectly. Our game downloads increased 400% with their marketing materials!"
  },
  {
    id: 20,
    name: "Lisa Anderson",
    position: "VP Marketing",
    company: "HealthPlus",
    location: "Denver, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their healthcare marketing expertise is unmatched! Patient inquiries increased by 250% while maintaining HIPAA compliance. Exceptional work!"
  },
  // Additional Bangladesh Clients
  {
    id: 21,
    name: "Mizanur Rahman",
    position: "Director",
    company: "TextileBD Export",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "They created professional factory tour videos for our international clients. The editing quality impressed our European buyers. Export orders increased by 150%!"
  },
  {
    id: 22,
    name: "Rashida Khatun",
    position: "Owner",
    company: "Handicrafts BD",
    location: "Rajshahi, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Beautiful catalog designs that showcase our traditional crafts! International buyers love the professional presentation. Sales on Etsy increased 300%!"
  },
  {
    id: 23,
    name: "Farhan Ahmed",
    position: "CEO",
    company: "TravelBD Tours",
    location: "Cox's Bazar, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 4.5,
    service: "Digital Marketing",
    feedback: "Our tourism bookings doubled after their SEO and social media work! They understand the travel industry perfectly. Best marketing partner we've had!"
  },
  {
    id: 24,
    name: "Naima Sultana",
    position: "Founder",
    company: "FashionBD Online",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "Stunning fashion video edits that went viral on Facebook! Our page followers increased from 10K to 100K in 3 months. Absolutely incredible results!"
  },
  {
    id: 25,
    name: "Habibur Rahman",
    position: "Managing Partner",
    company: "LegalBD Associates",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 5,
    service: "Graphics Design",
    feedback: "Professional and elegant corporate identity design! They understood our need for a sophisticated look. Client trust and inquiries improved significantly!"
  },
  // Additional USA Clients
  {
    id: 26,
    name: "Jessica Thompson",
    position: "Founder",
    company: "Wellness Studio",
    location: "Portland, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "They transformed our wellness brand's online presence! Instagram followers grew from 5K to 75K. Class bookings are now fully automated and always full!"
  },
  {
    id: 27,
    name: "Daniel Garcia",
    position: "Owner",
    company: "AutoPro Dealership",
    location: "Houston, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "Professional car showcase videos that sell! Each vehicle video they edit gets thousands of views. Sales increased 200% from online leads!"
  },
  {
    id: 28,
    name: "Michelle Robinson",
    position: "Creative Director",
    company: "AdVenture Agency",
    location: "Atlanta, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 4.5,
    service: "Graphics Design",
    feedback: "We outsource our overflow design work to them and the quality is consistently excellent! They're now our go-to partner for all graphic design needs!"
  },
  {
    id: 29,
    name: "Kevin O'Brien",
    position: "CEO",
    company: "SaaS Solutions",
    location: "Phoenix, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 5,
    service: "Digital Marketing",
    feedback: "Their SaaS marketing expertise doubled our trial signups! The content marketing strategy they developed continues to bring organic leads. Outstanding ROI!"
  },
  {
    id: 30,
    name: "Stephanie Clark",
    position: "Owner",
    company: "Clark Photography",
    location: "Nashville, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 5,
    service: "Video Editing",
    feedback: "They edit all my wedding highlight videos and the quality is breathtaking! My clients always cry happy tears. Bookings increased 250% from referrals!"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeFilter, setActiveFilter] = useState<'all' | 'BD' | 'USA'>('all');
  const [activeService, setActiveService] = useState<'all' | 'Digital Marketing' | 'Graphics Design' | 'Video Editing'>('all');
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  
  // Ref to track if component is mounted
  const isMountedRef = useRef(true);

  const filteredTestimonials = testimonials.filter(t => {
    const countryMatch = activeFilter === 'all' || t.country === activeFilter;
    const serviceMatch = activeService === 'all' || t.service === activeService;
    return countryMatch && serviceMatch;
  });

  // Calculate max index safely
  const maxIndex = Math.max(0, filteredTestimonials.length - cardsPerView);

  // Toggle card expansion
  const toggleCardExpansion = (id: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (!isMountedRef.current) return;
      
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset currentIndex when filters change or when it's out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex, activeFilter, activeService]);

  // Auto-slide
  useEffect(() => {
    if (!isPlaying || filteredTestimonials.length <= cardsPerView) return;

    const interval = setInterval(() => {
      if (!isMountedRef.current) return;
      
      setCurrentIndex((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, cardsPerView, filteredTestimonials.length, maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    return stars;
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'Digital Marketing':
        return 'from-blue-500 to-cyan-400';
      case 'Graphics Design':
        return 'from-purple-500 to-pink-400';
      case 'Video Editing':
        return 'from-orange-500 to-red-400';
      default:
        return 'from-blue-500 to-cyan-400';
    }
  };

  // Handle filter changes
  const handleFilterChange = (filter: 'all' | 'BD' | 'USA') => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    setExpandedCards(new Set());
  };

  const handleServiceChange = (service: 'all' | 'Digital Marketing' | 'Graphics Design' | 'Video Editing') => {
    setActiveService(service);
    setCurrentIndex(0);
    setExpandedCards(new Set());
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite 1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite 0.5s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-none {
          display: block;
          -webkit-line-clamp: unset;
          -webkit-box-orient: unset;
          overflow: visible;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Trusted by businesses worldwide. Here's what our valued clients have to say about our services.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '15+', label: 'Countries Served' },
              { value: '1000+', label: 'Projects Completed' }
            ].map((stat, index) => (
              <div 
                key={`stat-${index}`}
                className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Country Filter */}
            <div className="flex gap-2 p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              {(['all', 'BD', 'USA'] as const).map((filter) => (
                <button
                  key={`country-${filter}`}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter === 'all' ? 'All Countries' : filter === 'BD' ? '🇧🇩 Bangladesh' : '🇺🇸 USA'}
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-2 p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              {(['all', 'Digital Marketing', 'Graphics Design', 'Video Editing'] as const).map((service) => (
                <button
                  key={`service-${service}`}
                  onClick={() => handleServiceChange(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeService === service
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {service === 'all' ? 'All Services' : service}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* No Results Message */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No testimonials found for the selected filters.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setActiveService('all');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Testimonials Slider */}
        {filteredTestimonials.length > 0 && (
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 group"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 group"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-8">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                }}
              >
                {filteredTestimonials.map((testimonial) => {
                  const isExpanded = expandedCards.has(testimonial.id);
                  
                  return (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 px-3"
                      style={{ width: `${100 / cardsPerView}%` }}
                    >
                      {/* Glass Card */}
                      <div className="group h-full p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${getServiceColor(testimonial.service)} flex items-center justify-center shadow-lg`}>
                            <FaQuoteLeft className="text-white text-lg" />
                          </div>
                        </div>

                        {/* Service Badge */}
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(testimonial.service)} text-white mb-4`}>
                          {testimonial.service}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {renderStars(testimonial.rating)}
                          <span className="text-gray-400 text-sm ml-2">({testimonial.rating})</span>
                        </div>

                        {/* Feedback */}
                        <div className="mb-2">
                          <p 
                            className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                              isExpanded ? 'line-clamp-none' : 'line-clamp-4'
                            }`}
                          >
                            "{testimonial.feedback}"
                          </p>
                          {testimonial.feedback.length > 150 && (
                            <button
                              onClick={() => toggleCardExpansion(testimonial.id)}
                              className="text-cyan-400 text-xs mt-2 hover:underline focus:outline-none"
                            >
                              {isExpanded ? 'Show less' : 'Read more'}
                            </button>
                          )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 mt-4" />

                        {/* Client Info */}
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name}'s profile`}
                              className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/50"
                              loading="lazy"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                              <MdVerified className="text-white text-xs" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold truncate">{testimonial.name}</h4>
                            <p className="text-gray-400 text-sm truncate">{testimonial.position}</p>
                            <p className="text-cyan-400 text-xs truncate">{testimonial.company}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                              <HiLocationMarker className="text-cyan-400" />
                              <span>{testimonial.country === 'BD' ? '🇧🇩' : '🇺🇸'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Controls & Indicators */}
        {filteredTestimonials.length > cardsPerView && (
          <div className="flex flex-col items-center mt-12 gap-6">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
            >
              {isPlaying ? (
                <>
                  <FaPause className="text-cyan-400" />
                  <span className="text-sm">Pause Autoplay</span>
                </>
              ) : (
                <>
                  <FaPlay className="text-cyan-400" />
                  <span className="text-sm">Resume Autoplay</span>
                </>
              )}
            </button>

            {/* Dot Indicators */}
            <div className="flex flex-wrap justify-center gap-2 max-w-md">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-gray-500 text-sm">
              Showing {Math.min(currentIndex + cardsPerView, filteredTestimonials.length)} of {filteredTestimonials.length} reviews
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our services.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;