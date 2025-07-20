'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  variant?: 'slideUp' | 'slideLeft' | 'slideRight' | 'reveal' | 'morphIn' | 'flipIn';
  delay?: number;
  className?: string;
}

export default function RevealAnimation({
  children,
  variant = 'slideUp',
  delay = 0,
  className = '',
}: RevealAnimationProps) {
  const getVariants = () => {
    const baseEase = [0.25, 0.46, 0.45, 0.94] as const;

    switch (variant) {
      case 'slideLeft':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: baseEase,
              delay,
            },
          },
        };

      case 'slideRight':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: baseEase,
              delay,
            },
          },
        };

      case 'reveal':
        return {
          hidden: {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
          },
          visible: {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            transition: {
              duration: 1.2,
              ease: baseEase,
              delay,
              clipPath: { duration: 1.2, ease: baseEase },
            },
          },
        };

      case 'morphIn':
        return {
          hidden: {
            scale: 0.8,
            borderRadius: '50%',
            opacity: 0,
            rotate: -10,
          },
          visible: {
            scale: 1,
            borderRadius: '0%',
            opacity: 1,
            rotate: 0,
            transition: {
              duration: 1.0,
              ease: baseEase,
              delay,
              type: 'spring' as const,
              stiffness: 120,
              damping: 20,
            },
          },
        };

      case 'flipIn':
        return {
          hidden: {
            rotateX: -90,
            opacity: 0,
            transformPerspective: 1000,
          },
          visible: {
            rotateX: 0,
            opacity: 1,
            transformPerspective: 1000,
            transition: {
              duration: 0.8,
              ease: baseEase,
              delay,
              type: 'spring' as const,
              stiffness: 200,
              damping: 25,
            },
          },
        };

      default: // slideUp
        return {
          hidden: { y: 80, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: baseEase,
              delay,
            },
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
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
