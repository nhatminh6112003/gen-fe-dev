import genMeta from '@/utils/fetchSeo';
import { Metadata } from 'next';
import HIWClinicSection from '@/components/sections/HIWClinic';

const HIW = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <HIWClinicSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/how-it-works-clinic');
}

export default HIW;
