import qs from 'query-string';
import { api } from '.';
import { ApiContentParams } from '@/types';

export interface Query {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string | null;
      keywords: string | null;
      type: string | null;
      locale: string;
      meta: string;
      page: string;
    };
  }[];
}

export default async function getSeo(params: ApiContentParams) {
  const { data } = await api.get<Query>(`/seos?${qs.stringify(params)}`);

  return data?.data;
}
