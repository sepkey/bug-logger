import { Skeleton } from "@/app/_components";
import { Box } from "@radix-ui/themes";

export default function LoadingNewBug() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
}
