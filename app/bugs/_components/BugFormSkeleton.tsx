import { Skeleton } from '@/app/_components';
import { Box } from '@radix-ui/themes';

export default function BugFormSkeleton() {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
}
