/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import rehypeRaw from 'rehype-raw';
import Button from '../ui/button';
import AnimationContainer from '../utils/AnimationContainer';

interface IBannerProps {
  title?: string;
  image?: string | any;
  description?: string;
  btnText?: string;
  btnLink?: string;
}

const Banner: FC<IBannerProps> = ({
  title = '',
  image,
  description,
  btnText,
  btnLink
}) => {
  const router = useRouter();

  return (
    <AnimationContainer className="w-full transition-all ease relative shadow-md shadow-blue-light">
      {title && (
        <div className="bg-[#F8FCFD] xl:bg-inherit xl:absolute xl:left-10 top-10 right-0 left-0 xl:container mx-auto p-5 lg:p-10 xl:p-0">
          <div className="xl:w-1/3">
            <h2 className="text-3xl xl:text-5xl font-bold text-secondary mb-5 xl:mb-10 xl:leading-[70px]">
              {title}
            </h2>
            {description && (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="mb-10 text-base xl:text-xl"
              >
                {description}
              </ReactMarkdown>
            )}
            {btnText && (
              <Button
                label={btnText}
                onClick={() => router.push(btnLink || '')}
              />
            )}
          </div>
        </div>
      )}
      <div className="flex w-full" style={{ height: '80vh' }}>
        <NextImage
          src={image}
          className="lg:h-4/5 w-full object-contain object-right"
          alt="banner"
        />
      </div>
    </AnimationContainer>
  );
};

export default Banner;
