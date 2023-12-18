import { useQuery } from 'react-query';
import { api } from '@/service';
import qs from 'query-string';
import { Query } from '@/service/get-post';
import { ApiContentParams } from '@/types';

const getPost = async (params: any) => {
  let url = `/posts?${qs.stringify(params)}`;

  if (params.title?.trim() !== '' && params.title !== undefined) {
    const title = params.title;
    url = url + `&filters[title][$containsi]=${title}`;
  }

  const { data }: any = await api.get<Query>(url);
  return data?.data;
};

export const useQueryPost = (params: ApiContentParams) => {
  return useQuery({
    queryKey: ['get-post', params],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: () => getPost(params)
  });
};
