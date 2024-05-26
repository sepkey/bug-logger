'use client';
import { Button, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

type BugFormValues = { title: string; description: string };

export default function NewBug() {
  const { control, register, handleSubmit } = useForm<BugFormValues>();
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/bugs', data);
        router.push('/bugs');
      })}
      className="max-w-xl space-y-3"
    >
      <TextField.Root placeholder="Title" {...register('title')} />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} ref={null} />
        )}
      />
      <Button>Submit New Bug</Button>
    </form>
  );
}
