"use client"

import type { Key, MouseEventHandler } from "react"
import { useCallback, useState } from "react"
import { handlerAll, uuid } from "../../utils"

export interface RippleOptions {
  key: Key
  size: number
  x: number
  y: number
}

export interface UseRippleProps<T = HTMLElement> {
  disabled?: boolean
  onClick?: MouseEventHandler<T>
}

export const useRipple = <T = HTMLElement>({
  disabled,
  ...rest
}: UseRippleProps<T> = {}) => {
  const [ripples, setRipples] = useState<RippleOptions[]>([])

  const onClick: MouseEventHandler<T> = useCallback(
    (ev) => {
      if (disabled) return

      const trigger = ev.currentTarget as unknown as Element

      const size = Math.max(trigger.clientWidth, trigger.clientHeight)
      const rect = trigger.getBoundingClientRect()

      setRipples((prev) => [
        ...prev,
        {
          key: uuid(),
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
    onClick: handlerAll(onClick, rest.onClick),
  }
}

export type UseRippleReturn = ReturnType<typeof useRipple>
