import React from 'react';

/* ─── 1. Rosette Badge with Stars (100% Customer Satisfaction) ─── */
const SatisfactionBadge: React.FC = () => (
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#0f2444] dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
    viewBox="0 0 64 64"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ribbon tails at bottom */}
    <path d="M22 42L16 59L26 52.5L32 59L29 44" opacity="0.9" />
    <path d="M42 42L48 59L38 52.5L32 59L35 44" opacity="0.9" />
    {/* Scalloped badge outer ring */}
    <path d="M32 6L35.5 10.5L41 9L43 14.5L48.5 15.5L48.5 21L53.5 24L51.5 29.5L55 34L51.5 38.5L53.5 44L48.5 47L48.5 52.5L43 53.5L41 59L35.5 57.5L32 62L28.5 57.5L23 59L21 53.5L15.5 52.5L15.5 47L10.5 44L12.5 38.5L9 34L12.5 29.5L10.5 24L15.5 21L15.5 15.5L21 14.5L23 9L28.5 10.5L32 6Z" />
    {/* Inner ring banner */}
    <rect x="13" y="27" width="38" height="14" rx="2" className="fill-current" />
    {/* 3 Stars — contrast against the badge, which flips navy→white in dark mode */}
    <path d="M23 31L24.2 33.6L27 34L25 36L25.5 38.7L23 37.4L20.5 38.7L21 36L19 34L21.8 33.6L23 31Z" className="fill-white dark:fill-gray-950" />
    <path d="M32 30L33.3 32.8L36.3 33.2L34.1 35.3L34.7 38.3L32 36.9L29.3 38.3L29.9 35.3L27.7 33.2L30.7 32.8L32 30Z" className="fill-white dark:fill-gray-950" />
    <path d="M41 31L42.2 33.6L45 34L43 36L43.5 38.7L41 37.4L38.5 38.7L39 36L37 34L39.8 33.6L41 31Z" className="fill-white dark:fill-gray-950" />
  </svg>
);

/* ─── 2. Laptop with Gears and Wrench (Customized Design) ─── */
const CustomizedDesignIcon: React.FC = () => (
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#0f2444] dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Laptop base */}
    <rect x="8" y="47" width="48" height="4" rx="2" fill="currentColor" />
    <path d="M24 51H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Laptop Screen Frame */}
    <rect x="13" y="16" width="38" height="28" rx="2" stroke="currentColor" strokeWidth="3.5" fill="none" />
    {/* Gear in the center of the screen */}
    <circle cx="32" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 21V23M32 37V39M23 30H25M39 30H41M25.6 23.6L27 25M37 35L38.4 36.4M25.6 36.4L27 35M37 25L38.4 23.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Wrench at right corner */}
    <path d="M44 38L49 43C50.5 44.5 50.5 47 49 48.5C47.5 50 45 50 43.5 48.5L39 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 36C44 34 44 31 46 29C47.5 27.5 49.5 27 51 28L48.5 30.5L50.5 32.5L53 30C54 31.5 53.5 33.5 52 35C50 37 47 37 46 36Z" fill="currentColor" />
  </svg>
);

/* ─── 3. Document with Pencil and Circular Arrows (Unlimited Free Revisions) ─── */
const RevisionsIcon: React.FC = () => (
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#0f2444] dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circular arrows */}
    <path d="M32 10C42 10 50 17 52 26M54 20V27H47" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 54C22 54 14 47 12 38M10 44V37H17" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Document in middle */}
    <rect x="22" y="19" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M26 26H34M26 31H32M26 36H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Pencil writing */}
    <path d="M34 38L42 28L45 31L37 41L33 42L34 38Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/* ─── 4. Team with Curved Arrow (Personalized Support) ─── */
const PersonalizedSupportIcon: React.FC = () => (
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#0f2444] dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Curved arrow around team */}
    <path d="M12 36C12 24 21 14 32 14C43 14 52 24 52 36L48 33M52 36L56 33" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Center person */}
    <circle cx="32" cy="27" r="4.5" fill="currentColor" />
    <path d="M25 43C25 38 28 35 32 35C36 35 39 38 39 43H25Z" fill="currentColor" />
    {/* Left person */}
    <circle cx="21" cy="31" r="3.5" fill="currentColor" />
    <path d="M15 45C15 41 17.5 38.5 21 38.5C22.5 38.5 24 39.5 25 41L23 45H15Z" fill="currentColor" />
    {/* Right person */}
    <circle cx="43" cy="31" r="3.5" fill="currentColor" />
    <path d="M49 45C49 41 46.5 38.5 43 38.5C41.5 38.5 40 39.5 39 41L41 45H49Z" fill="currentColor" />
    {/* Lightbulb in top center */}
    <path d="M32 17C29.5 17 28 18.5 28 20.5C28 22 29 23 30 24V26H34V24C35 23 36 22 36 20.5C36 18.5 34.5 17 32 17Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="21" r="1.5" fill="currentColor" />
  </svg>
);

/* ─── 5. 24/7 Clock/Headset (Round-the-Clock Availability) ─── */
const RoundTheClockIcon: React.FC = () => (
  <svg
    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-[#0f2444] dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Clock circle with callout/headset contour */}
    <path
      d="M32 10C44.15 10 54 19.85 54 32C54 44.15 44.15 54 32 54C26.5 54 21.5 52 17.5 48.5L10 52L12.5 44.5C10.9 41 10 36.6 10 32C10 19.85 19.85 10 32 10Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ear cup accents */}
    <path d="M9 28C7.5 28 6 29.5 6 31V35C6 36.5 7.5 38 9 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M55 28C56.5 28 58 29.5 58 31V35C58 36.5 56.5 38 55 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    {/* Bold 24/7 text */}
    <text
      x="32"
      y="37.5"
      textAnchor="middle"
      fill="currentColor"
      fontSize="13"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      24/7
    </text>
  </svg>
);

const whyChooseItems = [
  {
    icon: <SatisfactionBadge />,
    title: '100% Customer Satisfaction',
    description: "We don't stop until you're thrilled with the result — your happiness is the real deliverable.",
  },
  {
    icon: <CustomizedDesignIcon />,
    title: 'Customized Design',
    description: 'No templates. Every design is built from scratch around your brand and your goals.',
  },
  {
    icon: <RevisionsIcon />,
    title: 'Unlimited Free Revisions',
    description: "Keep refining until it's exactly right — extra rounds are always on us, no fine print.",
  },
  {
    icon: <PersonalizedSupportIcon />,
    title: 'Personalized Support',
    description: 'A dedicated point of contact who actually knows your project, not a random ticket queue.',
  },
  {
    icon: <RoundTheClockIcon />,
    title: 'Round-the-Clock Availability',
    description: "Support across time zones for our US, German and global clients, so you're never left waiting.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">
            <span className="heading">Why We're the</span> <span className="gradient-text">Best Choice</span>
          </h2>
          <p className="section-subtitle">
            Five reasons businesses across the US, Germany and beyond trust Yellow Solutions with their growth
          </p>
        </div>

        {/* ─── 5 Items in One Line on Desktop, responsive wrap when shrunk ─── */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center -mx-2 sm:-mx-3 lg:-mx-2 xl:-mx-3">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 sm:px-3 lg:px-2 xl:px-3 py-6 group flex flex-col items-center justify-start text-center"
              >
                <div className="mb-4 sm:mb-5 flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
