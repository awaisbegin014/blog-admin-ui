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
    description: 'Create stunning, responsive websites and web applications that deliver exceptional user experiences across all devices and platforms.'
  },
  {
    icon: 'Smartphone',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users and elevate your brand on iOS and Android platforms.'
  },
  {
    icon: 'BarChart',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies that drive growth, increase brand visibility, and convert prospects into customers.'
  },
  {
    icon: 'Users',
    title: 'Social Media Management and Content Creation',
    description: 'Professional social media management with engaging content creation to build your brand presence and community.'
  },
  {
    icon: 'Gauge',
    title: 'Search Engine Optimization',
    description: 'Search engine optimization strategies that improve your website visibility and drive organic traffic to boost your online presence.'
  },
  {
    icon: 'Blocks',
    title: 'AI Automations / AI Business Automation',
    description: 'Intelligent automation solutions that streamline your business processes and increase efficiency using cutting-edge AI technology.'
  },
  {
    icon: 'Layers',
    title: 'AI Chat Bots and Voice Agents',
    description: 'Advanced conversational AI solutions including chatbots and voice agents to enhance customer service and engagement.'
  },
  {
    icon: 'Users',
    title: 'Customer Support',
    description: 'Multi-channel support via chat, calls, email, and social media - ensuring quick resolutions, smooth order handling, and happier customers.'
  }

  ,

  {
    icon: 'Shield',
    title: 'Point of Sale',
    description: 'Point of Sale systems that streamline transactions, inventory management, and business operations for retail and service businesses.'
  },
  {
    icon: 'Code',
    title: 'Customer Relationship Management',
    description: 'Customer Relationship Management solutions that help you manage customer interactions, sales processes, and business relationships.'
  },
  {
    icon: 'Blocks',
    title: 'Generative AI',
    description: 'Generative AI solutions that create content, automate creative processes, and enhance productivity through advanced AI models.'
  },
  {
    icon: 'Users',
    title: 'User interface and experience design',
    description: 'User interface and experience design services that create intuitive, beautiful, and user-centered digital products.'
  },
  {
    icon: 'Layers',
    title: 'Software as a Service',
    description: 'Software as a Service development for scalable, cloud-based applications that serve businesses and consumers globally.'
  },
  {
    icon: 'BarChart',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions.'
  }
];

