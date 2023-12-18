import genMeta from '@/utils/fetchSeo';
import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';

const About = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <AboutSection />;
};

export function generateMetadata(): Promise<Metadata> {
  return genMeta('/about-us');
}

export default About;
