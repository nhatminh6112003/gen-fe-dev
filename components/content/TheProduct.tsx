'use client';
import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import rehypeRaw from 'rehype-raw';
import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';
import CircleArrowRight from 'public/icons/circle-arrow-right.svg';

interface ITheProductProps {
  title: string;
  description: string;
  image: { imageUrl: string }[];
  reverse?: boolean;
}

const TheProduct: FC<ITheProductProps> = ({ title, description, image }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <AnimationContainer horizontal className="w-full relative py-10">
      <section className="text-gray-600 body-font text-center">
        <div
          className={`gap-[10%] container mx-auto px-5 justify-center lg:flex items-center lg:flex-row-reverse`}
        >
          <div className="lg:flex-grow lg:w-2/3 flex flex-col lg:text-left ">
            <div className="mx-auto">
              <div className="w-1/2 h-3 lg:h-6 bg-primary-pink mb-5 rounded-xl mx-auto lg:mx-0" />
              <h1 className="text-2xl lg:text-5xl lg:leading-[60px] font-bold mb-4 lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2">
                {title}
              </h1>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="text-base lg:text-xl font-medium text-gray-300"
              >
                {description}
              </ReactMarkdown>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/3">
            <div className="w-full lg:w-9/12 relative">
              {image && image?.length > 1 && (
                <div
                  className="cursor-pointer  bg-black w-[30px] md:w-[40px] ml-1 absolute left-0 top-[40%] md:top-[45%] z-20 rounded-full rotate-180 "
                  ref={(node) => setPrevEl(node)}
                >
                  <Image width={40} src={CircleArrowRight} alt={''} />
                </div>
              )}
              <Swiper
                pagination={{ clickable: false }}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                className="swiper-container"
                spaceBetween={40}
                navigation={{ prevEl, nextEl }}
              >
                <div className="container mx-auto lg:flex lg:justify-center text-center gap-y-6 lg:gap-x-[10%] px-5 ">
                  <SwiperSlide className="h-full object-fill object-center">
                    {image?.map((item: any, idx: number) => (
                      <NextImage
                        key={idx}
                        className="rounded-xl h-[30vh]"
                        alt="Product Image"
                        src={item?.imageUrl}
                        width={360}
                        height={360}
                        // placeholder="blur"
                        // blurDataURL="/image/blur.png"
                        // quality={90}
                      />
                    ))}
                  </SwiperSlide>
                </div>
              </Swiper>

              {image && image?.length > 1 && (
                <div
                  className="cursor-pointer bg-black w-[30px] md:w-[40px] mr-1 absolute right-0 top-[40%] md:top-[45%] z-20  rounded-full"
                  ref={(node) => setNextEl(node)}
                >
                  <Image width={40} src={CircleArrowRight} alt={''} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
};

export default TheProduct;
