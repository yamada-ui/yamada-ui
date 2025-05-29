import type { KeyboardEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback, useId } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useI18n } from "../../providers/i18n-provider"
import { cx, handlerAll } from "../../utils"

export interface UseModalProps extends HTMLProps, UseDisclosureProps {
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
  onEsc,
  ...rest
}: UseModalProps = {}) => {
  const { open, onClose, onOpen, onToggle } = useDisclosure(rest)
  const contentId = useId()
  const titleId = useId()
  const bodyId = useId()
  const { t } = useI18n("modal")

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      ev.stopPropagation()

      if (closeOnEsc) onClose()

      onEsc?.()
    },
    [closeOnEsc, onClose, onEsc],
  )

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...rest,
      ...props,
    }),
    [rest],
  )

  const getOverlayProps: PropGetter = useCallback(
    (props = {}) => ({
      "aria-hidden": "true",
      ...props,
      onClick: handlerAll(props.onClick, (ev) => {
        ev.stopPropagation()

        if (closeOnOverlay) onClose()
      }),
    }),
    [closeOnOverlay, onClose],
  )

  const getOpenTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": contentId,
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      "aria-label": t("Open modal"),
      ...props,
      onClick: handlerAll(props.onClick, onOpen),
    }),
    [contentId, onOpen, open, t],
  )

  const getCloseTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-label": t("Close modal"),
      ...props,
      onClick: handlerAll(props.onClick, onClose),
    }),
    [onClose, t],
  )

  const getCloseButtonProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-label": t("Close modal"),
      ...props,
      onClick: handlerAll(props.onClick, onClose),
    }),
    [onClose, t],
  )

  const getContentProps: PropGetter<"section"> = useCallback(
    ({
      "aria-describedby": ariaDescribedby,
      "aria-labelledby": ariaLabelledby,
      ...props
    } = {}) => ({
      id: contentId,
      "aria-describedby": cx(ariaDescribedby, bodyId),
      "aria-labelledby": cx(ariaLabelledby, titleId),
      "aria-modal": "true",
      role: "dialog",
      ...props,
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [bodyId, contentId, onKeyDown, titleId],
  )

  const getHeaderProps: PropGetter<"header"> = useCallback(
    (props) => ({
      ...props,
    }),
    [],
  )

  const getTitleProps: PropGetter<"h2"> = useCallback(
    (props) => ({
      id: titleId,
      ...props,
    }),
    [titleId],
  )

  const getBodyProps: PropGetter = useCallback(
    (props) => ({
      id: bodyId,
      ...props,
    }),
    [bodyId],
  )

  const getFooterProps: PropGetter<"footer"> = useCallback(
    (props) => ({
      ...props,
    }),
    [],
  )

  return {
    open,
    getBodyProps,
    getCloseButtonProps,
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
    onToggle,
  }
}

export type UseModalReturn = ReturnType<typeof useModal>
