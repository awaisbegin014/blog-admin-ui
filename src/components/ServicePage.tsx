import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, CheckCircle, Users, Clock, Award, Target, Code, Smartphone, BarChart, Gauge, Layers, Shield, Blocks } from 'lucide-react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Users, 
  Clock, 
  Award, 
  Target, 
  Code, 
  Smartphone, 
  BarChart, 
  Gauge, 
  Layers, 
  Shield, 
  Blocks,
  Settings,
  Headphones,
  ShoppingCart,
  Cpu
} from 'lucide-react';

import { services } from '../data/content';
import anime from 'animejs';

const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the service based on the slug
  const service = services.find(s => 
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') === serviceSlug
  );

  useEffect(() => {
    if (!service) {
      navigate('/');
      return;
    }

    anime({
      targets: '.service-content',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutExpo'
    });
  }, [service, navigate]);

  if (!service) return null;

  // Service-specific content
  const getServiceContent = (serviceTitle: string) => {
    const title = serviceTitle.toLowerCase();
    
    if (title.includes('web development')) {
      return {
        heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'E-commerce Websites (Shopify, WooCommerce, Magento)',
          'WordPress Development & Custom Themes',
          'Corporate & Business Websites',
          'Portfolio & Personal Websites',
          'Landing Pages & Marketing Sites',
          'Progressive Web Applications (PWA)',
          'Custom Web Applications',
          'Content Management Systems (CMS)'
        ],
        features: [
          'Responsive design for all devices',
          'SEO-optimized structure and content',
          'Fast loading speeds and performance optimization',
          'Cross-browser compatibility',
          'Content Management System integration',
          'E-commerce functionality',
          'Security best practices implementation',
          'Analytics and tracking setup'
        ],
        highlights: {
          timeline: '2-8 weeks',
          teamSize: '3-5 experts',
          support: '24/7 Available',
          warranty: '6 months'
        },
        process: [
          {
            title: 'Discovery & Planning',
            description: 'We analyze your business requirements, target audience, and create a comprehensive project roadmap with wireframes and technical specifications.',
            icon: Target
          },
          {
            title: 'Design & Prototyping',
            description: 'Our designers create stunning UI/UX designs and interactive prototypes that align with your brand identity and user experience goals.',
            icon: Users
          },
          {
            title: 'Development & Testing',
            description: 'Our developers build your website using modern technologies, followed by rigorous testing across devices and browsers.',
            icon: Code
          },
          {
            title: 'Launch & Optimization',
            description: 'We deploy your website, provide training, and offer ongoing optimization and maintenance support.',
            icon: Award
          }
        ],
        technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Node.js', 'PHP', 'MySQL', 'MongoDB'],



        campaign: {
          title: 'Special Campaign 🎉',
          subtitle: "We provide a FREE Home Page for your business within 120 minutes",
          cta: 'Claim Your Free Homepage'
        }
      };
    }


// if (title.includes('customer support')) {
//   return {
//     // heroImage: 'https://images.pexels.com/photos/7563605/pexels-photo-7563605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     heroImage: 'https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

//     types: [
//       'Customer Interaction Support (Chat, Calls, Email, Social Media)',
//       'Order & Account Management',
//       'Technical & Product Support',
//       'Back-Office & Dashboard Management'
//     ],
//     features: [
//       'Live Chat, Call, Email & Social Media Support',
//       'Inbound & Outbound Call Handling',
//       'Order Processing, Tracking & Refund Handling',
//       'Customer Account & Loyalty Program Management',
//       'Tier 1 Tech Support & Troubleshooting',
//       'Knowledge Base / Helpdesk Setup',
//       'CRM & Dashboard Management (HubSpot, Zendesk, Zoho, Freshdesk, Shopify, etc.)',
//       'Customer Analytics & Reporting (weekly/monthly)'
//     ],
//     highlights: {
//       timeline: 'Ongoing 24/7 Coverage',
//       teamSize: '5-20 Agents (Scalable)',
//       support: (
//         <>
//           Multi-channel Support (Chat, Calls,<br /> Email,
//           and Social Media)
//         </>
//       ),
//       warranty: 'SLA-backed Service Guarantee'
//     },
//     process: [
//       {
//         title: 'Onboarding & Setup',
//         description: 'We integrate our support systems with your business platforms (CRM, website, apps) and set up communication channels.',
//         icon: Settings
//       },
//       {
//         title: 'Customer Interaction Handling',
//         description: 'Our agents provide live chat, call, email, and social media support, ensuring timely and professional responses to customer queries.',
//         icon: Headphones
//       },
//       {
//         title: 'Order & Account Management',
//         description: 'We handle order taking, processing, refunds, returns, exchanges, and customer account updates with accuracy.',
//         icon: ShoppingCart
//       },
//       {
//         title: 'Technical & Product Support',
//         description: 'Tier 1 technical support, FAQs, and troubleshooting help are provided to resolve customer issues quickly.',
//         icon: Cpu
//       }
//     ],
//     technologies: [
//       'HubSpot',
//       'Zendesk',
//       'Zoho Desk',
//       'Freshdesk',
//       'Shopify',
//       'Salesforce',
//       'Gorgias',
//       'Twilio'
//     ]
//   };
// }





