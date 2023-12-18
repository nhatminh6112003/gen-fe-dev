/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import useDevice from '@/hooks/useDevice';

export default function Benefit({
  listSlide,
  title
}: {
  listSlide: { image: string; description: string }[];
  title?: string;
}) {
  const { isMobile } = useDevice();
  return (
    <>
      {listSlide && (
        <div className="container mx-auto px-5 lg:px-0">
          <h2 className="text-center mb-5 lg:mb-10 text-3xl lg:text-5xl font-bold">
            {title}
          </h2>
          <Swiper
            pagination={{
              clickable: true
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 1.5 : 3}
            style={{
              padding: '20px 0',
              paddingBottom: '60px'
            }}
            spaceBetween={40}
            autoHeight
            initialSlide={1}
          >
            {listSlide?.map((item: string | any, idx: number) => (
              <SwiperSlide
                key={idx}
                className="rounded-xl shadow-lg border shadow-blue-light h-[200px] md:h-full"
              >
                <div className="p-5 ">
                  <Image
                    loading="eager"
                    src={item?.image || ''}
                    width={isMobile ? 150 : 250}
                    height={isMobile ? 150 : 350}
                    alt="Our highlight image"
                    className="mx-auto py-5  "
                  />
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className="text-xs md:text-base lg:text-lg text-center font-semibold"
                  >
                    {item.description}
                  </ReactMarkdown>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
