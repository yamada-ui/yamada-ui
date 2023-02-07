import { useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useState } from 'react'

export type UseDisclosureProps = {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export const useDisclosure = (props: UseDisclosureProps = {}): UseDisclosureReturn => {
  const [defaultIsOpen, setIsOpen] = useState<boolean>(props.defaultIsOpen ?? false)

  const handleOpen = useCallbackRef(props.onOpen)
  const handleClose = useCallbackRef(props.onClose)

  const isControlled = props.isOpen !== undefined
  const isOpen = props.isOpen !== undefined ? props.isOpen : defaultIsOpen

  const onOpen = useCallback(() => {
    if (!isControlled) setIsOpen(true)

    handleOpen?.()
  }, [isControlled, handleOpen])

  const onClose = useCallback(() => {
    if (!isControlled) setIsOpen(false)

    handleClose?.()
  }, [isControlled, handleClose])

  const onToggle = useCallback(() => (!isOpen ? onOpen() : onClose()), [isOpen, onOpen, onClose])

  return [isOpen, onOpen, onClose, onToggle]
}

export type UseDisclosureReturn = [
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  onToggle: () => void,
]

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
