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