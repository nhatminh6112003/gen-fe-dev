import PostCard, { IPostItemProps } from '@/components/common/post/PostCard';
import AnimationContainer from '@/components/utils/AnimationContainer';
import ShadowContainer from '@/components/utils/ShadowContainer';
import BlogSkeleton from '../ui/skeleton/BlogSkeleton';

const RecentBlog = ({
  data,
  isLoading
}: {
  data: IPostItemProps[];
  isLoading?: boolean;
}) => {
  return (
    <ShadowContainer className="rounded-md bg-slate-50">
      <AnimationContainer className="px-5 py-5">
        <h2 className="font-bold text-2xl tracking-tight pb-5 mb-5 border-b text-center">
          Recent Blog
        </h2>
        <div className="overflow-y-auto">
          {!isLoading ? (
            <div className="flex flex-col gap-5">
              {data?.map((item: any) => (
                <div
                  key={item?.id}
                  className="overflow-x-hidden overflow-y-hidden border-b"
                >
                  <PostCard
                    {...item?.attributes}
                    noImage
                    hasSocialIcons
                    size="medium"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <BlogSkeleton noImage />
              <BlogSkeleton noImage />
            </div>
          )}
        </div>
      </AnimationContainer>
    </ShadowContainer>
  );
};

export default RecentBlog;
