import React from 'react';
import CarouselSlider from './Carousel';
import { getNonFeaterdPosts } from '@/service/posts';
import { Grid } from '@mui/material';
import Card from './Card';
import PostsGrid from './PostsGrid';

export default async function CarouselPosts() {
  const posts = await getNonFeaterdPosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2 text-white'>You May Like</h2>
      <CarouselSlider>
        {posts.map((post) => (
          <Card key={post.path} post={post} />
        ))}
      </CarouselSlider>
    </section>
  );
}
