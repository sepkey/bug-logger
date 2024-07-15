'use client';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteBugButton({
  bugId,
  full = true,
}: {
  bugId: number;
  full?: boolean;
}) {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function handleDelete() {
    try {
      await axios.delete(`/api/bugs/${bugId}`);
      router.push('/bugs');
      router.refresh();
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="red">{full ? 'Delete bug' : <TrashIcon />}</Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>Confirm deletion</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Are you sure you want to delete this bug? this action can not be
            undone.
          </Dialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={handleDelete} color="red">
                Delete bug
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root open={error}>
        <Dialog.Content>
          <Dialog.Title>Confirm deletion</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            This issue could not be deleted.
          </Dialog.Description>
          <Button
            onClick={() => setError(false)}
            variant="soft"
            color="gray"
            mt="2"
          >
            Ok
          </Button>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
