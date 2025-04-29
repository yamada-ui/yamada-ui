import type { CSSAnimationObject, Token } from "../../core"
import { useCallback, useEffect, useRef, useState } from "react"
import { animation, css } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { getOwnerWindow, isArray, isUndefined, runIfFn } from "../../utils"
import { useBoolean } from "../use-boolean"
import { useEventListener } from "../use-event-listener"

type CSSObject =
  | Token<CSSAnimationObject, "animations">
  | Token<CSSAnimationObject, "animations">[]

/**
 * `useAnimation` is a custom hook that implements animations similar to CSS `keyframes`.
 *
 * @see https://yamada-ui.com/hooks/use-animation
 */
export const useAnimation = (cssObj: CSSObject): string => {
  const { theme } = useTheme()

  if (isArray(cssObj)) {
    return cssObj.map((cssObj) => animation(cssObj, { css, theme })).join(", ")
  } else {
    return animation(cssObj, { css, theme })
  }
}

/**
 * `useDynamicAnimation` is a custom hook used to switch animations.
 *
 * @see https://yamada-ui.com/hooks/use-dynamic-animation
 */
export const useDynamicAnimation = <
  T extends
    | Token<CSSAnimationObject, "animations">[]
    | { [key: string]: CSSObject },
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
          styles.map((style) => animation(style, { css, theme })).join(", "),
        )
      } else {
        cache.current.set(key, animation(styles, { css, theme }))
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

      const keyOrArray = runIfFn(keysOrFunc, args)

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
  ref: React.RefObject<HTMLElement | null>
  open?: boolean
}

export const useAnimationObserver = ({
  ref,
  open,
}: UseAnimationObserverProps) => {
  const [mounted, setMounted] = useState(open)
  const [flg, { on }] = useBoolean()

  useEffect(() => {
    if (flg) return

    setMounted(open)
    on()
  }, [open, flg, on])

  useEventListener(
    () => ref.current,
    "animationend",
    () => setMounted(open),
  )

  const hidden = open ? false : !mounted

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
