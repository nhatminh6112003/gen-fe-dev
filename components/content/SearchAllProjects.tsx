'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    title: 'Vib SmartSale',
    des: 'Smart app for optimize sale operation of bank',
    category: 'Fintech',
    link: 'https://play.google.com/store/apps/details?id=com.vn.vib.smartsale2019&hl=vi&gl=US'
  },
  {
    title: 'Kiot Viet',
    des: 'Manage Online Sale and operation Storehouse',
    category: 'Logistics',
    link: 'https://www.kiotviet.vn/'
  },
  {
    title: 'Coinfo',
    des: 'Coin analytics and suggestion tool.',
    category: 'Crypto',
    link: 'https://play.google.com/store/apps/details?id=com.coin_app'
  },
  {
    title: 'Coin 98',
    des: 'Coin new, swapping and nft ',
    category: 'Crypto',
    link: 'https://coin98.net/'
  },
  {
    title: 'Dayladau',
    des: 'Booking home stay',
    category: 'Booking',
    link: 'https://dayladau.com/'
  },
  {
    title: 'Acheckin',
    des: 'HRM, CMS project',
    category: 'E-Office',
    link: 'https://acheckin.vn/'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer className="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ title, des, category, link }, index) => (
          <CardProject
            key={index}
            title={title}
            des={des}
            category={category}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
