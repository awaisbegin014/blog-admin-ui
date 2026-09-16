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
      className="call-band call-band-slide fixed inset-x-0 bottom-0 z-40 flex h-12 md:h-14 items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-primary/90 via-amber-400/90 to-yellow-400/90 backdrop-blur-sm shadow-[0_-4px_20px_rgba(249,185,24,0.25)] hover:[animation-play-state:paused]"
    >
      <Phone className="w-5 h-5 md:w-6 md:h-6 fill-gray-950" strokeWidth={0} />
      <span className="whitespace-nowrap font-poppins text-base md:text-2xl font-extrabold uppercase tracking-wide text-gray-950">
        Ready? Click to Call
      </span>
    </a>
  );
};

export default CallBand;
