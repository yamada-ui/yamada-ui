import type { KeyboardEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback } from "react"
import { mergeProps } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useIds } from "../../utils"

export interface UseModalProps
  extends HTMLProps, Omit<UseDisclosureProps, "timing"> {
  /**
   * If `true`, the modal will close when the `Esc` key is pressed.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, the modal will close when the overlay is clicked.
   *
   * @default true
   */
  closeOnOverlay?: boolean
  /**
   * Callback invoked when the escape key is pressed and focus is within modal.
   */
  onEsc?: () => void
}

export const useModal = ({
  closeOnEsc = true,
  closeOnOverlay = true,
  defaultOpen,
  open: openProp,
  onClose: onCloseProp,
  onEsc,
  onOpen: onOpenProp,
  ...rest
}: UseModalProps = {}) => {
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const [contentId, titleId, bodyId] = useIds()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      if (closeOnEsc) {
        ev.stopPropagation()
        onClose()
      }

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

  const getRootProps: PropGetter = useCallback(
    (props) => mergeProps(rest, props ?? {})(),
    [rest],
  )

  const getOverlayProps: PropGetter = useCallback(
    (props = {}) =>
      mergeProps({ "aria-hidden": "true" }, props, {
        onClick: (ev) => {
          ev.stopPropagation()

          if (closeOnOverlay) onClose()
        },
      })(),
    [closeOnOverlay, onClose],
  )

  const getOpenTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) =>
      mergeProps(
        {
          "aria-controls": open ? contentId : undefined,
          "aria-expanded": open,
          "aria-haspopup": "dialog",
        },
        props,
        { onClick: onOpen },
      )(),
    [contentId, onOpen, open],
  )

  const getCloseTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => mergeProps(props, { onClick: onClose })(),
    [onClose],
  )

  const getContentProps: PropGetter<"section"> = useCallback(
    (props = {}) =>
      mergeProps(
        {
          id: contentId,
          "aria-describedby": bodyId,
          "aria-labelledby": titleId,
          "aria-modal": "true",
          role: "dialog",
        },
        props,
        { onKeyDown },
      )(),
    [bodyId, contentId, onKeyDown, titleId],
  )

  const getHeaderProps: PropGetter<"header"> = useCallback(
    (props) => ({ ...props }),
    [],
  )

  const getTitleProps: PropGetter<"h2"> = useCallback(
    (props) => ({ id: titleId, ...props }),
    [titleId],
  )

  const getBodyProps: PropGetter = useCallback(
    (props) => ({ id: bodyId, ...props }),
    [bodyId],
  )

  const getFooterProps: PropGetter<"footer"> = useCallback(
    (props) => ({ ...props }),
    [],
  )

  return {
    open,
    getBodyProps,
    getCloseTriggerProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getOpenTriggerProps,
    getOverlayProps,
    getRootProps,
    getTitleProps,
    onClose,
    onOpen,
  }
}

export type UseModalReturn = ReturnType<typeof useModal>
