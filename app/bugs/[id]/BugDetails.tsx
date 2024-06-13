import { StatusBadge } from '@/app/_components';
import { Bug } from '@prisma/client';
import { Heading, Flex, Card, Text } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function BugDetails({ bug }: { bug: Bug }) {
  return (
    <>
      <Heading>{bug.title}</Heading>
      <Flex gap="3" my="2">
        <StatusBadge status={bug.status} />
        <Text>{bug.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
    </>
  );
}
