/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LanguageContext';
import React, { useMemo } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import useLanguageContent from '@/hooks/useLanguageContent';
import useScrollPosition from '@/hooks/useScrollPosition';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSelector = ({ isMobile }: { isMobile?: boolean }) => {
  const { data } = useLanguageContent();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname: any = usePathname();
  const { replace } = useRouter();

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const selectedFlag = useMemo(() => {
    const selectedLanguage = data?.find(
      (item: any) => item?.attributes?.shortKeyLang?.toLowerCase() === language
    );
    return selectedLanguage?.attributes?.logoFlag || '';
  }, [data, language]);

  const handleLanguageChange = (val: string) => {
    setLanguage(val || '');
    setIsOpen(false);
    const newPath: any = pathname?.replace(language, val);
    replace(newPath);
  };

  const newPathname = useMemo(
    () => (pathname?.length > 3 ? pathname?.substring(3) : '/'),
    [pathname]
  );

  const getIconColor = () => {
    if (newPathname === '/') {
      return scrollPosition > 0 ? '#000000' : '#FFF6E0';
    } else {
      return '#000000';
    }
  };

  const getLanguageSelectorStyle = () => {
    if (newPathname === '/') {
      return scrollPosition > 0 ? 'border-black' : 'border-white';
    } else {
      return 'border-black';
    }
  };

  return isMobile ? (
    <motion.div
      className="relative text-base"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-5`}
      >
        <Image
          loading="lazy"
          src={selectedFlag}
          width={30}
          height={16}
          className="h-4"
          alt="flag"
        />
        <span className="text-black">{language.toUpperCase()}</span>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#000000">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="w-full"
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{
          paddingTop: 12,
          pointerEvents: isOpen ? 'auto' : 'none',
          display: isOpen ? 'grid' : 'none',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12
        }}
      >
        {data?.map((item: any) => (
          <motion.li
            key={item?.id}
            variants={itemVariants}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-slate-50"
            onClick={() =>
              handleLanguageChange(
                item?.attributes?.shortKeyLang?.toLowerCase()
              )
            }
          >
            <Image
              src={item?.attributes?.logoFlag || ''}
              width={30}
              loading="eager"
              className="h-4"
              alt="Flag logo"
              height={16}
            />
            {item?.attributes?.shortKeyLang?.toUpperCase()}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  ) : (
    <motion.nav
      className="relative w-fit text-base"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-5 p-2 border rounded-lg ${getLanguageSelectorStyle()}`}
      >
        <Image
          loading="lazy"
          src={selectedFlag}
          width={30}
          height={16}
          className="h-4"
          alt="flag"
        />
        <span
          className={
            scrollPosition > 0 || newPathname !== '/'
              ? 'text-black'
              : 'text-white'
          }
        >
          {language.toUpperCase()}
        </span>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill={getIconColor()}>
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="absolute top-full z-10 w-full bg-white shadow-md"
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {data?.map((item: any) => (
          <motion.li
            key={item?.id}
            variants={itemVariants}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-slate-50"
            onClick={() =>
              handleLanguageChange(
                item?.attributes?.shortKeyLang?.toLowerCase()
              )
            }
          >
            <Image
              src={item?.attributes?.logoFlag || ''}
              width={30}
              loading="eager"
              className="h-4"
              alt="Flag logo"
              height={16}
            />
            {item?.attributes?.shortKeyLang?.toUpperCase()}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default LanguageSelector;
