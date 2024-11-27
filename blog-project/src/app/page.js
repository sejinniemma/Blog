import Posts from '@/components/Posts';
import Profile from '@/components/Profile';
import { Stack } from '@mui/material';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Stack>
      <Profile />
      <Posts />
    </Stack>
  );
}
