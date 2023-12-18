import Image from 'next/image';
import MarkDown from './MarkDown';

const BlogBanner = ({
  image,
  topic,
  title,
  content
}: {
  image: string;
  topic: string;
  content: string;
  title: string;
}) => {
  return (
    <div className="p-5 rounded-xl bg-slate-50 h-full flex flex-col gap-8">
      <Image
        src={image}
        alt=""
        height={400}
        width={400}
        className="h-96 w-full object-cover rounded-xl"
      />
      <div>
        <p className="text-sm lg:text-base mb-2">{topic}</p>
        <p className="text-2xl xl:text-4xl font-bold">{title}</p>
      </div>
      <MarkDown title={content} />
    </div>
  );
};

export default BlogBanner;
