import { TrashIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex } from '@radix-ui/themes';

export default function DeleteBugButton({ bugId }: { bugId: number }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red">
          <TrashIcon />
          Delete bug
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
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
            <Button color="red">Delete bug</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
