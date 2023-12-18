import { useQuery } from 'react-query';
import fetch from '@/service/get-footer';
import { ApiContentParams } from '@/types';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function useFooter(params: ApiContentParams) {
  return useQuery(['footer-content', params], () => fetch(params), {
    staleTime: FIVE_MINUTES_IN_MS,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false
  });
}
