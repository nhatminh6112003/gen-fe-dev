/* eslint-disable @next/next/no-img-element */
'use client';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import AnimationContainer from '../../utils/AnimationContainer';
import Image from 'next/image';
import { convertTime } from '@/helper/format';

interface IBlogCardProps {
  id: string;
  title: string;
  content?: string;
  image: string;
  createdAt?: string;
}

const BlogCard: FC<IBlogCardProps> = ({ title, content, image, createdAt }) => {
  return (
    <div className="w-full relative h-full p-6">
      <AnimationContainer
        className="body-font h-full  overflow-hidden rounded-xl shadow-md shadow-blue-light"
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <Image
            className="lg:h-[25vh] w-full object-cover object-center border-b-2 border-blue-700"
            src={image}
            loading="eager"
            width={500}
            height={500}
            alt="blog"
          />
          <div className="p-6">
            {createdAt && (
              <p className="mb-2 lg:mb-2 text-xs">{convertTime(createdAt)}</p>
            )}
            <h1 className="text-lg lg:text-2xl font-bold text-secondary pr-20 mb-2 lg:mb-5 line-clamp-2 overflow-ellipsis text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2">
              {title}
            </h1>
            {content && (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="text-sm lg:text-lg leading-relaxed mb-3 lg:mb-6 line-clamp-4 overflow-ellipsis"
              >
                {content}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default BlogCard;
