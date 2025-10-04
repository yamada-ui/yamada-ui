import type { RefObject } from "react"
import {
  assignRef,
  Button,
  Field,
  Heading,
  Input,
  Modal,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"

export interface SaveModalProps
  extends Omit<Modal.RootProps, "onClose" | "open"> {
  onOpenRef: RefObject<() => void>
}

export const SaveModal = memo<SaveModalProps>(({ onOpenRef, ...rest }) => {
  const { open, onClose, onOpen } = useDisclosure()

  assignRef(onOpenRef, onOpen)

  return (
    <Modal.Root size="xl" open={open} onClose={onClose} {...rest}>
      <Modal.Content>
        <Modal.Header alignItems="flex-start" flexDirection="column" gap="sm">
          <Heading as="h3" size="xl" fontWeight="bold">
            Save preset
          </Heading>

          <Text color="muted" fontSize="md" fontWeight="normal">
            This will save the current playground state as a preset which you
            can access later or share with others.
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Field.Root label="Name">
            <Input />
          </Field.Root>

          <Field.Root label="Description">
            <Input />
          </Field.Root>
        </Modal.Body>

        <Modal.Footer>
          <Button colorScheme="primary" onClick={onClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
})

SaveModal.displayName = "SaveModal"
