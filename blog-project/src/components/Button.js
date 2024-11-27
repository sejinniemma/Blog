import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export default function Button({ title, onClick }) {
  return (
    <Stack
      onClick={onClick}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto', // 제목에 따라 유동적으로 너비 설정
        minWidth: '100px', // 최소 너비 설정
        // maxWidth: '300px', // 최대 너비 설정 (필요시 조정)
        height: { md: '30px' },
        bgcolor: '#FED18C',
        borderRadius: '10px',
        cursor: 'pointer',
        p: 1,
      }}
    >
      <Typography
        sx={{ color: 'black', fontSize: { md: '20px' }, fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
