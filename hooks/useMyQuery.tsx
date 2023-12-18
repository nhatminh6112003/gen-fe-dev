import { UseQueryOptions, useQuery } from 'react-query';
type CustomQueryOptions<TData, TError> = UseQueryOptions<TData, TError> & {
  cacheTime?: number;
};
const useCustomQuery =<TData, TError = unknown>  (
  queryKey: string,
  queryFn: () => Promise<TData>,
) => {
  const defaultOptions = {
    cacheTime: Infinity,
  };

  return useQuery(queryKey, queryFn, defaultOptions);
};

export default useCustomQuery;
