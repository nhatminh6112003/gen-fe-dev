/* eslint-disable @next/next/no-img-element */
'use client';
import { language } from '@/context/LanguageContext';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface IFAQItem {
  question?: string;
  answer?: any;
}
interface IFAQsSectionProps {
  bgColor?: string;
  data?: any;
}

const FAQsSection: FC<IFAQsSectionProps> = ({ bgColor, data }) => {
  const [active, setActive] = useState(-1);

  const mapContentFaqs = useMemo(() => {
    if (data?.data?.length) {
      return data?.data.map(({ attributes: { question, answer } }: any) => ({
        question,
        answer
      }));
    }
    return [];
  }, [data]);

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', overflow: 'hidden', marginTop: '14px' },
    closed: { opacity: 0, height: 0, overflow: 'hidden' }
  };
  const onActive = (idx: number) => setActive(idx === active ? -1 : idx);

  useEffect(() => {
    logAnalyticsEvent('screen_view', {
      screen_name: `FAQSPage-${language}`
    });
  }, []);

  return (
    <div className="container mx-auto px-5 lg:px-0" id="faq">
      <div
        style={{ backgroundColor: bgColor }}
        className={`w-full p-3 lg:p-10 rounded-3xl shadow-lg shadow-blue-light`}
      >
        <h2
          style={{ fontWeight: '700' }}
          className="mb-5 lg:mb-10  text-2xl lg:text-4xl  mx-auto text-center"
        >
          Frequently asked questions
        </h2>
        <div className="bg-white p-3 lg:p-6 rounded-2xl">
          {mapContentFaqs?.map((item: IFAQItem, idx: number) => (
            <div key={idx} className={`relative border-b pb-6 mb-6`}>
              <div className="flex justify-between">
                <div
                  onClick={() => onActive(idx)}
                  className="cursor-pointer lg:pr-12 w-full pr-5"
                >
                  {item.question && (
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      className={`mb-2 text-base lg:text-xl font-medium`}
                    >
                      {item.question}
                    </ReactMarkdown>
                  )}
                </div>
                <div
                  onClick={() => onActive(idx)}
                  className="absolute right-0 lg:right-6 cursor-pointer w-[25px] h-[25px]"
                >
                  <Image
                    loading="eager"
                    className={`w-full h-[25px] ${
                      active === idx && 'rotate-180'
                    }`}
                    src={`/images/arrow-down.png`}
                    alt="arrow down icon"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <motion.div
                initial="closed"
                animate={active === idx ? 'open' : 'closed'}
                variants={dropdownVariants}
                transition={{ duration: 0.3 }}
              >
                <div className="whitespace-pre-line	">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {item?.answer}
                  </ReactMarkdown>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
