import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';

// Shared scroll animations. Timing lives here so the whole site moves the same
// calm, noticeable way. Every effect plays once, uses only
// opacity/transform, and is skipped for visitors who prefer reduced motion.

// Ease-out cubic: an even, gentle glide that stays visible for the whole duration
const EASE = [0.33, 1, 0.68, 1] as const;
const DURATION = 1.2;      // seconds for a reveal
const ITEM_DURATION = 1;   // seconds for each staggered item
const STAGGER = 0.18;      // seconds between staggered items
const DISTANCE = 48;       // px travelled while fading in
// Start once the element is well inside the viewport so the motion is seen
const VIEWPORT = { once: true, margin: '0px 0px -120px 0px' } as const;

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: distance };
    case 'right': return { x: -distance };
    default: return {};
  }
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: 'div' | 'section' | 'li' | 'span';
}

/** Fades and slides its children in when they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = DISTANCE,
  duration = DURATION,
  as = 'div',
}) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child */
  stagger?: number;
  delay?: number;
  style?: React.CSSProperties;
}

/** Container whose <StaggerItem> children animate in one after another. */
export const Stagger: React.FC<StaggerProps> = ({ children, className, stagger = STAGGER, delay = 0, style }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string; distance?: number }> = ({
  children,
  className,
  distance = DISTANCE,
}) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0, transition: { duration: ITEM_DURATION, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
};

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 * The final value is rendered invisibly to reserve its width, and the counting
 * number is overlaid on top, so surrounding text never reflows or flickers.
 */
export const CountUp: React.FC<CountUpProps> = ({ to, suffix = '', prefix = '', duration = 3, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    // Larger totals count in steps of 10 so the digits don't churn every frame
    const step = to >= 500 ? 10 : 1;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // fast start, long gentle settle
      onUpdate: (v) => setValue(Math.min(to, Math.round(v / step) * step)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  const format = (n: number) => `${prefix}${n.toLocaleString()}${suffix}`;

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className={`invisible ${className ?? ''}`} aria-hidden="true">{format(to)}</span>
      <span className={`absolute inset-0 text-right ${className ?? ''}`}>{format(value)}</span>
    </span>
  );
};
