import React from 'react';

/**
 * "OUR PACKAGES" folded-ribbon graphic for the pricing intro. Two tilted
 * pills (orange→yellow over black) with small fold wedges tucked between
 * them, a cast shadow, and a soft floor shadow. The dark ribbon lightens in
 * dark mode so it stays visible on the black page background.
 */
const PackagesRibbon: React.FC = () => (
  <div className="relative w-full select-none">
    <style>{`
      @keyframes spaceFloatRibbon {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-26px) rotate(1.2deg);
        }
      }

      @keyframes spaceFloatShadow {
        0%, 100% {
          transform: scale(1);
          opacity: 0.85;
        }
        50% {
          transform: scale(0.76);
          opacity: 0.35;
        }
      }

      .animate-packages-ribbon {
        animation: spaceFloatRibbon 3.6s ease-in-out infinite;
        transform-origin: 280px 240px;
        will-change: transform;
      }

      .animate-packages-shadow {
        animation: spaceFloatShadow 3.6s ease-in-out infinite;
        transform-origin: 280px 448px;
        will-change: transform, opacity;
      }
    `}</style>

    <svg viewBox="0 0 560 480" className="w-full h-auto overflow-visible" role="img" aria-label="Our packages">
      <defs>
        <linearGradient id="packages-ribbon-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F9B918" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <radialGradient id="packages-ribbon-floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Floor shadow that reacts to the floating height */}
      <ellipse
        cx="280"
        cy="448"
        rx="240"
        ry="16"
        fill="url(#packages-ribbon-floor)"
        className="animate-packages-shadow"
      />

      {/* Zero-G Floating Ribbon Graphic */}
      <g className="animate-packages-ribbon">
        <g transform="rotate(-22 280 240)">
          {/* Fold wedges — drawn first so the ribbons cover all but the fold */}
          <polygon points="110,232 125,168 190,232" className="fill-black dark:fill-zinc-900" />
          <polygon points="430,230 495,210 450,305" fill="#92650A" />

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
      </g>
    </svg>
  </div>
);

export default PackagesRibbon;
