import prisma from '@/prisma/client';
import BugForm from '../../_components/BugForm';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default async function NewBug({ params }: Props) {
  const bug = await prisma.bug.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!bug) notFound();
  return <BugForm bug={bug} />;
}
