/* eslint-disable @next/next/no-img-element */
'use client';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import fetchContactUs from '@/service/get-contact-us';
import fetchFormContactContent from '@/service/get-form-contact';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

const Mapbox = dynamic(() => import('components/common/Map'), {
  ssr: true
});

const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});

const FormContact = dynamic(() => import('../content/FormContact'), {
  ssr: true
});

const ContactUsSection = ({}: {}) => {
  const { language } = useLanguage();

  const { data: content } = useQuery({
    queryKey: ['contact-us', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchContactUs({
        locale: language,
        populate: 'deep'
      })
  });

  const { data: formContactContent } = useQuery({
    queryKey: ['contact-us-form', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    queryFn: () =>
      fetchFormContactContent({
        locale: language,
        populate: 'deep'
      })
  });

  const data = { ...content, formContactContent };
  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `ContactUsPage-${language}`
    });
  }, [language]);

  return (
    <div className=" flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row overflow-hidden lg:pb-10 xl:pb-20  px-5 lg:px-0">
          <div className="w-full lg:w-1/2 mx-auto shadow-md shadow-blue-light border-2 border-[#C2C2C2/60] rounded-2xl overflow-hidden">
            <FormContact {...data?.formContactContent} />
          </div>
          <div className="lg:w-1/2 overflow-hidden">
            <p className="lg:text-2xl text-secondary font-bold text-center mb-6">
              Our Location
            </p>
            <Mapbox />
          </div>
        </div>
      </div>
      <SubscribeNow {...data?.formSubscribeSection} />
    </div>
  );
};

export default ContactUsSection;
