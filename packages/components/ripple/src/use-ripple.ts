import type React from "react"
import type { Key, PointerEventHandler } from "react"
import { createId, handlerAll } from "@yamada-ui/utils"
import { useCallback, useState } from "react"

export interface RippleOptions {
  key: React.Key
  size: number
  x: number
  y: number
}

export interface UseRippleProps<T = HTMLElement> {
  disabled?: boolean
  /**
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  onPointerDown?: PointerEventHandler<T>
}

export const useRipple = <T = HTMLElement>({
  isDisabled,
  disabled = isDisabled,
  ...rest
}: UseRippleProps<T> = {}) => {
  const [ripples, setRipples] = useState<RippleOptions[]>([])

  const onPointerDown: PointerEventHandler<T> = useCallback(
    (ev) => {
      if (disabled) return setRipples([])

      const trigger = ev.currentTarget as unknown as Element

      const size = Math.max(trigger.clientWidth, trigger.clientHeight)
      const rect = trigger.getBoundingClientRect()

      setRipples((prev) => [
        ...prev,
        {
          key: createId(prev.length.toString()),
          size,
          x: ev.clientX - rect.x - size / 2,
          y: ev.clientY - rect.y - size / 2,
        },
      ])
    },
    [disabled],
  )

  const onClear = useCallback((key: Key) => {
    setRipples((prev) => prev.filter((item) => item.key !== key))
  }, [])

  return {
    ripples,
    onClear,
    onPointerDown: handlerAll(onPointerDown, rest.onPointerDown),
  }
}

export type UseRippleReturn = ReturnType<typeof useRipple>
