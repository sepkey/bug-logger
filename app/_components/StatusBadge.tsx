import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

type Props = {
  status: Status;
};

const statusMap: Record<
  Status,
  { label: string; color: 'red' | 'violet' | 'green' }
> = {
  CLOSE: { color: 'green', label: 'Close' },
  OPEN: { color: 'red', label: 'Open' },
  IN_PROGRESS: { color: 'violet', label: 'In progress' },
};
export default function StatusBadge({ status }: Props) {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
}
