'use client';
import { stableTime } from '@/config/query';
import { useQuery } from 'react-query';
import { useLanguage } from '@/context/LanguageContext';
import fetchPrivacy from '@/service/get-privacy';
import MarkDown from '../ui/MarkDown';
import { useEffect } from 'react';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';

const PrivacySection = () => {
  const { language } = useLanguage();

  const { data } = useQuery({
    queryKey: ['privacy', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    keepPreviousData: true,

    queryFn: () =>
      fetchPrivacy({
        locale: language
      })
  });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `PrivacyPage-${language}`
    });
  }, [language]);

  return (
    <div className="w-full relative">
      <div className="container pt-20 px-5 mx-auto text-center lg:text-left w-full lg:flex flex-col justify-center items-center text-lg">
        <MarkDown title={data?.attributes?.content} />
      </div>
    </div>
  );
};

export default PrivacySection;
