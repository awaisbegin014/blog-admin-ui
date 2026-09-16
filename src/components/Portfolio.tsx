import React, { useState } from 'react';
import {
  Monitor,
  Sparkles,
  Smartphone,
  BookOpen,
  Layers,
  Film
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem, CountUp } from './ui/Motion';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  isLogo?: boolean;
}

export interface PortfolioCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: PortfolioItem[];
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'Website',
    label: 'Website',
    icon: Monitor,
    items: [
      { id: 'web-1', title: 'Comunidade do Edu - Digital Education', category: 'Website', image: '/images/portfolio/Website/1.webp' },
      { id: 'web-2', title: 'FinTech Banking & Payments', category: 'Website', image: '/images/portfolio/Website/2.webp' },
      { id: 'web-3', title: 'Luxury Real Estate Showcase', category: 'Website', image: '/images/portfolio/Website/3.webp' },
      { id: 'web-4', title: 'SaaS Analytics & Cloud Dashboard', category: 'Website', image: '/images/portfolio/Website/4.webp' },
      { id: 'web-5', title: 'E-Commerce Fashion Marketplace', category: 'Website', image: '/images/portfolio/Website/5.webp' },
      { id: 'web-6', title: 'Healthcare Telemedicine Portal', category: 'Website', image: '/images/portfolio/Website/6.webp' },
      { id: 'web-7', title: 'Creative Agency Portfolio Hub', category: 'Website', image: '/images/portfolio/Website/7.webp' },
      { id: 'web-8', title: 'Enterprise Cloud Management', category: 'Website', image: '/images/portfolio/Website/8.webp' },
      { id: 'web-9', title: 'Modern Media & Publishing Platform', category: 'Website', image: '/images/portfolio/Website/9.webp' },
    ],
  },
  {
    id: 'Logo',
    label: 'Logo',
    icon: Sparkles,
    items: [
      { id: 'logo-1', title: 'Designer Hub Brand Mark', category: 'Logo', image: '/images/portfolio/Logos/1.webp', isLogo: true },
      { id: 'logo-2', title: 'Apex Studio Identity', category: 'Logo', image: '/images/portfolio/Logos/2.webp', isLogo: true },
      { id: 'logo-3', title: 'Nexus Flow Emblem', category: 'Logo', image: '/images/portfolio/Logos/3.webp', isLogo: true },
      { id: 'logo-4', title: 'Vanguard Capital Identity', category: 'Logo', image: '/images/portfolio/Logos/4.webp', isLogo: true },
      { id: 'logo-5', title: 'Prism Dynamic Brand', category: 'Logo', image: '/images/portfolio/Logos/5.webp', isLogo: true },
      { id: 'logo-6', title: 'Zenith Technology Monogram', category: 'Logo', image: '/images/portfolio/Logos/6.webp', isLogo: true },
      { id: 'logo-7', title: 'Aurora Creative Studio Icon', category: 'Logo', image: '/images/portfolio/Logos/7.webp', isLogo: true },
      { id: 'logo-8', title: 'Velocity Modern Brand', category: 'Logo', image: '/images/portfolio/Logos/8.webp', isLogo: true },
      { id: 'logo-9', title: 'Horizon Ventures Insignia', category: 'Logo', image: '/images/portfolio/Logos/9.webp', isLogo: true },
    ],
  },
  {
    id: 'Mobile',
    label: 'Mobile App',
    icon: Smartphone,
    items: [
      { id: 'mob-1', title: 'GoFit Workout & Tracker', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/1.webp' },
      { id: 'mob-2', title: 'CryptoPay Mobile Wallet', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/2.webp' },
      { id: 'mob-3', title: 'FoodieDash Fast Delivery', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/3.webp' },
      { id: 'mob-4', title: 'TravelNest Booking Flow', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/4.webp' },
      { id: 'mob-5', title: 'MindPulse Meditation UI', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/5.webp' },
      { id: 'mob-6', title: 'SmartHome IoT Controller', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/6.webp' },
      { id: 'mob-7', title: 'TaskMaster Pro Workflow', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/7.webp' },
      { id: 'mob-8', title: 'MediCare Health Connect', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/8.webp' },
      { id: 'mob-9', title: 'ShopWave Retail Mobile', category: 'Mobile App', image: '/images/portfolio/Mobile-Apps/9.webp' },
    ],
  },
  {
    id: 'Book',
    label: 'Book Cover',
    icon: BookOpen,
    items: [
      { id: 'book-1', title: 'Enemy - Denis Villeneuve', category: 'Book Cover', image: '/images/portfolio/Book-Cover/1.webp' },
      { id: 'book-2', title: 'The Silent Echo', category: 'Book Cover', image: '/images/portfolio/Book-Cover/2.webp' },
      { id: 'book-3', title: 'Chronicles of Tomorrow', category: 'Book Cover', image: '/images/portfolio/Book-Cover/3.webp' },
      { id: 'book-4', title: 'Shadows in the Fog', category: 'Book Cover', image: '/images/portfolio/Book-Cover/4.webp' },
      { id: 'book-5', title: 'Beyond the Event Horizon', category: 'Book Cover', image: '/images/portfolio/Book-Cover/5.webp' },
      { id: 'book-6', title: 'Whispers of the Wild', category: 'Book Cover', image: '/images/portfolio/Book-Cover/6.webp' },
      { id: 'book-7', title: 'The Art of Strategy', category: 'Book Cover', image: '/images/portfolio/Book-Cover/7.webp' },
      { id: 'book-8', title: 'Midnight in Metropolis', category: 'Book Cover', image: '/images/portfolio/Book-Cover/8.webp' },
      { id: 'book-9', title: 'Legacy of the Sun', category: 'Book Cover', image: '/images/portfolio/Book-Cover/9.webp' },
    ],
  },
  {
    id: 'Graphic',
    label: 'Graphic',
    icon: Layers,
    items: [
      { id: 'graph-1', title: 'Modern Vector Artistry', category: 'Graphic', image: '/images/portfolio/Graphic/1.webp' },
      { id: 'graph-2', title: 'Brand Campaign Visuals', category: 'Graphic', image: '/images/portfolio/Graphic/2.webp' },
      { id: 'graph-3', title: 'Digital Advertising Suite', category: 'Graphic', image: '/images/portfolio/Graphic/3.webp' },
      { id: 'graph-4', title: 'Social Media Engagement Pack', category: 'Graphic', image: '/images/portfolio/Graphic/4.webp' },
      { id: 'graph-5', title: 'Creative Infographic Series', category: 'Graphic', image: '/images/portfolio/Graphic/5.webp' },
      { id: 'graph-6', title: 'Visual Merchandising Deck', category: 'Graphic', image: '/images/portfolio/Graphic/6.webp' },
      { id: 'graph-7', title: 'Packaging Design Concepts', category: 'Graphic', image: '/images/portfolio/Graphic/7.webp' },
      { id: 'graph-8', title: 'Editorial Typography & Layout', category: 'Graphic', image: '/images/portfolio/Graphic/8.webp' },
      { id: 'graph-9', title: 'Dynamic Promotional Posters', category: 'Graphic', image: '/images/portfolio/Graphic/9.webp' },
    ],
  },
  {
    id: 'Motion',
    label: 'Motion Graphics',
    icon: Film,
    items: [
      { id: 'motion-1', title: 'Character Animation Storyboard', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/1.webp' },
      { id: 'motion-2', title: 'Product 3D Motion Keyframe', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/2.webp' },
      { id: 'motion-3', title: 'Explainer Video Visuals', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/3.webp' },
      { id: 'motion-4', title: 'Brand Launch Micro-Animation', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/4.webp' },
      { id: 'motion-5', title: 'Dynamic UI Kinetic State', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/5.webp' },
      { id: 'motion-6', title: 'Kinetic Typography Scene', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/6.webp' },
      { id: 'motion-7', title: 'Broadcast Title Sequence', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/7.webp' },
      { id: 'motion-8', title: 'Logo Reveal & Visual Stinger', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/8.webp' },
      { id: 'motion-9', title: 'Social Motion Highlight Reel', category: 'Motion Graphics', image: '/images/portfolio/Motion-Graphic/9.webp' },
    ],
  },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Website');

  const currentCategory =
    portfolioCategories.find((c) => c.id === activeTab) || portfolioCategories[0];
  const items = currentCategory.items;

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <Reveal className="max-w-4xl mb-12 md:mb-16 text-left">
          {/* Top Decorative Accent Line (Modeled on reference site) */}
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#f9b918] via-[#fbc02d] to-[#fcc319] rounded-full mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.15]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9b918] via-[#fbc02d] to-[#fcc319]">
              Web Design
            </span>{' '}
            Solutions
            <br className="hidden sm:inline" /> With A History of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9b918] via-[#fbc02d] to-[#fcc319]">
              <CountUp to={1000} suffix="+" />
            </span>{' '}
            Satisfied Clients
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            We work having your goals in mind, and hence, never leave you disappointed. Proud that we have a demonstrated history of satisfied clients.
          </p>
        </Reveal>

        {/* ─── Two-Column Layout: Sidebar Tabs + Grid Gallery ─── */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Category Tabs */}
          <Reveal direction="right" className="w-full md:w-60 lg:w-64 flex-shrink-0 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-3 md:pb-0 scrollbar-none">
            {portfolioCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`group w-full text-left px-5 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-between whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f9b918] via-[#fbc02d] to-[#fcc319] text-gray-950 shadow-lg shadow-[#f9b918]/30 font-bold scale-[1.02]'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'
                      }`}
                    />
                    <span>{cat.label}</span>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-gray-200/80 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </Reveal>

          {/* Right Gallery Windows Grid — re-keyed per tab so the cards stagger in again on switch */}
          <div className="flex-1 w-full">
            <Stagger key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" stagger={0.06}>
              {items.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="portfolio-window group relative rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-[#f9b918] bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl hover:shadow-[#f9b918]/20 transition-[border-color,box-shadow] duration-300"
                >
                  {/* Window Image Viewport with Hover Scroll Effect */}
                  <div className="h-[270px] w-full overflow-hidden relative bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full ${
                        item.isLogo ? 'portfolio-logo-img' : 'portfolio-window-img'
                      }`}
                      loading="lazy"
                    />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

