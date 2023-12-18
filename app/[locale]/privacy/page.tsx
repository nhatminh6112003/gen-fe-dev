import PrivacySection from '@/components/sections/PrivacySection';
import { Metadata } from 'next';
import genMeta from '@/utils/fetchSeo';

const PrivacyPage = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <PrivacySection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/privacy');
}

export default PrivacySection;
