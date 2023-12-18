'use client';

import { motion } from 'framer-motion';

const ShadowContainer = ({
  children,
  className
}: {
  children: JSX.Element;
  className?: any;
}) => {
  return (
    <motion.div className={className + " shadow-md"}>
      {children}
    </motion.div>
  );
};

export default ShadowContainer;
