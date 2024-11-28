import Profile from '@/components/Profile';
import CarouselPosts from '@/components/CarouselPosts';
import { Stack } from '@mui/material';
import FeateredPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <Stack>
      <Profile />
      <FeateredPosts />
      <CarouselPosts />
    </Stack>
  );
}