export const testimonials: Testimonial[] = [
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
    company: 'Founder, All American Infinte resources',
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
    label: 'Web & App Development',
    heading: 'Website & App Development Packages',
    subheading: 'From a simple landing page to a full custom platform - pick the tier that matches where your business is today.',
    tiers: [
      { name: 'Starter', price: '$149', description: 'A clean, single-page site to get you online fast.', features: ['1 page responsive design', 'Mobile & tablet optimized', 'Basic contact form', '3-day delivery'] },
      { name: 'Business', price: '$449', description: 'A multi-page brochure site for small businesses.', features: ['Up to 5 pages', 'On-page SEO setup', 'Content management system', '7-day delivery'] },
      { name: 'Growth', price: '$999', description: 'For brands ready to scale their online presence.', features: ['Up to 10 pages', 'Blog / CMS integration', 'Speed & SEO optimization', 'Analytics dashboard'], highlighted: true },
      { name: 'Professional', price: '$1,999', description: 'Custom design with advanced functionality.', features: ['Fully custom UI/UX', 'Third-party integrations', 'Admin dashboard', 'Priority support'] },
      { name: 'Enterprise', price: '$3,499', description: 'Complex web applications and portals.', features: ['Custom web application', 'API & database architecture', 'Role-based access', 'Dedicated project manager'] },
      { name: 'Enterprise Plus', price: '$4,599+', description: 'Full-scale platforms and mobile apps.', features: ['Web + mobile app', 'Scalable cloud architecture', 'Ongoing dev retainer', 'SLA-backed support'] }
    ]
  },
  {
    id: 'hosting',
    label: 'Hosting & Domain',
    heading: 'Hosting & Domain Packages',
    subheading: 'Fast, secure hosting so your site stays online - without you having to think about servers.',
    tiers: [
      { name: 'Starter', price: '$9', period: '/mo', description: 'Perfect for a single small site.', features: ['1 website', 'Free SSL certificate', 'Daily backups', 'Email support'] },
      { name: 'Corporate', price: '$29', period: '/mo', description: 'For growing sites with more traffic.', features: ['Up to 5 websites', 'CDN performance boost', 'Priority backups', 'Malware monitoring'], highlighted: true },
      { name: 'Complete', price: '$79', period: '/mo', description: 'Fully managed hosting for demanding apps.', features: ['Unlimited websites', 'Dedicated resources', 'Staging environment', '24/7 priority support'] }
    ]
  },
  {
    id: 'maintenance',
    label: 'Website Maintenance',
    heading: 'Website Maintenance Packages',
    subheading: 'Keep your site fast, secure, and up to date every month.',
    tiers: [
      { name: 'Starter', price: '$49', period: '/mo', description: 'Essential upkeep for small sites.', features: ['Plugin & core updates', 'Uptime monitoring', 'Monthly backup', 'Email support'] },
      { name: 'Advanced', price: '$99', period: '/mo', description: 'Regular improvements and monitoring.', features: ['Everything in Starter', 'Weekly backups', '2 hrs content updates/mo', 'Security scans'], highlighted: true },
      { name: 'Premium', price: '$149', period: '/mo', description: 'Hands-off maintenance for busy teams.', features: ['Everything in Advanced', 'Daily backups', '5 hrs content updates/mo', 'Priority turnaround'] }
    ]
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    heading: 'E-Commerce Website Packages',
    subheading: 'Launch or upgrade your online store on Shopify, WooCommerce or a custom stack.',
    tiers: [
      { name: 'Starter', price: '$599', description: 'A simple store to start selling online.', features: ['Up to 25 products', 'Shopify or WooCommerce setup', 'Payment gateway integration', 'Mobile-optimized checkout'] },
      { name: 'Growth', price: '$1,299', description: 'For stores ready to convert more visitors.', features: ['Up to 100 products', 'Abandoned cart recovery', 'Basic SEO setup', 'Email marketing integration'], highlighted: true },
      { name: 'Professional', price: '$2,299', description: 'Custom storefront with advanced features.', features: ['Unlimited products', 'Custom theme design', 'Multi-currency support', 'Inventory automation'] },
      { name: 'Advanced', price: '$3,299', description: 'Headless / multi-channel commerce.', features: ['Headless storefront', 'Marketplace integrations', 'Advanced analytics', 'Dedicated support'] },
      { name: 'Enterprise', price: '$4,499', description: 'High-volume, high-traffic stores.', features: ['Custom checkout flow', 'ERP / ERP-lite integration', 'Performance SLA', 'Dedicated account manager'] }
    ]
  },
  {
    id: 'seo',
    label: 'SEO',
    heading: 'Search Engine Optimization Packages',
    subheading: 'Get found on Google with ongoing technical, on-page and content SEO.',
    tiers: [
      { name: 'Startup Plan', price: '$350', period: '/mo', description: 'Foundational SEO for new sites.', features: ['Keyword research', 'On-page optimization', 'Monthly reporting', 'Up to 10 keywords tracked'] },
      { name: 'Scaling Plan', price: '$700', period: '/mo', description: 'For businesses ready to rank competitively.', features: ['Everything in Startup', 'Content optimization', 'Link building', 'Up to 30 keywords tracked'], highlighted: true },
      { name: 'Venture Plan', price: '$1,200', period: '/mo', description: 'Aggressive growth for competitive markets.', features: ['Everything in Scaling', 'Technical SEO audits', 'Competitor analysis', 'Unlimited keyword tracking'] }
    ]
  },
  {
    id: 'smm',
    label: 'Social Media Marketing',
    heading: 'Social Media Marketing Packages',
    subheading: 'Grow your following and turn engagement into revenue across every platform.',
    tiers: [
      { name: 'Basic Package', price: '$350', period: '/mo', description: 'Get consistent, on-brand posting started.', features: ['2 platforms', '12 posts / month', 'Monthly performance report', 'Community replies'] },
      { name: 'Growth Package', price: '$700', period: '/mo', description: 'Build momentum with paid + organic.', features: ['3 platforms', '20 posts / month', 'Ad campaign management', 'Content calendar'], highlighted: true },
      { name: 'Pro Package', price: '$1,100', period: '/mo', description: 'Full-funnel social strategy.', features: ['4 platforms', 'Daily posting', 'Influencer outreach', 'Advanced analytics'] },
      { name: 'Platinum Business', price: '$1,500', period: '/mo', description: 'Enterprise-grade social presence.', features: ['5+ platforms', 'Dedicated social manager', 'Custom creative production', 'Weekly strategy calls'] }
    ]
  }
];

// ---------------------------------------------------------------------------
// Technologies & platforms
// ---------------------------------------------------------------------------
export const platforms: string[] = [
  'React', 'Node.js', 'Next.js', 'WordPress', 'Shopify', 'WooCommerce',
  'Flutter', 'AWS', 'Google Cloud', 'Google Ads', 'Meta Ads', 'Supabase'
];