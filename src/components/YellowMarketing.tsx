import React, { useRef, useEffect, useState } from 'react';
import VideoSection from "/src/components/VideoSection";
import Testimonials from './Testimonials';

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
  Building2,
  Search,
  BarChart3,
  Rocket,
  Lightbulb,
  Compass,
  LineChart,
  MousePointerClick,
  Mail,
  ShoppingCart,
  ChevronDown,
  Megaphone,
  Handshake
} from 'lucide-react';
import anime from 'animejs';

const YellowMarketing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marketingServices = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      description: 'SEO, PPC, social media, and online advertising strategies',
      // color: 'from-blue-500 to-cyan-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'advertising-marketing',
      title: 'Advertising-Based Marketing',
      icon: Target,
      description: 'Paid advertising campaigns across multiple platforms',
      // color: 'from-purple-500 to-pink-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'traditional-marketing',
      title: 'Traditional Marketing',
      icon: Radio,
      description: 'Print, radio, TV, and outdoor advertising solutions',
      // color: 'from-green-500 to-emerald-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'pr-branding',
      title: 'PR & Branding',
      icon: Award,
      description: 'Brand identity, public relations, and reputation management',
      // color: 'from-orange-500 to-red-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'ai-data-marketing',
      title: 'AI-Powered & Data-Driven Marketing',
      icon: Brain,
      description: 'Machine learning insights and predictive analytics',
      // color: 'from-indigo-500 to-purple-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'specialized-marketing',
      title: 'Specialized Marketing',
      icon: Zap,
      description: 'Niche market strategies and industry-specific campaigns',
      color: 'from-yellow-500 to-amber-400'
    },
    {
      id: 'emerging-niche',
      title: 'Emerging & Niche Marketing',
      icon: Sparkles,
      description: 'Cutting-edge marketing trends and innovative approaches',
      // color: 'from-pink-500 to-rose-500'
      color: 'from-yellow-500 to-amber-400',
    },
    {
      id: 'content-creation',
      title: 'Content Creation Ideas & Strategies',
      icon: PenTool,
      description: 'Creative content planning and strategic storytelling',
      // color: 'from-teal-500 to-blue-500'
      color: 'from-yellow-500 to-amber-400',
    }
  ];

  // Numbers that anchor the page
  const stats = [
    { value: '1000+', label: 'Campaigns Delivered', Icon: Rocket },
    { value: '4.2x', label: 'Average Return on Spend', Icon: LineChart },
    { value: '12+', label: 'Industries Served', Icon: Building2 },
    { value: '98%', label: 'Client Retention', Icon: Handshake }
  ];

  // How an engagement actually runs, start to finish
  const process = [
    {
      step: '01',
      title: 'Discover',
      icon: Compass,
      description:
        'We start by learning your market, your customers and your numbers — competitor research, audience mapping and a full audit of whatever you already have running.'
    },
    {
      step: '02',
      title: 'Strategise',
      icon: Lightbulb,
      description:
        'You get a written plan: the channels we will use, the budget split, the messages we will test and the targets we are aiming at — all agreed before a dollar is spent.'
    },
    {
      step: '03',
      title: 'Launch',
      icon: Rocket,
      description:
        'Creative, copy, landing pages and tracking go live together. Every campaign ships with analytics attached, so results are measurable from day one.'
    },
    {
      step: '04',
      title: 'Optimise',
      icon: BarChart3,
      description:
        'We read the data weekly, cut what is not working and put more behind what is. You get a clear monthly report on what changed and what comes next.'
    }
  ];

  // Channel-level capability breakdown
  const capabilities = [
    {
      title: 'Search Engine Optimisation',
      icon: Search,
      points: ['Technical SEO audits', 'Keyword & intent research', 'On-page optimisation', 'Authority link building']
    },
    {
      title: 'Paid Advertising',
      icon: MousePointerClick,
      points: ['Google & Bing Ads', 'Meta & TikTok campaigns', 'Retargeting funnels', 'Creative A/B testing']
    },
    {
      title: 'Content & Social',
      icon: PenTool,
      points: ['Editorial calendars', 'Short-form video', 'Community management', 'Influencer partnerships']
    },
    {
      title: 'Email & Automation',
      icon: Mail,
      points: ['Lifecycle campaigns', 'Abandoned cart flows', 'Segmentation & scoring', 'CRM integration']
    },
    {
      title: 'Conversion Optimisation',
      icon: ShoppingCart,
      points: ['Landing page design', 'Funnel analysis', 'Heatmaps & session replay', 'Split testing']
    },
    {
      title: 'Brand & PR',
      icon: Megaphone,
      points: ['Brand identity systems', 'Press & media outreach', 'Reputation management', 'Launch campaigns']
    }
  ];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Wellness',
    'Real Estate',
    'SaaS & Technology',
    'Finance & Insurance',
    'Education',
    'Hospitality & Travel',
    'Professional Services'
  ];

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer:
        'Paid advertising can bring traffic and leads within the first week of launch. SEO and content are longer plays — expect early movement around month two or three, compounding from there. We set realistic milestones during the strategy phase so you always know what to expect and when.'
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer:
        'No. Retainers run month to month after an initial 90-day period, which is the minimum honest window to build, test and optimise a campaign. If you want to stop, 30 days written notice is all we ask.'
    },
    {
      question: 'Is ad spend included in your pricing?',
      answer:
        'No — management fees and media spend are separate. You pay platforms like Google and Meta directly, which keeps the accounts and data in your name and gives you full transparency over what is being spent.'
    },
    {
      question: 'Who owns the accounts and creative?',
      answer:
        'You do. Ad accounts, analytics properties, content and creative assets are set up in your name and stay yours if we ever part ways. We never hold a client account hostage.'
    },
    {
      question: 'Can you work alongside our in-house team?',
      answer:
        'Absolutely. Many of our clients have internal marketers and bring us in for specific channels, extra capacity or specialist skills. We plug into your tools and standups and work as an extension of your team.'
    },
    {
      question: 'What reporting will I receive?',
      answer:
        'A live dashboard you can check any time, plus a monthly report covering spend, performance against targets, what we changed, what we learned and the plan for the month ahead — written in plain English.'
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
      <section className="relative overflow-hidden h-[340px] sm:h-[420px] lg:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
          alt="Marketing analytics dashboard"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Dark scrim so the headline stays readable over the photo */}
        <div className="absolute inset-0 bg-gray-950/70" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"
          aria-hidden="true"
        />

        {/* Headline */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-none">
            <span className="text-primary">YELLOW</span> MARKETING
          </h1>

          <span
            className="mt-6 flex h-1 w-28 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <span className="w-1/3 bg-white" />
            <span className="flex-1 bg-gradient-to-r from-primary via-amber-400 to-yellow-400" />
          </span>

          <p className="mt-6 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[0.25em] text-gray-200">
            Where Strategy Meets Creativity
          </p>
        </div>

        {/* Brand stripe along the bottom edge */}
        <div
          className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-amber-400 to-yellow-400"
          aria-hidden="true"
        />
      </section>

      {/* Intro + key numbers */}
      <section className="section-padding pb-0">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">
                Yellow Marketing
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Marketing that is measured in{' '}
              <span className="gradient-text">revenue</span>, not impressions.
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Most agencies sell you activity. We sell you outcomes. Every campaign we run is tied to a
              number you actually care about — qualified leads, booked calls, sales, repeat customers —
              and every month you see exactly what moved and why.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Strategy, creative, media buying and analytics sit under one roof, so nothing gets lost in
              handoffs between a designer, a media buyer and a reporting tool that never talk to each other.
            </p>
          </div>

          {/* Stat band */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-400 to-yellow-400"
                  aria-hidden="true"
                />
                <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
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

      {/* How We Work — 4 step process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">How We</span> <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A clear, repeatable process — so you always know what is happening and what comes next
          </p>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting line on desktop */}
            <div
              className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.step} className="relative text-center group">
                    {/* Icon medallion */}
                    <div className="relative z-10 mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                      <IconComponent className="w-9 h-9 text-white" />
                    </div>

                    {/* Step number — sits on the top-right corner of the medallion */}
                    <span className="absolute top-0 left-1/2 ml-5 -mt-2 z-20 w-8 h-8 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-xs font-black flex items-center justify-center ring-4 ring-gray-50 dark:ring-gray-900">
                      {item.step}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Capabilities — channel breakdown */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">What We</span> <span className="gradient-text">Actually Do</span>
          </h2>
          <p className="section-subtitle">
            The channels, the tactics and the tools behind every campaign we run
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all duration-500"
                >
                  {/* Corner glow on hover */}
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="relative w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="relative text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {capability.title}
                  </h3>

                  <ul className="relative space-y-2.5">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Industry Experience
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                We already know <span className="gradient-text">your market</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Every industry has its own buying cycle, its own language and its own rules about what you
                can and cannot say. We have run campaigns across all of these, so we skip the expensive
                learning curve and start from what already works.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Do not see yours listed? That is fine — the research phase exists precisely for that.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                      <span className="bg-primary text-gray-950 px-6 py-2 rounded-full text-sm font-bold flex items-center">
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
                        ? 'bg-gradient-to-r from-primary via-amber-400 to-yellow-400 hover:brightness-105 text-gray-950' 
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

      {/* Testimonials — same carousel as the home page "Proven Results" section */}
      <Testimonials />

      {/* FAQ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">
            <span className="heading">Frequently Asked</span> <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            The things clients ask us before they sign — answered straight
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 sm:px-12 py-14 text-center max-w-6xl mx-auto">
            {/* Brand glow */}
            <div
              className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                <Target className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">
                  Free Strategy Session
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Let&apos;s find the gap in your marketing
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Book a free 30-minute session and we will audit what you are running today, show you where the
                budget is leaking and outline what we would do differently — no pitch deck, no obligation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleContactRedirect}
                  className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 font-bold text-sm shadow-lg shadow-yellow-400/25 hover:brightness-105 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  Book Your Free Session
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+19342035115"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-white font-semibold text-sm ring-1 ring-white/25 hover:ring-primary hover:text-primary transition-all duration-300"
                >
                  Call +1 (934) 203-5115
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <button
        onClick={handleContactRedirect}
        className="fixed bottom-20 right-6 bg-gradient-to-r from-primary via-amber-400 to-yellow-400 hover:brightness-105 text-gray-950 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center font-semibold"
      >
        <span>Contact Us</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default YellowMarketing;