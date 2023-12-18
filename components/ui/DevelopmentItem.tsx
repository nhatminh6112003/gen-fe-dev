/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import useDevice from '@/hooks/useDevice';

interface IDevelopmentWrapper {
  title: string;
  description: string;
  image: string | { imageUrl: string }[];
  reverse?: boolean;
}

const DevelopmentWrapper: FC<IDevelopmentWrapper> = ({
  title,
  description,
  image,
  reverse
}) => {
  const { isMobile } = useDevice();
  const haveImage = Array.isArray(image) && image?.length > 0;

  return (
    <AnimationContainer horizontal className="lg:px-0 w-full ">
      <section className="text-gray-600 body-font">
        <div
          className={`gap-2 md:gap-16 container mx-auto flex justify-center flex-col-reverse items-center ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div className="md:w-1/2 mb-3 lg:mb-10 md:mb-0">
            <Image
              loading="eager"
              src={haveImage ? image[0].imageUrl : ''}
              className={`object-cover object-center rounded ${
                reverse ? 'ml-auto' : ''
              }`}
              alt="hero"
              width={isMobile ? 300 : 400}
              height={isMobile ? 300 : 400}
            />
          </div>
          <div className="md:w-1/2 mx-auto flex flex-col md:items-start md:text-left items-center">
            <div className="text-left mb-5 lg:mb-0">
              <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5  mb-8">
                <div className="w-1/3 h-2 lg:h-5 mx-auto lg:mx-0 bg-primary-pink rounded-full" />
                <h1 className="text-2xl lg:text-4xl lg:leading-[60px] font-bold text-royal-blue">
                  {title}
                </h1>
              </div>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className={`flex flex-col gap-3 text-base text-brown-500`}
              >
                {description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
};

export default DevelopmentWrapper;
