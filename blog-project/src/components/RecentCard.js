import { Stack, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function RecentCard({
  post: { title, path, description, date, category },
}) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='overflow-hidden text-white rounded-md shadow-2xl hover:scale-110 transition-transform duration-300'>
        <Image
          className='w-full object-cover'
          alt={title}
          src={`/images/posts/${path}.png`}
          width={300}
          height={200}
        />
      </article>
    </Link>
  );
}
