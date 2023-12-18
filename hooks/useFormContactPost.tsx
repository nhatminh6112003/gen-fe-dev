import { useMutation } from 'react-query';
import fetch from '@/service/post-form-contact';

interface Body {
  name: string;
  email: string;
  phone: string;
  message: string;
  question: string;
  locale: string;
}

export default function useHook(body: Body, option?: any) {
  return useMutation(['form-contact-post', body], () => fetch(body), option);
}
