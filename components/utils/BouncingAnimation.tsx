'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BouncingAnimation = ({
  children,
  className
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ translateY: 0 }}
      animate={{ translateY: [1, 30, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};

export default BouncingAnimation;
