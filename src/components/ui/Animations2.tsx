'use client'

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type AnimationType = 
  | 'fade' 
  | 'slide' 
  | 'spin' 
  | 'bounce' 
  | 'scale' 
  | 'flip' 
  | 'rotate' 
  | 'custom';

type Direction = 'left' | 'right' | 'top' | 'bottom' | 'none';

interface AdvancedAnimatorProps {
  children: ReactNode;
  type?: AnimationType;
  direction?: Direction;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  loop?: boolean | number;
  bounceDamping?: number;
  bounceStiffness?: number;
  spinTimes?: number;
  scaleAmount?: number;
  rotateAmount?: number;
  customAnimation?: Variants;
  startFrom?: number;
  staggerChildren?: number;
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

const AdvancedAnimator = ({
  children,
  type = 'fade',
  direction = 'none',
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  loop = false,
  bounceDamping = 10,
  bounceStiffness = 100,
  spinTimes = 1,
  scaleAmount = 1.2,
  rotateAmount = 20,
  customAnimation = {},
  startFrom = 0.2,
  staggerChildren = 0,
  interval = 0,
  className = '',
  style = {},
  onAnimationStart,
  onAnimationComplete,
}: AdvancedAnimatorProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    margin: `${startFrom === 0 ? 0 : startFrom === 1 ? 100 : startFrom * 100}% 0px`,
    once: triggerOnce,
  });

  const getBaseAnimation = (): Variants => {
    const base = {
      opacity: type === 'fade' || type === 'slide' || type === 'flip' ? 0 : undefined,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : undefined,
      y: direction === 'top' ? 100 : direction === 'bottom' ? -100 : undefined,
      rotate: type === 'spin' ? 0 : type === 'rotate' ? -rotateAmount : undefined,
      scale: type === 'scale' ? 0.8 : undefined,
      rotateX: type === 'flip' ? 90 : undefined,
    } as const;

    if (type === 'custom') {
      return customAnimation as Variants;
    }

    return { hidden: base };
  };

  const getVisibleAnimation = (): Variants => {
    if (type === 'bounce') {
      return {
        visible: {
          y: [0, -30, 0],
          opacity: 1,
          x: 0,
          rotate: 0,
          transition: {
            duration,
            delay,
            ease: 'easeOut',
            times: [0, 0.5, 1],
            repeat: typeof loop === 'number' ? loop : loop ? Infinity : 0,
            repeatType: 'loop',
            bounce: bounceDamping / 10,
            stiffness: bounceStiffness,
          },
        },
      };
    }

    return {
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: type === 'spin' ? 360 * spinTimes : type === 'rotate' ? 0 : undefined,
        scale: type === 'scale' ? 1 : undefined,
        rotateX: type === 'flip' ? 0 : undefined,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
          staggerChildren,
        },
      },
    };
  };

  const variants: Variants = {
    ...getBaseAnimation(),
    ...getVisibleAnimation(),
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      onAnimationStart?.();
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce, onAnimationStart]);

  useEffect(() => {
    if (interval > 0) {
      const timer = setInterval(() => {
        controls.start('visible').then(() => {
          if (!loop) {
            controls.start('hidden');
          }
        });
      }, interval * 1000);

      return () => clearInterval(timer);
    }
  }, [interval, controls, loop]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default AdvancedAnimator;