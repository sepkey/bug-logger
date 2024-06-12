import { Skeleton } from "@/app/_components";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function LoadingBugDetail() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}
