import type { ApiContentParams } from '@/types';
import qs from 'query-string';
import { api } from '.';

export interface Query {}

export default async function getPostDetail(params: ApiContentParams) {
  const { data }: any = await api.get<Query>(
    `/posts?${qs.stringify({ ...params, 'filters[slug]': params.slug })}`
  );

  return data?.data[0]?.attributes;
}
