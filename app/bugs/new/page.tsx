'use client';
import { Button, TextField } from '@radix-ui/themes';
// import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

export default function NewBug() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" />

      <SimpleMDE placeholder="Description" />
      <Button>Submit New Bug</Button>
    </div>
  );
}
