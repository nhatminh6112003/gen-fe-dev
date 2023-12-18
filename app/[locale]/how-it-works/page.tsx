import { Metadata } from 'next';
import genMeta from '@/utils/fetchSeo';
import HIWSection from '@/components/sections/HIWSection';

export type HIWContent = {
  banner?: {
    cardSection?: any;
    backgroundImage?: string;
    title?: string;
  };
  theProductSection?: any;
  listTitleSection?: any;
  simpleTitleSection?: {
    title?: string;
    subTitle?: string;
  };
  howToMakeSection?: any;
  simpleTitleWithSubSection?: any;
  contactSection?: any;
  formContactData?: any;
  formSubscribeSection?: any;
  faqsData?: any;
};

const HIW = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <HIWSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/how-it-works');
}

export default HIW;
