import { useQuery } from 'react-query';

import fetch from '@/service/get-seo';
import { ApiContentParams } from '@/types';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function useSeo(params: ApiContentParams) {
  return useQuery(['seo', params], () => fetch(params), {
    keepPreviousData: false,
    staleTime: FIVE_MINUTES_IN_MS,
    retry: false,
    refetchOnMount: false
  });
}
