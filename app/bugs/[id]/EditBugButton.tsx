import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function EditBugButton({ bugId }: { bugId: number }) {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/bugs/edit/${bugId}`}>Edit bug</Link>
    </Button>
  );
}
