'use client';
import ShadowContainer from '@/components/utils/ShadowContainer';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton
} from 'next-share';
import { usePathname } from 'next/navigation';

interface IStayInTouchProps {
  quote?: string;
  data: any;
}

const StayInTouch: React.FC<IStayInTouchProps> = ({ quote }) => {
  const pathname = usePathname();
  const fullUrl = `${global?.window?.location.host}${pathname}`;
  console.log(fullUrl);

  return (
    <ShadowContainer className="rounded-md bg-slate-50">
      <div className="p-5">
        <h2 className="font-bold text-2xl tracking-tight mb-8 text-center">
          Stay in Touch
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '17px' }}>
          <FacebookShareButton url={fullUrl} title={quote}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={fullUrl} title={quote}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={fullUrl} title={quote}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TelegramShareButton url={fullUrl} title={quote}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </div>
    </ShadowContainer>
  );
};

export default StayInTouch;
