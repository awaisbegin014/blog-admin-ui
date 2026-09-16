import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

// Thin brand-yellow bar pinned to the top of the viewport that fills as the page scrolls.
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-amber-400 to-yellow-400 pointer-events-none"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  );
};

export default ScrollProgress;
