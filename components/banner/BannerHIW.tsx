/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import NextImage from 'next/image';
import Button from '../ui/button';
import AnimationContainer from '../utils/AnimationContainer';

interface IBannerHIWProps {
  title: string;
  image: string | any;
  description?: string;
  btnText?: string;
}
const BannerHIW: FC<IBannerHIWProps> = ({
  title,
  image,
  description,
  btnText
}) => {
  return (
    <AnimationContainer className="w-full flex flex-col-reverse lg:flex-row transition-all ease relative">
      <div className="bg-[#F8FCFD] lg:bg-inherit lg:bg-opacity-50 xl:w-1/2">
        <div className=" p-5 xl:px-32 xl:py-20 z-50">
          <h2 className="text-3xl xl:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 mb-5 xl:mb-10 xl:leading-[70px]">
            {title}
          </h2>
          <p className="mb-10 text-base xl:text-xl">{description}</p>
          {btnText && <Button label={btnText} />}
        </div>
      </div>
      <div className="xl:w-1/2 relative">
        <NextImage
          src={image}
          className="h-[400px] lg:h-[700px] object-cover"
          alt="bannerHIW"
        />
        <div className="absolute top-0 w-full h-full bg-white bg-opacity-25" />
      </div>
    </AnimationContainer>
  );
};

export default BannerHIW;
