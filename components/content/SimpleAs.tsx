import React from 'react';
import SimpleCard from '../common/simple/SimpleCard';
import Image from 'next/image';

const SimpleAs = ({ data, title, subTitle }: any) => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/images/feedback-bg.png)' }}
    >
      <div className="py-10 lg:py-20 container mx-auto px-5 lg:px-0">
        <div className="relative mb-10">
          <h2 className="font-bold text-2xl lg:text-4xl text-center">
            {title} <br />
            {subTitle}
          </h2>
          <Image
            width={200}
            height={50}
            src="/images/underline.png"
            alt=""
            className="mx-auto"
            loading="eager"
          />
        </div>
        <div className="flex flex-col lg:px-0 md:grid grid-cols-2 xl:grid-cols-3 w-full gap-4 lg:gap-8">
          {data?.map((item: any, idx: number) => (
            <div key={idx}>
              <SimpleCard
                image={item?.image}
                description={item?.description}
                title={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SimpleAs;
