'use client';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import fetchTermsOfUse from '@/service/get-terms-of-use';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import MarkDown from '../ui/MarkDown';

const TermsOfUseSection = () => {
  const { language } = useLanguage();

  const { data } = useQuery({
    queryKey: ['terms-of-use', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    keepPreviousData: true,

    queryFn: () =>
      fetchTermsOfUse({
        locale: language
      })
  });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `TermsOfUsePage-${language}`
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

export default TermsOfUseSection;
