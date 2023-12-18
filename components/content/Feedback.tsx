/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import rehypeRaw from 'rehype-raw';
import AnimationContainer from '../utils/AnimationContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export interface IProps {
  id: number;
  title: string;
  description: string;
  author: string;
  image: {
    imageUrl: string;
  }[];
}

const FeedbackfromCustomer: FC<IProps> = ({
  title,
  description,
  author,
  image
}) => {
  return (
    <div className="py-10">
      <AnimationContainer
        horizontal
        className=" py-10 w-full transition-all ease relative container mx-auto px-5 lg:px-0"
      >
        <section className="text-center body-font">
          <div className="lg:hidden text-2xl lg:text-4xl lg:leading-[30px] font-bold">
            <h2>{title}</h2>
          </div>
          <div className="">
            <Swiper
              pagination={{ clickable: true }}
              slidesPerView={1}
              modules={[Pagination]}
              className="!px-5 py-[20px] pb-[40px]"
              spaceBetween={40}
            >
              <div className="container mx-auto lg:flex lg:py-14 lg:justify-center text-center gap-y-6 lg:gap-x-[10%] px-5">
                {image?.map((item: any, idx: number) => (
                  <SwiperSlide key={idx} className="h-full sm:!flex">
                    <div className="w-full md:w-1/2 lg:w-2/6 mr-10">
                      <NextImage
                        className="my-5 px-5 lg:px-0 lg:my-0 max-h-[400px] w-full object-cover object-center rounded rounded-tl-full rounded-br-full"
                        alt="hero"
                        src={item.imageUrl}
                        width={485}
                        height={400}
                      />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/6 flex-grow flex flex-col justify-center lg:text-left">
                      <h2 className="hidden lg:block text-2xl lg:text-4xl font-bold mb-5 w-2/3">
                        {title}
                      </h2>
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        className="text-base lg:text-xl mb-5"
                      >
                        {description}
                      </ReactMarkdown>
                      <p className="font-bold text-gray-500">{author}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </section>
      </AnimationContainer>
    </div>
  );
};

export default FeedbackfromCustomer;
