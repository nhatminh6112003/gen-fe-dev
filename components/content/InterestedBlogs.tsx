import Link from 'next/link';
import HoverScaleAnimation from '@/components/utils/HoverScaleAnimation';
import AnimationContainer from '../utils/AnimationContainer';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import BlogBannerSkeleton from '../ui/skeleton/BlogBannerSkeleton';
import { language } from '@/context/LanguageContext';

const formatDate = (inputDate?: string) => {
  let formattedDate = '';
  if (inputDate) {
    const dateObject = parseISO(inputDate);
    formattedDate = format(dateObject, 'MMMM dd, yyyy');
  }
  return formattedDate;
};

const InterestedBlogs = ({
  data,
  isLoading
}: {
  data: any;
  isLoading?: boolean;
}) => {
  return (
    <AnimationContainer horizontal>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div>
          {data.length > 0 && (
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Maybe you are interested
              </h2>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-12">
            {isLoading ? (
              <>
                <BlogBannerSkeleton />
                <BlogBannerSkeleton />
                <BlogBannerSkeleton />
              </>
            ) : (
              <>
                {data?.map((post: any) => (
                  <HoverScaleAnimation key={post?.attributes?.title}>
                    <Link
                      href={`/${language}/blog/${post?.attributes?.slug}`}
                      className="flex flex-col overflow-hidden rounded-[2rem] border bg-white"
                    >
                      <div className="group relative block  h-40 overflow-hidden bg-gray-100 md:h-64">
                        <Image
                          src={post?.attributes?.image}
                          loading="eager"
                          alt=""
                          className="absolute aspect-square object-cover inset-0 h-full w-full rounded-xl transition duration-200 group-hover:scale-110"
                          width={480}
                          height={339}
                        />
                      </div>

                      <div className="flex flex-1 gap-2 md:gap-4 flex-col p-4 sm:p-6">
                        <p className="text-base text-[#525252]">
                          {formatDate(post?.attributes?.updatedAt)}
                        </p>
                        <h2 className="text-lg xl:text-2xl font-semibold text-secondary">
                          {post?.attributes?.title}
                        </h2>
                        <p className="text-[#000] text-sm xl:text-base text-ellipsis line-clamp-3">
                          {post?.attributes?.content}
                        </p>
                      </div>
                    </Link>
                  </HoverScaleAnimation>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default InterestedBlogs;
