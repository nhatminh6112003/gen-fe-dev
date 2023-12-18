'use client';
import dynamic from 'next/dynamic';
import Header from '@/components/ui/Header';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Footer from '@/components/ui/Footer';
import { useLanguage } from '@/context/LanguageContext';
const langs = [
  'en',
  'vn',
  'pl',
  'el',
  'fr',
  'th',
  'es',
  'ja',
  'zh',
  'ar',
  'tr',
  'de'
];

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const pageName = pathName?.split('/')[2] ? `/${pathName?.split('/')[2]}` : '';
  const { language } = useLanguage();

  return (
    <html>
      <link rel="icon" href="/genemb_favicons/favicon.ico" sizes="32x32" />
      <link rel="canonical" href={`https://www.genembryomics.com${pathName}`} />
      {langs.map((e, i) => {
        if (e === language) {
          return (
            <Fragment key={i}>
              <link
                rel="alternate"
                hrefLang={e}
                href={`https://www.genembryomics.com/${e}${pageName}`}
              />
            </Fragment>
          );
        }
      })}
      <link rel="icon" href="/genemb_favicons/icon.svg" type="image/svg+xml" />
      <link
        rel="apple-touch-icon"
        href="/genemb_favicons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/genemb_favicons/manifest.webmanifest" />

      <body className="transition ease relative">
        <Header />
        <main className="h-[100vh] w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Template;
