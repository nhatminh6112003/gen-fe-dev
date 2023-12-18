/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import Layer from '../layer-animation';

interface IBannerProps {
  title?: string;
  description?: string;
  btnText?: string;
  btnLink?: string;
}

const Banner: FC<IBannerProps> = ({
  title = '',
  description,
  btnText,
  btnLink
}) => {
  const router = useRouter();

  return (
    <div className="bg-loyal-blue h-full shadow-md shadow-blue-light w-full transition-all ease relative">
      <div className="px-5 xl:px-10 py-2">
        <div className="container mx-auto flex flex-col-reverse md:flex-row flex-wrap xl:min-h-[70vh]">
          <div className="w-full lg:w-2/5 flex flex-col justify-center bg-red-">
            <div className="flex flex-col items-center justify-center sm:items-start py-4">
              <h2 className="text-3xl xl:text-5xl font-bold text-white mb-5 xl:mb-10 xl:leading-[70px]">
                {title}
              </h2>
              {description && (
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="mb-10 text-base xl:text-xl text-ellipsis line-clamp-5 text-white"
                >
                  {description}
                </ReactMarkdown>
              )}
              {btnText && (
                <Button
                  label={btnText}
                  onClick={() => router.push(btnLink || '')}
                  className="self-start"
                  size="large"
                />
              )}
            </div>
          </div>
          <div className="w-full lg:w-3/5 flex justify-end">
            <Layer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
