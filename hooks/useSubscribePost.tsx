import { useMutation } from 'react-query';
import fetch from '@/service/post-form-subscribe';

interface Body {
  email: string;
}

export default function useHook(body: Body, option?: any) {
  return useMutation(['form-subscribe-post', body], () => fetch(body), option);
}
