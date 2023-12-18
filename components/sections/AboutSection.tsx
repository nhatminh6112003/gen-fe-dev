'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useQuery } from 'react-query';
import { stableTime } from '@/config/query';
import fetchAboutPage from '@/service/get-about-us';
import dynamic from 'next/dynamic';
import BannerTertiary from '../common/BannerTertiary';
import { useEffect } from 'react';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
const OurHighlights = dynamic(() => import('../content/OurHighlights'), {
  ssr: true
});

const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});

const FeedbackfromCustomer = dynamic(() => import('../content/Feedback'), {
  ssr: true
});

const AwardsAffiliations = dynamic(
  () => import('../content/AwardsAffiliations'),
  {
    ssr: true
  }
);

const TheTeam = dynamic(() => import('../content/TheTeam'), {
  ssr: true
});

const AboutSection = () => {
  const { language } = useLanguage();
  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `AboutPage-${language}`
    });
  }, [language]);

  const { data } = useQuery({
    queryKey: ['about-us', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    keepPreviousData: true,
    queryFn: () =>
      fetchAboutPage({
        locale: language,
        populate: 'deep'
      })
  });

  return (
    <div>
      <BannerTertiary
        listDescription={data?.banner?.cardSection}
        image={data?.banner?.backgroundImage}
        title={data?.banner?.title}
      />

      <div className="w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-20 px-5 xl:px-8 shadow-md">
        <TheTeam
          listTeam={data?.theTeamMemberSection}
          title={data?.theTeamTitle}
        />
        <OurHighlights
          listSlide={data?.highlightSection}
          title={data?.ourHighlightsTitle}
        />
      </div>
      <FeedbackfromCustomer {...data?.feedbackSection[0]} />
      <div className="w-full flex flex-col gap-20 pb-10 lg:pb-20">
        <AwardsAffiliations {...data?.awardSection} />
        <SubscribeNow {...data?.formSubscribeSection} />
      </div>
    </div>
  );
};

export default AboutSection;
