import type { FC, RefObject } from "react"
import {
  assignRef,
  Button,
  Heading,
  Modal,
  Switch,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"

export interface FilterModalProps
  extends Omit<Modal.RootProps, "isOpen" | "onClose"> {
  onOpenRef: RefObject<() => void>
}

export const FilterModal: FC<FilterModalProps> = memo(
  ({ onOpenRef, ...rest }) => {
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

          <Modal.Body py="md">
            <Text as="h4" color="muted" fontWeight="medium">
              Playground Warnings
            </Text>

            <Switch alignItems="flex-start" defaultChecked gap="md">
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
                A warning will be shown when sexual, hateful, violent or
                self-harm content is detected.
              </Text>
            </Switch>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={onClose}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    )
  },
)

FilterModal.displayName = "FilterModal"
