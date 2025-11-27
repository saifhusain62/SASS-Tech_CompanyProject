import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaStarHalfAlt, 
  FaChevronLeft, 
  FaChevronRight, 
  FaPause, 
  FaPlay,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaVideo,
  FaBullseye,
  FaGlobe,
  FaSadTear
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';

const testimonials = [
  // Bangladesh Clients - Digital Marketing
  {
    id: 1,
    name: "Rafiq Ahmed",
    position: "CEO",
    company: "TechBD Solutions",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
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
    service: "Website Development",
    feedback: "They built an amazing React-based website for our startup. The performance is incredible, and the UI/UX design is top-notch. Our conversion rate increased by 180%!"
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
    service: "Website Development",
    feedback: "They developed a fantastic online ordering system for our restaurant chain. Orders increased by 300% and customer satisfaction is at an all-time high!"
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
  // Website Development - Bangladesh
  {
    id: 11,
    name: "Shahidul Islam",
    position: "Managing Director",
    company: "GreenTech BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "They developed a stunning corporate website with modern animations and responsive design. Our online inquiries increased by 400%. Truly world-class web development!"
  },
  {
    id: 12,
    name: "Taslima Akter",
    position: "CEO",
    company: "BeautyBD Online",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "They built our complete e-commerce platform from scratch. Beautiful design, fast loading, and seamless checkout. Sales jumped 350% in the first month!"
  },
  {
    id: 13,
    name: "Abdul Rahman",
    position: "Founder",
    company: "FoodiesBD",
    location: "Chittagong, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    service: "Website Development",
    feedback: "Our food delivery website is now the best in the region! Fast, responsive, and with amazing UX. Customer registrations increased by 500%!"
  },
  {
    id: 14,
    name: "Sabrina Chowdhury",
    position: "Marketing Head",
    company: "RealEstate BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "The property listing website they built is phenomenal! Advanced search, virtual tours, and lead generation features. Property inquiries tripled!"
  },
  {
    id: 15,
    name: "Mahbub Alam",
    position: "Creative Head",
    company: "AdAgency BD",
    location: "Sylhet, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Graphics Design",
    feedback: "Outstanding creativity and quick turnaround! They designed our entire brand identity including logo, business cards, and marketing materials. Top-notch quality!"
  },
  // Website Development - USA
  {
    id: 16,
    name: "Jennifer Martinez",
    position: "Owner",
    company: "Bella Boutique",
    location: "Miami, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "They transformed my small boutique into a thriving online store! Shopify integration, payment gateways, everything works perfectly. Revenue up 280%!"
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
    service: "Website Development",
    feedback: "Our fintech platform needed top-notch security and performance. They delivered beyond expectations! User signups increased by 320%!"
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
    service: "Website Development",
    feedback: "Our gaming studio website is now a masterpiece! Incredible animations, portfolio showcase, and blog integration. Player engagement up 400%!"
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
    service: "Website Development",
    feedback: "They built our health products e-commerce platform with HIPAA compliance. Subscription system works flawlessly. Monthly revenue increased 250%!"
  },
  // More Website Development - Bangladesh
  {
    id: 21,
    name: "Mizanur Rahman",
    position: "Director",
    company: "TextileBD Export",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Our B2B textile export website is now the best in the industry! Multi-language support, product catalog, and inquiry system. International orders up 200%!"
  },
  {
    id: 22,
    name: "Rashida Khatun",
    position: "Owner",
    company: "Handicrafts BD",
    location: "Rajshahi, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Beautiful e-commerce store that showcases our traditional crafts! International buyers love it. Etsy integration works perfectly. Sales increased 350%!"
  },
  {
    id: 23,
    name: "Farhan Ahmed",
    position: "CEO",
    company: "TravelBD Tours",
    location: "Cox's Bazar, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    service: "Website Development",
    feedback: "Our travel booking website is stunning! Online booking, payment integration, and tour packages showcase. Bookings doubled within 2 months!"
  },
  {
    id: 24,
    name: "Naima Sultana",
    position: "Founder",
    company: "FashionBD Online",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Complete fashion e-commerce solution with size guides, wishlist, and COD integration. Our online sales now exceed physical store sales!"
  },
  {
    id: 25,
    name: "Habibur Rahman",
    position: "Managing Partner",
    company: "LegalBD Associates",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Professional law firm website with case management portal. Client appointments are now fully online. Practice efficiency improved by 60%!"
  },
  // More Website Development - USA
  {
    id: 26,
    name: "Jessica Thompson",
    position: "Founder",
    company: "Wellness Studio",
    location: "Portland, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "They built our wellness products store with subscription boxes feature. Member retention is at 92%. Monthly recurring revenue up 380%!"
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
    service: "Website Development",
    feedback: "Car dealership website with 360° vehicle views and financing calculator. Online leads increased by 450%. Best investment we made!"
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
    service: "Website Development",
    feedback: "Our SaaS landing page and dashboard are beautiful and functional. User onboarding improved by 70%. Trial to paid conversion up 45%!"
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
    service: "Website Development",
    feedback: "Stunning photography portfolio website with booking system and gallery proofing. Client bookings increased 250% from online inquiries!"
  },
  // Additional Website Development clients
  {
    id: 31,
    name: "Arif Hossain",
    position: "CEO",
    company: "EduLearn BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Complete e-learning platform with course management, video hosting, and certificate generation. Student enrollments increased by 600%!"
  },
  {
    id: 32,
    name: "Rachel Green",
    position: "Founder",
    company: "PetCare Plus",
    location: "Seattle, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Amazing pet products e-commerce store with subscription treats feature! Customer lifetime value increased by 180%. Love working with them!"
  },
  {
    id: 33,
    name: "Tanvir Hassan",
    position: "Director",
    company: "PharmaBD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Pharmacy e-commerce platform with prescription upload and medicine reminders. Online orders now account for 70% of our total sales!"
  },
  {
    id: 34,
    name: "Monica Stevens",
    position: "Owner",
    company: "Artisan Jewelry",
    location: "New York, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Gorgeous jewelry e-commerce site with 3D product views and custom engraving options. High-ticket sales increased by 320%!"
  },
  {
    id: 35,
    name: "Sohel Rana",
    position: "Managing Director",
    company: "LogisticsBD",
    location: "Chittagong, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    service: "Website Development",
    feedback: "Logistics management platform with real-time tracking and automated invoicing. Operational efficiency improved by 75%!"
  },
  {
    id: 36,
    name: "Patricia Moore",
    position: "CEO",
    company: "InteriorPro Design",
    location: "Los Angeles, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Beautiful interior design portfolio with project galleries and consultation booking. Client inquiries tripled within the first month!"
  },
  {
    id: 37,
    name: "Faisal Mahmud",
    position: "Founder",
    company: "AgriTech BD",
    location: "Rajshahi, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Agricultural marketplace connecting farmers to buyers. Transaction volume increased by 400%. Revolutionary platform for rural Bangladesh!"
  },
  {
    id: 38,
    name: "Brandon Wright",
    position: "Owner",
    company: "Craft Brewery Co",
    location: "Denver, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Brewery e-commerce with age verification, subscription clubs, and taproom reservations. Online merchandise sales up 290%!"
  },
  {
    id: 39,
    name: "Sultana Razia",
    position: "Director",
    company: "HealthCare BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Hospital management website with online appointments and telemedicine. Patient satisfaction scores improved by 40%!"
  },
  {
    id: 40,
    name: "Thomas Anderson",
    position: "CEO",
    company: "CryptoTrade Pro",
    location: "Miami, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Cryptocurrency trading platform with real-time charts and secure wallet integration. User base grew to 50K in 3 months!"
  },
  {
    id: 41,
    name: "Ayesha Siddiqua",
    position: "Owner",
    company: "Bakery Bliss BD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Custom cake ordering website with design preview and delivery scheduling. Online orders now 80% of total sales. Amazing work!"
  },
  {
    id: 42,
    name: "Marcus Johnson",
    position: "Founder",
    company: "FitGear Athletics",
    location: "Chicago, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4.5,
    service: "Website Development",
    feedback: "Sports equipment e-commerce with size finder and equipment comparison tools. Average order value increased by 65%!"
  },
  {
    id: 43,
    name: "Rubina Khatun",
    position: "CEO",
    company: "KidsCare BD",
    location: "Sylhet, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Children's products marketplace with safety certifications display. Parent trust increased significantly. Revenue up 220%!"
  },
  {
    id: 44,
    name: "William Harrison",
    position: "Director",
    company: "LegalEase USA",
    location: "Washington DC, USA",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    service: "Website Development",
    feedback: "Law firm website with client portal and document management. New client acquisitions increased by 180%!"
  },
  {
    id: 45,
    name: "Nasreen Akhter",
    position: "Founder",
    company: "EventsBD",
    location: "Dhaka, Bangladesh",
    country: "BD",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    service: "Website Development",
    feedback: "Event management platform with vendor booking and guest management. Now the leading event platform in Bangladesh!"
  }
];

// Service Icon Component
const ServiceIcon = ({ service, className = "" }) => {
  const iconClass = `${className}`;
  
  switch (service) {
    case 'Website Development':
      return <FaLaptopCode className={iconClass} />;
    case 'Digital Marketing':
      return <FaChartLine className={iconClass} />;
    case 'Graphics Design':
      return <FaPalette className={iconClass} />;
    case 'Video Editing':
      return <FaVideo className={iconClass} />;
    default:
      return <FaBullseye className={iconClass} />;
  }
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [expandedCards, setExpandedCards] = useState(new Set());

  const isMountedRef = useRef(true);

  const services = [
    { key: 'all', label: 'All Services', Icon: FaBullseye },
    { key: 'Website Development', label: 'Website Development', Icon: FaLaptopCode },
    { key: 'Digital Marketing', label: 'Digital Marketing', Icon: FaChartLine },
    { key: 'Graphics Design', label: 'Graphics Design', Icon: FaPalette },
    { key: 'Video Editing', label: 'Video Editing', Icon: FaVideo }
  ];

  const filteredTestimonials = testimonials.filter(t => {
    const countryMatch = activeFilter === 'all' || t.country === activeFilter;
    const serviceMatch = activeService === 'all' || t.service === activeService;
    return countryMatch && serviceMatch;
  });

  const maxIndex = Math.max(0, filteredTestimonials.length - cardsPerView);

  const toggleCardExpansion = (id) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!isMountedRef.current) return;
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, activeFilter, activeService, currentIndex]);

  useEffect(() => {
    if (!isPlaying || filteredTestimonials.length <= cardsPerView) return;

    const interval = setInterval(() => {
      if (!isMountedRef.current) return;
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, cardsPerView, filteredTestimonials.length, maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const renderStars = (rating) => {
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

  const getServiceColor = (service) => {
    switch (service) {
      case 'Website Development':
        return 'from-emerald-500 to-teal-400';
      case 'Digital Marketing':
        return 'from-blue-500 to-cyan-400';
      case 'Graphics Design':
        return 'from-pink-500 to-rose-400';
      case 'Video Editing':
        return 'from-orange-500 to-red-400';
      default:
        return 'from-blue-500 to-cyan-400';
    }
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    setExpandedCards(new Set());
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
    setCurrentIndex(0);
    setExpandedCards(new Set());
  };

  // Calculate service counts
  const getServiceCount = (serviceKey) => {
    if (serviceKey === 'all') {
      return testimonials.filter(t => activeFilter === 'all' || t.country === activeFilter).length;
    }
    return testimonials.filter(t => {
      const countryMatch = activeFilter === 'all' || t.country === activeFilter;
      return countryMatch && t.service === serviceKey;
    }).length;
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
        <div
          className="absolute top-3/4 right-1/3 w-72 h-72 bg-emerald-500 opacity-5 rounded-full blur-3xl"
          style={{ animation: 'pulse 4s ease-in-out infinite 1.5s' }}
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Trusted by businesses worldwide. Here's what our valued clients have to say about our services.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {[
              { value: '150+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '5+', label: 'Countries Served' },
              { value: '450+', label: 'Projects Completed' }
            ].map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Country Filter */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-2 p-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              {[
                { key: 'all', label: 'All', icon: <FaGlobe className="text-sm" /> },
                { key: 'BD', label: 'Bangladesh' },
                { key: 'USA', label: 'USA' }
              ].map((filter) => (
                <button
                  key={`country-${filter.key}`}
                  onClick={() => handleFilterChange(filter.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Filter - Responsive */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {/* Mobile: Scrollable horizontal list */}
              <div className="md:hidden overflow-x-auto scrollbar-hide pb-2">
                <div className="flex gap-2 px-4 justify-start min-w-max mx-auto">
                  {services.map((service) => {
                    const count = getServiceCount(service.key);
                    const IconComponent = service.Icon;
                    return (
                      <button
                        key={`service-mobile-${service.key}`}
                        onClick={() => handleServiceChange(service.key)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                          activeService === service.key
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <IconComponent className="text-sm" />
                        <span>{service.key === 'all' ? 'All' : service.label}</span>
                        <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                          activeService === service.key 
                            ? 'bg-white/20' 
                            : 'bg-white/10'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tablet/Desktop: Wrapped grid centered */}
              <div className="hidden md:flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {services.map((service) => {
                  const count = getServiceCount(service.key);
                  const IconComponent = service.Icon;
                  return (
                    <button
                      key={`service-desktop-${service.key}`}
                      onClick={() => handleServiceChange(service.key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeService === service.key
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent />
                      <span>{service.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        activeService === service.key 
                          ? 'bg-white/20' 
                          : 'bg-white/10'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filter Display */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-400 flex-wrap justify-center">
              <span>Showing:</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400">
                {filteredTestimonials.length} reviews
              </span>
              {activeFilter !== 'all' && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {activeFilter === 'BD' ? 'Bangladesh' : 'USA'}
                </span>
              )}
              {activeService !== 'all' && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <ServiceIcon service={activeService} className="text-xs" />
                  {activeService}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* No Results Message */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20">
            <FaSadTear className="text-6xl text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-4">No testimonials found for the selected filters.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setActiveService('all');
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Testimonials Slider */}
        {filteredTestimonials.length > 0 && (
          <div className="relative">
            {/* Play/Pause Button - Now at the top */}
            {filteredTestimonials.length > cardsPerView && (
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                >
                  {isPlaying ? (
                    <>
                      <FaPause className="text-cyan-400" />
                      
                    </>
                  ) : (
                    <>
                      <FaPlay className="text-cyan-400" />
                      
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 group"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 group"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-6 md:px-8">
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
                      className="flex-shrink-0 px-2 md:px-3"
                      style={{ width: `${100 / cardsPerView}%` }}
                    >
                      {/* Glass Card */}
                      <div className="group h-full p-5 md:p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                        {/* Quote Icon & Service Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-r ${getServiceColor(testimonial.service)} flex items-center justify-center shadow-lg`}>
                            <FaQuoteLeft className="text-white text-sm md:text-lg" />
                          </div>
                          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(testimonial.service)} text-white`}>
                            <ServiceIcon service={testimonial.service} className="text-xs" />
                            <span className="hidden sm:inline">{testimonial.service}</span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {renderStars(testimonial.rating)}
                          <span className="text-gray-400 text-sm ml-2">({testimonial.rating})</span>
                        </div>

                        {/* Feedback */}
                        <div className="mb-4">
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
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

                        {/* Client Info */}
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="relative flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name}'s profile`}
                              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-cyan-500/50"
                              loading="lazy"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                              <MdVerified className="text-white text-[10px] md:text-xs" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm md:text-base truncate">{testimonial.name}</h4>
                            <p className="text-gray-400 text-xs md:text-sm truncate">{testimonial.position}</p>
                            <p className="text-cyan-400 text-xs truncate">{testimonial.company}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                              <HiLocationMarker className="text-cyan-400" />
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
          <div className="flex flex-col items-center mt-10 md:mt-12 gap-4 md:gap-6">
            {/* Dot Indicators */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 max-w-xs md:max-w-md">
              {Array.from({ length: Math.min(maxIndex + 1, 20) }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-6 md:w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
              {maxIndex + 1 > 20 && (
                <span className="text-gray-500 text-xs ml-2">+{maxIndex + 1 - 20} more</span>
              )}
            </div>

            {/* Counter */}
            <div className="text-gray-500 text-xs md:text-sm">
              Showing {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, filteredTestimonials.length)} of {filteredTestimonials.length} reviews
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our services.
            </p>
            <Link to="/contact">
              <button className="px-6 md:px-8 py-3 md:py-4 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                Start Your Project Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;