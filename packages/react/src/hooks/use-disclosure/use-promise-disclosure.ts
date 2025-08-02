"use client"

import type { DisclosureCallback, UseDisclosureProps } from "./use-disclosure"
import { useCallback, useRef } from "react"
import { noop } from "../../utils"
import { useDisclosure } from "./use-disclosure"

export interface UsePromiseDisclosureProps<
  Y = never,
  M = never,
  D = never,
  H = Promise<void> | void,
  R = Promise<void> | void,
> extends UseDisclosureProps<M, D | Y, H, R> {
  disableCloseOnSuccess?: boolean
  error?: unknown
}

/**
 * `usePromiseDisclosure` is a custom hook that helps handle common open/close or toggle scenarios with promises.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see https://yamada-ui.com/hooks/use-promise-disclosure
 */
export const usePromiseDisclosure = <
  Y = never,
  M = never,
  D = never,
  H = Promise<void> | void,
  R = Promise<void> | void,
>({
  disableCloseOnSuccess = false,
  error,
  ...rest
}: UsePromiseDisclosureProps<Y, M, D, H, R> = {}) => {
  const {
    open,
    onClose: onInternalClose,
    onOpen: onInternalOpen,
    onToggle,
  } = useDisclosure<M, D | Y, H, R>(rest)

  const rejectRef = useRef<((reason?: any) => void) | undefined>(undefined)
  const resolveRef = useRef(noop as DisclosureCallback<Y, R>)

  const onOpen = useCallback(
    async (value: M) => {
      const promise = new Promise<Y>((resolve, reject) => {
        resolveRef.current = (async (value: Y) => {
          rejectRef.current = undefined

          resolve(value)

          if (!disableCloseOnSuccess) await onInternalClose(value)
        }) as DisclosureCallback<Y, R>

        rejectRef.current = reject
      })

      await onInternalOpen(value)

      return await promise
    },
    [onInternalOpen, onInternalClose, disableCloseOnSuccess],
  ) as DisclosureCallback<M, [Y] extends [never] ? Promise<void> : Promise<Y>>

  const onClose = useCallback(
    async (value: D) => {
      rejectRef.current?.(error)

      await onInternalClose(value)
    },
    [onInternalClose, error],
  ) as DisclosureCallback<D, R>

  return {
    open,
    onClose,
    onOpen,
    onSuccess: resolveRef.current,
    onToggle,
  }
}

export type UsePromiseDisclosureReturn<
  Y = never,
  M = never,
  D = never,
  H = Promise<void> | void,
  R = Promise<void> | void,
> = ReturnType<typeof usePromiseDisclosure<Y, M, D, H, R>>
