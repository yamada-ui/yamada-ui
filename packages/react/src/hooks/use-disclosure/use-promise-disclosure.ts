import type { UseDisclosureProps } from "./use-disclosure"
import { useCallback, useRef } from "react"
import { noop } from "../../utils"
import { useDisclosure } from "./use-disclosure"

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
    open,
    onClose,
    onOpen,
    onSuccess: resolveRef.current,
    onToggle,
  }
}

export type UsePromiseDisclosureReturn = ReturnType<typeof usePromiseDisclosure>
