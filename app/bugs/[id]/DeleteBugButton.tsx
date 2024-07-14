import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function DeleteBugButton({ bugId }: { bugId: number }) {
  return (
    <Button color="red">
      <TrashIcon />
      Delete bug
    </Button>
  );
}
