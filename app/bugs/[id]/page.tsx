import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import BugDetails from './BugDetails';
import EditBugButton from './EditBugButton';
import DeleteBugButton from './DeleteBugButton';

type Props = {
  params: { id: string };
};

export default async function BugDetailsPage({ params }: Props) {
  if (!/^\d+$/.test(params.id)) {
    notFound();
  }
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap="5">
      <Box className="md:col-span-4">
        <BugDetails bug={bug} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditBugButton bugId={bug.id} />
          <DeleteBugButton bugId={bug.id} />
        </Flex>
      </Box>
    </Grid>
  );
}
