import type { ApiContentParams } from '@/types';
import qs from 'query-string';
import { api } from '.';

interface Query {}

export default async function get(params: ApiContentParams) {
  const { data }: any = await api.get<Query>(`/blog?${qs.stringify(params)}`);

  return data?.data?.attributes;
}
