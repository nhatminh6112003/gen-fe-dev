/* eslint-disable @next/next/no-img-element */
'use client';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import fetchHomePage from '@/service/get-home-page';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Banner from '../banner/HomeBanner';
import AccessibleBlock from '../content/Accessible';
import SubscribeNow from '../content/SubscribeNow';
import DevelopmentWrapper from '../ui/DevelopmentItem';

const QuoteHomePage = dynamic(() => import('../content/QuoteHomePage'), {
  ssr: true
});

const HomeSection = ({}: {}) => {
  const { language } = useLanguage();

  const { data } = useQuery({
    queryKey: ['home-content', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: () =>
      fetchHomePage({
        locale: language,
        populate: 'deep'
      }),
    keepPreviousData: true,
    staleTime: stableTime
  });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `HomePage-${language}`
    });
  }, [language]);

  return (
    <div className="w-full  relative">
      <Banner
        title={data?.banner?.title}
        description={data?.banner?.description}
        btnText={data?.banner?.buttonTitle}
        btnLink={data?.banner?.buttonLink}
      />
      <div className="py-7 lg:py-[70px] flex flex-col gap-10 lg:gap-20">
        <div className="px-5 lg:px-10 mx-auto flex flex-col gap-10 lg:gap-14">
          {data?.processSection?.map((item: any, idx: any) => (
            <div key={idx}>
              <DevelopmentWrapper {...item} />
            </div>
          ))}
        </div>
        <AccessibleBlock {...data?.benefitSection} />
        <QuoteHomePage {...data?.galleryWithCenterTitleSection} />
        <SubscribeNow {...data?.formSubscribeSection} />
      </div>
    </div>
  );
};

export default HomeSection;
