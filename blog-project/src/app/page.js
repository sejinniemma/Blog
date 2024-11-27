import Profile from '@/components/Profile';
import Posts from '@/components/Posts';
import CarouselPosts from '@/components/CarouselPosts';
import { Stack } from '@mui/material';

export default function HomePage() {
  return (
    <Stack>
      <Profile />
      <Posts />
      <CarouselPosts />
    </Stack>
  );
}
