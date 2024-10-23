import { noop, useCallbackRef } from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

export interface UseDisclosureProps<
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
> {
  defaultIsOpen?: boolean
  isOpen?: boolean
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
>(
  props: UseDisclosureProps<Y, M> = {},
) => {
  const [defaultIsOpen, setIsOpen] = useState<boolean>(
    props.defaultIsOpen ?? false,
  )

  const timingRef = useRef(props.timing ?? "after")
  const handleOpen = useCallbackRef(props.onOpen)
  const handleClose = useCallbackRef(props.onClose)

  const isControlled = props.isOpen !== undefined
  const isOpen = props.isOpen !== undefined ? props.isOpen : defaultIsOpen

  const onOpen = useCallback(
    async (...args: Parameters<Y>) => {
      if (timingRef.current === "before") await handleOpen(...args)

      if (!isControlled) setIsOpen(true)

      if (timingRef.current === "after") await handleOpen(...args)
    },
    [isControlled, handleOpen, timingRef],
  ) as Y

  const onClose = useCallback(
    async (...args: Parameters<M>) => {
      if (timingRef.current === "before") await handleClose(...args)

      if (!isControlled) setIsOpen(false)

      if (timingRef.current === "after") await handleClose(...args)
    },
    [isControlled, handleClose, timingRef],
  ) as M

  const onToggle = useCallback(
    async (...args: Parameters<M> | Parameters<Y>) =>
      !isOpen
        ? onOpen(...(args as Parameters<Y>))
        : onClose(...(args as Parameters<M>)),
    [isOpen, onOpen, onClose],
  ) as M | Y

  return { isOpen, onClose, onOpen, onToggle }
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
    isOpen,
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
    isOpen,
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
  isSelected?: boolean
  mode?: LazyMode
  wasSelected?: boolean
}

export const useLazyDisclosure = ({
  enabled,
  isSelected,
  mode = "unmount",
  wasSelected,
}: UseLazyDisclosureProps) => {
  if (!enabled) return true

  if (isSelected) return true

  if (mode === "keepMounted" && wasSelected) return true

  return false
}
