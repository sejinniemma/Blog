import { Stack, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({
  post: { title, path, description, date, category },
}) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      key={path}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Link href={`/posts/${path}`}>
        <article className='overflow-hidden text-white rounded-md shadow-lg'>
          <Image
            className='w-full object-cover'
            alt={title}
            src={`/images/posts/${path}.png`}
            width={300}
            height={200}
          />
          <div className='flex flex-col items-center p-4'>
            <time className='self-end'>{date}</time>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='w-full truncate text-center'>{description}</p>
            <span className='text-sm rounded-lg bg-green-100 px-2 my-2 text-black font-bold'>
              {category}
            </span>
          </div>
        </article>
      </Link>
    </Grid>
  );
}
