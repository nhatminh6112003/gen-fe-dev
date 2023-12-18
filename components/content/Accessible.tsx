/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import NextImage from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import SwiperCoverFlow from '../ui/swiper-coverflow';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';
import { language } from '@/context/LanguageContext';

interface IAccessibleBlock {
  title?: string;
  description?: string;
  buttonTitle?: string;
  buttonLink?: string;
  image?: { imageUrl: string }[];
}

const AccessibleBlock: FC<IAccessibleBlock> = ({
  title,
  description,
  buttonTitle,
  buttonLink,
  image
}) => {
  const router = useRouter();

  return (
    <AnimationContainer horizontal className="w-full relative">
      <section className="text-gray-600 body-font text-center">
        <div
          className={`gap-[10%] container mx-auto justify-center lg:flex items-center lg:flex-row-reverse`}
        >
          <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:text-left ">
            <div className="relative text-2xl lg:text-5xl font-bold mb-4 pb-8">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2">
                {title}
              </h2>
              <div className="absolute bottom-0 w-full">
                <NextImage
                  src="/images/underline2.png"
                  alt="underline 2"
                  className="mx-auto lg:mx-0"
                  width={127}
                  height={20}
                />
              </div>
            </div>
            {description && (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="text-sm lg:text-xl  mb-5 lg:mb-8 text-[#6C606B]"
              >
                {description}
              </ReactMarkdown>
            )}
            <Button
              label={buttonTitle || ''}
              className="mx-auto mb-8 lg:mb-0 lg:mx-0"
              onClick={() => router.push(`/${language}${buttonLink}` || '')}
            />
          </div>
          <div className="lg:w-1/2">
            <SwiperCoverFlow listSlides={image} />
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
};

export default AccessibleBlock;
