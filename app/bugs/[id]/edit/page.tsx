import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import BugFormSkeleton from '../../_components/BugFormSkeleton';

type Props = {
  params: {
    id: string;
  };
};
const BugForm = dynamic(() => import('@/app/bugs/_components/BugForm'), {
  ssr: false,
  loading: () => <BugFormSkeleton />,
});
export default async function NewBug({ params }: Props) {
  const bug = await prisma.bug.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!bug) notFound();
  return <BugForm bug={bug} />;
}
