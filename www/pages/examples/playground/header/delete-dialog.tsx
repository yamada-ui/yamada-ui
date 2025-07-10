import type { DialogProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import { assignRef, Dialog, Text, useDisclosure } from "@yamada-ui/react"
import { memo } from "react"

export interface DeleteDialogProps
  extends Omit<DialogProps, "isOpen" | "onClose"> {
  onOpenRef: MutableRefObject<() => void>
}

export const DeleteDialog: FC<DeleteDialogProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Dialog
        size="xl"
        cancel="Cancel"
        header="Are you absolutely sure?"
        isOpen={isOpen}
        success={{ colorScheme: "danger", children: "Delete" }}
        onCancel={onClose}
        onClose={onClose}
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
