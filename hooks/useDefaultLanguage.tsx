import { useQuery } from 'react-query';
import fetch from '@/service/get-default-language';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function useHook() {
  return useQuery(['get-default-language'], () => fetch(), {
    staleTime: FIVE_MINUTES_IN_MS,
    keepPreviousData: true,
    retry: false
  });
}
