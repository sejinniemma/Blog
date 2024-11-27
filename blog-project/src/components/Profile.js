'use client';

import { useRouter } from 'next/navigation';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import profileImg from '../../public/images/profile.png'; // 이미지 파일을 import
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Head from 'next/head';
import Button from './Button';

export default function Profile() {
  const router = useRouter();

  return (
    <Stack justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
      <Image
        className='rounded-full'
        src={profileImg}
        alt='Emma profile'
        width={250}
        height={250}
        priority // Next.js에게 알려줌 이게 제일 먼저 받아달라구, 중요하다구
      />
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ color: 'white', p: 2 }}
      >
        <Stack flexDirection='row' justifyContent='center' alignItems='center'>
          <Typography
            sx={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: { xs: '25px', md: '40px' },
              mr: 1,
            }}
          >
            꿀이
          </Typography>
          {/* SEO 최적화 위해 */}
          <Head>
            <meta
              name='description'
              content='Profile of a Full Stack Developer'
            />
          </Head>
          <Stack sx={{ fontSize: { xs: 20, md: 30 } }}>
            <IoIosCheckmarkCircle style={{ color: '#0095F6' }} />
          </Stack>
        </Stack>

        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <Typography
            sx={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '20px',
            }}
          >
            Full Stack developer
          </Typography>
        </Stack>

        <Typography
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '30px',
          }}
        >
          Full Stack developer | Muk bang Mini Pig{' '}
        </Typography>

        <Typography
          sx={{
            // display: { xs: 'none', md: 'flex' },
            fontFamily: 'Pretendard, sans-serif',
            fontSize: { xs: '15px', md: '20px' },
            color: 'lightcoral',
          }}
        >
          The best food fighter in Melbourne
        </Typography>
      </Stack>
      <Button title='Contact Me' />
    </Stack>
  );
}
