import React, { useRef, useEffect, useState } from 'react';
import VideoSection from "/src/components/VideoSection";

import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Radio, 
  Award, 
  Brain, 
  Zap, 
  Sparkles, 
  PenTool,
  ArrowRight,
  Check,
  Star,
  Users,
  Building2
} from 'lucide-react';
import anime from 'animejs';

const YellowMarketing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const marketingServices = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      description: 'SEO, PPC, social media, and online advertising strategies',
      // color: 'from-blue-500 to-cyan-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'advertising-marketing',
      title: 'Advertising-Based Marketing',
      icon: Target,
      description: 'Paid advertising campaigns across multiple platforms',
      // color: 'from-purple-500 to-pink-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'traditional-marketing',
      title: 'Traditional Marketing',
      icon: Radio,
      description: 'Print, radio, TV, and outdoor advertising solutions',
      // color: 'from-green-500 to-emerald-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'pr-branding',
      title: 'PR & Branding',
      icon: Award,
      description: 'Brand identity, public relations, and reputation management',
      // color: 'from-orange-500 to-red-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'ai-data-marketing',
      title: 'AI-Powered & Data-Driven Marketing',
      icon: Brain,
      description: 'Machine learning insights and predictive analytics',
      // color: 'from-indigo-500 to-purple-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'specialized-marketing',
      title: 'Specialized Marketing',
      icon: Zap,
      description: 'Niche market strategies and industry-specific campaigns',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'emerging-niche',
      title: 'Emerging & Niche Marketing',
      icon: Sparkles,
      description: 'Cutting-edge marketing trends and innovative approaches',
      // color: 'from-pink-500 to-rose-500'
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'content-creation',
      title: 'Content Creation Ideas & Strategies',
      icon: PenTool,
      description: 'Creative content planning and strategic storytelling',
      // color: 'from-teal-500 to-blue-500'
      color: 'from-yellow-500 to-orange-500',
    }
  ];

  const packages = [
    {
      title: 'For Startups & Small Businesses',
      icon: Users,
      price: 'Starting at $999/month',
      features: [
        'SEO & PPC Ads',
        'Social Media Marketing',
        'Content Creation (blogs, posts, videos)',
        'Email Marketing',
        'Influencer Partnerships'
      ],
      color: 'from-primary to-secondary',
      popular: true
    },
    {
      title: 'For Enterprises',
      icon: Building2,
      price: 'Starting at $1999+/month',
      features: [
        'Full Digital + Traditional Mix',
        'PR & Branding Services',
        'AI & Predictive Analytics',
        'Event & Experiential Marketing',
        'End-to-End Campaign Management'
      ],
      color: 'from-purple-600 to-pink-600',
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.marketing-content',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/yellowmarketing/${serviceId}`);
  };

  const handleContactRedirect = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">
      {/* Banner Section */}
      <section className="relative overflow-hidden">
        <img
          src="/images/marketing.png"
          alt="Yellow Marketing Banner"
          className="w-full h-full object-cover"
        />
        
      </section>

      {/* Marketing Services Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">Marketing</span> <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive marketing solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      <span className="heading">{service.title}</span>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Packages Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">Marketing</span> <span className="gradient-text">Packages</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect package for your business growth
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                    pkg.popular ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      <span className="heading">{pkg.title}</span>
                    </h3>
                    
                    <div className="text-3xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleContactRedirect}
                    className={`w-full btn ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                    } py-4 text-lg font-semibold`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <button
        onClick={handleContactRedirect}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center font-semibold"
      >
        <span>Contact Us</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default YellowMarketing;