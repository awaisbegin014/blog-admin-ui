import { NavItem, Service, TeamMember, Testimonial, Project, BlogPost } from '../types';
import { Code, Blocks, Gauge, Layers, BarChart, Shield } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'About', href: '#about' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Offices', href: '#offices' },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Fast, responsive websites and web applications built to scale and convert.'
  },
  {
    icon: 'Smartphone',
    title: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage users.'
  },
  {
    icon: 'BarChart',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow visibility, qualified leads, and revenue.'
  },
  {
    icon: 'Users',
    title: 'Social Media Management and Content Creation',
    description: 'Engaging content creation and social management to grow your brand community.'
  },
  {
    icon: 'Gauge',
    title: 'Search Engine Optimization',
    description: 'Targeted SEO strategies to improve search ranking and drive steady organic traffic.'
  },
  {
    icon: 'Blocks',
    title: 'AI Automations / AI Business Automation',
    description: 'Streamline workflows and eliminate repetitive tasks with custom AI automation.'
  },
  {
    icon: 'Layers',
    title: 'AI Chat Bots and Voice Agents',
    description: 'Smart AI chatbots and voice agents to enhance customer engagement 24/7.'
  },
  {
    icon: 'Users',
    title: 'Customer Support',
    description: 'Multi-channel support via chat, calls, and email for fast customer resolutions.'
  },
  {
    icon: 'Shield',
    title: 'Point of Sale',
    description: 'Modern POS systems that streamline transactions and inventory in real time.'
  },
  {
    icon: 'Code',
    title: 'Customer Relationship Management',
    description: 'Centralized CRM solutions to manage customer interactions, sales, and retention.'
  },
  {
    icon: 'Blocks',
    title: 'Generative AI',
    description: 'Generative AI models to create content and automate creative workflows.'
  },
  {
    icon: 'Users',
    title: 'User interface and experience design',
    description: 'Intuitive, user-centered UI/UX designs crafted for modern digital products.'
  },
  {
    icon: 'Layers',
    title: 'Software as a Service',
    description: 'Scalable, secure cloud SaaS applications engineered for high user adoption.'
  },
  {
    icon: 'BarChart',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with custom analytics dashboards.'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    company: 'E-commerce Partner',
    image: '/images/female.png',
    quote: 'Our new site is clean, fast, and easy to use. The team delivered exactly what we needed.',
    rating: 5
  },
  {
    name: 'David K.',
    company: 'Brand Founder',
    image: '/images/male.png',
    quote: 'They understood our vision and built a site that matches our brand. Very smooth experience.',
    rating: 5
  },
  {
    name: 'Rachel W.',
    company: 'Product Director',
    image: '/images/female.png',
    quote: 'Great design sense and solid development. Everything works perfectly across devices.',
    rating: 5
  },
  {
    name: 'James H.',
    company: 'Growth Lead',
    image: '/images/male.png',
    quote: 'The site loads fast and looks professional. We’ve already seen better engagement.',
    rating: 5
  },
  {
    name: 'Stacey R.',
    company: 'CEO, Horizon',
    image: '/images/female.png',
    quote: 'Yellow Solutions launched our Shopify site and ads in a week—sales started day one.',
    rating: 5
  },
  {
    name: 'Eddie T.',
    company: 'Owner, FootwhereUSA',
    image: '/images/female.png',
    quote: 'Clear plan, fast execution, real results. Exactly what we needed.',
    rating: 5
  },
  {
    name: 'Marc D.',
    company: 'E-commerce Lead, AAA3',
    image: '/images/male.png',
    quote: 'Our CPA dropped 38% in the first month. Highly recommended.',
    rating: 4
  },
  {
    name: 'Debo',
    company: 'Founder, All American Infinite resources',
    image: '/images/female.png',
    quote: 'Professional team, great communication, zero headaches.',
    rating: 5
  },
  {
    name: 'Lena P.',
    company: 'Manager, DTC',
    image: '/images/female.png',
    quote: 'Yellow Solutions feels like an in-house team. They test fast, share data clearly, and keep us moving.',
    rating: 5
  },
  {
    name: 'Omar Y.',
    company: 'Founder, Craft&Co',
    image: '/images/male.png',
    quote: 'Their creatives finally made our products ‘click’ on social. Sales doubled quarter-over-quarter.',
    rating: 5
  },
  {
    name: 'Ayesha S.',
    company: 'Owner, Bloom Beauty',
    image: '/images/female.png',
    quote: 'Smooth onboarding, helpful Looms, and weekly wins. Worth every rupee.',
    rating: 4
  }
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced analytics and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Development',
    link: '#'
  },
  {
    title: 'Healthcare Management System',
    description: 'Digital transformation solution for healthcare providers with patient management and telemedicine features.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Custom Software',
    link: '#'
  },
  {
    title: 'Financial Trading App',
    description: 'Real-time trading platform with advanced charting and portfolio management capabilities.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Mobile App',
    link: '#'
  },
  {
    title: 'Smart City Dashboard',
    description: 'IoT-powered dashboard for city management with real-time data visualization and analytics.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Data Analytics',
    link: '#'
  },
  {
    title: 'Learning Management System',
    description: 'Comprehensive educational platform with interactive courses and progress tracking.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Development',
    link: '#'
  },
  {
    title: 'Cloud Migration Solution',
    description: 'Enterprise cloud migration with zero downtime and enhanced security protocols.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Cloud Services',
    link: '#'
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'March 15, 2024',
    author: 'Alex Morgan',
    link: '#'
  },
  {
    title: 'Best Practices for Cloud Security',
    excerpt: 'Essential security measures every organization should implement when migrating to the cloud.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'March 10, 2024',
    author: 'Sophia Chen',
    link: '#'
  },
  {
    title: 'UX Design Trends for 2024',
    excerpt: 'The latest design trends that are shaping user experiences across digital platforms.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'March 5, 2024',
    author: 'Marcus Williams',
    link: '#'
  }
];

