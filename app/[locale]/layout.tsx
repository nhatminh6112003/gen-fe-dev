'use client';
import 'styles/globals.css';
import 'styles/swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate
} from 'react-query';
import { QueryParamProvider } from 'use-query-params';
import NextAdapterApp from 'next-query-params/app';

const getQueryClient = new QueryClient();
const dehydratedState = dehydrate(getQueryClient);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={getQueryClient}>
      <QueryParamProvider adapter={NextAdapterApp}>
        <Hydrate state={dehydratedState}>{children}</Hydrate>
      </QueryParamProvider>
    </QueryClientProvider>
  );
};

export default Layout;
