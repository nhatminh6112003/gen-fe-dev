import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer className="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3  text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 mx-auto lg:mx-0">
          Alley
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0">
          <span className="font-semibold tracking-tight">UI&UX</span>
          Designer
        </h2>

        <p className="w-full text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-400 mx-auto lg:mx-0">
          I enjoy design and whenever I can I try to learn new things.
        </p>
      </AnimationContainer>

      <AnimationContainer className="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="Alley"
          height={176}
          width={176}
          src="/alley.jpeg"
          sizes="30vw"
          loading="eager"
          className="rounded-3xl filter  hover:grayscale transition ease"
        />
      </AnimationContainer>
    </div>
  );
};

export default Hero;
