import type { ModalProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import {
  assignRef,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Switch,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"

export interface FilterModalProps
  extends Omit<ModalProps, "isOpen" | "onClose"> {
  onOpenRef: MutableRefObject<() => void>
}

export const FilterModal: FC<FilterModalProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalHeader alignItems="flex-start" flexDirection="column" gap="sm">
          <Text as="h3">Save preset</Text>

          <Text color="muted" fontSize="md" fontWeight="normal">
            This will save the current playground state as a preset which you
            can access later or share with others.
          </Text>
        </ModalHeader>

        <ModalBody py="md">
          <Text as="h4" color="muted" fontWeight="medium">
            Playground Warnings
          </Text>

          <Switch alignItems="flex-start" defaultIsChecked gap="md">
            <Text as="span" display="inline-block" fontWeight="medium">
              Show a warning when content is flagged
            </Text>

            <Text
              as="span"
              color="muted"
              display="inline-block"
              fontSize="sm"
              mt="xs"
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
