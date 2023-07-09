import { useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useState } from 'react'

export type UseDisclosureProps = {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onClose?: (...args: any) => void
  onOpen?: (...args: any) => void
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const [defaultIsOpen, setIsOpen] = useState<boolean>(props.defaultIsOpen ?? false)

  const handleOpen = useCallbackRef(props.onOpen)
  const handleClose = useCallbackRef(props.onClose)

  const isControlled = props.isOpen !== undefined
  const isOpen = props.isOpen !== undefined ? props.isOpen : defaultIsOpen

  const onOpen = useCallback(
    (...args: any) => {
      if (!isControlled) setIsOpen(true)

      handleOpen?.(...args)
    },
    [isControlled, handleOpen],
  )

  const onClose = useCallback(
    (...args: any) => {
      if (!isControlled) setIsOpen(false)

      handleClose?.(...args)
    },
    [isControlled, handleClose],
  )

  const onToggle = useCallback(
    (...args: any) => (!isOpen ? onOpen(...args) : onClose(...args)),
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
