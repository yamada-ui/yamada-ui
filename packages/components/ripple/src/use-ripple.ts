import { createId, handlerAll } from "@yamada-ui/utils"
import type React from "react"
import type { Key, MouseEventHandler } from "react"
import { useCallback, useState } from "react"

export type RippleOptions = {
  key: React.Key
  x: number
  y: number
  size: number
}

export type UseRippleProps<T extends any = HTMLElement> = {
  onClick?: MouseEventHandler<T>
}

export const useRipple = <T extends any = HTMLElement>(
  props: UseRippleProps<T>,
) => {
  const [ripples, setRipples] = useState<RippleOptions[]>([])

  const onClick: MouseEventHandler<T> = useCallback((ev) => {
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
  }, [])

  const onClear = useCallback((key: Key) => {
    setRipples((prev) => prev.filter((item) => item.key !== key))
  }, [])

  return { ripples, onClick: handlerAll(onClick, props.onClick), onClear }
}

export type UseRippleReturn = ReturnType<typeof useRipple>
