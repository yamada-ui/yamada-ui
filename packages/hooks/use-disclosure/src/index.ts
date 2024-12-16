import { noop, useCallbackRef } from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

export interface UseDisclosureProps<
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
> {
  /**
   * @deprecated Use `defaultOpen` instead.
   */
  defaultIsOpen?: boolean
  defaultOpen?: boolean
  /**
   * @deprecated Use `open` instead.
   */
  isOpen?: boolean
  open?: boolean
  timing?: "after" | "before"
  onClose?: M
  onOpen?: Y
}

/**
 * `useDisclosure` is a custom hook that helps handle common open/close or toggle scenarios.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see Docs https://yamada-ui.com/hooks/use-disclosure
 */
export const useDisclosure = <
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
>({
  defaultIsOpen = false,
  defaultOpen = defaultIsOpen,
  isOpen,
  open: controlledOpen = isOpen,
  timing,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UseDisclosureProps<Y, M> = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen)

  const timingRef = useRef(timing ?? "after")
  const handleOpen = useCallbackRef(onOpenProp)
  const handleClose = useCallbackRef(onCloseProp)

  const controlled = controlledOpen !== undefined
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const onOpen = useCallback(
    async (...args: Parameters<Y>) => {
      if (timingRef.current === "before") await handleOpen(...args)

      if (!controlled) setUncontrolledOpen(true)

      if (timingRef.current === "after") await handleOpen(...args)
    },
    [controlled, handleOpen, timingRef],
  ) as Y

  const onClose = useCallback(
    async (...args: Parameters<M>) => {
      if (timingRef.current === "before") await handleClose(...args)

      if (!controlled) setUncontrolledOpen(false)

      if (timingRef.current === "after") await handleClose(...args)
    },
    [controlled, handleClose, timingRef],
  ) as M

  const onToggle = useCallback(
    async (...args: Parameters<M> | Parameters<Y>) =>
      !open
        ? onOpen(...(args as Parameters<Y>))
        : onClose(...(args as Parameters<M>)),
    [open, onOpen, onClose],
  ) as M | Y

  return {
    /**
     * @deprecated Use `open` instead.
     */
    isOpen: open,
    open,
    onClose,
    onOpen,
    onToggle,
  }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>

export interface UsePromiseDisclosureProps<
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
> extends UseDisclosureProps<Y, M> {
  disableCloseOnSuccess?: boolean
  error?: unknown
}

/**
 * `usePromiseDisclosure` is a custom hook that helps handle common open/close or toggle scenarios with promises.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see Docs https://yamada-ui.com/hooks/use-promise-disclosure
 */
export const usePromiseDisclosure = <
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
>({
  disableCloseOnSuccess = false,
  error,
  ...rest
}: UsePromiseDisclosureProps<Y, M> = {}) => {
  const {
    open,
    onClose: onInternalClose,
    onOpen: onInternalOpen,
    onToggle,
  } = useDisclosure<Y, M>(rest)

  const rejectRef = useRef<((reason?: any) => void) | undefined>(undefined)
  const resolveRef = useRef<M>(noop as M)

  const onOpen = useCallback(
    async (...args: Parameters<Y>) => {
      const promise = new Promise<void>((resolve, reject) => {
        resolveRef.current = (async (...args: Parameters<M>) => {
          rejectRef.current = undefined

          resolve()

          if (!disableCloseOnSuccess) await onInternalClose(...args)
        }) as M

        rejectRef.current = reject
      })

      await onInternalOpen(...args)

      await promise
    },
    [onInternalOpen, onInternalClose, disableCloseOnSuccess],
  )

  const onClose = useCallback(
    async (...args: Parameters<M>) => {
      rejectRef.current?.(error)

      await onInternalClose(...args)
    },
    [onInternalClose, error],
  ) as M

  return {
    /**
     * @deprecated Use `open` instead.
     */
    isOpen: open,
    open,
    onClose,
    onOpen,
    onSuccess: resolveRef.current,
    onToggle,
  }
}

export type UsePromiseDisclosureReturn = ReturnType<typeof usePromiseDisclosure>

export type LazyMode = "keepMounted" | "unmount"

export interface UseLazyDisclosureProps {
  enabled?: boolean
  /**
   * @deprecated Use `selected` instead.
   */
  isSelected?: boolean
  mode?: LazyMode
  selected?: boolean
  wasSelected?: boolean
}

export const useLazyDisclosure = ({
  enabled,
  isSelected,
  mode = "unmount",
  selected = isSelected,
  wasSelected,
}: UseLazyDisclosureProps) => {
  if (!enabled) return true

  if (selected) return true

  if (mode === "keepMounted" && wasSelected) return true

  return false
}
