import React from 'react';
import BlogCard from '../ui/card/Blog';
import AnimationContainer from '../utils/AnimationContainer';

export interface ISimpleAsClinicProps {
  title?: string;
  subTitle?: string;
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

const SimpleAsClinic: React.FC<ISimpleAsClinicProps> = ({
  data,
  title,
  subTitle
}) => {
  return (
    <AnimationContainer horizontal>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="relative mb-10 mx-auto">
          <h2 className="font-bold text-2xl lg:text-4xl text-center">
            {title} <br />
            {subTitle}
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap justify-center gap-5">
          {data?.map((item, idx) => (
            <div key={idx} className="w-full col-span-1 ">
              <BlogCard
                id={item?.id.toString()}
                image={item?.image}
                content={item?.description}
                title={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default SimpleAsClinic;
