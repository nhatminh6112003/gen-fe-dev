import BlogDetailSection from '@/components/sections/BlogDetailSection';

interface BlogProps {
  params: {
    slug: string;
  };
}

const Blog = ({ params }: BlogProps) => (
  <BlogDetailSection slug={params.slug} />
);

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const seo = await getPostDetail(params.id, {
//     locale: language,
//     populate: 'deep'
//   });

//   return {
//     title: seo?.title,
//     description: seo?.content,
//     keywords: seo?.topic,
//     openGraph: {
//       images: [
//         {
//           url: seo.image,
//           width: 800,
//           height: 600
//         }
//       ]
//     }
//   };
// }
export default Blog;
