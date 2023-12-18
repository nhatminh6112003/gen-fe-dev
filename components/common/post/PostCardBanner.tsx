/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SocialMediaBlock from '../social-media';
import AnimationContainer from '@/components/utils/AnimationContainer';
import HoverScaleAnimation from '@/components/utils/HoverScaleAnimation';
import { formattedData, formattedImageURL } from '@/helper/format';
import Link from 'next/link';
import useDevice from '@/hooks/useDevice';
import { useLanguage } from '@/context/LanguageContext';

export interface IPostItemProps {
  slug: string;
  size?: 'small' | 'large' | 'medium';
  image: string;
  topic: string;
  title: string;
  time: string;
  hasSocialIcons?: boolean;
  noImage?: boolean;
  author: {
    username: string;
    email: string;
    image: string;
  };
  className?: string;
}

function PostItem({
  slug,
  size = 'large',
  image,
  topic,
  title,
  time,
  hasSocialIcons,
  noImage,
  author,
  className
}: IPostItemProps): JSX.Element {
  const { isMobile } = useDevice();
  const { language } = useLanguage();
  return (
    <AnimationContainer horizontal className={className}>
      <Link
        href={`/${language}/blog/${slug}`}
        className={`
        rounded-xl
        ${
          !noImage &&
          'overflow-hidden shadow-md shadow-blue-light xl:shadow-none'
        } gap-3 md:gap-5 cursor-pointer  lg:border-none bg-white  overflow-hidden flex items-center lg:flex-row text-left p-5 text-secondary lg:py-5 ${
          size === 'large' && 'lg:py-5'
        }`}
      >
        {!noImage && (
          <div className="flex justify-start self-start lg:mb-0 w-32 md:w-60 lg:w-36 h-full shrink-0">
            <img
              src={formattedImageURL(image)}
              alt={'img'}
              className="rounded-2xl aspect-square object-cover w-full h-full"
            />
          </div>
        )}

        <div
          className={`p-0 w-full flex flex-col justify-between self-start relative`}
        >
          <div className="md:mb-3">
            <p
              className={`font-bold md:mb-2 overflow-ellipsis line-clamp-2  ${
                size === 'small' || isMobile
                  ? 'text-base'
                  : size === 'medium'
                  ? 'text-lg'
                  : 'text-xl xl:text-2xl'
              }`}
            >
              {title}
            </p>
          </div>
          <div
            className={`flex ${
              noImage ? 'flex-row' : 'flex-col'
            } lg:flex-row lg:gap-3 items-center gap-3 md:gap-9 xl:gap-16 text-gray-600 w-full flex-wrap`}
          >
            <div className="mt-3 lg:mt-0">
              {hasSocialIcons && (
                <SocialMediaBlock
                  size={
                    size === 'small' || isMobile
                      ? 22
                      : size === 'medium'
                      ? 27
                      : 32
                  }
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </AnimationContainer>
  );
}

export default PostItem;
