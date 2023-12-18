/* eslint-disable @next/next/no-img-element */
import React, { FC, Fragment, memo, useMemo } from 'react';
import Image from 'next/image';
import ThumbBox from '../ui/ThumbBox';

export interface IQuote {
  id?: number;
  description?: string;
  authorName?: string;
  authorTitle?: string;
  image?: { imageUrl: string }[];
}

const QuoteHomePage: FC<IQuote> = ({
  description,
  authorName,
  authorTitle,
  image
}) => {
  return (
    <div className="flex justify-center items-center w-screen">
      {image && image?.length > 0 && (
        <Fragment>
          <ThumbBox align="left" images={image.slice(0, 7)} />
          <ThumbBox align="right" images={image.slice(7, 14)} />
        </Fragment>
      )}

      <div className="hidden lg:block w-full ">
        <Image
          src="/images/quote-bg.png"
          alt="Quote image background"
          className="w-full"
          width={3000}
          height={820}
          loading="lazy"
        />
      </div>
      <div className="lg:hidden ">
        <Image
          src="/images/quote-bg.png"
          alt="Quote image background"
          className="w-full h-[40vh]"
          width={560}
          loading="lazy"
          height={1126}
        />
      </div>
      <div className="absolute px-5 lg:px-0 lg:w-1/4 text-secondary text-center max-w-[80vw] ">
        <p className="text-lg lg:text-2xl mb-4 lg:mb-6  font-bold">
          {description}
        </p>
        <div className="text-lg">
          <p className="text-cyan-400 font-normal">{authorName}</p>
          <p className="text-gray-300 font-normal">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(QuoteHomePage);
