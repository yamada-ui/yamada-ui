import { useCallback, useState } from 'react'

export type UseDisclosureReture = [
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  onToggle: () => void,
]

export type UseDisclosure = () => UseDisclosureReture

export const useDisclosure: UseDisclosure = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const onOpen = useCallback(() => setOpen(true), [])

  const onClose = useCallback(() => setOpen(false), [])

  const onToggle = useCallback(() => setOpen((prev) => !prev), [])

  return [isOpen, onOpen, onClose, onToggle]
}