if (title.includes('customer support')) {
  return {
    heroImage: 'https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    types: [
      'Customer Interaction Support',
      'Order & Account Management',
      'Technical & Product Support',
      'Back-Office & Dashboard Management',
      'Call Center & Virtual Assistance',
      'E-commerce & Order Support',
      'Security & Surveillance Outsourcing',
      'Business Operations Outsourcing',
      'Real Estate & Property Management Support',
      'Healthcare & Clinic Support',
      'Hospitality & Retail Support',
      'Logistics & Transportation Support',
      'Miscellaneous / High-Demand Add-ons'
    ],

    features: [
  'Multi-channel Support (Chat, Calls, Email & Social Media)',
  'Order Management: Processing, Tracking & Refunds',
  'Customer Account & Loyalty Program Handling',
  'Tier 1 Tech Support & Knowledge Base Setup',
  'CRM & Dashboard Management (HubSpot, Zendesk, Freshdesk, etc.)',
  'E-commerce & Marketplace Support (Amazon, eBay, Shopify)',
  '24/7 Call Center & Virtual Assistant Services'
],

    highlights: {
      timeline: 'Ongoing (8hr, 12hr, or 24/7 Coverage)',
      teamSize: '5-50 Agents (Scalable)',
      support: (
        <>
          Multi-channel Support (Chat, Calls,<br />
          Email, Social Media & Specialized Ops)
        </>
      ),
      warranty: 'SLA-backed Service Guarantee'
    },

    process: [
      {
        title: 'Onboarding & Setup',
        description: 'We integrate with your CRM, e-commerce platforms, and communication tools to ensure smooth setup.',
        icon: Settings
      },
      {
        title: 'Customer Interaction & Ops Handling',
        description: 'Our agents manage customer queries, calls, emails, social media, orders, and reservations.',
        icon: Headphones
      },
      {
        title: 'Account, Technical & Specialized Support',
        description: 'We provide order/account handling, technical troubleshooting, healthcare/real estate/hospitality support, and more.',
        icon: ShoppingCart
      },
      {
        title: 'Analytics & Reporting',
        description: 'We track performance, generate reports, and ensure SLAs through proactive monitoring and feedback loops.',
        icon: Cpu
      }
    ],

    technologies: [
      'HubSpot',
      'Zendesk',
      'Zoho Desk',
      'Freshdesk',
      'Shopify',
      'Salesforce',
      'Gorgias',
      'Twilio',
      'Aircall',
      'Five9'
    ]
  };
}







    // Add campaign only for Web Development
    if (title.includes('web development')) {
      const content = getServiceContent('Web Development');
      return {
        ...content,
        campaign: {
          title: 'Active Campaign 🚀',
          subtitle: 'Free Landing Page in 120 Minutes',
          cta: 'Claim Your Free Landing Page'
        }
      };
    }
    
    if (title.includes('app development')) {
      return {
        heroImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Native iOS Applications (Swift, Objective-C)',
          'Native Android Applications (Kotlin, Java)',
          'Cross-platform Apps (React Native, Flutter)',
          'Progressive Web Apps (PWA)',
          'Enterprise Mobile Solutions',
          'E-commerce Mobile Apps',
          'Social Media & Communication Apps',
          'Gaming & Entertainment Apps'
        ],
        features: [
          'Native and cross-platform development',
          'Intuitive user interface design',
          'Offline functionality support',
          'Push notifications integration',
          'App Store optimization (ASO)',
          'Backend API development',
          'Third-party integrations',
          'Performance monitoring and analytics'
        ],
        highlights: {
          timeline: '3-12 weeks',
          teamSize: '4-6 experts',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Strategy & Research',
            description: 'We conduct market research, analyze competitors, and define your app strategy with user personas and feature prioritization.',
            icon: Target
          },
          {
            title: 'UI/UX Design',
            description: 'Create engaging user interfaces and seamless user experiences optimized for mobile interactions and platform guidelines.',
            icon: Smartphone
          },
          {
            title: 'Development & Integration',
            description: 'Build robust mobile applications with clean code, integrate APIs, and implement advanced features and functionalities.',
            icon: Code
          },
          {
            title: 'Testing & Deployment',
            description: 'Comprehensive testing across devices, app store submission, and post-launch monitoring and updates.',
            icon: Award
          }
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS', 'Node.js', 'MongoDB']
      };
    }
    
    if (title.includes('digital marketing')) {
      return {
        heroImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Search Engine Optimization (SEO)',
          'Pay-Per-Click Advertising (Google Ads, Facebook Ads)',
          'Social Media Marketing & Management',
          'Content Marketing & Blogging',
          'Email Marketing Campaigns',
          'Influencer Marketing',
          'Conversion Rate Optimization (CRO)',
          'Marketing Automation'
        ],
        features: [
          'Data-driven marketing strategies',
          'Multi-channel campaign management',
          'Advanced analytics and reporting',
          'A/B testing and optimization',
          'Brand awareness and lead generation',
          'ROI tracking and performance metrics',
          'Competitor analysis and market research',
          'Custom marketing funnels'
        ],
        highlights: {
          timeline: '1-6 months',
          teamSize: '3-5 specialists',
          support: 'Business hours',
          warranty: 'Campaign guarantee'
        },
        process: [
          {
            title: 'Market Analysis',
            description: 'Comprehensive analysis of your target market, competitors, and current digital presence to identify opportunities.',
            icon: BarChart
          },
          {
            title: 'Strategy Development',
            description: 'Create customized marketing strategies with clear objectives, target audiences, and channel selection.',
            icon: Target
          },
          {
            title: 'Campaign Execution',
            description: 'Launch and manage marketing campaigns across multiple channels with continuous monitoring and optimization.',
            icon: Users
          },
          {
            title: 'Performance Optimization',
            description: 'Analyze results, optimize campaigns, and provide detailed reports with actionable insights for growth.',
            icon: Award
          }
        ],
        technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'SEMrush', 'Hootsuite', 'Canva']
      };
    }
    
    if (title.includes('social media')) {
      return {
        heroImage: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Social Media Strategy Development',
          'Content Creation & Curation',
          'Community Management',
          'Social Media Advertising',
          'Influencer Partnerships',
          'Brand Reputation Management',
          'Social Media Analytics & Reporting',
          'Crisis Management'
        ],
        features: [
          'Platform-specific content strategies',
          'Engaging visual and video content',
          'Community building and engagement',
          'Hashtag research and optimization',
          'Social media advertising campaigns',
          'Influencer collaboration management',
          'Real-time monitoring and response',
          'Performance tracking and analytics'
        ],
        highlights: {
          timeline: 'Ongoing',
          teamSize: '2-4 specialists',
          support: 'Business hours',
          warranty: 'Growth guarantee'
        },
        process: [
          {
            title: 'Social Audit',
            description: 'Analyze your current social media presence, audience demographics, and competitor strategies.',
            icon: BarChart
          },
          {
            title: 'Content Strategy',
            description: 'Develop comprehensive content calendars, brand voice guidelines, and engagement strategies.',
            icon: Users
          },
          {
            title: 'Content Creation',
            description: 'Create high-quality visual content, videos, and copy that resonates with your target audience.',
            icon: Target
          },
          {
            title: 'Growth & Optimization',
            description: 'Monitor performance, engage with community, and continuously optimize strategies for maximum reach.',
            icon: Award
          }
        ],
        technologies: ['Hootsuite', 'Buffer', 'Canva', 'Adobe Creative Suite', 'Sprout Social', 'Later', 'Facebook Creator Studio', 'Instagram Insights']
      };
    }
    
    if (title.includes('seo')) {
      return {
        heroImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Technical SEO Optimization',
          'On-Page SEO & Content Optimization',
          'Off-Page SEO & Link Building',
          'Local SEO & Google My Business',
          'E-commerce SEO',
          'Mobile SEO Optimization',
          'SEO Audits & Competitor Analysis',
          'International SEO'
        ],
        features: [
          'Comprehensive SEO audits and analysis',
          'Keyword research and strategy',
          'Technical website optimization',
          'Content optimization and creation',
          'Link building and outreach',
          'Local search optimization',
          'Performance tracking and reporting',
          'Algorithm update adaptation'
        ],
        highlights: {
          timeline: '3-12 months',
          teamSize: '2-4 specialists',
          support: 'Business hours',
          warranty: 'Ranking improvement'
        },
        process: [
          {
            title: 'SEO Audit',
            description: 'Comprehensive analysis of your website\'s current SEO performance, technical issues, and opportunities.',
            icon: Gauge
          },
          {
            title: 'Strategy Development',
            description: 'Create customized SEO strategies based on keyword research, competitor analysis, and business goals.',
            icon: Target
          },
          {
            title: 'Implementation',
            description: 'Execute on-page optimizations, technical fixes, content creation, and link building campaigns.',
            icon: Code
          },
          {
            title: 'Monitoring & Reporting',
            description: 'Track rankings, traffic, and conversions with detailed monthly reports and continuous optimization.',
            icon: BarChart
          }
        ],
        technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'GTMetrix', 'Yoast SEO']
      };
    }
    
    if (title.includes('ai automations') || title.includes('ai business automation')) {
      return {
        heroImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Workflow Automation Systems',
          'Customer Service Automation',
          'Data Processing & Analysis Automation',
          'Marketing Automation Platforms',
          'Document Processing Automation',
          'Inventory Management Automation',
          'Financial Process Automation',
          'HR & Recruitment Automation'
        ],
        features: [
          'Custom AI model development',
          'Process optimization and efficiency',
          'Seamless system integrations',
          'Real-time data processing',
          'Scalable automation solutions',
          'Cost reduction and ROI improvement',
          'Quality control and error reduction',
          '24/7 automated operations'
        ],
        highlights: {
          timeline: '4-16 weeks',
          teamSize: '3-6 specialists',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Process Analysis',
            description: 'Analyze your current business processes to identify automation opportunities and efficiency improvements.',
            icon: Blocks
          },
          {
            title: 'AI Solution Design',
            description: 'Design custom AI automation solutions tailored to your specific business needs and requirements.',
            icon: Target
          },
          {
            title: 'Development & Integration',
            description: 'Build and integrate AI automation systems with your existing infrastructure and workflows.',
            icon: Code
          },
          {
            title: 'Training & Optimization',
            description: 'Train your team, monitor system performance, and continuously optimize automation processes.',
            icon: Award
          }
        ],
        technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Zapier', 'Microsoft Power Automate', 'AWS Lambda', 'Docker', 'MongoDB']
      };
    }
    
    if (title.includes('ai chat bots') || title.includes('voice agents')) {
      return {
        heroImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Customer Support Chatbots',
          'Sales & Lead Generation Bots',
          'Voice Assistants & IVR Systems',
          'E-commerce Shopping Assistants',
          'Appointment Booking Bots',
          'FAQ & Knowledge Base Bots',
          'Multi-language Support Bots',
          'Integration with CRM & Help Desk'
        ],
        features: [
          'Natural language processing (NLP)',
          'Multi-platform deployment',
          'Conversational AI capabilities',
          'Voice recognition and synthesis',
          'Sentiment analysis and understanding',
          'Integration with existing systems',
          'Analytics and conversation insights',
          'Continuous learning and improvement'
        ],
        highlights: {
          timeline: '3-10 weeks',
          teamSize: '3-5 specialists',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Conversation Design',
            description: 'Design conversation flows, user intents, and bot personality that aligns with your brand voice.',
            icon: Layers
          },
          {
            title: 'AI Training',
            description: 'Train AI models with your specific data, industry knowledge, and customer interaction patterns.',
            icon: Target
          },
          {
            title: 'Development & Testing',
            description: 'Build chatbots and voice agents with extensive testing across different scenarios and platforms.',
            icon: Code
          },
          {
            title: 'Deployment & Optimization',
            description: 'Deploy across channels, monitor performance, and continuously improve based on user interactions.',
            icon: Award
          }
        ],
        technologies: ['OpenAI GPT', 'Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'Amazon Lex', 'Twilio', 'WebRTC', 'Node.js']
      };
    }
    
    if (title.includes('pos')) {
      return {
        heroImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Retail Point of Sale Systems',
          'Restaurant & Hospitality POS',
          'E-commerce Integrated POS',
          'Mobile POS Solutions',
          'Cloud-based POS Systems',
          'Multi-location POS Management',
          'Inventory Management Integration',
          'Payment Processing Solutions'
        ],
        features: [
          'Real-time inventory tracking',
          'Multiple payment method support',
          'Sales reporting and analytics',
          'Customer management system',
          'Employee management and permissions',
          'Tax calculation and compliance',
          'Receipt and invoice generation',
          'Integration with accounting software'
        ],
        highlights: {
          timeline: '2-8 weeks',
          teamSize: '3-5 developers',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Business Analysis',
            description: 'Analyze your business requirements, transaction volumes, and integration needs for optimal POS design.',
            icon: Shield
          },
          {
            title: 'System Design',
            description: 'Design user-friendly interfaces and robust backend systems that handle high-volume transactions.',
            icon: Target
          },
          {
            title: 'Development & Integration',
            description: 'Build secure POS systems with payment gateway integration and third-party software connections.',
            icon: Code
          },
          {
            title: 'Training & Support',
            description: 'Provide comprehensive training, ongoing support, and system maintenance for smooth operations.',
            icon: Users
          }
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Square API', 'QuickBooks API', 'AWS', 'Docker']
      };
    }
    
    if (title.includes('crm')) {
      return {
        heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Sales CRM Systems',
          'Customer Service CRM',
          'Marketing Automation CRM',
          'Real Estate CRM Solutions',
          'Healthcare CRM Systems',
          'E-commerce CRM Integration',
          'Mobile CRM Applications',
          'Custom CRM Development'
        ],
        features: [
          'Contact and lead management',
          'Sales pipeline tracking',
          'Customer interaction history',
          'Automated follow-up systems',
          'Reporting and analytics dashboard',
          'Email and SMS integration',
          'Task and calendar management',
          'Third-party software integration'
        ],
        highlights: {
          timeline: '4-12 weeks',
          teamSize: '4-6 developers',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Requirements Gathering',
            description: 'Understand your sales process, customer journey, and specific CRM requirements for optimal system design.',
            icon: Target
          },
          {
            title: 'System Architecture',
            description: 'Design scalable CRM architecture with user-friendly interfaces and robust data management capabilities.',
            icon: Layers
          },
          {
            title: 'Development & Customization',
            description: 'Build custom CRM features, integrate with existing tools, and ensure seamless data migration.',
            icon: Code
          },
          {
            title: 'Training & Optimization',
            description: 'Provide user training, system optimization, and ongoing support for maximum CRM adoption.',
            icon: Users
          }
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Salesforce API', 'HubSpot API', 'Twilio', 'AWS']
      };
    }

    if (title.includes('genai')) {
      return {
        heroImage: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Content Generation AI (Text, Images, Videos)',
          'Code Generation and Programming Assistants',
          'Creative AI for Design and Art',
          'Document and Report Generation',
          'Personalized Content Creation',
          'AI-Powered Writing Assistants',
          'Automated Marketing Content',
          'Custom AI Model Training'
        ],
        features: [
          'Advanced language model integration',
          'Multi-modal content generation',
          'Custom AI model fine-tuning',
          'Real-time content creation',
          'Brand voice consistency',
          'Scalable content production',
          'Quality control and filtering',
          'API integration and automation'
        ],
        highlights: {
          timeline: '3-8 weeks',
          teamSize: '3-5 AI specialists',
          support: '24/7 Available',
          warranty: '6 months'
        },
        process: [
          {
            title: 'AI Strategy Planning',
            description: 'Define content requirements, use cases, and AI model selection based on your specific business needs.',
            icon: Target
          },
          {
            title: 'Model Training & Fine-tuning',
            description: 'Train and customize AI models with your data to ensure brand-consistent and high-quality output.',
            icon: Blocks
          },
          {
            title: 'Integration & Development',
            description: 'Integrate AI solutions into your existing workflows and develop user-friendly interfaces.',
            icon: Code
          },
          {
            title: 'Optimization & Scaling',
            description: 'Monitor performance, optimize outputs, and scale the solution across your organization.',
            icon: Award
          }
        ],
        technologies: ['OpenAI GPT-4', 'Claude', 'Stable Diffusion', 'LangChain', 'Hugging Face', 'TensorFlow', 'PyTorch', 'FastAPI']
      };
    }

    if (title.includes('ui/ux')) {
      return {
        heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'User Experience (UX) Research and Strategy',
          'User Interface (UI) Design',
          'Mobile App UI/UX Design',
          'Web Application Design',
          'Design System Development',
          'Prototyping and Wireframing',
          'Usability Testing and Optimization',
          'Accessibility (A11y) Design'
        ],
        features: [
          'User-centered design methodology',
          'Interactive prototypes and wireframes',
          'Comprehensive user research',
          'Responsive design principles',
          'Accessibility compliance (WCAG)',
          'Design system creation',
          'Usability testing and iteration',
          'Cross-platform consistency'
        ],
        highlights: {
          timeline: '2-8 weeks',
          teamSize: '2-4 designers',
          support: 'Business hours',
          warranty: '3 months'
        },
        process: [
          {
            title: 'User Research',
            description: 'Conduct user interviews, surveys, and competitive analysis to understand user needs and market requirements.',
            icon: Users
          },
          {
            title: 'Design Strategy',
            description: 'Create user personas, journey maps, and design strategy aligned with business goals and user needs.',
            icon: Target
          },
          {
            title: 'Design & Prototype',
            description: 'Design wireframes, mockups, and interactive prototypes with modern design principles and best practices.',
            icon: Layers
          },
          {
            title: 'Test & Iterate',
            description: 'Conduct usability testing, gather feedback, and iterate designs for optimal user experience.',
            icon: Award
          }
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Miro', 'Hotjar']
      };
    }

    if (title.includes('saas')) {
      return {
        heroImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Multi-tenant SaaS Applications',
          'B2B SaaS Platforms',
          'B2C SaaS Solutions',
          'Enterprise SaaS Systems',
          'API-first SaaS Development',
          'Microservices Architecture',
          'SaaS Migration Services',
          'White-label SaaS Solutions'
        ],
        features: [
          'Scalable multi-tenant architecture',
          'Subscription and billing management',
          'User authentication and authorization',
          'API development and documentation',
          'Real-time analytics and reporting',
          'Automated deployment and scaling',
          'Security and compliance features',
          'Third-party integrations'
        ],
        highlights: {
          timeline: '8-24 weeks',
          teamSize: '5-8 developers',
          support: '24/7 Available',
          warranty: '12 months'
        },
        process: [
          {
            title: 'Product Strategy',
            description: 'Define product vision, target market, feature roadmap, and technical architecture for your SaaS platform.',
            icon: Target
          },
          {
            title: 'MVP Development',
            description: 'Build minimum viable product with core features, user authentication, and basic subscription management.',
            icon: Code
          },
          {
            title: 'Scaling & Features',
            description: 'Add advanced features, optimize performance, implement analytics, and prepare for user growth.',
            icon: Layers
          },
          {
            title: 'Launch & Growth',
            description: 'Deploy to production, monitor performance, gather user feedback, and iterate for continuous improvement.',
            icon: Award
          }
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Stripe API']
      };
    }

    if (title.includes('data analytics')) {
      return {
        heroImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        types: [
          'Business Intelligence Dashboards',
          'Predictive Analytics Solutions',
          'Real-time Data Processing',
          'Data Warehouse Development',
          'ETL Pipeline Creation',
          'Machine Learning Analytics',
          'Custom Reporting Systems',
          'Data Visualization Platforms'
        ],
        features: [
          'Advanced data visualization',
          'Real-time analytics processing',
          'Predictive modeling and forecasting',
          'Custom dashboard development',
          'Data integration from multiple sources',
          'Automated reporting systems',
          'Performance monitoring and alerts',
          'Scalable data architecture'
        ],
        highlights: {
          timeline: '6-16 weeks',
          teamSize: '4-6 data scientists',
          support: '24/7 Available',
          warranty: '9 months'
        },
        process: [
          {
            title: 'Data Assessment',
            description: 'Analyze your current data sources, quality, and infrastructure to identify analytics opportunities.',
            icon: BarChart
          },
          {
            title: 'Architecture Design',
            description: 'Design scalable data architecture, ETL processes, and analytics framework for your requirements.',
            icon: Layers
          },
          {
            title: 'Development & Integration',
            description: 'Build analytics solutions, integrate data sources, and create interactive dashboards and reports.',
            icon: Code
          },
          {
            title: 'Deployment & Training',
            description: 'Deploy analytics platform, train your team, and provide ongoing optimization and support.',
            icon: Users
          }
        ],
        technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch', 'MongoDB', 'AWS Redshift']
      };
    }

    // Default content for any other services
    return {
      heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      types: [
        'Custom solution development',
        'Consultation and strategy',
        'Implementation and integration',
        'Ongoing support and maintenance'
      ],
      features: [
        'Tailored to your specific needs',
        'Industry best practices',
        'Scalable and secure solutions',
        'Expert team support',
        'Quality assurance',
        'Timely delivery'
      ],
      highlights: {
        timeline: '2-12 weeks',
        teamSize: '3-6 experts',
        support: '24/7 Available',
        warranty: '6 months'
      },
      process: [
        {
          title: 'Discovery',
          description: 'Understanding your requirements and goals.',
          icon: Target
        },
        {
          title: 'Planning',
          description: 'Creating detailed project roadmap.',
          icon: Users
        },
        {
          title: 'Execution',
          description: 'Implementing the solution with quality.',
          icon: Code
        },
        {
          title: 'Delivery',
          description: 'Launching and providing ongoing support.',
          icon: Award
        }
      ],
      technologies: ['Modern Tech Stack', 'Cloud Solutions', 'Security Tools', 'Analytics']
    };
  };

  const serviceContent = getServiceContent(service.title);

  const handleContactRedirect = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container service-content opacity-0" ref={containerRef}>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="heading">{service.title}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-2xl overflow-hidden">
                <img
                  src={serviceContent.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section - Only for Web Development */}
      {serviceContent.campaign && (
        <section className="section-padding bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-[length:200%_200%]">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  <span className="heading">{serviceContent.campaign.title}</span>
                </h2>
                <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
                  {serviceContent.campaign.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleContactRedirect}
                    className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {serviceContent.campaign.cta}
                  </button>
                  <p className="text-white/80 text-sm">
                    ⏰ Limited time offer • No hidden costs • Professional quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Types Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            <span className="heading">Types of</span> <span className="gradient-text">{service.title}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            We offer comprehensive solutions across various categories and specializations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceContent.types.map((type, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="heading">Why Choose Our</span> <span className="gradient-text">{service.title}?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We deliver exceptional results through our proven methodology and cutting-edge technology solutions.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {serviceContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="heading">Service Highlights</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Project Timeline</span>
                  <span className="text-primary font-semibold">{serviceContent.highlights.timeline}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Team Size</span>
                  <span className="text-primary font-semibold">{serviceContent.highlights.teamSize}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Support</span>
                  <span className="text-primary font-semibold">{serviceContent.highlights.support}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Warranty</span>
                  <span className="text-primary font-semibold">{serviceContent.highlights.warranty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">Our</span> <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            A proven methodology that ensures successful project delivery
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceContent.process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    <span className="heading">{step.title}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">Technologies</span> <span className="gradient-text">We Use</span>
          </h2>
          <p className="section-subtitle">
            Cutting-edge tools and frameworks for optimal results
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {serviceContent.technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors shadow-md">
                  <span className="text-2xl">⚡</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="heading">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <button
            onClick={handleContactRedirect}
            className="btn bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;

