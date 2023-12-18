/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-sync-scripts */

import useSeo from '@/hooks/useSeo';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useMemo } from 'react';

export interface MetaType {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
}
export interface HeadContextType {
  meta: MetaType;
  updateMeta: (meta: MetaType) => void;
}

const HeadContext = createContext<HeadContextType>({
  meta: {
    title: `Genembryomics`,
    description: `Genembryomics`,
    keywords: '',
    type: 'website'
  },
  updateMeta: () => {}
});

const HeadProvider: React.FC<any> = ({ children }) => {
  const pathName: any = usePathname();
  const newPathname = useMemo(
    () => (pathName?.length > 3 ? pathName?.substring(3) : '/'),
    [pathName]
  );

  const { data } = useSeo({ locale: pathName.split('/')[1] });

  const currentAttribute = data?.find(
    (e) => e.attributes.page === newPathname
  )?.attributes;

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/tab-icon.svg" />
      <meta
        name="msapplication-TileImage"
        content="https://www.genembryomics.com/wp-content/uploads/2022/06/favicon.png"
      ></meta>
      <title>{`${currentAttribute?.title} | Genembryomics`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      {currentAttribute?.description && (
        <meta content={currentAttribute?.description} name="description" />
      )}
      {currentAttribute?.keywords && (
        <meta name="keywords" content={currentAttribute.keywords} />
      )}
      {currentAttribute?.type && (
        <meta property="og:type" content={currentAttribute.type} />
      )}
      {currentAttribute?.description && (
        <meta
          property="og:description"
          content={currentAttribute?.description}
        />
      )}
      {currentAttribute?.title && (
        <meta property="og:title" content={currentAttribute.title} />
      )}
    </head>
  );
};

export default HeadProvider;

export const useHeadContext = (): HeadContextType => useContext(HeadContext);
