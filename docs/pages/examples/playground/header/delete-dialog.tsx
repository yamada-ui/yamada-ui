import { Dialog, Text, assignRef, useDisclosure } from "@yamada-ui/react"
import type { DialogProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC, MutableRefObject } from "react"

export type DeleteDialogProps = Omit<DialogProps, "isOpen" | "onClose"> & {
  onOpenRef: MutableRefObject<() => void>
}

export const DeleteDialog: FC<DeleteDialogProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Dialog
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        header="Are you absolutely sure?"
        cancel="Cancel"
        onCancel={onClose}
        success={{ colorScheme: "danger", children: "Delete" }}
        onSuccess={onClose}
        {...rest}
      >
        <Text color="muted">
          This action cannot be undone. This preset will no longer be accessible
          by you or others you've shared it with.
        </Text>
      </Dialog>
    )
  },
)

DeleteDialog.displayName = "DeleteDialog"
