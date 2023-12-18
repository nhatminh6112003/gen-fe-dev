import { useQuery } from 'react-query';

import fetch from '@/service/get-post-detail';
import { ApiContentParams } from '@/types';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function usePostDetail(params: ApiContentParams) {
  return useQuery(['post-detail', params], () => fetch(params), {
    staleTime: FIVE_MINUTES_IN_MS,
    keepPreviousData: true,
    retry: false
  });
}
