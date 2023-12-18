import { api } from '.';

interface Query {}

export default async function get() {
  const { data }: any = await api.get<Query>(`/languages`);
  return data?.data;
}
