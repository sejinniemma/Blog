import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='50px'
      sx={{ bgcolor: 'salmon' }}
    >
      <Typography sx={{ color: 'white' }}>Emma muckbang blog</Typography>
    </Stack>
  );
}
