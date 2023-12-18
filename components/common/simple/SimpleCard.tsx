/* eslint-disable @next/next/no-img-element */
import AnimationContainer from '@/components/utils/AnimationContainer';
import ShadowContainer from '@/components/utils/ShadowContainer';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface ISimpleCardProps {
  title: string;
  description: string;
  image: string;
}

const SimpleCard: React.FC<ISimpleCardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <ShadowContainer className="shadow-cyan-100 lg:min-h-[450px] h-full w-full relative border rounded-md bg-white text-center">
      <AnimationContainer horizontal className="p-5">
        <Image
          loading="eager"
          src={image}
          alt=""
          width={100}
          height={100}
          className="mx-auto"
        />
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl mb-3 text-secondary font-bold text-center">
            {title}
          </h2>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="lg:text-xl text-base text-ellipsis line-clamp-5"
          >
            {description}
          </ReactMarkdown>
        </div>
      </AnimationContainer>
    </ShadowContainer>
  );
};

export default SimpleCard;
