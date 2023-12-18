import InvestorsSection from '@/components/sections/InvestorsSection';
import { Metadata } from 'next';
import genMeta from '@/utils/fetchSeo';

const InvestorPage = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <InvestorsSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/investors');
}

export default InvestorPage;
