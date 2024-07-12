import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';

import BugsActions from './BugsActions';
import { StatusBadge, Link } from '../_components';

export default async function Bugs() {
  const bugs = await prisma.bug.findMany();

  return (
    <div>
      <BugsActions />
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
                  <Link href={`bugs/${bug.id}`}>{bug.title}</Link>
                  <div className="block md:hidden">
                    <StatusBadge status={bug.status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <StatusBadge status={bug.status} />
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

export const dynamic = 'force-dynamic';

// export const revalidate = 0;
