'use client';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import fetchFaqsContent from '@/service/get-faq';
import fetchFormContactContent from '@/service/get-form-contact';
import fetchHIWClinic from '@/service/get-how-it-works-clinic';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import BannerSecondary from '../common/BannerSecondary';
import TheProduct from '../content/TheProduct';

const KeyHighlight = dynamic(() => import('../content/KeyHighlight'), {
  ssr: true
});

const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});

const FAQsSection = dynamic(() => import('./FAQsSection'), {
  ssr: true
});

const Benefit = dynamic(() => import('../content/Benefit'), {
  ssr: true
});

const WeListening = dynamic(() => import('../content/WeListening'), {
  ssr: true
});

const SimpleAsClinic = dynamic(() => import('../content/SimpleAsClinic'), {
  ssr: true
});
// const BannerSecondary = dynamic(() => import('../common/BannerSecondary'), {
//   ssr: true
// });

const HIWClinicSection = () => {
  const { language } = useLanguage();

  const { data } = useQuery({
    queryKey: ['how-it-works-clinic-content', language],
    refetchOnWindowFocus: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchHIWClinic({
        locale: language,
        populate: 'deep'
      })
  });

  const { data: faqsData } = useQuery({
    queryKey: ['how-it-works-clinics-faqs', language],
    refetchOnWindowFocus: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchFaqsContent(
        {
          locale: language
        },
        'how-it-works-clinics'
      )
  });

  const { data: formData } = useQuery({
    queryKey: ['how-it-works-clinics-contact-form', language],
    refetchOnWindowFocus: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchFormContactContent({
        locale: language,
        populate: 'deep'
      })
  });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `HowItWorkPageClinic-${language}`
    });
  }, [language]);

  return (
    <div className="w-full  relative">
      <BannerSecondary
        listDescription={data?.banner?.cardSection}
        image={data?.banner?.backgroundImage}
        title={data?.banner?.title}
      />

      <div className="flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <TheProduct {...data?.imagewithDescSection} reverse />
        <SimpleAsClinic
          data={data?.simpleToSection}
          title={data?.simpleTitleSection?.title}
          subTitle={data?.simpleTitleSection?.subTitle}
        />
        <Benefit
          listSlide={data?.benefitSection}
          title={data?.ourHighlightsTitle}
        />
        <KeyHighlight {...data?.keyHightlighSection} />
        <WeListening data={data?.contactSection} formContactData={formData} />
        <SubscribeNow {...data?.formSubscribeSection} />
        <FAQsSection data={faqsData} />
      </div>
    </div>
  );
};

export default HIWClinicSection;
