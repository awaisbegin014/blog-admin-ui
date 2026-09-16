import React from 'react';

interface PlatformItem {
  name: string;
  logo: string;
}

const platforms: PlatformItem[] = [
  {
    name: 'Shopify',
    logo: '/images/ecommerce/shopify.svg',
  },
  {
    name: 'WooCommerce',
    logo: '/images/ecommerce/woocommerce.svg',
  },
  {
    name: 'OpenCart',
    logo: '/images/ecommerce/opencart.svg',
  },
  {
    name: 'Magento',
    logo: '/images/ecommerce/magento.svg',
  },
];

const EcommercePlatforms: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Accent Pill */}
        <div className="flex justify-center mb-5">
          <div className="w-28 sm:w-32 h-1.5 flex rounded-full overflow-hidden shadow-sm">
            <span className="w-1/4 bg-gray-950 dark:bg-white" />
            <span className="w-3/4 bg-gradient-to-r from-primary via-amber-400 to-yellow-400" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-center tracking-tight leading-[1.18] mb-4 text-gray-900 dark:text-white">
          <span>Web Design</span>{' '}
          <span>&amp;</span>{' '}
          <span className="text-primary">Development</span>{' '}
          <span>for Top</span>{' '}
          <span>E-Commerce</span>
          <br className="hidden sm:inline" />{' '}
          <span>Platforms</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          We build powerful, customized online stores on the world’s leading platforms.
          Whether you are starting small or scaling big, we choose the right tools to match
          your goals. What we provide: Seamless design, smooth checkout, and sales-ready from day one.
        </p>

        {/* 4 Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group bg-white rounded-3xl p-8 sm:p-10 border border-gray-100/90 hover:border-primary/40 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(249,185,24,0.14)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center aspect-square min-h-[220px]"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                loading="lazy"
                className="w-full h-full max-h-36 sm:max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommercePlatforms;
