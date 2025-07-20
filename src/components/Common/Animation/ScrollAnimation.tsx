'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  variant?:
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInScale'
    | 'slideInFromBottom'
    | 'bounceIn'
    | 'staggerContainer'
    | 'staggerItem';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration,
  className = '',
}: ScrollAnimationProps) {
  // アニメーションバリアント定義
  const getVariants = () => {
    const baseEase = [0.25, 0.46, 0.45, 0.94] as const;

    switch (variant) {
      case 'fadeInLeft':
        return {
          hidden: { opacity: 0, x: -80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration || 0.6, ease: baseEase, delay },
          },
        };
      case 'fadeInRight':
        return {
          hidden: { opacity: 0, x: 80 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration || 0.6, ease: baseEase, delay },
          },
        };
      case 'fadeInScale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: duration || 0.5, ease: baseEase, delay },
          },
        };
      case 'slideInFromBottom':
        return {
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: duration || 0.6, ease: baseEase, delay },
          },
        };
      case 'bounceIn':
        return {
          hidden: { opacity: 0, scale: 0.3 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: duration || 0.6,
              ease: baseEase,
              delay,
              type: 'spring' as const,
              stiffness: 400,
              damping: 25,
            },
          },
        };
      case 'staggerContainer':
        return {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay || 0.05,
            },
          },
        };
      case 'staggerItem':
        return {
          hidden: { opacity: 0, y: 40, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: duration || 0.5,
              ease: baseEase,
              delay,
            },
          },
        };
      default: // fadeInUp
        return {
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration || 0.6, ease: baseEase, delay },
          },
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: '0px 0px -150px 0px' }}
    >
      {children}
    </motion.div>
  );
}
