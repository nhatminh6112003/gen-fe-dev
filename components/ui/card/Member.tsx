/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useDevice from '@/hooks/useDevice';

interface IMemberCardProps {
  memberName: string;
  description: string;
  image: string;
  title: string;
}

const MemberCard: FC<IMemberCardProps> = ({
  memberName,
  description,
  image,
  title
}) => {
  const { isMobile } = useDevice();

  return (
    <motion.div
      className="body-font mx-4  md:mx-10 px-4 h-full rounded-3xl overflow-hidden shadow-md shadow-blue-light  "
      whileHover={{ scale: [null, 1.05, 1.05] }}
      transition={{ duration: 0.3 }}
    >
      <div className=" mx-2 md:mx-10 flex flex-col items-center justify-center bg-[#BAEAFC] rounded-t-[140px] mb-4">
        <div className="w-3/4 md:w-full ">
          <Image
            className="w-full pt-12 object-fill object-center z-10 "
            loading="lazy"
            src={image}
            alt="Team images"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className=" md:py-3">
        <h1 className="text-xl font-bold line-clamp-2 overflow-ellipsis">
          {memberName}
        </h1>
        <p className="text-xl mb-3 line-clamp-2 overflow-ellipsis">{title}</p>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          className="text-xs md:text-sm leading-relaxed mb-3"
        >
          {description}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default MemberCard;
