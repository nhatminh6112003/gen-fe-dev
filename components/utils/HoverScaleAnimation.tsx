'use client';

import { motion } from 'framer-motion';

const HoverScaleAnimation = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      className="body-font"
      whileHover={{ scale: [null, 1.05, 1.05] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScaleAnimation;
