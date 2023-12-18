/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import rehypeRaw from 'rehype-raw';
import AnimationContainer from '../utils/AnimationContainer';

export interface IProps {
  id: number;
  title: string;
  description: string;
  image: IImage[];
}

export interface IImage {
  id: number;
  imageUrl: string;
}

const AwardsAffiliations: FC<IProps> = ({ title, description, image }) => {
  const brandsData = [
    '/images/DAMAC.png',
    '/images/DAMAC.png',
    '/images/DAMAC.png',
    '/images/DAMAC.png',
    '/images/DAMAC.png',
    '/images/DAMAC.png'
  ];
  const renderBrand = (brandImg: string) => {
    return (
      <div className="min-w-[120px] flex items-center justify-center border border-secondary rounded-xl p-5 lg:p-10">
        <NextImage src={brandImg} alt="brand Image" width={120} height={63} />
      </div>
    );
  };
  return (
    <AnimationContainer horizontal className="bg-cover">
      <div className="text-center lg:text-left lg:flex gap-20 container mx-auto overflow-x-auto px-5 lg:px-0">
        <div className="lg:w-1/2">
          <div>
            <h1 className="lg:w-2/3 text-2xl lg:text-5xl lg:leading-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 mb-6 lg:mb-12">
              {title}
            </h1>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="text-base lg:text-xl mb-14"
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
        <div className="-mx-5 px-5 lg:mx-0 lg:px-0 lg:w-1/2 flex overflow-y-auto lg:grid grid-cols-3 gap-5 h-fit">
          {image?.map((item: IImage, idx: number) => (
            <div key={idx}>{renderBrand(item.imageUrl)}</div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default AwardsAffiliations;
