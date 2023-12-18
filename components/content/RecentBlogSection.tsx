import PostCardBanner, {
  IPostItemProps
} from '@/components/common/post/PostCardBanner';
import AnimationContainer from '@/components/utils/AnimationContainer';

const RecentBlogSection = ({ data }: { data: IPostItemProps[] }) => {
  return (
    <AnimationContainer>
      <div className="overflow-y-auto">
        <div className="grid gap-10 lg:gap-0">
          {data?.map((item: any) => (
            <div
              key={item?.id}
              className="overflow-x-hidden overflow-y-hidden lg:border-b"
            >
              <PostCardBanner
                {...item?.attributes}
                hasSocialIcons
                size="medium"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default RecentBlogSection;
