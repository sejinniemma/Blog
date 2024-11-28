import React from 'react';
import Card from './Card';

export default function PostsGrid({ posts }) {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
