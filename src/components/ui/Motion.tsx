import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';

// Shared, subtle scroll animations. Every effect plays once, uses only
// opacity/transform, and is skipped for visitors who prefer reduced motion.

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' } as const;

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
  distance = 24,
  duration = 0.6,
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
export const Stagger: React.FC<StaggerProps> = ({ children, className, stagger = 0.08, delay = 0, style }) => {
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
  distance = 24,
}) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
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

/** Counts from 0 to `to` the first time it scrolls into view. */
export const CountUp: React.FC<CountUpProps> = ({ to, suffix = '', prefix = '', duration = 1.6, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};
