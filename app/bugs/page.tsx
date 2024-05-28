import prisma from '@/prisma/client';
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';

export default async function Bugs() {
  const bugs = await prisma.bug.findMany();

  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.Cell>Bug</Table.Cell>
            <Table.Cell className="hidden md:table-cell">Status</Table.Cell>
            <Table.Cell className="hidden md:table-cell">Created at</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs.map((bug) => {
            return (
              <Table.Row key={bug.id}>
                <Table.Cell>
                  {bug.title}
                  <div className="block md:hidden">{bug.status}</div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {bug.title}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {bug.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
