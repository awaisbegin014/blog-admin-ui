import React from 'react';

interface ServiceIllustrationProps {
  title: string;
  isActive?: boolean;
}

export const ServiceCardIllustration: React.FC<ServiceIllustrationProps> = ({ title }) => {
  const t = title.toLowerCase();

  // Vibrant yellow & crisp white on dark card background
  const frameBg = "rgba(12, 12, 14, 0.75)";
  const frameStroke = "#FACC15";
  const headerBg = "rgba(0, 0, 0, 0.9)";
  const cardBg = "rgba(20, 20, 24, 0.85)";

  if (t.includes('web development') || t.includes('website design')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor Screen Frame */}
        <rect x="35" y="16" width="170" height="96" rx="10" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        <rect x="43" y="24" width="154" height="16" rx="4" fill={headerBg} />
        {/* Window controls */}
        <circle cx="53" cy="32" r="3.5" fill="#EAB308" />
        <circle cx="64" cy="32" r="3.5" fill="#FACC15" />
        <circle cx="75" cy="32" r="3.5" fill="#10B981" />
        {/* URL Bar */}
        <rect x="88" y="27" width="98" height="10" rx="3" fill="rgba(255,255,255,0.15)" />

        {/* Browser Content Area */}
        <rect x="43" y="46" width="70" height="58" rx="4" fill={cardBg} stroke="#FACC15" strokeWidth="1.5" />
        {/* Code Lines */}
        <rect x="51" y="55" width="30" height="5" rx="2" fill="#FACC15" />
        <rect x="51" y="65" width="52" height="4" rx="2" fill="#FFFFFF" />
        <rect x="57" y="73" width="40" height="4" rx="2" fill="#FEF08A" />
        <rect x="57" y="81" width="34" height="4" rx="2" fill="#FDE047" />
        <rect x="51" y="89" width="46" height="4" rx="2" fill="#10B981" />

        {/* Right side graphic card inside window */}
        <rect x="120" y="46" width="77" height="34" rx="4" fill="#000000" stroke="rgba(250,204,21,0.3)" strokeWidth="1" />
        <circle cx="138" cy="63" r="10" fill="#FACC15" />
        <rect x="154" y="57" width="35" height="5" rx="2" fill="#FFFFFF" />
        <rect x="154" y="66" width="24" height="4" rx="2" fill="#FEF08A" />
        {/* Mini CTA button */}
        <rect x="120" y="85" width="77" height="19" rx="4" fill="#FACC15" />
        <rect x="138" y="92" width="41" height="5" rx="2.5" fill="#000000" />

        {/* Monitor Stand */}
        <path d="M106 112L102 126H138L134 112H106Z" fill="#71717A" />
        <rect x="90" y="126" width="60" height="6" rx="3" fill="#FACC15" />
      </svg>
    );
  }

  if (t.includes('app development')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background decorative ring */}
        <circle cx="120" cy="70" r="58" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />

        {/* Smartphone Main Frame */}
        <rect x="88" y="14" width="64" height="114" rx="14" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        {/* Notch / Speaker */}
        <rect x="110" y="19" width="20" height="3.5" rx="1.75" fill="#FACC15" />

        {/* App Header */}
        <rect x="94" y="28" width="52" height="14" rx="4" fill="#000000" />
        <circle cx="102" cy="35" r="3" fill="#FACC15" />
        <rect x="110" y="33" width="28" height="4" rx="2" fill="#FFFFFF" />

        {/* App Cards */}
        <rect x="94" y="47" width="52" height="24" rx="4" fill={cardBg} stroke="#FACC15" strokeWidth="1" />
        <circle cx="104" cy="59" r="6" fill="#FACC15" />
        <rect x="115" y="55" width="25" height="4" rx="2" fill="#FFFFFF" />
        <rect x="115" y="62" width="18" height="3" rx="1.5" fill="#FEF08A" />

        <rect x="94" y="75" width="52" height="34" rx="4" fill="#FACC15" />
        <rect x="100" y="82" width="30" height="4" rx="2" fill="#000000" />
        <rect x="100" y="89" width="40" height="3" rx="1.5" fill="#523B06" />
        <rect x="100" y="95" width="20" height="6" rx="3" fill="#000000" />

        {/* Home bar */}
        <rect x="108" y="121" width="24" height="3" rx="1.5" fill="#FACC15" />

        {/* Floating badge left */}
        <g transform="translate(42, 42)">
          <rect width="36" height="36" rx="8" fill="#000000" stroke="#FACC15" strokeWidth="1.5" />
          <path d="M11 25V18L18 11L25 18V25H11Z" fill="#FACC15" />
        </g>
        {/* Floating badge right */}
        <g transform="translate(162, 58)">
          <rect width="36" height="36" rx="8" fill="#FACC15" stroke="#000000" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="7" fill="#000000" />
          <path d="M15 18L17 20L21 16" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  if (t.includes('digital marketing')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background chart frame */}
        <rect x="42" y="22" width="156" height="96" rx="10" fill={frameBg} stroke={frameStroke} strokeWidth="2" />
        {/* Grid lines */}
        <line x1="56" y1="44" x2="184" y2="44" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="56" y1="70" x2="184" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="56" y1="96" x2="184" y2="96" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Bar Chart */}
        <rect x="62" y="74" width="14" height="28" rx="3" fill="#FEF08A" />
        <rect x="84" y="58" width="14" height="44" rx="3" fill="#FDE047" />
        <rect x="106" y="46" width="14" height="56" rx="3" fill="#FACC15" />
        <rect x="128" y="32" width="14" height="70" rx="3" fill="#FFFFFF" />

        {/* Growth Trend Arrow */}
        <path d="M60 84C80 72 105 60 144 32" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
        {/* Megaphone / Rocket */}
        <g transform="translate(152, 28)">
          <path d="M26 12L6 2V22L26 12Z" fill="#FACC15" />
          <path d="M6 7H0V17H6V7Z" fill="#FFFFFF" />
          <circle cx="28" cy="12" r="3" fill="#000000" />
        </g>
      </svg>
    );
  }

  if (t.includes('social media')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Feed Card */}
        <rect x="55" y="16" width="130" height="108" rx="12" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        {/* User Avatar */}
        <circle cx="75" cy="34" r="10" fill="#FACC15" />
        <circle cx="75" cy="31" r="4" fill="#000000" />
        <path d="M68 40C68 37 71 36 75 36C79 36 82 37 82 40" fill="#000000" />
        <rect x="92" y="28" width="48" height="5" rx="2.5" fill="#FFFFFF" />
        <rect x="92" y="36" width="30" height="4" rx="2" fill="#FEF08A" />

        {/* Media Box */}
        <rect x="68" y="48" width="104" height="46" rx="6" fill="#000000" stroke="rgba(250,204,21,0.3)" strokeWidth="1" />
        <circle cx="120" cy="71" r="14" fill="#FACC15" />
        <path d="M116 64L127 71L116 78V64Z" fill="#000000" />

        {/* Action icons */}
        <g transform="translate(68, 101)">
          <path d="M5 2C3 0 0 1 0 4C0 7 5 10 5 10C5 10 10 7 10 4C10 1 7 0 5 2Z" fill="#FACC15" />
          <rect x="20" y="1" width="10" height="7" rx="2" fill="#FFFFFF" />
          <circle cx="40" cy="4" r="2.5" fill="#FDE047" />
          <circle cx="48" cy="1" r="2" fill="#FDE047" />
          <circle cx="48" cy="7" r="2" fill="#FDE047" />
        </g>
      </svg>
    );
  }

  if (t.includes('search engine') || t.includes('seo')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Search Engine Interface */}
        <rect x="36" y="20" width="168" height="100" rx="12" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        {/* Search Bar */}
        <rect x="48" y="32" width="144" height="20" rx="10" fill={headerBg} stroke="#FACC15" strokeWidth="1" />
        <rect x="60" y="39" width="60" height="6" rx="3" fill="#000000" />

        {/* Search Results list */}
        <rect x="48" y="60" width="80" height="6" rx="3" fill="#FFFFFF" />
        <rect x="48" y="70" width="120" height="4" rx="2" fill="#FEF08A" />

        <rect x="48" y="82" width="65" height="6" rx="3" fill="#FACC15" />
        <rect x="48" y="92" width="100" height="4" rx="2" fill="#FEF08A" />

        {/* Big Magnifying Glass */}
        <g transform="translate(130, 48)">
          <circle cx="32" cy="32" r="24" fill={cardBg} stroke="#FACC15" strokeWidth="4" />
          <path d="M22 34L29 41L42 25" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="49" y="47" width="10" height="26" rx="4" transform="rotate(-45 49 47)" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  if (t.includes('automation')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circuit nodes */}
        <circle cx="60" cy="40" r="16" fill="#000000" stroke="#FACC15" strokeWidth="2" />
        <path d="M54 40H66M60 34V46" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />

        <circle cx="180" cy="40" r="16" fill="#FACC15" stroke="#000000" strokeWidth="2" />
        <circle cx="180" cy="40" r="6" fill="#000000" />

        <circle cx="120" cy="115" r="14" fill="#FFFFFF" />
        <path d="M116 115L119 118L125 112" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Connecting circuit lines */}
        <path d="M74 46L102 66" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="3 3" />
        <path d="M166 46L138 66" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="3 3" />
        <line x1="120" y1="90" x2="120" y2="101" stroke="#FACC15" strokeWidth="2.5" />

        {/* Central Automation Gear */}
        <g transform="translate(96, 48)">
          <rect width="48" height="48" rx="12" fill={cardBg} stroke="#FACC15" strokeWidth="3" />
          <circle cx="24" cy="24" r="13" fill="#FACC15" />
          <path d="M22 17L27 24H21L26 31" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  if (t.includes('chat bot') || t.includes('voice')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chat Bot Head */}
        <rect x="75" y="32" width="90" height="74" rx="20" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        {/* Bot Antenna */}
        <line x1="120" y1="18" x2="120" y2="32" stroke="#FACC15" strokeWidth="3" />
        <circle cx="120" cy="16" r="5" fill="#FACC15" />

        {/* Eyes */}
        <circle cx="98" cy="62" r="9" fill="#FFFFFF" />
        <circle cx="142" cy="62" r="9" fill="#FFFFFF" />
        <circle cx="100" cy="60" r="3.5" fill="#FACC15" />
        <circle cx="144" cy="60" r="3.5" fill="#FACC15" />

        {/* Smiling mouth */}
        <path d="M104 84C112 90 128 90 136 84" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />

        {/* Floating Speech Bubbles */}
        <g transform="translate(32, 28)">
          <rect width="44" height="26" rx="8" fill="#000000" stroke="#FACC15" strokeWidth="1" />
          <rect x="8" y="8" width="28" height="3" rx="1.5" fill="#FFFFFF" />
          <rect x="8" y="14" width="18" height="3" rx="1.5" fill="#FACC15" />
          <path d="M36 26L40 32V26H36Z" fill="#000000" />
        </g>

        <g transform="translate(164, 44)">
          <rect width="44" height="26" rx="8" fill="#FACC15" />
          <rect x="8" y="8" width="28" height="3" rx="1.5" fill="#000000" />
          <rect x="8" y="14" width="20" height="3" rx="1.5" fill="#523B06" />
          <path d="M8 26L4 32V26H8Z" fill="#FACC15" />
        </g>
      </svg>
    );
  }

  if (t.includes('customer support')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Support Agent Avatar */}
        <circle cx="120" cy="60" r="28" fill="#000000" stroke="#FACC15" strokeWidth="2.5" />
        <circle cx="120" cy="58" r="18" fill="#FEF08A" />
        <circle cx="114" cy="56" r="2" fill="#000000" />
        <circle cx="126" cy="56" r="2" fill="#000000" />
        <path d="M116 64C118 67 122 67 124 64" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

        {/* Headset */}
        <path d="M96 58C96 44 107 33 120 33C133 33 144 44 144 58" stroke="#FACC15" strokeWidth="3" fill="none" />
        <rect x="92" y="52" width="7" height="14" rx="3" fill="#FACC15" />
        <rect x="141" y="52" width="7" height="14" rx="3" fill="#FACC15" />
        <path d="M144 62C144 72 136 74 126 74" stroke="#FACC15" strokeWidth="2.5" fill="none" />
        <circle cx="125" cy="74" r="3" fill="#FACC15" />

        {/* Shoulders */}
        <path d="M88 116C88 98 102 92 120 92C138 92 152 98 152 116" fill="#FACC15" />

        {/* 24/7 Badge */}
        <g transform="translate(42, 40)">
          <rect width="44" height="24" rx="12" fill="#FACC15" />
          <text x="10" y="16" fill="#000000" fontSize="10" fontWeight="bold" fontFamily="sans-serif">24/7</text>
        </g>

        {/* 5-star badge */}
        <g transform="translate(156, 40)">
          <rect width="46" height="24" rx="12" fill="#000000" stroke="#FACC15" strokeWidth="1" />
          <text x="8" y="16" fill="#FACC15" fontSize="10" fontWeight="bold" fontFamily="sans-serif">★★★★★</text>
        </g>
      </svg>
    );
  }

  if (t.includes('point of sale') || t.includes('pos')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* POS Terminal */}
        <rect x="65" y="24" width="110" height="92" rx="10" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        {/* Terminal Screen */}
        <rect x="75" y="34" width="90" height="46" rx="6" fill="#000000" />
        <rect x="85" y="44" width="50" height="6" rx="3" fill="#FACC15" />
        <rect x="85" y="55" width="70" height="4" rx="2" fill="#FEF08A" />
        <circle cx="152" cy="47" r="5" fill="#FACC15" />

        {/* Keypad */}
        <g transform="translate(75, 88)">
          <rect x="0" y="0" width="18" height="6" rx="2" fill="#FACC15" />
          <rect x="24" y="0" width="18" height="6" rx="2" fill="#FACC15" />
          <rect x="48" y="0" width="18" height="6" rx="2" fill="#FACC15" />
          <rect x="72" y="0" width="18" height="6" rx="2" fill="#10B981" />
          <rect x="0" y="10" width="18" height="6" rx="2" fill="#FFFFFF" />
          <rect x="24" y="10" width="18" height="6" rx="2" fill="#FFFFFF" />
          <rect x="48" y="10" width="18" height="6" rx="2" fill="#FFFFFF" />
          <rect x="72" y="10" width="18" height="6" rx="2" fill="#FACC15" />
        </g>

        {/* Credit Card inserting */}
        <g transform="translate(150, 16)">
          <rect width="50" height="32" rx="4" fill="#FACC15" stroke="#FFFFFF" strokeWidth="1.5" transform="rotate(-15)" />
          <rect x="4" y="8" width="10" height="8" rx="2" fill="#000000" transform="rotate(-15)" />
        </g>
      </svg>
    );
  }

  if (t.includes('crm') || t.includes('relationship')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central CRM Node */}
        <circle cx="120" cy="70" r="28" fill="#000000" stroke="#FACC15" strokeWidth="3" />
        <path d="M112 68L118 74L128 64" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="120" cy="70" r="20" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Outer Connected User Nodes */}
        <g transform="translate(48, 32)">
          <circle cx="14" cy="14" r="14" fill="#FACC15" />
          <circle cx="14" cy="11" r="5" fill="#000000" />
          <path d="M7 21C7 18 10 17 14 17C18 17 21 18 21 21" fill="#000000" />
        </g>
        <line x1="72" y1="46" x2="98" y2="58" stroke="#FACC15" strokeWidth="2" strokeDasharray="2 2" />

        <g transform="translate(164, 32)">
          <circle cx="14" cy="14" r="14" fill="#FFFFFF" />
          <circle cx="14" cy="11" r="5" fill="#000000" />
          <path d="M7 21C7 18 10 17 14 17C18 17 21 18 21 21" fill="#000000" />
        </g>
        <line x1="168" y1="46" x2="142" y2="58" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" />

        <g transform="translate(106, 106)">
          <circle cx="14" cy="14" r="14" fill="#FACC15" />
          <circle cx="14" cy="11" r="5" fill="#000000" />
          <path d="M7 21C7 18 10 17 14 17C18 17 21 18 21 21" fill="#000000" />
        </g>
        <line x1="120" y1="98" x2="120" y2="106" stroke="#FACC15" strokeWidth="2" />
      </svg>
    );
  }

  if (t.includes('generative ai')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glowing Neural Brain */}
        <circle cx="120" cy="70" r="42" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
        <circle cx="120" cy="70" r="32" fill="#000000" />

        {/* Neural nodes */}
        <circle cx="110" cy="58" r="4" fill="#FACC15" />
        <circle cx="130" cy="58" r="4" fill="#FEF08A" />
        <circle cx="120" cy="72" r="5" fill="#FFFFFF" />
        <circle cx="108" cy="84" r="4" fill="#10B981" />
        <circle cx="132" cy="84" r="4" fill="#FACC15" />

        <line x1="110" y1="58" x2="120" y2="72" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="130" y1="58" x2="120" y2="72" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="108" y1="84" x2="120" y2="72" stroke="#FACC15" strokeWidth="1.5" />
        <line x1="132" y1="84" x2="120" y2="72" stroke="#FACC15" strokeWidth="1.5" />

        {/* Sparkles */}
        <g transform="translate(54, 38)">
          <path d="M12 0L14 8L22 10L14 12L12 20L10 12L2 10L10 8L12 0Z" fill="#FACC15" />
        </g>
        <g transform="translate(172, 42)">
          <path d="M10 0L12 6L18 8L12 10L10 16L8 10L2 8L8 6L10 0Z" fill="#FFFFFF" />
        </g>
        <g transform="translate(162, 88)">
          <path d="M8 0L9 5L14 6L9 7L8 12L7 7L2 6L7 5L8 0Z" fill="#FEF08A" />
        </g>
      </svg>
    );
  }

  if (t.includes('ui') || t.includes('experience') || t.includes('interface')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1 */}
        <rect x="52" y="44" width="112" height="74" rx="10" fill="rgba(255,255,255,0.08)" stroke="#FACC15" strokeWidth="1.5" />
        {/* Layer 2 */}
        <rect x="68" y="24" width="118" height="78" rx="10" fill={cardBg} stroke="#FACC15" strokeWidth="2.5" />

        {/* Canvas elements */}
        <circle cx="92" cy="46" r="12" fill="#000000" />
        <rect x="114" y="38" width="56" height="6" rx="3" fill="#FACC15" />
        <rect x="114" y="48" width="40" height="4" rx="2" fill="#FEF08A" />

        <rect x="80" y="68" width="42" height="20" rx="4" fill="#FACC15" />
        <rect x="128" y="68" width="42" height="20" rx="4" fill="#FFFFFF" />

        {/* Pen Tool */}
        <g transform="translate(156, 70)">
          <path d="M0 0L16 6L10 10L6 16L0 0Z" fill="#FACC15" stroke="#000000" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  if (t.includes('saas') || t.includes('software')) {
    return (
      <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cloud Base */}
        <path d="M70 94C60 94 52 86 52 76C52 67 58 60 67 58C70 42 84 30 101 30C116 30 128 39 133 52C137 50 141 49 146 49C158 49 168 59 168 71C174 72 178 78 178 84C178 92 172 98 164 98H70V94Z" fill="rgba(0,0,0,0.6)" stroke="#FACC15" strokeWidth="2" />

        {/* Modular software cubes floating */}
        <g transform="translate(86, 42)">
          <rect width="28" height="28" rx="6" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M7 14H21M14 7V21" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(124, 48)">
          <rect width="28" height="28" rx="6" fill="#FACC15" stroke="#000000" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="5" fill="#000000" />
        </g>

        <g transform="translate(104, 78)">
          <rect width="32" height="24" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
          <path d="M10 12L13 15L22 9" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  // Default / Data Analytics
  return (
    <svg className="w-full h-36 mx-auto select-none" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="20" width="152" height="98" rx="12" fill={frameBg} stroke={frameStroke} strokeWidth="2.5" />
      {/* Analytics Donut Chart */}
      <circle cx="86" cy="68" r="24" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
      <circle cx="86" cy="68" r="24" stroke="#FACC15" strokeWidth="8" strokeDasharray="100 150" />
      <circle cx="86" cy="68" r="24" stroke="#FFFFFF" strokeWidth="8" strokeDasharray="40 150" strokeDashoffset="-100" />

      {/* Analytics Trend Bars */}
      <rect x="126" y="78" width="12" height="26" rx="3" fill="#FEF08A" />
      <rect x="144" y="62" width="12" height="42" rx="3" fill="#FACC15" />
      <rect x="162" y="44" width="12" height="60" rx="3" fill="#FFFFFF" />
      {/* Upward Indicator */}
      <path d="M130 50L148 42L168 32" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};

export default ServiceCardIllustration;
