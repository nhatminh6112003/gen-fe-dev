import type { ApiContentParams } from '@/types';
import qs from 'query-string';
import { api } from '.';

export interface Query {}

export default async function get(params: ApiContentParams, type?: string) {
  const paramsUrl = {
    ...params,
    'filters[faq_page][page][$eq]': type,
    sort: 'index'
  };
  const { data } = await api.get<Query>(`/faqs?${qs.stringify(paramsUrl)}`);

  return data;
}
