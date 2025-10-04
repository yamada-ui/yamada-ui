import type { FC, RefObject } from "react"
import {
  assignRef,
  Heading,
  Modal,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"

export interface DeleteDialogProps
  extends Omit<Modal.RootProps, "isOpen" | "onClose"> {
  onOpenRef: RefObject<() => void>
}

export const DeleteDialog: FC<DeleteDialogProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { open, onClose, onOpen } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal.Root
        size="xl"
        body={
          <Text color="muted">
            This action cannot be undone. This preset will no longer be
            accessible by you or others you've shared it with.
          </Text>
        }
        cancel="Cancel"
        header={
          <Heading as="h3" size="xl" fontWeight="bold">
            Are you absolutely sure?
          </Heading>
        }
        open={open}
        success={{ colorScheme: "danger", children: "Delete" }}
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
        {...rest}
      />
    )
  },
)

DeleteDialog.displayName = "DeleteDialog"
