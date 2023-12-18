import TermOfUseSection from '@/components/sections/TermsOfUseSection';
import { Metadata } from 'next';
import genMeta from '@/utils/fetchSeo';

const PrivacyPage = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <TermOfUseSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/terms-of-use');
}

export default PrivacyPage;
