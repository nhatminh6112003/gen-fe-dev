'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import useFormSubscribePost from '@/hooks/useSubscribePost';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../icons/Loading';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';
import { useLanguage } from '@/context/LanguageContext';

const { sendEmail } = require('@/service/email-sender');
interface ISubscribeNow {
  buttonLink?: string;
  buttonTitle?: string;
  title?: string;
  placeholder?: string;
}

const SubscribeNow: FC<ISubscribeNow> = ({
  buttonLink,
  buttonTitle,
  title,
  placeholder
}) => {
  const [email, setEmail] = useState<string>('');
  const { language } = useLanguage();
  const sendMailAction = () => {
    sendEmail({ email });
  };

  const mutation = useFormSubscribePost(
    {
      email
    },
    {
      onSuccess: () => {
        toast.success('Your email was sent successfully!', {
          className: 'rounded-xl p-3'
        });
        sendMailAction();
      },
      onError: () => {
        toast.error('Something went wrong. Please try again.', {
          className: 'rounded-xl p-3'
        });
      }
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    logAnalyticsEvent('screen_view', {
      screen_name: `SubscribeNow-${language}`
    });

    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <ToastContainer />
      <form
        className="container w-full mx-auto px-5 lg:px-0"
        onSubmit={handleSubmit}
      >
        <div
          className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat py-10 lg:py-20 rounded-3xl lg:rounded-[80px]"
          style={{ backgroundImage: 'url(/images/subscribe-bg2.jpeg)' }}
        >
          <div className="px-5 w-full lg:w-1/2">
            <p className="text-2xl lg:text-3xl font-bold text-white text-center mb-5 lg:mb-8">
              {title || 'Subscribe Now for Get Special Features!'}
            </p>
            <div className="px-5 relative flex gap-3 lg:gap-0 items-center">
              <input
                type="text"
                placeholder={placeholder}
                name="email"
                value={email}
                className="w-full py-3 lg:py-8 pl-5 lg:pr-[25%] rounded-xl outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button
                className="hidden lg:flex gap-3 items-center p-4 rounded-xl bg-blue-400 absolute right-10 lg:right-10 text-white font-bold"
                type="submit"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <Loading />
                ) : (
                  <>
                    {buttonTitle || 'Submit'}
                    <Image
                      src="/images/submit.png"
                      alt="submit icon"
                      width={25}
                      height={14}
                      loading="eager"
                    />
                  </>
                )}
              </button>
              <button
                type="submit"
                className="lg:hidden gap-3 items-center p-4 rounded-xl bg-blue-400 text-white font-bold"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <Loading />
                ) : (
                  <Image
                    src="/images/submit.png"
                    alt=""
                    loading="eager"
                    width={25}
                    height={14}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SubscribeNow;
