import { useQuery } from 'react-query';
import fetch from '@/service/get-languages';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function useLanguageSelector() {
  return useQuery(['languages-content'], () => fetch(), {
    staleTime: FIVE_MINUTES_IN_MS,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false
  });
}
