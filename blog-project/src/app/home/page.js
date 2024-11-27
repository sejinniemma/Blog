import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function MainPage() {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
    >
      <Typography
        sx={{
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '40px',
          color: 'white',
        }}
      >
        Home
      </Typography>
    </Stack>
  );
}
