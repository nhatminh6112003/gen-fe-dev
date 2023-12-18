/* eslint-disable @next/next/no-img-element */
'use client';
import usePostBlog from '@/hooks/usePostBlog';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const RecentBlogSection = dynamic(
  () => import('../content/RecentBlogSection'),
  {
    ssr: true
  }
);
const InterestedBlogs = dynamic(() => import('../content/InterestedBlogs'), {
  ssr: true
});
const PostCard = dynamic(() => import('@/components/common/post/PostCard'), {
  ssr: false
});
import NewBlog from '../common/NewBlog';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import { language } from '@/context/LanguageContext';

const BlogSection = () => {
  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `BlogPage-${language}`
    });
  }, []);

  const {
    isLoading,
    data: postBlogData,
    firstBlog,
    dataSearch
  } = usePostBlog();

  return (
    <div className="w-full">
      <div className="py-6">
        <div className="mx-auto px-5 xl:px-10">
          <div className="container mx-auto relative lg:grid lg:grid-cols-2 lg:gap-12">
            <NewBlog firstBlog={firstBlog} />

            <div className="w-full mt-12 lg:mt-0">
              <div className="hidden lg:block">
                {postBlogData?.length > 0 && (
                  <RecentBlogSection data={postBlogData?.slice(1, 5)} />
                )}
              </div>
              <div className="lg:hidden flex flex-col gap-10">
                {postBlogData?.map((item: any) => (
                  <div key={item.title}>
                    <PostCard {...item?.attributes} hasSocialIcons />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col xl:flex-row gap-14 mx-auto px-5 ml:px-10 lg:mt-16 mb-10`}
      >
        <div className="w-full container mx-auto ">
          {/* <div className="relative container w-full mx-auto mb-20 flex justify-start">
                <div className={`search-bar  expanded`}>
                  <input
                    type="text"
                    className={`block w-full p-3.5 pl-12 text-sm placeholder-[#A0A0A0] border border-[#8E4985] rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Search everyone"
                    onChange={handlerSearchInput}
                  />
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
              </div> */}

          <div className="grid gap-10">
            {dataSearch?.length > 0 &&
              dataSearch?.map((item: any) => (
                <div key={item.title}>
                  <PostCard {...item?.attributes} hasSocialIcons />
                </div>
              ))}
            {dataSearch?.length === 0 && (
              <div className="h-[40vh] flex items-center justify-center">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
                  <h1 className="text-3xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2">
                    Empty
                  </h1>
                  <p className="text-gray-600">
                    Sorry, the blog you are looking for does not exist.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 xl:px-10">
        <div className="container mx-auto">
          {postBlogData && (
            <InterestedBlogs data={postBlogData} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
