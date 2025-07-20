'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotateOnHover?: boolean;
}

export default function HoverScale({
  children,
  className = '',
  scale = 1.05,
  rotateOnHover = false,
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotate: rotateOnHover ? 2 : 0,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
