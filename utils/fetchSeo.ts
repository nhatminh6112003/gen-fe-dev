import { language } from '@/context/LanguageContext';
import getSeo from '@/service/get-seo';
import { Metadata } from 'next/types';
// import { getPathname } from './getPathname';
// import { headers } from 'next/headers';

async function genMeta(path: string): Promise<Metadata> {
  const data = await getSeo({ locale: language });
  //   const headersList = headers();
  //   const pathname: any = headersList.get('x-invoke-path');

  const seo = data?.find((e) => e.attributes.page === path)?.attributes;

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords
  };
}

export default genMeta;
