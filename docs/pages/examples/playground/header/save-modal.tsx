import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  assignRef,
  useDisclosure,
} from "@yamada-ui/react"
import type { ModalProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC, MutableRefObject } from "react"

export type SaveModalProps = Omit<ModalProps, "isOpen" | "onClose"> & {
  onOpenRef: MutableRefObject<() => void>
}

export const SaveModal: FC<SaveModalProps> = memo(({ onOpenRef, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  assignRef(onOpenRef, onOpen)

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalHeader flexDirection="column" gap="sm" alignItems="flex-start">
        <Text as="h3">Save preset</Text>

        <Text color="muted" fontSize="md" fontWeight="normal">
          This will save the current playground state as a preset which you can
          access later or share with others.
        </Text>
      </ModalHeader>

      <ModalBody>
        <FormControl label="Name">
          <Input />
        </FormControl>

        <FormControl label="Description">
          <Input />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="primary" onClick={onClose}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  )
})

SaveModal.displayName = "SaveModal"
