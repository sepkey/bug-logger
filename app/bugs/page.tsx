import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function Bugs() {
  return (
    <div>
      Users page
      <Button>
        <Link href="/bugs/new">New Bug</Link>
      </Button>
    </div>
  );
}
