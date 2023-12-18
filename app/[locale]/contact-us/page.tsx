import ContactUsSection from '@/components/sections/ContactUsSection';
import genMeta from '@/utils/fetchSeo';
import { Metadata } from 'next';

const ContactUs = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <ContactUsSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/contact-us');
}

export default ContactUs;
