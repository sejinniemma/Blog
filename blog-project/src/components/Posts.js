import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';
import { getFeaterdPosts } from '@/service/posts';

export default async function Posts() {
  const posts = await getFeaterdPosts();

  return (
    <Stack sx={{ mt: { xs: 5, md: 0 } }}>
      <h2 className='text-2xl font-bold text-white'>Featered Posts</h2>
      <Grid container spacing={3} justifyContent='center' sx={{ pt: 3 }}>
        {posts.map((post) => (
          <Card key={post.path} post={post} />
        ))}
      </Grid>
    </Stack>
  );
}
