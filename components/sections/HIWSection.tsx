'use client';

import { HIWContent } from '@/app/[locale]/how-it-works/page';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import fetchFaqsContent from '@/service/get-faq';
import fetchFormContactContent from '@/service/get-form-contact';
import fetchHIWParent from '@/service/get-how-it-works-parent';
import dynamic from 'next/dynamic';
import { useQuery } from 'react-query';

const TheProduct = dynamic(() => import('../content/TheProduct'), {
  ssr: false
});
const WhoNeedIt = dynamic(() => import('../content/WhoNeedIt'), {
  ssr: true
});
const WeListening = dynamic(() => import('../content/WeListening'), {
  ssr: true
});
const SimpleAs = dynamic(() => import('../content/SimpleAs'), {
  ssr: true
});
const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});
const FAQsSection = dynamic(() => import('./FAQsSection'), { ssr: true });

const FreeFromGenetic = dynamic(() => import('../content/FreeFromGenetic'), {
  ssr: true
});

import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import { useEffect } from 'react';
import BannerSecondary from '../common/BannerSecondary';

const HIWSection = () => {
  const { language } = useLanguage();

  const { data: content } = useQuery({
    queryKey: ['how-it-works-content', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchHIWParent({
        locale: language,
        populate: 'deep'
      })
  });

  const { data: faqsData } = useQuery({
    queryKey: ['how-it-works-parent-faqs', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchFaqsContent(
        {
          locale: language
        },
        'how-it-works'
      )
  });

  const { data: formContactData } = useQuery<HIWContent>({
    queryKey: ['how-it-works-parent-contact-form', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchFormContactContent({
        locale: language,
        populate: 'question'
      })
  });

  const data = { formContactData, faqsData, ...content };

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `HowItWorkPage-${language}`
    });
  }, [language]);

  return (
    <div className="w-full relative">
      <div className="relative mb-10 lg:mb-20">
        <BannerSecondary
          listDescription={data?.banner?.cardSection}
          image={data?.banner?.backgroundImage}
          title={data?.banner?.title}
        />
      </div>

      <div className="flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <TheProduct {...data?.theProductSection} reverse />
        <SimpleAs
          data={data?.listTitleSection}
          title={data?.simpleTitleSection?.title}
          subTitle={data?.simpleTitleSection?.subTitle}
        />
        <FreeFromGenetic {...data?.howToMakeSection} />
        <WhoNeedIt {...data?.simpleTitleWithSubSection} />
        <WeListening
          data={data?.contactSection}
          formContactData={data?.formContactData}
        />
        <SubscribeNow {...data?.formSubscribeSection} />
        <FAQsSection data={data?.faqsData} />
      </div>
    </div>
  );
};

export default HIWSection;
