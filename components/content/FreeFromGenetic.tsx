/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';

interface IFreeFromGeneticProps {
  contentBlock?: { content: string; image: string }[];
  title?: string;
  sampleImages?: { imageUrl: string }[];
}
const FreeFromGenetic: FC<IFreeFromGeneticProps> = ({
  contentBlock,
  title,
  sampleImages
}) => {
  const sampleImagesBlock = sampleImages && (
    <div className="md:h-[557px] h-[60vh] relative w-[90vw] md:w-[524px]">
      <div className="bg-[#f6d3e1] rounded-full md:h-[92px] absolute left-[17.9375rem] top-[375px] md:w-[92px] w-[10vw] h-[10vw]" />
      <div className="bg-[#c084fc] rounded-full md:h-[37px] absolute left-[7.25rem] md:top-[520px] top-[460px] md:w-[37px] w-[5vw] h-[5vw]" />

      <img
        className="md:h-[190px] absolute left-[6.0625rem] top-0  w-[30vw] h-[30vw] md:w-[190px] object-cover"
        alt="Ellipse"
        src={sampleImages[0].imageUrl}
      />
      <img
        className="md:h-[242px] absolute left-[2.375rem] top-[234px] md:w-[242px] w-[40vw] h-[40vw] object-cover"
        alt="Ellipse"
        src={sampleImages[1].imageUrl}
      />
      <img
        className="md:h-[217px] absolute md:left-[19.1875rem] left-[13.1875rem] top-[138px] md:w-[217px]  w-[30vw] h-[30vw]  object-cover"
        alt="Ellipse"
        src={sampleImages[2].imageUrl}
      />
      <div className="bg-[#7e22ce] rounded-full md:h-[75px] absolute left-0 md:top-[152px top-[100px] md:w-[75px]  w-[14vw] h-[14vw]  " />
      <div className="bg-[#06b6d4] rounded-full md:h-[75px] absolute md:left-[21.3125rem] left-[16rem] top-[12px] md:w-[75px]  w-[14vw] h-[14vw] " />
    </div>
  );

  return (
    <AnimationContainer
      horizontal
      className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0"
    >
      <div className="lg:w-1/2">
        <div className="w-1/3 h-2 lg:h-5 mx-auto lg:mx-0 bg-primary-pink rounded-full lg:mb-5" />
        <h2 className="pb-3 text-center lg:text-left text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 font-bold mb-5 lg:mb-10">
          {title}
        </h2>
        <div className="flex flex-col gap-5">
          {contentBlock?.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 items-center gap-5">
              <div className="col-span-2 md:col-span-1">
                <Image
                  src={item?.image || ''}
                  width={50}
                  height={50}
                  alt=""
                  loading="eager"
                />
              </div>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="lg:text-lg text-base font-semibold col-span-10  md:col-span-11"
              >
                {item?.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 lg:px-20">{sampleImagesBlock}</div>
    </AnimationContainer>
  );
};

export default FreeFromGenetic;
