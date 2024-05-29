import StatusBadge from '@/app/_components/StatusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

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
      <Heading>{bug.title}</Heading>
      <Flex gap="3" my="2">
        <StatusBadge status={bug.status} />
        <Text>{bug.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
    </div>
  );
}
