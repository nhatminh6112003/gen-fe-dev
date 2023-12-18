/* eslint-disable @next/next/no-img-element */
'use client';

import { useLanguage } from '@/context/LanguageContext';
import usePostBlog from '@/hooks/usePostBlog';
import usePostDetail from '@/hooks/usePostDetail';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';

const MarkDown = dynamic(() => import('../ui/MarkDown'), {
  ssr: true
});
const RecentBlog = dynamic(() => import('@/components/content/RecentBlog'), {
  ssr: true
});

const SubscribeNow = dynamic(() => import('../content/SubscribeNow'), {
  ssr: true
});

const StayInTouch = dynamic(() => import('../common/stay-in-touch'), {
  ssr: true
});

const BlogDetailSkeleton = dynamic(
  () => import('../ui/skeleton/BlogDetailSkeleton'),
  {
    ssr: true
  }
);

const BlogDetailSection = ({ slug }: { slug: string }) => {
  const { language } = useLanguage();
  const { isLoading, data: blogData } = usePostBlog();

  const { isLoading: isLoadingDetail, data: blogDetailData }: any =
    usePostDetail({
      slug,
      locale: language,
      populate: 'deep'
    });

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `BlogDetail${slug}-${language}`
    });
  }, [slug, language]);

  return (
    <div className="w-full">
      <div className="px-5 lg:px-10">
        <div className="container mx-auto flex flex-col xl:flex-row justify-between gap-14 py-10 xl:py-20">
          <div className="xl:w-2/3 h-full flex flex-col gap-5 lg:gap-10">
            {isLoadingDetail ? (
              <BlogDetailSkeleton />
            ) : (
              <div className="p-5 rounded-xl bg-slate-50 h-full flex flex-col gap-8">
                <Image
                  src={blogDetailData?.image}
                  alt=""
                  height={400}
                  width={400}
                  className="h-96 w-full object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm lg:text-base mb-2">
                    {blogDetailData?.topic}
                  </p>
                  <p className="text-2xl xl:text-4xl font-bold">
                    {blogDetailData?.title}
                  </p>
                </div>
                <MarkDown title={blogDetailData?.content} />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-8 xl:w-1/3">
            <RecentBlog data={blogData} isLoading={isLoading} />
            <StayInTouch data={blogData} quote={blogData?.title} />
          </div>
        </div>
      </div>

      <SubscribeNow />
    </div>
  );
};

export default BlogDetailSection;
