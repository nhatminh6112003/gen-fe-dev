/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export interface IKeyHighlightProps {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
  contentBlock: ContentBlock[];
}

export interface ContentBlock {
  id: number;
  image: string;
  content: string;
}

const KeyHighlight: FC<IKeyHighlightProps> = ({
  title,
  description,
  image,
  contentBlock
}) => {
  return (
    <AnimationContainer horizontal>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0">
        <div className="lg:w-2/3 lg:py-20 mx-auto lg:pr-20">
          <h2 className="text-center lg:text-left text-2xl lg:text-4xl font-bold mb-3">
            {title}
          </h2>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="text-lg lg:text-xl mb-5 lg:mb-10 text-center lg:text-left"
          >
            {description}
          </ReactMarkdown>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
            {contentBlock?.map((item, idx) => (
              <div key={idx}>
                <Image
                  src={item?.image}
                  alt=""
                  width={40}
                  height={40}
                  loading="eager"
                  className="mb-3"
                />
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="lg:text-lg"
                >
                  {item?.content}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 mx-auto">
          <Image
            src={image}
            alt="Key Highlight image"
            className="w-full"
            loading="eager"
            width={498}
            height={460}
          />
        </div>
      </div>
    </AnimationContainer>
  );
};

export default KeyHighlight;
