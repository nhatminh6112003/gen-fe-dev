/* eslint-disable @next/next/no-img-element */
import BlogSection from '@/components/sections/BlogSection';
import genMeta from '@/utils/fetchSeo';
import { Metadata } from 'next';

const Blog = ({
  params: { locale }
}: {
  params: { locale: string | string[] | undefined };
}) => {
  return <BlogSection />;
};

export async function generateMetadata(): Promise<Metadata> {
  return await genMeta('/blog');
}

export default Blog;
