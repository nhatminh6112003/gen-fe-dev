import { ApiContentParams } from '@/types';
import { useQueryPost } from '@/hooks/services/useBlog.service';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter, useSearchParams } from 'next/navigation';

export default function usePostBlog() {
  const { language } = useLanguage();

  const router = useRouter();

  const params = {
    locale: language,
    populate: 'deep'
  };

  const [queryOptions, setQueryOptions] = useState<ApiContentParams>(params);
  const { data, isLoading, refetch } = useQueryPost(params);

  const { data: dataSearch, isLoading: isLoadingSearch } =
    useQueryPost(queryOptions);

  const searchParams = useSearchParams();

  const handlerAddSearch = (event: any) => {
    if (event.key !== 'Enter') {
      return;
    }
    router.replace(`/blog?query=${event.target.value}`);
  };

  const firstBlog = useMemo(
    () => (Array.isArray(data) && data?.length > 0 ? data[0] : null),
    [data]
  );

  const query = searchParams?.get('query');

  const hasQueryParams = query?.length;

  const handlerSearchInput = (e: any) => {
    if (e.key !== 'Enter') {
      return;
    }
    setQueryOptions((prevState) => {
      return {
        ...prevState,
        title: e?.target?.value
      };
    });
  };

  return {
    data,
    isLoading,
    refetch,
    firstBlog,
    query,
    hasQueryParams,
    dataSearch,
    isLoadingSearch,
    handlerSearchInput,
    handlerAddSearch
  };
}
