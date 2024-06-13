import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import BugDetails from './BugDetails';
import EditBugButton from './EditBugButton';

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
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Box>
        <BugDetails bug={bug} />
      </Box>
      <Box>
        <EditBugButton bugId={bug.id} />
      </Box>
    </Grid>
  );
}
