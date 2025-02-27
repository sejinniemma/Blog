import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getFeaterdPosts, getPostData } from '@/service/posts';
import Image from 'next/image';

export async function generateMetadata({ params: { slug } }) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className=' bg-white rounded-2xl overflow-hidden shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaterdPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
