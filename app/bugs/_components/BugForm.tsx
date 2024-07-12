'use client';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { bugSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/_components/ErrorMessage';
import Spinner from '@/app/_components/Spinner';
import { Bug } from '@prisma/client';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

type BugFormValues = z.infer<typeof bugSchema>;
type Props = { bug?: Bug };

export default function BugForm({ bug }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BugFormValues>({
    resolver: zodResolver(bugSchema),
  });
  const router = useRouter();
  const [error, setError] = useState('');

  async function onSubmit(data: BugFormValues) {
    try {
      if (bug) await axios.patch(`/api/bugs/${bug.id}`, data);
      else await axios.post('/api/bugs', data);
      router.push('/bugs');
      router.refresh();
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
        <TextField.Root
          defaultValue={bug?.title}
          placeholder="Title"
          {...register('title')}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          defaultValue={bug?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} ref={null} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          {bug ? 'Update bug' : 'Submit New Bug '} {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
