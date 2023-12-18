'use client';
import { stableTime } from '@/config/query';
import { useLanguage } from '@/context/LanguageContext';
import usePostBlog from '@/hooks/usePostBlog';
import fetchFormContactContent from '@/service/get-form-contact';
import fetchInvestorPage from '@/service/get-investor';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import BannerTertiary from '../common/BannerTertiary';

const FormContactBanner = dynamic(
  () => import('../content/FormContactBanner'),
  {
    ssr: true
  }
);

const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});

const BlogCard = dynamic(() => import('../ui/card/Blog'), {
  ssr: true
});

const InvestorsSection = () => {
  const { data: blogData }: any = usePostBlog();
  const { language } = useLanguage();

  const { data } = useQuery({
    queryKey: ['investors', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    keepPreviousData: true,

    queryFn: () =>
      fetchInvestorPage({
        locale: language,
        populate: 'deep'
      })
  });

  const { data: formContactContent } = useQuery({
    queryKey: ['investor-form', language],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: stableTime,
    keepPreviousData: true,

    queryFn: () =>
      fetchFormContactContent({
        locale: language,
        populate: 'deep'
      })
  });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `InvestorsPage-${language}`
    });
  }, [language]);

  return (
    <div className="w-full relative">
      <div className="relative mb-10 lg:mb-20">
        <BannerTertiary
          listDescription={data?.bannerInvestor?.cardSection}
          image={data?.bannerInvestor?.backgroundImage}
          title={data?.bannerInvestor?.title}
        />
      </div>
      <div className="md:w-1/2 xl:w-[430px] mx-auto xl:absolute max-h-max bottom-20 md:top-0 md:right-6 2xl:top-8 2xl:right-20 my-3 md:px-0 px-5">
        <div className="shadow-md rounded-2xl overflow-hidden">
          <FormContactBanner data={formContactContent} />
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <div className="flex flex-col items-center">
          {/* <YouTubeVideo videoId="JkXD_Br7PGw" /> */}
          <div className="flex flex-col gap-6">
            {data?.videos?.map((item: any) => (
              <iframe
                key={item?.id}
                className="md:w-[60vw] w-[80vw]"
                style={{ aspectRatio: '16 / 9' }}
                src={item?.link}
                title={item?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl leading-[40px] lg:leading-[70px] text-center mt-10 lg:mb-14 px-5 lg:px-0">
            {data?.maybeSectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-5">
            {blogData?.data?.map((item: any, idx: any) => (
              <div key={idx}>
                <BlogCard {...item?.attributes} />
              </div>
            ))}
          </div>
        </div>
        <SubscribeNow {...data?.formSubscribeSection} />
      </div>
    </div>
  );
};

export default InvestorsSection;
