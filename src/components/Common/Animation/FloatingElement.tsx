'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  speed?: number;
}

export default function FloatingElement({
  children,
  className = '',
  delay = 0,
  amplitude = 10,
  speed = 2,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration: speed,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
