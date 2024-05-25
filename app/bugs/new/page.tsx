import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

export default function NewBug() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" />

      <TextArea placeholder="Description" />
      <Button>Submit New Bug</Button>
    </div>
  );
}
