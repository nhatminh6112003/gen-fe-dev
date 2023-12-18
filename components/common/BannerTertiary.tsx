/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import Image from 'next/image';

interface IBannerProps {
  title?: string;
  image?: string | any;
  description?: string;
  btnText?: string;
  btnLink?: string;
  listDescription?: {
    image: string;
    description: string;
  }[];
}

const BannerTertiary: FC<IBannerProps> = ({
  title = '',
  image,
  btnText,
  btnLink,
  listDescription
}) => {
  const router = useRouter();

  const onClick = () => router.push(btnLink || '');
  return (
    <div className="w-full relative shadow-md shadow-blue-light xl:h-[600px]">
      <div className="flex justify-end w-full h-[40vw] xl:h-[600px]">
        <Image
          src={image}
          className="w-full object-cover object-right xl:object-center"
          alt=""
          width={image ? 400 : 100}
          height={image ? 400 : 100}
          loading="eager"
        />
      </div>

      <div className="bg-[#F8FCFD] xl:bg-inherit xl:absolute top-10 right-0 left-0 xl:container mx-auto px-5 lg:px-0 py-5 xl:py-0">
        <div className="xl:w-3/5 sm:px-5 md:px-20 xl:px-0 pb-14 xl:pb-0">
          <h2 className="text-center lg:text-left text-3xl xl:text-5xl font-bold text-secondary mb-6 my-10">
            {title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {listDescription?.map((item, i) => (
              <div
                key={i}
                className="bg-white py-4 px-8 flex flex-col gap-3 border shadow-md shadow-blue-light h-full rounded-xl"
              >
                <Image
                  src={item?.image}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="text-base text-ellipsis line-clamp-5"
                >
                  {item.description}
                </ReactMarkdown>
              </div>
            ))}
          </div>
          {btnText && <Button label={btnText} onClick={onClick} />}
        </div>
      </div>
    </div>
  );
};

export default BannerTertiary;
