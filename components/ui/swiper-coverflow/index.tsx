/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import useDevice from '@/hooks/useDevice';

export default function SwiperCoverFlow({
  listSlides
}: {
  listSlides?: { imageUrl: string }[];
}) {
  const { isMobile } = useDevice();
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={isMobile ? 1.5 : 3}
      coverflowEffect={{
        // rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      style={{ padding: '20px 0', paddingBottom: '60px' }}
      initialSlide={1}
      modules={[EffectCoverflow, Pagination]}
      spaceBetween={5}
    >
      {listSlides?.map((item: { imageUrl: string }, idx: number) => (
        <SwiperSlide
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg"
          style={{ minHeight: 'fit-content', minWidth: '150px' }}
        >
          <Image
            src={item.imageUrl}
            alt="Swipe Image"
            className="w-full lg:min-w-[200px] h-[200px] lg:h-[300px] object-cover"
            width={253}
            height={200}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
