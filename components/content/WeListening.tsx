import React, { FC } from 'react';
import FormContact from './FormContact';
import AnimationContainer from '../utils/AnimationContainer';

interface IWeListeningProps {
  title: string;
  subTitle: string;
  buttonTitle: string;
  buttonLink: any;
}

interface Props {
  data?: IWeListeningProps;
  formContactData?: any;
}

const WeListening: FC<Props> = ({ data, formContactData }) => {
  return (
    <AnimationContainer
      horizontal
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: '' }}
    >
      <div className="container mx-auto  py-10 lg:py-20 lg:flex items-center justify-around gap-20 px-5 lg:px-0">
        <div className="lg:w-1/2 mb-10">
          <div className="w-1/3 h-2 lg:h-5 mx-auto lg:mx-0 bg-primary-pink rounded-full lg:mb-5" />
          <h2 className="text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 font-bold text-center lg:text-left pb-5">
            {data?.title}
          </h2>
          <p className="font-bold text-base text-center lg:text-left lg:w-3/4">
            {data?.subTitle}
          </p>
        </div>
        <div className="lg:w-1/2 border rounded-xl overflow-hidden shadow-box-1">
          <FormContact {...formContactData} />
        </div>
      </div>
    </AnimationContainer>
  );
};

export default WeListening;
