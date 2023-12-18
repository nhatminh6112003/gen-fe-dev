'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PostCardBanner from '../common/post/PostCardBanner';

const NewBlog = ({ firstBlog }: { firstBlog: any }) => {
  const { language } = useLanguage();

  return (
    <Link
      href={`/${language}/blog/${firstBlog?.attributes?.slug}`}
      className="overflow-hidden w-full"
    >
      {firstBlog?.attributes?.image && (
        <Image
          loading="eager"
          src={firstBlog?.attributes?.image}
          width={826}
          height={738}
          alt="first blog image"
          className=" rounded-xl aspect-square object-cover lg:object-center mt-5 inset-0 h-80 md:h-[520px] lg:h-[544px] w-full mx-auto transition duration-200 group-hover:scale-110"
        />
      )}

      <PostCardBanner
        {...firstBlog?.attributes}
        noImage
        className="hidden xl:block absolute top-[400px] left-28 w-1/3 mx-auto rounded-xl"
      />
    </Link>
  );
};

export default NewBlog;
