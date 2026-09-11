import React from 'react';

/**
 * "OUR PACKAGES" folded-ribbon graphic for the pricing intro. Two tilted
 * pills (orange→yellow over black) with small fold wedges tucked between
 * them, a cast shadow, and a soft floor shadow. The dark ribbon lightens in
 * dark mode so it stays visible on the black page background.
 */
const PackagesRibbon: React.FC = () => (
  <svg viewBox="0 0 560 480" className="w-full h-auto" role="img" aria-label="Our packages">
    <defs>
      <linearGradient id="packages-ribbon-top" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#F79031" />
        <stop offset="1" stopColor="#FBBF24" />
      </linearGradient>
      <radialGradient id="packages-ribbon-floor" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#000" stopOpacity="0.22" />
        <stop offset="1" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>

    <ellipse cx="280" cy="448" rx="240" ry="16" fill="url(#packages-ribbon-floor)" />

    <g transform="rotate(-22 280 240)">
      {/* Fold wedges — drawn first so the ribbons cover all but the fold */}
      <polygon points="110,232 125,168 190,232" className="fill-black dark:fill-zinc-900" />
      <polygon points="430,230 495,210 450,305" fill="#B34E09" />

      {/* Bottom ribbon */}
      <rect x="20" y="222" width="440" height="120" rx="60" className="fill-gray-900 dark:fill-zinc-700" />
      {/* Shadow cast by the top ribbon */}
      <rect x="110" y="230" width="290" height="18" fill="#000" opacity="0.3" />

      {/* Top ribbon */}
      <rect x="110" y="110" width="400" height="120" rx="60" fill="url(#packages-ribbon-top)" />

      <text
        x="310"
        y="198"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="84"
        letterSpacing="2"
        fill="#fff"
      >
        OUR
      </text>
      <text
        x="240"
        y="306"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="64"
        letterSpacing="1"
        fill="#fff"
      >
        PACKAGES
      </text>
    </g>
  </svg>
);

export default PackagesRibbon;
