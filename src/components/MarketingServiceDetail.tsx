import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3,
  Zap,
  Eye,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
  Share2,
  Megaphone,
  PenTool,
  Mail,
  Handshake,
  Star,
  MousePointer,
  Monitor,
  Video,
  Mic,
  RefreshCw,
  Award,
  Brain,
  Gamepad2,
  Calendar,
  Recycle,
  MessageSquare,
  Camera,
  Edit3,
  Send,
  BarChart4,
  Lightbulb
} from 'lucide-react';

const MarketingServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [animationsPlayed, setAnimationsPlayed] = useState({
      hero: false,
      stats: false,
      coreServices: false,
      contentStrategy: false
    });

  // Service-specific process steps
  const getProcessSteps = (serviceType: string) => {
    switch (serviceType) {
      case 'digital-marketing':
        return [
          { step: '01', title: 'SEO Audit', desc: 'Analyze current performance & opportunities', icon: Search },
          { step: '02', title: 'Strategy Design', desc: 'Create multi-channel marketing plan', icon: Target },
          { step: '03', title: 'Content Creation', desc: 'Develop engaging content across platforms', icon: PenTool },
          { step: '04', title: 'Launch & Optimize', desc: 'Execute campaigns and continuously improve', icon: TrendingUp }
        ];
      case 'advertising-marketing':
        return [
          { step: '01', title: 'Audience Research', desc: 'Identify and segment target audiences', icon: Users },
          { step: '02', title: 'Creative Development', desc: 'Design compelling ad creatives', icon: Monitor },
          { step: '03', title: 'Campaign Launch', desc: 'Launch across selected platforms', icon: Zap },
          { step: '04', title: 'Performance Tracking', desc: 'Monitor and optimize for ROI', icon: BarChart3 }
        ];
      case 'traditional-marketing':
        return [
          { step: '01', title: 'Market Analysis', desc: 'Research traditional media landscape', icon: BarChart4 },
          { step: '02', title: 'Media Planning', desc: 'Select optimal traditional channels', icon: Calendar },
          { step: '03', title: 'Creative Production', desc: 'Produce print, TV, radio materials', icon: Video },
          { step: '04', title: 'Campaign Execution', desc: 'Launch and monitor traditional campaigns', icon: Megaphone }
        ];
      case 'pr-branding':
        return [
          { step: '01', title: 'Brand Assessment', desc: 'Evaluate current brand perception', icon: Award },
          { step: '02', title: 'Strategy Development', desc: 'Create PR and branding roadmap', icon: Lightbulb },
          { step: '03', title: 'Content & Outreach', desc: 'Develop PR materials and media relations', icon: Send },
          { step: '04', title: 'Reputation Management', desc: 'Monitor and maintain brand reputation', icon: Star }
        ];
      case 'ai-data-marketing':
        return [
          { step: '01', title: 'Data Integration', desc: 'Connect and consolidate data sources', icon: Brain },
          { step: '02', title: 'AI Model Setup', desc: 'Configure predictive marketing models', icon: Zap },
          { step: '03', title: 'Automation Launch', desc: 'Deploy smart marketing workflows', icon: RefreshCw },
          { step: '04', title: 'Insights & Optimization', desc: 'Analyze data and refine algorithms', icon: TrendingUp }
        ];
      case 'specialized-marketing':
        return [
          { step: '01', title: 'Industry Analysis', desc: 'Deep dive into sector-specific trends', icon: Target },
          { step: '02', title: 'Platform Optimization', desc: 'Optimize for specialized platforms', icon: MousePointer },
          { step: '03', title: 'Content Specialization', desc: 'Create industry-tailored content', icon: Edit3 },
          { step: '04', title: 'Performance Tracking', desc: 'Monitor specialized KPIs', icon: BarChart3 }
        ];
      case 'emerging-niche':
        return [
          { step: '01', title: 'Trend Research', desc: 'Identify emerging opportunities', icon: Eye },
          { step: '02', title: 'Innovation Strategy', desc: 'Develop cutting-edge approaches', icon: Lightbulb },
          { step: '03', title: 'Pilot Testing', desc: 'Test innovative marketing tactics', icon: Gamepad2 },
          { step: '04', title: 'Scale & Adapt', desc: 'Scale successful innovations', icon: TrendingUp }
        ];
      case 'content-creation':
        return [
          { step: '01', title: 'Content Audit', desc: 'Analyze current content performance', icon: BarChart4 },
          { step: '02', title: 'Strategy Planning', desc: 'Develop content calendar & themes', icon: Calendar },
          { step: '03', title: 'Creative Production', desc: 'Create engaging multimedia content', icon: Camera },
          { step: '04', title: 'Distribution & Analysis', desc: 'Publish and measure content impact', icon: Share2 }
        ];
      default:
        return [
          { step: '01', title: 'Strategy', desc: 'Research & Planning', icon: Target },
          { step: '02', title: 'Create', desc: 'Content & Campaigns', icon: Zap },
          { step: '03', title: 'Launch', desc: 'Execute & Monitor', icon: TrendingUp },
          { step: '04', title: 'Optimize', desc: 'Analyze & Improve', icon: BarChart3 }
        ];
    }
  };

  const serviceDetails = {
    'digital-marketing': {
      title: 'Digital Marketing',
      subtitle: 'Core Services for Online Growth',
      description: 'Comprehensive digital marketing strategies that drive online growth, engagement, and measurable ROI across all digital channels.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-blue-500 to-cyan-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Average ROI Increase', value: '340%', icon: TrendingUp },
        { label: 'Campaigns Managed', value: '500+', icon: Target },
        { label: 'Happy Clients', value: '150+', icon: Users },
        { label: 'Conversion Rate Boost', value: '85%', icon: BarChart3 }
      ],
      coreServices: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'Boost search rankings & visibility',
          details: 'Comprehensive SEO strategies including keyword research, on-page optimization, technical SEO, and link building to improve your organic search presence.'
        },
        {
          title: 'Search Engine Marketing (SEM)',
          description: 'Google & Bing paid ads (PPC)',
          details: 'Strategic paid search campaigns with optimized ad copy, landing pages, and bid management to maximize your advertising ROI.'
        },
        {
          title: 'Social Media Marketing (SMM)',
          description: 'Facebook, Instagram, LinkedIn, TikTok, Twitter',
          details: 'Engaging social media strategies with content creation, community management, and targeted advertising across all major platforms.'
        },
        {
          title: 'Content Marketing',
          description: 'Blogs, articles, videos, infographics',
          details: 'Strategic content creation that educates, entertains, and converts your audience while establishing thought leadership in your industry.'
        },
        {
          title: 'Email Marketing',
          description: 'Lead nurturing, newsletters, promotions',
          details: 'Automated email sequences, personalized campaigns, and performance tracking to nurture leads and retain customers.'
        },
        {
          title: 'Affiliate Marketing',
          description: 'Performance-driven sales partnerships',
          details: 'Strategic partnerships with affiliates and influencers to expand your reach and drive sales through performance-based marketing.'
        },
        {
          title: 'Influencer Marketing',
          description: 'Collaborations with industry influencers',
          details: 'Authentic partnerships with relevant influencers to build trust, expand reach, and drive conversions through trusted recommendations.'
        }
      ],
      contentSections: [
        {
          title: 'Social Media Content',
          items: [
            'Engaging posts (quotes, tips, polls, memes)',
            'Reels & TikTok videos',
            'Carousel educational posts',
            'Behind-the-scenes highlights',
            'Giveaways & contests'
          ]
        },
        {
          title: 'Blog & Article Ideas',
          items: [
            '"How-to" guides',
            'Case studies & success stories',
            'Industry trend reports',
            'SEO-driven blogs',
            'Guest collaborations'
          ]
        },
        {
          title: 'Video Content',
          items: [
            'Explainer videos',
            'Client testimonials',
            'Live Q&A & launches',
            'Animated infographics',
            'Tutorials & walkthroughs'
          ]
        }
      ]
    },
    'advertising-marketing': {
      title: 'Advertising-Based Marketing',
      subtitle: 'Paid Advertising Excellence',
      description: 'Strategic paid advertising campaigns that maximize ROI and reach your target audience with precision targeting and compelling creative.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-purple-500 to-pink-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Ad Spend Managed', value: '$2M+', icon: TrendingUp },
        { label: 'ROAS Average', value: '4.2x', icon: Target },
        { label: 'Active Campaigns', value: '200+', icon: BarChart3 },
        { label: 'Click-Through Rate', value: '12%', icon: Eye }
      ],
      coreServices: [
        {
          title: 'Pay-Per-Click (PPC) Advertising',
          description: 'Strategic Google Ads and Bing campaigns',
          details: 'Comprehensive PPC management including keyword research, ad creation, landing page optimization, and continuous performance monitoring.'
        },
        {
          title: 'Social Media Ads',
          description: 'Facebook, Instagram, LinkedIn, TikTok',
          details: 'Targeted social media advertising with audience segmentation, creative testing, and conversion optimization across all major platforms.'
        },
        {
          title: 'Display Advertising',
          description: 'Banners across websites & apps',
          details: 'Eye-catching display campaigns with programmatic buying, retargeting strategies, and brand awareness optimization.'
        },
        {
          title: 'Video Advertising',
          description: 'YouTube, Instagram Reels, TikTok',
          details: 'Engaging video ad campaigns with storytelling, motion graphics, and platform-specific optimization for maximum engagement.'
        },
        {
          title: 'Native Advertising',
          description: 'Blended ads matching platform content',
          details: 'Seamlessly integrated advertising that matches the platform\'s content style while delivering your marketing message effectively.'
        }
      ],
      contentSections: [
        {
          title: 'Email & Newsletter Content',
          items: [
            'Weekly tips',
            'Exclusive offers',
            'Success stories',
            'Upcoming events'
          ]
        },
        {
          title: 'Visual Content',
          items: [
            'Infographics',
            'GIFs & motion graphics',
            'Product photography',
            'Branded templates'
          ]
        }
      ]
    },
    'traditional-marketing': {
      title: 'Traditional Marketing',
      subtitle: 'Time-Tested Marketing Excellence',
      description: 'Time-tested marketing approaches that build lasting brand recognition and trust through proven traditional channels.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-green-500 to-emerald-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Print Campaigns', value: '300+', icon: TrendingUp },
        { label: 'TV/Radio Spots', value: '150+', icon: Target },
        { label: 'Events Managed', value: '75+', icon: Users },
        { label: 'Brand Reach', value: '2M+', icon: Eye }
      ],
      coreServices: [
        {
          title: 'Print Marketing',
          description: 'Flyers, brochures, business cards',
          details: 'Professional print design and distribution strategies that create tangible brand experiences and drive local engagement.'
        },
        {
          title: 'TV & Radio Ads',
          description: 'Broadcast advertising campaigns',
          details: 'Compelling broadcast campaigns with scriptwriting, production, and media buying to reach mass audiences effectively.'
        },
        {
          title: 'Outdoor Advertising',
          description: 'Billboards, posters, banners',
          details: 'Strategic outdoor advertising placement with eye-catching designs that capture attention and build brand awareness.'
        },
        {
          title: 'Event Marketing',
          description: 'Trade shows, expos, product launches',
          details: 'End-to-end event marketing including planning, promotion, execution, and follow-up to maximize event ROI.'
        },
        {
          title: 'Telemarketing',
          description: 'Phone-based outreach',
          details: 'Professional telemarketing campaigns with trained representatives, scripts, and CRM integration for lead generation.'
        }
      ],
      contentSections: [
        {
          title: 'Interactive Content',
          items: [
            'Quizzes & polls',
            'Interactive PDFs',
            'ROI calculators',
            'Customer surveys'
          ]
        },
        {
          title: 'Brand-Specific Content',
          items: [
            'Storytelling campaigns',
            'User-Generated Content (UGC)',
            'Seasonal campaigns (Eid, Independence Day, New Year)',
            'Hashtag challenges'
          ]
        }
      ]
    },
    'pr-branding': {
      title: 'PR & Branding',
      subtitle: 'Build Trust & Recognition',
      description: 'Build and protect your brand reputation with strategic public relations and comprehensive branding solutions.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-orange-500 to-red-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Media Mentions', value: '1000+', icon: TrendingUp },
        { label: 'Brand Campaigns', value: '200+', icon: Target },
        { label: 'Crisis Managed', value: '50+', icon: Users },
        { label: 'Reputation Score', value: '95%', icon: BarChart3 }
      ],
      coreServices: [
        {
          title: 'Public Relations (PR)',
          description: 'Press releases, media outreach, crisis management',
          details: 'Comprehensive PR strategies including media relations, press release distribution, crisis communication, and reputation management.'
        },
        {
          title: 'Brand Strategy',
          description: 'Identity, positioning, tone of voice',
          details: 'Complete brand development including visual identity, brand positioning, messaging framework, and brand guidelines creation.'
        },
        {
          title: 'Reputation Management',
          description: 'Handling reviews, feedback & online presence',
          details: 'Proactive reputation monitoring and management across all digital platforms to maintain positive brand perception.'
        }
      ],
      contentSections: [
        {
          title: 'Brand Development',
          items: [
            'Brand identity design',
            'Brand voice and messaging',
            'Brand guidelines creation',
            'Logo and visual identity'
          ]
        },
        {
          title: 'Public Relations',
          items: [
            'Press release writing',
            'Media relations',
            'Crisis communication',
            'Thought leadership positioning'
          ]
        }
      ]
    },
    'ai-data-marketing': {
      title: 'AI-Powered & Data-Driven Marketing',
      subtitle: 'Future of Marketing Intelligence',
      description: 'Leverage artificial intelligence and data analytics for smarter marketing decisions and automated campaign optimization.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-indigo-500 to-purple-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'AI Models Deployed', value: '50+', icon: TrendingUp },
        { label: 'Data Points Analyzed', value: '10M+', icon: BarChart3 },
        { label: 'Automation Workflows', value: '300+', icon: Zap },
        { label: 'Prediction Accuracy', value: '92%', icon: Target }
      ],
      coreServices: [
        {
          title: 'AI Marketing Models',
          description: 'Customer behavior prediction, personalization',
          details: 'Advanced machine learning models that predict customer behavior, optimize campaigns, and deliver personalized experiences at scale.'
        },
        {
          title: 'Marketing Automation',
          description: 'Tools like HubSpot, Mailchimp, ActiveCampaign',
          details: 'Comprehensive automation setup including lead scoring, email sequences, customer journeys, and performance tracking.'
        },
        {
          title: 'Chatbots & Conversational Marketing',
          description: 'AI-powered customer interactions',
          details: 'Intelligent chatbots and conversational AI that engage customers, qualify leads, and provide 24/7 customer support.'
        },
        {
          title: 'Predictive Analytics & Data Insights',
          description: 'Data-driven decision making',
          details: 'Advanced analytics and reporting that provide actionable insights for campaign optimization and strategic planning.'
        }
      ],
      contentSections: [
        {
          title: 'AI Marketing Tools',
          items: [
            'Predictive customer analytics',
            'Automated content generation',
            'Personalization engines',
            'Chatbot marketing integration'
          ]
        },
        {
          title: 'Data Analytics',
          items: [
            'Customer behavior analysis',
            'Campaign performance tracking',
            'ROI measurement and optimization',
            'Market trend analysis'
          ]
        }
      ]
    },
    'specialized-marketing': {
      title: 'Specialized Marketing',
      subtitle: 'Industry-Specific Excellence',
      description: 'Industry-specific marketing strategies tailored to your unique market with specialized expertise and proven methodologies.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Industries Served', value: '25+', icon: Target },
        { label: 'Specialized Campaigns', value: '400+', icon: TrendingUp },
        { label: 'App Downloads', value: '5M+', icon: BarChart3 },
        { label: 'Viral Campaigns', value: '30+', icon: Zap }
      ],
      coreServices: [
        {
          title: 'E-commerce Marketing',
          description: 'Shopify, WooCommerce, Amazon, Daraz',
          details: 'Specialized e-commerce strategies including marketplace optimization, conversion rate optimization, and multi-channel selling.'
        },
        {
          title: 'App Store Optimization (ASO)',
          description: 'Mobile app visibility and downloads',
          details: 'Complete ASO strategies including keyword optimization, app store listing optimization, and user acquisition campaigns.'
        },
        {
          title: 'Video Marketing',
          description: 'Long & short-form video content',
          details: 'Comprehensive video marketing including production, distribution, and optimization across YouTube, social media, and websites.'
        },
        {
          title: 'Podcast Marketing',
          description: 'Audio content and sponsorships',
          details: 'Podcast marketing strategies including show creation, guest appearances, sponsorships, and audio advertising campaigns.'
        },
        {
          title: 'Referral Marketing',
          description: 'Rewards for customer advocacy',
          details: 'Customer referral programs with incentive structures, tracking systems, and advocacy campaigns to drive word-of-mouth growth.'
        },
        {
          title: 'Viral Marketing',
          description: 'Campaigns designed to spread quickly',
          details: 'Creative viral marketing campaigns designed to achieve rapid organic spread and massive brand exposure through shareability.'
        }
      ],
      contentSections: [
        {
          title: 'Industry Expertise',
          items: [
            'Healthcare marketing',
            'Technology sector campaigns',
            'E-commerce optimization',
            'B2B lead generation'
          ]
        },
        {
          title: 'Specialized Channels',
          items: [
            'LinkedIn marketing for B2B',
            'Industry publication advertising',
            'Trade show marketing',
            'Professional network building'
          ]
        }
      ]
    },
    'emerging-niche': {
      title: 'Emerging & Niche Marketing',
      subtitle: 'Cutting-Edge Innovation',
      description: 'Stay ahead with cutting-edge marketing trends and innovative approaches that position your brand at the forefront of industry evolution.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-pink-500 to-rose-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Innovative Campaigns', value: '100+', icon: Zap },
        { label: 'Community Members', value: '50K+', icon: Users },
        { label: 'Viral Reach', value: '10M+', icon: Eye },
        { label: 'Engagement Rate', value: '25%', icon: TrendingUp }
      ],
      coreServices: [
        {
          title: 'Neuromarketing',
          description: 'Applying psychology in marketing',
          details: 'Scientific approach to marketing using psychological principles, eye-tracking, and behavioral analysis to optimize campaigns.'
        },
        {
          title: 'Guerrilla Marketing',
          description: 'Low-cost, high-impact stunts',
          details: 'Creative, unconventional marketing tactics that generate buzz and brand awareness through surprise and innovation.'
        },
        {
          title: 'Experiential Marketing',
          description: 'Memorable customer experiences',
          details: 'Immersive brand experiences that create emotional connections and lasting memories through interactive events and activations.'
        },
        {
          title: 'Community Marketing',
          description: 'Building groups (Discord, FB, Telegram)',
          details: 'Building and nurturing brand communities across platforms to foster loyalty, advocacy, and organic growth.'
        },
        {
          title: 'Sustainability Marketing',
          description: 'Eco-friendly branding initiatives',
          details: 'Green marketing strategies that highlight environmental responsibility and appeal to conscious consumers.'
        }
      ],
      contentSections: [
        {
          title: 'Emerging Trends',
          items: [
            'Metaverse marketing',
            'NFT and blockchain campaigns',
            'Voice search optimization',
            'Augmented reality experiences'
          ]
        },
        {
          title: 'Niche Strategies',
          items: [
            'Micro-influencer partnerships',
            'Community-driven marketing',
            'Podcast advertising',
            'Interactive live streaming'
          ]
        }
      ]
    },
    'content-creation': {
      title: 'Content Creation Ideas & Strategies',
      subtitle: 'Strategic Storytelling',
      description: 'Creative content planning and strategic storytelling that resonates with your audience and drives meaningful engagement.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // color: 'from-teal-500 to-blue-500',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Content Pieces Created', value: '5000+', icon: TrendingUp },
        { label: 'Engagement Rate', value: '18%', icon: Target },
        { label: 'Viral Posts', value: '200+', icon: Zap },
        { label: 'Brand Stories', value: '500+', icon: Users }
      ],
      coreServices: [
        {
          title: 'Content Strategy Development',
          description: 'Comprehensive content planning and execution',
          details: 'Strategic content frameworks including audience research, content pillars, editorial calendars, and performance measurement.'
        },
        {
          title: 'Visual Content Creation',
          description: 'Graphics, videos, and multimedia',
          details: 'Professional visual content including graphic design, video production, animation, and interactive media creation.'
        },
        {
          title: 'Copywriting & Messaging',
          description: 'Compelling written content',
          details: 'Persuasive copywriting for all channels including websites, ads, emails, social media, and marketing materials.'
        },
        {
          title: 'Content Distribution',
          description: 'Multi-channel content amplification',
          details: 'Strategic content distribution across owned, earned, and paid channels to maximize reach and engagement.'
        }
      ],
      contentSections: [
        {
          title: 'Social Media Content',
          items: [
            'Engaging posts (quotes, tips, polls, memes)',
            'Reels & TikTok videos',
            'Carousel educational posts',
            'Behind-the-scenes highlights',
            'Giveaways & contests'
          ]
        },
        {
          title: 'Blog & Article Ideas',
          items: [
            '"How-to" guides',
            'Case studies & success stories',
            'Industry trend reports',
            'SEO-driven blogs',
            'Guest collaborations'
          ]
        },
        {
          title: 'Video Content',
          items: [
            'Explainer videos',
            'Client testimonials',
            'Live Q&A & launches',
            'Animated infographics',
            'Tutorials & walkthroughs'
          ]
        },
        {
          title: 'Email & Newsletter Content',
          items: [
            'Weekly tips',
            'Exclusive offers',
            'Success stories',
            'Upcoming events'
          ]
        },
        {
          title: 'Visual Content',
          items: [
            'Infographics',
            'GIFs & motion graphics',
            'Product photography',
            'Branded templates'
          ]
        },
        {
          title: 'Interactive Content',
          items: [
            'Quizzes & polls',
            'Interactive PDFs',
            'ROI calculators',
            'Customer surveys'
          ]
        },
        {
          title: 'Brand-Specific Content',
          items: [
            'Storytelling campaigns',
            'User-Generated Content (UGC)',
            'Seasonal campaigns (Eid, Independence Day, New Year)',
            'Hashtag challenges'
          ]
        }
      ]
    }
  };

  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  const processSteps = serviceId ? getProcessSteps(serviceId) : [];
  
  useEffect(() => {
    if (!service) {
      navigate('/yellowmarketing');
      return;
    }

    // Fixed hero animation - ensure proper class management
    if (!animationsPlayed.hero) {
      setTimeout(() => {
        // Hero content animation
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
          heroContent.classList.remove('opacity-0');
          heroContent.classList.add('opacity-100', 'animate-fadeInUp');
        }

        // Back button animation
        const backButton = document.querySelector('.back-button');
        if (backButton) {
          setTimeout(() => {
            backButton.classList.remove('opacity-0');
            backButton.classList.add('opacity-100', 'animate-fadeInUp');
          }, 200);
        }

        // Title animation
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
          setTimeout(() => {
            heroTitle.classList.remove('opacity-0');
            heroTitle.classList.add('opacity-100', 'animate-fadeInUp');
          }, 400);
        }

        // Subtitle animations
        const heroSubtitles = document.querySelectorAll('.hero-subtitle');
        heroSubtitles.forEach((subtitle, index) => {
          setTimeout(() => {
            subtitle.classList.remove('opacity-0');
            subtitle.classList.add('opacity-100', 'animate-fadeInUp');
          }, 600 + (index * 200));
        });
      }, 300);
      
      setAnimationsPlayed(prev => ({ ...prev, hero: true }));
    }

    // Stats animation observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsPlayed.stats) {
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0');
                card.classList.add('opacity-100', 'animate-slideInUp');
              }, index * 150);
            });
            setAnimationsPlayed(prev => ({ ...prev, stats: true }));
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    // Core services animation observer
    const coreServicesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsPlayed.coreServices) {
            const serviceCards = document.querySelectorAll('.core-service-card');
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0');
                card.classList.add('opacity-100', 'animate-slideInUp');
              }, index * 200);
            });
            setAnimationsPlayed(prev => ({ ...prev, coreServices: true }));
            coreServicesObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    // Content strategy animation observer
    const contentStrategyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsPlayed.contentStrategy) {
            const contentCards = document.querySelectorAll('.content-card');
            contentCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0');
                card.classList.add('opacity-100', 'animate-slideInUp');
              }, index * 250);
            });
            setAnimationsPlayed(prev => ({ ...prev, contentStrategy: true }));
            contentStrategyObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe sections only if animations haven't played yet
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && !animationsPlayed.stats) {
      statsObserver.observe(statsSection);
    }

    const coreServicesSection = document.querySelector('.core-services-section');
    if (coreServicesSection && !animationsPlayed.coreServices) {
      coreServicesObserver.observe(coreServicesSection);
    }

    const contentStrategySection = document.querySelector('.content-strategy-section');
    if (contentStrategySection && !animationsPlayed.contentStrategy) {
      contentStrategyObserver.observe(contentStrategySection);
    }

    return () => {
      statsObserver.disconnect();
      coreServicesObserver.disconnect();
      contentStrategyObserver.disconnect();
    };
  }, [service, navigate, animationsPlayed]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const handleContactRedirect = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
        }
        
        /* Ensure text is visible by default */
        .service-detail-content * {
          color: inherit !important;
        }
        
        .hero-content * {
          color: white !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s] hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-85`}></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white hero-content opacity-0 px-4 service-detail-content" ref={containerRef}>
            <button
              onClick={() => navigate('/yellowmarketing')}
              className="back-button opacity-0 inline-flex items-center text-white hover:text-white/80 transition-all duration-300 mb-4 md:mb-6 group transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1 text-white" />
              <span className="font-medium text-white">Back to Marketing Services</span>
            </button>
            
            <h1 className="hero-title opacity-0 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 leading-tight">
              <span className="heading text-white">{service.title}</span>
            </h1>
            <p className="hero-subtitle opacity-0 text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 font-medium text-white">
              {service.subtitle}
            </p>
            <p className="hero-subtitle opacity-0 text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-white/90">
              {service.description}
            </p>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-8 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {service.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 text-center opacity-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services-section py-12 md:py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="heading">Core</span> <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your marketing strategy
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
            {service.coreServices.map((coreService, index) => (
              <div
                key={index}
                className="core-service-card opacity-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                <div 
                  className="p-4 md:p-6 lg:p-8 cursor-pointer"
                  onClick={() => toggleSection(coreService.title)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                        <span className="heading">{coreService.title}</span>
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {coreService.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                        {expandedSections.includes(coreService.title) ? (
                          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {expandedSections.includes(coreService.title) && (
                  <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-4 md:pt-6">
                      {coreService.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy Sections */}
      <section className="content-strategy-section py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent 79px, #000 79px, #000 81px, transparent 81px), linear-gradient(#000, #000)', backgroundSize: '80px 80px, 100% 1px' }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="heading">Content</span> <span className="text-orange-500">Strategy</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Strategic content frameworks that drive engagement and conversions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.contentSections.map((section, index) => (
              <div 
                key={index} 
                className="content-card opacity-0 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    <span className="heading">{section.title}</span>
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start group/item">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Diagram Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="heading">Our</span> <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <div key={index} className="text-center group relative">
                    <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    
                    <div className={`text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-2 md:mb-3`}>
                      {process.step}
                    </div>
                    
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                      <span className="heading">{process.title}</span>
                    </h3>
                    
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {process.desc}
                    </p>
                    
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 md:top-10 lg:top-12 left-full w-full">
                        <ArrowRight className={`w-6 h-6 lg:w-8 lg:h-8 text-gray-300 dark:text-gray-600 mx-auto transition-colors duration-300 group-hover:text-primary`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="heading">Campaign</span> <span className="text-orange-500">Timeline</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your journey from strategy to success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line on the far left */}
              <div
                className={`absolute lg:left-[0.2rem] left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${service.color} rounded-full shadow-lg`}
              ></div>

              <div className="ml-10 space-y-8 md:space-y-12 lg:space-y-16">
                {[
                  {
                    week: "Week 1-2",
                    title: "Discovery & Strategy",
                    desc: "Market research, competitor analysis, and strategy development",
                  },
                  {
                    week: "Week 3-4",
                    title: "Content Creation",
                    desc: "Develop compelling content and creative assets",
                  },
                  {
                    week: "Week 5-6",
                    title: "Campaign Launch",
                    desc: "Execute campaigns across selected channels",
                  },
                  {
                    week: "Week 7-8",
                    title: "Optimization",
                    desc: "Monitor, analyze, and optimize for better performance",
                  },
                ].map((phase, index) => (
                  <div key={index} className="relative flex items-start group">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-9 md:-left-4 lg:-left-14 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center z-10 shadow-lg group-hover:scale-125 transition-transform duration-300`}
                    >
                      <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full"></div>
                    </div>

                    {/* Timeline Card */}
                    <div className="flex-1 pb-8 min-w-0 bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-1">
                      <div
                        className={`text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                      >
                        {phase.week}
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                        <span className="heading">{phase.title}</span>
                      </h3>

                      <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={`py-16 md:py-20 lg:py-32 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-white leading-tight">
            <span className="heading">Ready to Transform Your Marketing?</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's create a marketing strategy that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <button
              onClick={handleContactRedirect}
              className="group bg-white text-gray-900 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px] md:min-w-[250px]"
            >
              <span>Start Your Marketing Journey</span>
              <ArrowRight className="inline-block ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => navigate('/yellowmarketing')}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-base md:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px] md:min-w-[250px]"
            >
              <span>View All Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Floating Action Button */}
      <button
        onClick={handleContactRedirect}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-primary hover:bg-primary/90 text-white p-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 z-50 flex items-center font-bold text-sm md:text-base group"
      >
        <span className="hidden md:inline">Contact Us</span>
        <span className="md:hidden text-xl">💬</span>
        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 hidden md:block transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default MarketingServiceDetail;