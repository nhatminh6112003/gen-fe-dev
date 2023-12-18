'use client';

import { motion } from 'framer-motion';
import { AnimationContainerProps } from '@/types';

const AnimationContainer = ({
  children,
  className,
  customDelay = 0.5,
  vertical,
  horizontal,
  style,
  whileHover,
  onClick,
  ...props
}: AnimationContainerProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={className}
      whileHover={whileHover}
      initial={{
        opacity: 0,
        ...(horizontal ? { translateY: 50 } : { translateX: 0 })
      }}
      whileInView={{
        opacity: 1,
        ...(horizontal ? { translateY: 0 } : { translateX: 0 })
      }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
