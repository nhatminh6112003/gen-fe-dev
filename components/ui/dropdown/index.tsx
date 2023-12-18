'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import AnimationContainer from '@/components/utils/AnimationContainer';
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

interface DropdownProps {
  options?: string[];
  value?: string;
  handleSelectQuestions: (option?: string) => void;
}

export default function Dropdown({
  value,
  options,
  handleSelectQuestions
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = (e: React.MouseEvent, option?: string) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    handleSelectQuestions(option);
  };

  return (
    <AnimationContainer horizontal>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="menu relative text-secondary"
      >
        <motion.button
          type="button"
          className="w-full h-10 relative flex justify-between items-center p-4 border text-sm md:text-base"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-base font-semibold	text-[#183B56]">{value}</span>
          <motion.div
            className="absolute right-5"
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          className="absolute right-0 left-0 rounded-xl overflow-hidden mt-3"
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0%)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50%)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {options?.map((option, index) => (
            <motion.li
              className="cursor-pointer font-medium w-full bg-primary-pink text-secondary hover:bg-secondary hover:text-primary-pink p-3 text-center text-sm md:text-base"
              key={index}
              variants={itemVariants}
              onClick={(e) => handleClickItem(e, option)}
            >
              {option}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </AnimationContainer>
  );
}