// ---------------------------------------------------------------------------
// "Why Choose Us" value propositions
// ---------------------------------------------------------------------------
export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: 'HeartHandshake',
    title: '100% Client Satisfaction',
    description: 'We work until you love the result - every project is backed by our commitment to getting it right.'
  },
  {
    icon: 'Sparkles',
    title: 'Tailored, Not Templated',
    description: 'Every website, app, and campaign is custom-built around your brand and goals - never a copy-paste theme.'
  },
  {
    icon: 'RefreshCw',
    title: 'Unlimited Revisions',
    description: 'Free rounds of revisions on design and content until the final deliverable matches your vision.'
  },
  {
    icon: 'Headset',
    title: 'Dedicated Personal Support',
    description: 'A real point of contact who knows your project - no ticket queues, no generic call centers.'
  },
  {
    icon: 'Clock',
    title: 'Round-the-Clock Availability',
    description: 'Distributed teams across the US, Germany and beyond mean help is always close by, whenever you need it.'
  }
];

// ---------------------------------------------------------------------------
// Pricing packages - grouped into tabbed categories
// ---------------------------------------------------------------------------
export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface PricingCategory {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  tiers: PricingTier[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'web',
    label: 'Web Design',
    heading: 'Website & Web Application Packages',
    subheading: 'Suitable for potential startups, growing brands and enterprises needing custom web solutions.',
    tiers: [
      {
        name: 'Web Design Starter',
        price: '$149.00 USD',
        originalPrice: '$240.00 ONLY',
        description: 'Suitable for potential startups and brand revamps.',
        features: [
          '2 Stock Photos',
          '3 Page Website',
          '1 Banner Design',
          '1 jQuery Slider Banner',
          '48 to 72 hours TAT',
          'Facebook Page Design',
          'Twitter Page Design',
          'Instagram Page Design'
        ]
      },
      {
        name: 'Professional Web Design',
        price: '$399.00 USD',
        originalPrice: '$600.00 ONLY',
        description: 'For businesses needing custom concepts and multi-page design.',
        features: [
          'Custom Designed Homepage (2x concepts)',
          '5 Custom Designed Inner Pages',
          '5 Premium Stock Photos',
          '3 Custom Banner Designs',
          'Interactive & Animated Slider Banner',
          'Contact Us Form',
          'Cross-Browser Compatibility',
          'On-page SEO configuration',
          'Fast Load Time & Security Plugins',
          'Google Friendly Sitemap',
          '48-72 Hours Turnaround Time',
          'Complete Deployment'
        ]
      },
      {
        name: 'Business Web Design',
        price: '$899.00 USD',
        originalPrice: '$1,400.00 ONLY',
        description: 'Complete CMS-driven website with social media integration.',
        features: [
          'Custom Designed Homepage (3x concepts)',
          '10 Custom Designed Inner Pages',
          'Content Management System (CMS) Integration',
          'Cross-Platform Responsive Compatibility',
          'Interactive & Animated Slider Banner',
          '8 Premium Stock Photos & 5 Custom Banners',
          '1 Landing Page Design',
          '2 Business Email Addresses',
          'Social Media Integration (Facebook, Twitter, LinkedIn)',
          'Google Friendly Sitemap & On-Page SEO',
          'Parallax Scrolling & Fast Load Time',
          'Complete Deployment'
        ],
        highlighted: true
      },
      {
        name: 'Corporate Web Design',
        price: '$1,599.00 USD',
        originalPrice: '$2,400.00 ONLY',
        description: 'Dynamic corporate web presence with scheduling & payment options.',
        features: [
          'Custom Designed Homepage (5x Concepts)',
          '15 Custom Designed Inner Pages',
          'Interactive and Dynamic Website Design',
          'Online Reservation / Appointment Tools',
          'Striking Hover Effects & Interactive Banner',
          '12 Premium Stock Photos & 8 Banners',
          'Online Payment Integration (Optional)',
          'Custom Dynamic Forms & Signup Area',
          '5 Business Email Addresses',
          'Search Engine Indexing (Google, Yahoo, Bing)',
          'SEO Friendly Coding & Sitemap',
          'Google Analytics & Webmaster Setup'
        ]
      },
      {
        name: 'Enterprise Web Design',
        price: '$2,799.00 USD',
        originalPrice: '$4,200.00 ONLY',
        description: 'Custom WordPress / PHP portal with multi-lingual support.',
        features: [
          'Custom Designed Homepage (6x concepts)',
          '20 Custom Designed Inner Pages',
          'Custom WordPress / PHP Development',
          '15 Premium Stock Photos & 10 Banners',
          '2 Landing Page Designs & Dynamic Forms',
          'Online Reservation / Appointment Tool',
          'Online Payment Integration',
          'Multi-Lingual & 3rd Party APIs',
          'Downloadable Items (eBooks, PDFs, Videos)',
          'Social Media Live Feeds Widget',
          '2 Years Free Domain Registration (Optional)',
          '10 Business Email Addresses',
          'Complete Deployment & 48-72h TAT'
        ]
      },
      {
        name: 'Enterprise Plus Web Design',
        price: '$4,599.00 USD',
        originalPrice: '$6,800.00 ONLY',
        description: 'Full-scale enterprise portal with multi-user roles & custom architecture.',
        features: [
          'Unlimited Homepage & Inner Page Concepts',
          'High-End UI/UX & Custom Development',
          'Enterprise Web Portals (multi-user accounts & roles)',
          'Complete Database Creation & Admin Panel',
          'Unlimited Premium Stock Photos & Banners',
          'Live Chat & Bot Chat Integration (Optional)',
          'Search Bar & 3rd Party API Integrations',
          '5 Years Free Domain Registration (Optional)',
          '10 Business Email Addresses',
          '404 Redirect & XML Sitemap',
          'SLA-Backed Complete Deployment'
        ]
      }
    ]
  },
  {
    id: 'hosting',
    label: 'Hosting & Domain',
    heading: 'Hosting & Domain Packages',
    subheading: 'High-speed SSD cloud hosting with complete security, auto-updates, and daily backups.',
    tiers: [
      {
        name: 'Starter Hosting',
        price: '$499 USD',
        period: '/yr',
        originalPrice: '$750 ONLY',
        description: 'Suitable for potential startups and growing web projects.',
        features: [
          '1 Website',
          'Free SSL Certificate',
          '20 GB SSD Storage',
          '20,000 Visits Monthly',
          '2 TB Bandwidth',
          'Unmetered Traffic',
          'WordPress Installation & Migrator',
          'WP Auto Updates & Daily Backups',
          'Global CDN Enabled',
          'Business Email & Unlimited Database'
        ]
      },
      {
        name: 'Corporate Hosting',
        price: '$799 USD',
        period: '/yr',
        originalPrice: '$1,200 ONLY',
        description: 'High-traffic corporate hosting with unlimited site support.',
        features: [
          'Unlimited Websites',
          'Free SSL Certificate',
          '40 GB SSD Storage',
          '40,000 Visits Monthly',
          '4 TB Bandwidth',
          'Unmetered Traffic',
          'WordPress Installation & Migrator',
          'WP Auto Updates & Daily Backups',
          'High Performance CDN Enabled',
          'Business Email & Unlimited Database'
        ],
        highlighted: true
      },
      {
        name: 'Complete Hosting',
        price: '$1,999 USD',
        period: '/yr',
        originalPrice: '$3,000 ONLY',
        description: 'Enterprise-grade unmetered infrastructure for demanding web applications.',
        features: [
          'Unlimited Websites',
          'Free SSL Certificate',
          'Unlimited GB SSD Storage',
          'Unlimited Visits Monthly',
          '6 TB Bandwidth',
          'Unmetered Traffic',
          'Dedicated Resource Allocation',
          'WP Auto Updates & Daily Backups',
          'Enterprise CDN & Business Email',
          'Unlimited Databases & 24/7 Priority Support'
        ]
      }
    ]
  },
  {
    id: 'maintenance',
    label: 'Website Maintenance',
    heading: 'Website Maintenance Packages',
    subheading: 'Keep your site fast, secure, backed up, and updated every month.',
    tiers: [
      {
        name: 'Starter Web Maintenance',
        price: '$49 USD',
        period: '/mo',
        originalPrice: '$80 ONLY',
        description: 'Essential upkeep and real-time security protection.',
        features: [
          'Updates on current features',
          'Content-related updates',
          'Website version updates & backups',
          'Security checkups and scans',
          'Fixing bugs or errors on your website',
          'Real-time website protection'
        ]
      },
      {
        name: 'Advanced Website Maintenance',
        price: '$69 USD',
        period: '/mo',
        originalPrice: '$110 ONLY',
        description: 'Speed optimization, broken link auditing and SEO-friendly updates.',
        features: [
          'Everything in Starter Maintenance',
          'Analyzing website for broken links',
          'Speed & cache optimization',
          'SEO-friendly image & alt-image tags',
          'Making content SEO friendly',
          'Priority turnaround on support requests'
        ],
        highlighted: true
      },
      {
        name: 'Premium Website Maintenance',
        price: '$149 USD',
        period: '/mo',
        originalPrice: '$220 ONLY',
        description: 'Hands-off maintenance covering server migrations, new features, and theme overhauls.',
        features: [
          'Everything in Advanced Maintenance',
          'Technical support for domain & hosting server',
          'Web server migrations & DNS management',
          'Email technical support',
          'Adding new pages and features',
          'Changing entire theme (1 time) of website'
        ]
      }
    ]
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce',
    heading: 'Ecommerce Website Packages',
    subheading: 'Launch or scale your online store with high-conversion checkout and inventory tools.',
    tiers: [
      {
        name: 'Starter Ecommerce',
        price: '$599 USD',
        originalPrice: '$900 ONLY',
        description: 'Suitable for emerging online stores and boutique shops.',
        features: [
          'Custom Designed Homepage (1x concept)',
          '5 Custom Designed Inner Pages',
          'Up to 25 to 50 Products',
          'Up to 7 Categories',
          'Content Management System',
          'Sales & Inventory Management',
          'Mini Shopping Cart Integration',
          'Payment Gateway Integration',
          '5 Premium Stock Photos & 2 Banners',
          'Complete Deployment'
        ]
      },
      {
        name: 'Professional Ecommerce',
        price: '$1,299 USD',
        originalPrice: '$1,950 ONLY',
        description: 'For scaling retail brands requiring customer logins, discounts, and product filters.',
        features: [
          'Custom Designed Homepage (2x concepts)',
          '10 Custom Designed Inner Pages',
          'Up to 50 - 250 Products & 10 Categories',
          'Customer Login / Signup Area',
          'Wishlist, discount options & coupon codes',
          'Product ratings & customer reviews',
          'Full Shopping Cart & Payment Module',
          'Shipping Merchant & Dropshipping Integration',
          '15 Premium Stock Photos & 8 Banners',
          'On-Page SEO Configuration'
        ],
        highlighted: true
      },
      {
        name: 'Business Ecommerce',
        price: '$2,699 USD',
        originalPrice: '$3,800 ONLY',
        description: 'High-conversion storefront with multi-currency, guest checkout, and marketing suite.',
        features: [
          'Custom Designed Homepage (3x concepts)',
          '20 Custom Designed Inner Pages',
          'Up to 250 - 1,000 Products & 20 Categories',
          'Multi-Currency Support (Optional)',
          'Order tracking & automated invoicing',
          'Multiple Product Variations (Color, Size, etc.)',
          'Intelligent Search & Filter System',
          'Guest Checkout Option',
          '1 Year Free Hosting & Domain Registration',
          '25 Premium Stock Photos & 15 Banners',
          'Email Marketing Campaign Integration'
        ]
      },
      {
        name: 'Enterprise Ecommerce',
        price: '$4,499 USD',
        originalPrice: '$6,500 ONLY',
        description: 'Full marketplace and high-volume retail architecture with reward points & bulk tools.',
        features: [
          'Custom Designed Homepage (6x concepts)',
          'Unlimited Custom Inner Pages & Products',
          'High-End UI/UX & Custom Coding',
          'Marketplace Development (Optional)',
          'Bulk CSV Products Upload',
          'Product Return Management System',
          'Reward Pointing System & Custom Calculators',
          '5 Years Free Hosting & Domain Registration',
          'Multi-Currency & 3rd Party API Integrations',
          'Extensive Admin Panel & Dedicated SLA Support'
        ]
      }
    ]
  },
  {
    id: 'seo',
    label: 'SEO',
    heading: 'Search Engine Optimization Packages',
    subheading: 'Get ranked on Google, Yahoo and Bing with comprehensive technical and on-page SEO.',
    tiers: [
      {
        name: 'Startup Plan',
        price: '$350 USD',
        period: '/mo',
        originalPrice: '$550 ONLY',
        description: 'Foundational SEO for local businesses and new websites.',
        features: [
          'Comprehensive Website Audit',
          '10 Pages Optimized',
          '5 Selected Keywords Targeted',
          'Keyword Research, Grouping & Mapping',
          'SEO Strategic Roadmap',
          'Webpage Copywriting (3 pages, 350 words/page)',
          'Title Tag & Meta Description Optimization',
          'XML Sitemap & Robots.txt Check',
          'Broken Link Report'
        ]
      },
      {
        name: 'Scaling Plan',
        price: '$700 USD',
        period: '/mo',
        originalPrice: '$1,000 ONLY',
        description: 'For businesses ready to rank competitively and accelerate organic traffic.',
        features: [
          'Business, Consumer & Competitor Analysis',
          '15 Selected Keywords Targeted & 15 Pages Optimized',
          'Meta Tags & Keyword Optimization',
          'Image Optimization & Anchor Inclusions',
          'Google Analytics & Webmaster Installation',
          'Call to Action Conversion Plan',
          'Monthly Detailed Reporting & Recommendations',
          'Dedicated Email & Phone Support'
        ],
        highlighted: true
      },
      {
        name: 'Venture Plan',
        price: '$1,200 USD',
        period: '/mo',
        originalPrice: '$1,800 ONLY',
        description: 'Aggressive search visibility for high-competition enterprise industries.',
        features: [
          'Comprehensive Competitor Benchmarking',
          '25 Selected Keywords Targeted & 30 Pages Optimized',
          'Meta Tags, Content & Image Optimization',
          'Inclusion of Anchor Indexing Modifications',
          'Google Places & Local Pack Inclusions',
          'Google Analytics & Google Search Console',
          'Custom Conversion Funnel Auditing',
          'Monthly Strategy Calls & Priority Support'
        ]
      }
    ]
  },
  {
    id: 'smm',
    label: 'Social Media Marketing',
    heading: 'Social Media Marketing Packages',
    subheading: 'Build brand reputation, audience followers and engagement across top social channels.',
    tiers: [
      {
        name: 'Basic Package',
        price: '$350 USD',
        period: '/mo',
        originalPrice: '$500 ONLY',
        description: 'Establish professional branding and consistent posting.',
        features: [
          'Social Account Setup & Verification',
          'Business Page Profile Optimization',
          'Social Media Strategy (Overview)',
          'Content Creation & Scheduling',
          'Audience Growth & Engagement',
          'Monthly Performance Progress Report',
          'No Setup Fee & Cancel Anytime'
        ]
      },
      {
        name: 'Startup Package',
        price: '$700 USD',
        period: '/mo',
        originalPrice: '$1,000 ONLY',
        description: 'Accelerate brand presence with proactive comment and competitor monitoring.',
        features: [
          'Social Account Setup & Full Page Optimization',
          'In-Depth Social Media Strategy',
          'Custom Visual & Copy Content Creation',
          'Audience & Follower Growth Strategy',
          'Reputation & Brand Sentiment Management',
          'Social Media Competitor Analysis',
          'Spam / Comments Daily Monitoring',
          'Monthly Performance & ROI Report',
          'No Setup Fee & Cancel Anytime'
        ],
        highlighted: true
      },
      {
        name: 'Gold Business',
        price: '$1,200 USD',
        period: '/mo',
        originalPrice: '$1,700 ONLY',
        description: 'High-frequency publishing and tailored multi-channel campaigns.',
        features: [
          '7 Postings per Week (per network)',
          'Social Account Setup & Optimization',
          'Business Page Optimization',
          'Social Media Strategy (Overview)',
          'Content Creation & Media Management',
          'Active Community Management',
          'Monthly Progress Report',
          'No Setup Fee & Cancel Anytime'
        ]
      },
      {
        name: 'Platinum Business',
        price: '$1,500 USD',
        period: '/mo',
        originalPrice: '$2,200 ONLY',
        description: 'Omnichannel enterprise presence with full creative direction.',
        features: [
          '7 Postings per Week Across All Social Networks',
          'Social Account Setup & Enterprise Optimization',
          'Business Page Custom Creative Production',
          'High-End Video & Motion Visuals',
          'Full Account & Reputation Management',
          'Weekly Strategy Review Calls',
          'No Setup Fee & Cancel Anytime'
        ]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Technologies & platforms
// ---------------------------------------------------------------------------
export interface Platform {
  name: string;
  logo: string;
  /** Dark/black logo that would disappear on the dark theme — render it white there. */
  monoInDark?: boolean;
}

export const platforms: Platform[] = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs', monoInDark: true },
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify' },
  { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce' },
  { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', monoInDark: true },
  { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud' },
  { name: 'Google Ads', logo: 'https://cdn.simpleicons.org/googleads' },
  { name: 'Meta Ads', logo: 'https://cdn.simpleicons.org/meta' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase' }
];