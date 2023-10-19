import { Primitive, useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useRef, useState } from 'react'

type Args = Array<any> | object | Primitive

type ChainFunction<T extends Args = any> = (
  ...args: T extends Array<any> ? T : T[]
) => void | Promise<void>

export type UseDisclosureProps<T extends Args = any> = {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onOpen?: ChainFunction<T>
  onClose?: ChainFunction<T>
  timing?: 'before' | 'after'
}

export const useDisclosure = <T extends Args = any>(
  props: UseDisclosureProps<T> = {},
) => {
  const [defaultIsOpen, setIsOpen] = useState<boolean>(
    props.defaultIsOpen ?? false,
  )

  const timingRef = useRef(props.timing ?? 'after')
  const handleOpen = useCallbackRef(props.onOpen)
  const handleClose = useCallbackRef(props.onClose)

  const isControlled = props.isOpen !== undefined
  const isOpen = props.isOpen !== undefined ? props.isOpen : defaultIsOpen

  const onOpen: ChainFunction<T> = useCallback(
    async (...args: T extends Array<any> ? T : T[]) => {
      if (timingRef.current === 'before') await handleOpen?.(...args)

      if (!isControlled) setIsOpen(true)

      if (timingRef.current === 'after') await handleOpen?.(...args)
    },
    [isControlled, handleOpen, timingRef],
  )

  const onClose: ChainFunction<T> = useCallback(
    async (...args: T extends Array<any> ? T : T[]) => {
      if (timingRef.current === 'before') await handleClose?.(...args)

      if (!isControlled) setIsOpen(false)

      if (timingRef.current === 'after') await handleClose?.(...args)
    },
    [isControlled, handleClose, timingRef],
  )

  const onToggle: ChainFunction<T> = useCallback(
    (...args: T extends Array<any> ? T : T[]) =>
      !isOpen ? onOpen(...args) : onClose(...args),
    [isOpen, onOpen, onClose],
  )

  return { isOpen, onOpen, onClose, onToggle }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>

export type LazyMode = 'unmount' | 'keepMounted'

export type UseLazyDisclosureProps = {
  enabled?: boolean
  isSelected?: boolean
  wasSelected?: boolean
  mode?: LazyMode
}

export const useLazyDisclosure = ({
  wasSelected,
  enabled,
  isSelected,
  mode = 'unmount',
}: UseLazyDisclosureProps) => {
  if (!enabled) return true

  if (isSelected) return true

  if (mode === 'keepMounted' && wasSelected) return true

  return false
}
