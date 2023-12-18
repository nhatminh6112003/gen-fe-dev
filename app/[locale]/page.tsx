import genMeta from '@/utils/fetchSeo';
import { Metadata } from 'next';
import HomeSection from '@/components/sections/HomeSection';

const HomePage = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <HomeSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/');
}

export default HomePage;
