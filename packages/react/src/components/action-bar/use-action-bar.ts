"use client"

import type { HTMLProps, PropGetter } from "../../core"
import { useCallback } from "react"
import { useEnvironment } from "../../core"
import {
  useDisclosure,
  type UseDisclosureProps,
} from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { useI18n } from "../../providers/i18n-provider"
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
  const { t } = useI18n("actionBar")

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return

      ev.stopPropagation()

      if (closeOnEsc) onClose()
    },
    [closeOnEsc, onClose],
  )

  useEventListener(getDocument(), "keydown", onKeyDown)

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({ ...rest, ...props }),
    [rest],
  )

  const getOpenTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": open ? contentId : undefined,
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      "aria-label": t("Open action bar"),
      ...props,
      onClick: handlerAll(props.onClick, onOpen),
    }),
    [contentId, onOpen, open, t],
  )

  const getCloseTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-label": t("Close action bar"),
      ...props,
      onClick: handlerAll(props.onClick, onClose),
    }),
    [onClose, t],
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
