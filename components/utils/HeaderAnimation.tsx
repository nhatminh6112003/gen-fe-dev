'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1
  }
};

interface Props {
  children: React.ReactNode;
  className?: string;
}
const HeaderAnimation: FC<Props> = ({ children, className }) => {
  return (
    <motion.header
      className={`${className} shadow-lg w-full sticky top-0 flex flex-col justify-center items-center z-10 mx-auto`}
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderAnimation;
