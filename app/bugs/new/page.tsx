'use client';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBugSchema } from '@/app/validationSchemas';
import { z } from 'zod';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

type BugFormValues = z.infer<typeof createBugSchema>;

export default function NewBug() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BugFormValues>({
    resolver: zodResolver(createBugSchema),
  });
  const router = useRouter();
  const [error, setError] = useState('');

  async function onSubmit(data: BugFormValues) {
    try {
      await axios.post('/api/bugs', data);
      router.push('/bugs');
    } catch (error) {
      setError('An unexpected error occured!');
    }
  }

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root placeholder="Title" {...register('title')} />
        {errors.title && (
          <Text as="p" color="red">
            {errors.title.message}
          </Text>
        )}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} ref={null} />
          )}
        />
        {errors.description && (
          <Text as="p" color="red">
            {errors.description.message}
          </Text>
        )}

        <Button>Submit New Bug</Button>
      </form>
    </div>
  );
}
