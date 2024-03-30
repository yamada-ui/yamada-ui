import {
  Switch,
  Button,
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

export type FilterModalProps = Omit<ModalProps, "isOpen" | "onClose"> & {
  onOpenRef: MutableRefObject<() => void>
}

export const FilterModal: FC<FilterModalProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalHeader flexDirection="column" gap="sm" alignItems="flex-start">
          <Text as="h3">Save preset</Text>

          <Text color="muted" fontSize="md" fontWeight="normal">
            This will save the current playground state as a preset which you
            can access later or share with others.
          </Text>
        </ModalHeader>

        <ModalBody py="md">
          <Text as="h4" fontWeight="medium" color="muted">
            Playground Warnings
          </Text>

          <Switch defaultIsChecked alignItems="flex-start" gap="md">
            <Text as="span" display="inline-block" fontWeight="medium">
              Show a warning when content is flagged
            </Text>

            <Text
              as="span"
              mt="xs"
              display="inline-block"
              color="muted"
              fontSize="sm"
            >
              A warning will be shown when sexual, hateful, violent or self-harm
              content is detected.
            </Text>
          </Switch>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  },
)

FilterModal.displayName = "FilterModal"
