import { useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useRef, useState } from 'react'

export type UseDisclosureProps<T extends (...args: any[]) => any = () => void> =
  {
    isOpen?: boolean
    defaultIsOpen?: boolean
    onOpen?: T
    onClose?: T
    timing?: 'before' | 'after'
  }

export const useDisclosure = <T extends (...args: any[]) => any = () => void>(
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

  const onOpen = useCallback(
    async (...args: any) => {
      if (timingRef.current === 'before') await handleOpen?.(...args)

      if (!isControlled) setIsOpen(true)

      if (timingRef.current === 'after') await handleOpen?.(...args)
    },
    [isControlled, handleOpen, timingRef],
  ) as unknown as T

  const onClose = useCallback(
    async (...args: any) => {
      if (timingRef.current === 'before') await handleClose?.(...args)

      if (!isControlled) setIsOpen(false)

      if (timingRef.current === 'after') await handleClose?.(...args)
    },
    [isControlled, handleClose, timingRef],
  ) as unknown as T

  const onToggle = useCallback(
    (...args: any) => (!isOpen ? onOpen(...args) : onClose(...args)),
    [isOpen, onOpen, onClose],
  ) as unknown as T

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
