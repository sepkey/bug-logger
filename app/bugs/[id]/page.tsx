import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function BugDetail({ params }: Props) {
  if (!/^\d+$/.test(params.id)) {
    notFound();
  }
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <div>
      <p>{bug.title}</p>
      <p>{bug.status}</p>
      <p>{bug.description}</p>
      <p>{bug.createdAt.toDateString()}</p>
    </div>
  );
}
