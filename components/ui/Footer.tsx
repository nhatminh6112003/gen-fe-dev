'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import useFooter from '@/hooks/useFooter';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const { data } = useFooter({
    locale: language,
    populate: 'deep'
  });

  return (
    <footer className="container px-5 mx-auto text-center lg:text-left w-full lg:flex flex-col justify-center items-center text-lg">
      <AnimationContainer className="lg:w-full">
        <div className="py-12 border-b">
          <div className="container mx-auto xl:px-0 text-center">
            {data?.logoUrl && (
              <Image
                loading="eager"
                src={data.logoUrl}
                width={100}
                height={70}
                alt="logo"
                className="mx-auto mb-3"
              />
            )}
            <p className="text-secondary text-2xl lg:text-4xl mb-10 lg:mb-16">
              {data?.footerTitle}
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-8 gap-5 md:gap-2  text-sm font-medium text-blue-gray">
              {data?.categoryFooter?.map((categoryFooter: any) => (
                <li key={categoryFooter?.id}>
                  {categoryFooter?.link && (
                    <Link
                      className=" hover:text-primary uppercase"
                      href={`/${language}/${categoryFooter?.link}`}
                    >
                      {categoryFooter?.categoryTitle}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full py-4 lg:py-8 lg:text-xl text-secondary">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-center gap-4 lg:gap-0">
            <span>{data?.license}</span>
            <Link
              href="https://compliancy-group.com/"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                width={50}
                height={50}
                src="https://strapi-upload-images-bucket.s3.ap-southeast-2.amazonaws.com/HIPAA_Seal_of_Compliance_Hi_res_400x212_png_7bb4a638e8.webp"
                alt="Compliance Seal"
                loading="lazy"
              />
            </Link>

            <div className="hidden lg:flex gap-3 items-center">
              <span>{data?.emailSupporter}</span>
              {data?.twitterLink && (
                <Link href={data?.twitterLink}>
                  <NextImage
                    width={21}
                    height={17}
                    src="/images/twitter.png"
                    alt="Twitter Logo"
                  />
                </Link>
              )}
              {data?.instagramLink && (
                <Link href={data?.instagramLink}>
                  <NextImage
                    width={25}
                    height={25}
                    src="/images/instagram.png"
                    alt="Instagram Logo"
                  />
                </Link>
              )}
              {data?.facebookLin && (
                <Link href={data?.facebookLink}>
                  <NextImage
                    width={25}
                    height={25}
                    src="/images/facebook.png"
                    alt="Facebook Logo"
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="lg:hidden text-secondary flex gap-3 items-center justify-center mt-4">
            <span>{data?.emailSupporter}</span>
            {data?.twitterLink && (
              <Link href={data?.twitterLink}>
                <NextImage
                  width={21}
                  height={17}
                  src="/images/twitter.png"
                  alt="Twitter Logo"
                />
              </Link>
            )}
            {data?.instagramLink && (
              <Link href={data?.instagramLink}>
                <NextImage
                  width={25}
                  height={25}
                  src="/images/instagram.png"
                  alt="Instagram Logo"
                />
              </Link>
            )}
            {data?.facebookLink && (
              <Link href={data?.facebookLink}>
                <NextImage
                  width={25}
                  height={25}
                  src="/images/facebook.png"
                  alt="Facebook Logo"
                />
              </Link>
            )}
          </div>
        </div>
      </AnimationContainer>
    </footer>
  );
};

export default Footer;
