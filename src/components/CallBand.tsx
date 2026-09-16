import React from 'react';
import { Phone } from 'lucide-react';

// Sticky "Ready? Click to call" band pinned to the bottom of every public page.
// The whole bar slides in from the left, then stays put and blinks smoothly
// (see .call-band-slide in index.css). The label stays centred; hovering pauses
// the blink so the bar is easy to click.
const CallBand: React.FC = () => {
  return (
    <a
      href="tel:+19342035115"
      aria-label="Ready? Click to call +1 (934) 203-5115"
      className="call-band call-band-slide fixed inset-x-0 bottom-0 z-40 flex h-12 md:h-14 items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#f5781e]/90 via-[#f99820]/90 to-[#fcc319]/90 backdrop-blur-sm shadow-[0_-4px_20px_rgba(245,120,30,0.25)] hover:[animation-play-state:paused]"
    >
      <Phone className="w-5 h-5 md:w-6 md:h-6 fill-white" strokeWidth={0} />
      <span className="whitespace-nowrap font-poppins text-base md:text-2xl font-extrabold uppercase tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.25)]">
        Ready? Click to Call
      </span>
    </a>
  );
};

export default CallBand;
