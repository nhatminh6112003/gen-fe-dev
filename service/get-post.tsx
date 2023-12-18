import type { ApiContentParams } from '@/types';
import qs from 'query-string';
import { api } from '.';

export interface Query {}

export default async function get(params: ApiContentParams) {
  const { data }: any = await api.get<Query>(`/posts?${qs.stringify(params)}`);

  return data?.data;
}
