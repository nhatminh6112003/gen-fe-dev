import type {} from '@/types';
import { api } from '.';

interface Query {}

interface Body {
  email: string;
}

export default async function post(body: Body) {
  try {
    const { data }: any = await api.post<Query>(`/subscribes`, {
      data: body
    });
    return data;
  } catch (error) {
    throw error;
  }
}
