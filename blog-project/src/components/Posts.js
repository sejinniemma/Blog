import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';
import { getFeaterdPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function Posts() {
  const posts = await getFeaterdPosts();

  return (
    <Stack sx={{ mt: { xs: 5, md: 0 } }}>
      <h2 className='text-2xl font-bold text-white my-2'>Featered Posts</h2>
      <PostsGrid posts={posts} />
    </Stack>
  );
}
