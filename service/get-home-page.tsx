import type { ApiContentParams, Attributes } from '@/types';
import qs from 'query-string';
import { api } from '.';

interface Query {}

export default async function get(
  params: ApiContentParams
): Promise<Attributes> {
  const data: any = await api.get<Query>(`/homepage?${qs.stringify(params)}`);
  return data?.data?.data?.attributes;
}
