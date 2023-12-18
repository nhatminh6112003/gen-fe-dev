import type {} from '@/types';
import qs from 'query-string';
import { api } from '.';

interface Query {}

export interface Params {
  locale: string;
  populate?: string;
}
export default async function get(params: Params) {
  const { data }: any = await api.get<Query>(
    `/about-us?${qs.stringify(params)}`
  );

  return data?.data?.attributes;
}
