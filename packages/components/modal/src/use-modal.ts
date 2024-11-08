import type { Token } from "@yamada-ui/core"
import type { KeyboardEvent, PropsWithChildren } from "react"
import { useValue } from "@yamada-ui/use-value"
import { findChild, findChildren, getValidChildren } from "@yamada-ui/utils"
import { cloneElement, useCallback } from "react"
import { DialogOverlay } from "./dialog-overlay"
import { DrawerContent } from "./drawer-content"
import { DrawerOverlay } from "./drawer-overlay"
import { ModalOverlay } from "./modal-overlay"

export interface UseModalProps extends PropsWithChildren {
  /**
   * If `true`, the modal will close when the `Esc` key is pressed.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * The placement of the modal.
   *
   * @default 'center'
   */
  placement?: Token<
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "left"
    | "right"
    | "top"
    | "top-left"
    | "top-right"
  >
  /**
   * Callback invoked to close the modal.
   */
  onClose?: () => void
  /**
   * Callback fired when the escape key is pressed and focus is within modal.
   */
  onEsc?(): void
}

export const useModal = ({
  children,
  closeOnEsc = true,
  placement: _placement = "center",
  onClose,
  onEsc,
}: UseModalProps) => {
  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      ev.stopPropagation()

      if (closeOnEsc) onClose?.()

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

  const validChildren = getValidChildren(children)

  const [customModalOverlay, ...cloneChildren] = findChildren(
    validChildren,
    ModalOverlay,
    DialogOverlay,
    DrawerOverlay,
  )

  let drawerContent = findChild(validChildren, DrawerContent)

  if (drawerContent) drawerContent = cloneElement(drawerContent, { onKeyDown })

  const placement = useValue(_placement)

  return {
    cloneChildren,
    customModalOverlay,
    drawerContent,
    placement,
    onKeyDown,
  }
}

export type UseModalReturn = ReturnType<typeof useModal>
