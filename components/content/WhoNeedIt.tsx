import React, { FC } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import Button from 'components/ui/button';
import { useRouter } from 'next/navigation';
import { language } from '@/context/LanguageContext';

interface IWhoNeedItProps {
  title: string;
  subTitle: string;
  buttonTitle: string;
  buttonLink: string;
}
const WhoNeedIt: FC<IWhoNeedItProps> = ({
  title,
  subTitle,
  buttonTitle,
  buttonLink
}) => {
  const router = useRouter();

  function scrollToFAQSection() {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <AnimationContainer
      horizontal
      className="container mx-auto  w-full px-5 lg:px-0"
    >
      <div className="bg-slate-50  w-full py-4 md:py-12 border rounded-xl  px-6 lg:px-24 flex  justify-evenly gap-5">
        <div className="w-2/3 lg:w-1/4 flex flex-col justify-center gap-5 md:justify-around md:gap-2 ">
          <h2 className=" text-base md:text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EFB0C9]">
            {title}
          </h2>
          <Button
            onClick={scrollToFAQSection}
            label={buttonTitle}
            size="small"
            className="text-xs md:text-base"
          />
        </div>

        <p className="text-xs items-center justify-center flex flex-col  w-full  md:text-lg text-center font-bold">
          {subTitle}
        </p>
      </div>
    </AnimationContainer>
  );
};

export default WhoNeedIt;
