"use client"

import type { CSSAnimationObject, Token } from "../../core"
import { useCallback, useRef, useState } from "react"
import { animation, css, useSystem } from "../../core"
import { isArray, isUndefined, runIfFn } from "../../utils"

type CSSObject =
  | Token<CSSAnimationObject, "animations">
  | Token<CSSAnimationObject, "animations">[]

/**
 * `useAnimation` is a custom hook that implements animations similar to CSS `keyframes`.
 *
 * @see https://yamada-ui.com/hooks/use-animation
 */
export const useAnimation = (cssObj: CSSObject): string => {
  const system = useSystem()

  if (isArray(cssObj)) {
    return cssObj.map((cssObj) => animation(cssObj, { css, system })).join(", ")
  } else {
    return animation(cssObj, { css, system })
  }
}

/**
 * `useDynamicAnimation` is a custom hook used to switch animations.
 *
 * @see https://yamada-ui.com/hooks/use-dynamic-animation
 */
export const useDynamicAnimation = <
  Y extends
    | Token<CSSAnimationObject, "animations">[]
    | { [key: string]: CSSObject },
>(
  arrayOrObj: Y,
  init?: (keyof Y)[] | keyof Y,
): [
  string | undefined,
  (
    key:
      | ((key: (keyof Y)[] | keyof Y | undefined) => (keyof Y)[] | keyof Y)
      | (keyof Y)[]
      | keyof Y,
  ) => void,
] => {
  const system = useSystem()

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
          styles.map((style) => animation(style, { css, system })).join(", "),
        )
      } else {
        cache.current.set(key, animation(styles, { css, system }))
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
        | ((key: (keyof Y)[] | keyof Y | undefined) => (keyof Y)[] | keyof Y)
        | (keyof Y)[]
        | keyof Y,
    ) => {
      const args = (() => {
        if (!isUndefined(keys.current) && isArray(arrayOrObj)) {
          return isArray(keys.current)
            ? keys.current.map(Number)
            : Number(keys.current)
        } else {
          return keys.current
        }
      })() as (keyof Y)[] | keyof Y | undefined

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
