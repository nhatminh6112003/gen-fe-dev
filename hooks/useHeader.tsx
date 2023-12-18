import { useQuery } from 'react-query';
import fetch from '@/service/get-header';
import { ApiContentParams } from '@/types';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function useHook(params: ApiContentParams) {
  return useQuery(['header-content', params], () => fetch(params), {
    staleTime: FIVE_MINUTES_IN_MS,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false
  });
}
