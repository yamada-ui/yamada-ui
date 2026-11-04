"use client"

import type { HTMLProps, PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import { useCallback } from "react"
import { mergeProps, useEnvironment } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { handlerAll, useIds } from "../../utils"

export interface UseActionBarProps
  extends HTMLProps, Omit<UseDisclosureProps, "timing"> {
  /**
   * If `true`, the action bar will close when the `Esc` key is pressed.
   *
   * @default true
   */
  closeOnEsc?: boolean
}

export const useActionBar = ({
  closeOnEsc = true,
  defaultOpen,
  open: openProp,
  onClose: onCloseProp,
  onOpen: onOpenProp,
  ...rest
}: UseActionBarProps = {}) => {
  const { getDocument } = useEnvironment()
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const [contentId] = useIds()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      if (!closeOnEsc) return

      ev.stopPropagation()
      onClose()
    },
    [closeOnEsc, onClose],
  )

  useEventListener(getDocument(), "keydown", onKeyDown)

  const getRootProps: PropGetter = useCallback(
    (props = {}) => mergeProps(rest, props)(),
    [rest],
  )

  const getOpenTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": open ? contentId : undefined,
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      ...props,
      onClick: handlerAll(props.onClick, onOpen),
    }),
    [contentId, onOpen, open],
  )

  const getCloseTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      ...props,
      onClick: handlerAll(props.onClick, onClose),
    }),
    [onClose],
  )

  const getContentProps: PropGetter<"section"> = useCallback(
    (props = {}) => ({
      id: contentId,
      role: "dialog",
      ...props,
    }),
    [contentId],
  )

  return {
    open,
    getCloseTriggerProps,
    getContentProps,
    getOpenTriggerProps,
    getRootProps,
    onClose,
    onOpen,
  }
}

export type UseActionBarReturn = ReturnType<typeof useActionBar>
