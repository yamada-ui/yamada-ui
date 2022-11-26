import { useCallbackRef } from '@yamada-ui/utils'
import { useCallback, useState } from 'react'

export type UseDisclosureProps = {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onClose?(): void
  onOpen?(): void
}

export type UseDisclosureReture = [
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  onToggle: () => void,
]

export type UseDisclosure = (props?: UseDisclosureProps) => UseDisclosureReture

export const useDisclosure: UseDisclosure = (props: UseDisclosureProps = {}) => {
  const [defaultIsOpen, setIsOpen] = useState<boolean>(props.defaultIsOpen ?? false)

  const handleOpen = props.onOpen ? useCallbackRef(props.onOpen) : undefined
  const handleClose = props.onClose ? useCallbackRef(props.onClose) : undefined

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
