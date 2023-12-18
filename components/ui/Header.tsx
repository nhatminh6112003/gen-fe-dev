'use client';
import { FC, Fragment, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useScrollPosition from '@/hooks/useScrollPosition';
import useHeader from '@/hooks/useHeader';
import LanguageSelector from './language-selector';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '../icons/Logo';
import Bar from '../icons/Bar';
import { usePathname } from 'next/navigation';
import { getPathname } from '@/utils/getPathname';
import HeaderAnimation from '../utils/HeaderAnimation';

const Header: FC = () => {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const scrollPosition = useScrollPosition();
  const { data } = useHeader({
    locale: language,
    populate: 'deep'
  });

  const pathname: any = usePathname();

  const segment = useMemo(() => getPathname(pathname), [pathname]);

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', overflow: 'hidden' },
    closed: { opacity: 0, height: 0, overflow: 'hidden' }
  };

  const getColor = () => {
    if (segment === '/') {
      return scrollPosition > 0 ? 'bg-nav backdrop-blur' : 'bg-royal-blue ';
    } else {
      return scrollPosition > 0 ? 'bg-nav backdrop-blur' : 'bg-white';
    }
  };

  const getText = () => {
    if (segment === '/') {
      return scrollPosition > 0
        ? 'hover:text-cyan-500 text-black'
        : 'text-white hover:text-cyan-500';
    } else {
      return 'hover:text-cyan-500 text-black';
    }
  };
  const getIconColor = () => {
    if (segment === '/') {
      return scrollPosition > 0 ? '#000000' : '#FFFFFF';
    } else {
      return '#000000';
    }
  };

  const CategoryWithSubCategories: FC<{ item: any }> = ({ item }) => {
    return (
      <div key={item.id} className="relative group">
        <div className={`mr-5 ${getText()}  px-2 cursor-pointer`}>
          {item.categoryTitle}
        </div>
        <div className=" invisible  group-hover:visible pt-7 gap-3 absolute top-full w-full   z-50">
          <div className="bg-white p-3  shadow-xl  flex flex-col rounded-md">
            {item.childCategory?.map((sub: any, i: number) => (
              <SubCategoryItem sub={sub} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SubCategoryItem: FC<{ sub: any }> = ({ sub }) => (
    <Fragment>
      {sub?.link && (
        <Link
          href={`/${language}${sub?.link}`}
          className="rounded-lg hover:text-cyan-500 py-2 px-2 cursor-pointer w-full"
        >
          {sub.categoryTitle}
        </Link>
      )}
    </Fragment>
  );

  const CategoryWithoutSubCategories: FC<{ item: any }> = ({ item }) => (
    <Link
      key={item?.link}
      href={`/${language}${item.link}`}
      className={`mr-5 py-1 px-2 rounded-lg cursor-pointer ${getText()}`}
    >
      {item.categoryTitle}
    </Link>
  );

  const navigation = (
    <nav className="hidden lg:flex xl:ml-auto flex-wrap items-center gap-1 justify-center font-semibold ">
      {data?.category?.map((item: any, index: number) =>
        item?.childCategory?.length > 0 ? (
          <CategoryWithSubCategories item={item} key={index} />
        ) : (
          <CategoryWithoutSubCategories item={item} key={index} />
        )
      )}
      <LanguageSelector />
    </nav>
  );

  return (
    <HeaderAnimation
      className={` body-font w-full  min-h-[74px] text-xl relative px-5 xl:px-10 ${getColor()}`}
    >
      <div className="container mx-auto flex md:justify-between flex-wrap py-2 lg:py-4 flex-col md:flex-row lg:items-center">
        <div className="w-full lg:w-fit flex justify-between items-center">
          <Link
            href={`/${language}`}
            onClick={() => setMobileMenuOpen(false)}
            className="flex title-font font-medium items-start text-cyan-500"
          >
            <Logo width={80} height={40} alt="logo" />
          </Link>
          <div
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Bar
              width={24}
              height={24}
              color={getIconColor()}
              className={`cursor-pointer ${getText()}`}
            />
          </div>
        </div>
        {navigation}
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate={mobileMenuOpen ? 'open' : 'closed'}
            variants={dropdownVariants}
            transition={{ duration: 0.2 }}
            className={`bg-white bg-blur-lg z-20 py-5 absolute top-full left-[0px] rounded-b-3xl w-full flex flex-col shadow-xl px-10 gap-3 text-secondary text-xl `}
          >
            {data?.category?.map((item: any) => {
              if (item.childCategory?.length > 0) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setIsOpenSubMenu(true)}
                  >
                    <div className={`mr-5 hover:text-cyan-500 cursor-pointer`}>
                      {item.categoryTitle}
                    </div>
                    {isOpenSubMenu && (
                      <div className="flex flex-col gap-3 p-3 bg-white">
                        {item.childCategory?.map((sub: any) => (
                          <div
                            key={sub.link}
                            className={
                              'hover:text-cyan-500 py-1 px-2 cursor-pointer w-full'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub?.link && (
                              <Link
                                key={sub?.link}
                                href={`/${language}/${sub?.link}`}
                              >
                                {sub.categoryTitle}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item?.link}
                  href={`/${language}/${item?.link}`}
                  className="mr-5 hover:text-cyan-500 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item?.categoryTitle}
                </Link>
              );
            })}
            <LanguageSelector isMobile />
          </motion.div>
        )}
      </div>
    </HeaderAnimation>
  );
};

export default Header;
