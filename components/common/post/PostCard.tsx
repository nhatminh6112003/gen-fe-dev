/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SocialMediaBlock from '../social-media';
import AnimationContainer from '@/components/utils/AnimationContainer';
import HoverScaleAnimation from '@/components/utils/HoverScaleAnimation';
import { formattedData, formattedImageURL } from '@/helper/format';
import Link from 'next/link';
import NextImage from 'next/image';
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
  content: string;
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
  content,
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
    <HoverScaleAnimation>
      <Link
        href={`/${language}/blog/${slug}`}
        className={`${
          !noImage &&
          'overflow-hidden shadow-md shadow-blue-light xl:shadow-none'
        } gap-3 md:gap-5 cursor-pointer md:border bg-white rounded-2xl overflow-hidden flex items-center lg:flex-row text-left p-5 text-secondary lg:py-5 ${
          size === 'large' && 'lg:py-5'
        }`}
      >
        {!noImage && (
          <div className="flex justify-start self-start lg:mb-0 w-32 md:w-60 lg:w-56 h-full lg:h-52 shrink-0">
            <img
              src={formattedImageURL(image)}
              alt="image"
              className="rounded-2xl aspect-square object-cover w-full h-full"
            />
          </div>
        )}

        <div
          className={`p-0 w-full flex flex-col justify-between self-start relative`}
        >
          <div className="md:mb-3">
            <p
              className={`font-bold md:mb-5 overflow-ellipsis line-clamp-2 mb-3  ${
                size === 'small' || isMobile
                  ? 'text-base'
                  : size === 'medium'
                  ? 'text-lg'
                  : 'text-xl xl:text-2xl'
              }`}
            >
              {title}
            </p>
            <p className="text-sm lg:text-base mb-2 line-clamp-4">{content}</p>
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
    </HoverScaleAnimation>
  );
}

export default PostItem;

/*
 const product = {...} //is product;
 const files = [] //array files
 const form = FormData();
 form.append('files',files);
 form.append('product',product);
* */
