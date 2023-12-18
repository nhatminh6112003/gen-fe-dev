/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

interface SocialMediaBlockProps {
  size: number;
  twitterLink?: string;
  linkedInLink?: string;
  facebookLink?: string;
  telegramLink?: string;
}

const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({
  size,
  facebookLink,
  linkedInLink,
  telegramLink,
  twitterLink
}) => {
  return (
    <div>
      <div className="flex justify-center gap-3 md:gap-4">
        {facebookLink && (
          <Link href={facebookLink}>
            <NextImage
              src="/images/social/facebook.png"
              alt="Facebook Logo"
              style={{ width: size }}
              width={32}
              height={32}
            />
          </Link>
        )}

        {twitterLink && (
          <Link href={twitterLink}>
            <NextImage
              src="/images/social/twitter.png"
              alt="Twitter Logo"
              style={{ width: size }}
              width={32}
              height={32}
            />
          </Link>
        )}

        {linkedInLink && (
          <Link href={linkedInLink}>
            <NextImage
              src="/images/social/linkedin.png"
              alt="Linkedin Logo"
              style={{ width: size }}
              width={32}
              height={32}
            />
          </Link>
        )}

        {telegramLink && (
          <Link href={telegramLink}>
            <NextImage
              src="/images/social/telegram.png"
              alt="Telegram Logo"
              style={{ width: size }}
              width={32}
              height={32}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialMediaBlock;
