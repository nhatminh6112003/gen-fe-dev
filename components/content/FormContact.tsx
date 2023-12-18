'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import useFormContactPost from '@/hooks/useFormContactPost';
import Loading from '../icons/Loading';
import { sendEmail } from '@/pages/api/mailer';
import { useLanguage } from '@/context/LanguageContext';
import logAnalyticsEvent from '@/utils/logAnalyticsEvent';

const FormContact = (data: any) => {
  const { language } = useLanguage();
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const sendMailAction = () => {
    sendEmail({ email, name, note: message, type: selectedQuestion });
  };

  const mutation = useFormContactPost(
    {
      name,
      email,
      phone: '',
      message,
      question: selectedQuestion,
      locale: language
    },
    {
      onSuccess: () => {
        console.log('ok');

        toast.success(
          data?.successMessage || 'Your message was sent successfully!',
          {
            className: 'rounded-xl p-3'
          }
        );
        // sendMailAction();
      },
      onError: () => {
        toast.error(
          data?.errorMessage || 'Something went wrong. Please try again.',
          {
            className: 'rounded-xl p-3'
          }
        );
      }
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    logAnalyticsEvent('screen_view', {
      screen_name: `FormContact-${language}`
    });
    e.preventDefault();
    if (!mutation.isLoading) {
      mutation.mutate();
    }
  };

  const mapQuestions = useMemo(() => {
    if (data?.question?.length) {
      return data?.question?.map((item: any) => item.value);
    }
    return [];
  }, [data]);

  return (
    <>
      <ToastContainer />
      <div className="p-8 w-full bg-white">
        <h2 className="mb-9 text-2xl lg:text-4xl font-bold text-secondary">
          {data?.formTitle}
        </h2>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div>
            <p className="text-base	text-[#4A4A4A] font-medium mb-2.5">
              {data?.inputNameTitle}
            </p>
            <Input
              placeholder={data?.inputNameDefault}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p className="text-base	text-[#4A4A4A] font-medium mb-2.5">
              {data?.inputEmailTitle}
            </p>
            <Input
              type="email"
              placeholder={data?.inputEmailDefault}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="text-base	text-[#4A4A4A] font-medium mb-2.5">
              {data?.questionInputTitle}
            </p>
            <Dropdown
              value={selectedQuestion}
              options={mapQuestions}
              handleSelectQuestions={(option) =>
                setSelectedQuestion(option || '')
              }
            />
          </div>

          <div>
            <p className="text-base	text-[#4A4A4A] font-medium mb-2.5">
              {data?.noteInputTitle}
            </p>
            <textarea
              className="w-full border p-3 outline-none focus-within:border-secondary text-sm md:text-base"
              placeholder={data?.noteInputDefault}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            disabled={mutation.isLoading}
            className="mr-auto w-fit px-8 py-3.5 rounded-full text-white text-lg whitespace-nowrap bg-gradient-to-b from-[#A975A2] to-[#8E4A86]"
          >
            {mutation.isLoading ? <Loading /> : <>{data?.buttonTitle}</>}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormContact;
