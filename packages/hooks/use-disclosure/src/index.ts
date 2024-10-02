import { useCallbackRef } from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

export interface UseDisclosureProps<
  T extends (...args: any[]) => any = () => void,
  K extends (...args: any[]) => any = () => void,
> {
  defaultIsOpen?: boolean
  isOpen?: boolean
  timing?: "after" | "before"
  onClose?: K
  onOpen?: T
}

/**
 * `useDisclosure` is a custom hook that helps handle common open/close or toggle scenarios.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see Docs https://yamada-ui.com/hooks/use-disclosure
 */
export const useDisclosure = <
  T extends (...args: any[]) => any = () => void,
  K extends (...args: any[]) => any = () => void,
>(
  props: UseDisclosureProps<T, K> = {},
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
    async (...args: any) => {
      if (timingRef.current === "before") await handleOpen?.(...args)

      if (!isControlled) setIsOpen(true)

      if (timingRef.current === "after") await handleOpen?.(...args)
    },
    [isControlled, handleOpen, timingRef],
  ) as unknown as T

  const onClose = useCallback(
    async (...args: any) => {
      if (timingRef.current === "before") await handleClose?.(...args)

      if (!isControlled) setIsOpen(false)

      if (timingRef.current === "after") await handleClose?.(...args)
    },
    [isControlled, handleClose, timingRef],
  ) as unknown as K

  const onToggle = useCallback(
    (...args: any) => (!isOpen ? onOpen(...args) : onClose(...args)),
    [isOpen, onOpen, onClose],
  ) as unknown as K | T

  return { isOpen, onClose, onOpen, onToggle }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>

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
