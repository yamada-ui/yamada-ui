import type { AnimationStyle, Theme } from "@yamada-ui/core"
import { animation, css, useTheme } from "@yamada-ui/core"
import { useBoolean } from "@yamada-ui/use-boolean"
import { useEventListener } from "@yamada-ui/use-event-listener"
import {
  getOwnerWindow,
  isArray,
  isUndefined,
  runIfFunc,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useRef, useState } from "react"

type Styles =
  | (AnimationStyle | Theme["animations"])[]
  | AnimationStyle
  | Theme["animations"]

/**
 * `useAnimation` is a custom hook that implements animations similar to CSS `keyframes`.
 *
 * @see Docs https://yamada-ui.com/hooks/use-animation
 */
export const useAnimation = (styles: Styles): string => {
  const { theme } = useTheme()

  if (isArray(styles)) {
    return styles.map((style) => animation(style, theme, css)).join(", ")
  } else {
    return animation(styles, theme, css)
  }
}

/**
 * `useDynamicAnimation` is a custom hook used to switch animations.
 *
 * @see Docs https://yamada-ui.com/hooks/use-dynamic-animation
 */
export const useDynamicAnimation = <
  T extends
    | (AnimationStyle | Theme["animations"])[]
    | { [key: string]: Styles },
>(
  arrayOrObj: T,
  init?: (keyof T)[] | keyof T,
): [
  string | undefined,
  (
    key:
      | ((key: (keyof T)[] | keyof T | undefined) => (keyof T)[] | keyof T)
      | (keyof T)[]
      | keyof T,
  ) => void,
] => {
  const { theme } = useTheme()

  const keys = useRef<string | string[] | undefined>(
    !isUndefined(init)
      ? isArray(init)
        ? init.map(String)
        : String(init)
      : undefined,
  )
  const cache = useRef<Map<string, string>>(new Map<string, string>())

  const [animations, setAnimations] = useState<string | undefined>(() => {
    for (const [key, styles] of Object.entries(arrayOrObj)) {
      if (cache.current.has(key)) return

      if (isArray(styles)) {
        cache.current.set(
          key,
          styles.map((style) => animation(style, theme, css)).join(", "),
        )
      } else {
        cache.current.set(key, animation(styles, theme, css))
      }
    }

    if (isArray(keys.current)) {
      return keys.current.map((key) => cache.current.get(key)).join(", ")
    } else {
      return cache.current.get(keys.current ?? "")
    }
  })

  const setAnimation = useCallback(
    (
      keysOrFunc:
        | ((key: (keyof T)[] | keyof T | undefined) => (keyof T)[] | keyof T)
        | (keyof T)[]
        | keyof T,
    ) => {
      const args = (() => {
        if (!isUndefined(keys.current) && isArray(arrayOrObj)) {
          return isArray(keys.current)
            ? keys.current.map(Number)
            : Number(keys.current)
        } else {
          return keys.current
        }
      })() as (keyof T)[] | keyof T | undefined

      const keyOrArray = runIfFunc(keysOrFunc, args)

      keys.current = isArray(keyOrArray)
        ? keyOrArray.map(String)
        : String(keyOrArray)

      if (isArray(keys.current)) {
        setAnimations(
          keys.current.map((key) => cache.current.get(key)).join(", "),
        )
      } else {
        setAnimations(cache.current.get(keys.current))
      }
    },
    [arrayOrObj],
  )

  return [animations, setAnimation]
}

export interface UseAnimationObserverProps {
  ref: React.RefObject<HTMLElement>
  isOpen: boolean
}

export const useAnimationObserver = ({
  ref,
  isOpen,
}: UseAnimationObserverProps) => {
  const [mounted, setMounted] = useState(isOpen)
  const [flg, { on }] = useBoolean()

  useEffect(() => {
    if (flg) return

    setMounted(isOpen)
    on()
  }, [isOpen, flg, on])

  useEventListener(
    () => ref.current,
    "animationend",
    () => setMounted(isOpen),
  )

  const hidden = isOpen ? false : !mounted

  return {
    present: !hidden,
    onAnimationComplete() {
      const ownerWindow = getOwnerWindow(ref.current)
      const ev = new ownerWindow.CustomEvent("animationend", {
        bubbles: true,
      })

      ref.current?.dispatchEvent(ev)
    },
  }
}

export type ReturnUseAnimationObserver = ReturnType<typeof useAnimationObserver>
