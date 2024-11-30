import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/FilterablePosts';
import { Stack, Typography } from '@mui/material';

export const metadata = {
  title: 'All Posts',
  description: '풀스택 관련 블로그 글',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <Stack
      flexDirection='row'
      justifyContent='space-between'
      alignItems='flex-start'
      width='100%'
      height='100%'
      sx={{ mt: 15 }}
    >
      <FilterablePosts posts={posts} categories={categories} />
    </Stack>
  );
}
