import * as CSS from 'csstype'
import {
  css,
  StylesProps,
  Token,
  keyframes as emotionKeyframes,
  CSSObject,
  StyledTheme,
} from '@yamada-ui/styled'
import { useTheme } from '@yamada-ui/providers'
import { Dict, isArray, isUndefined, runIfFunc } from '@yamada-ui/utils'
import { useRef, useState } from 'react'

export type AnimationStyle = {
  keyframes: Record<string, StylesProps<'unresponsive', 'unscheme'>>
  delay?: Token<CSS.Property.AnimationDelay, unknown, 'unresponsive', 'unscheme'>
  direction?: Token<CSS.Property.AnimationDirection, unknown, 'unresponsive', 'unscheme'>
  duration?: Token<CSS.Property.AnimationDuration, 'transitionDuration', 'unresponsive', 'unscheme'>
  fillMode?: Token<CSS.Property.AnimationFillMode, unknown, 'unresponsive', 'unscheme'>
  iterationCount?: Token<CSS.Property.AnimationIterationCount, unknown, 'unresponsive', 'unscheme'>
  playState?: Token<CSS.Property.AnimationPlayState, unknown, 'unresponsive', 'unscheme'>
  timingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    'transitionEasing',
    'unresponsive',
    'unscheme'
  >
}

const transformConfig = (obj: Omit<AnimationStyle, 'keyframes'>): Dict =>
  Object.entries(obj).reduce((obj, [key, value]) => {
    key = 'animation' + key.slice(0, 1).toUpperCase() + key.slice(1)

    obj[key] = value

    return obj
  }, {} as Dict)

const createCSS =
  (keyframes: AnimationStyle['keyframes'], config: Omit<AnimationStyle, 'keyframes'>) =>
  (theme: StyledTheme<Dict>): CSSObject => {
    const generatedKeyframes = css(keyframes)(theme)

    const generatedConfig = css(transformConfig(config))(theme)

    const animationName = emotionKeyframes(generatedKeyframes)

    return { animationName, ...generatedConfig }
  }

export const useAnimation = ({ keyframes, ...config }: AnimationStyle): CSSObject => {
  const theme = useTheme()

  const css = createCSS(keyframes, config)(theme)

  return css
}

export const useDynamicAnimation = <
  T extends Array<AnimationStyle> | Record<string, AnimationStyle>,
>(
  styles: T,
  init?: keyof T,
): [CSSObject | undefined, (key: keyof T | ((key: keyof T | undefined) => keyof T)) => void] => {
  const theme = useTheme()
  const key = useRef<string | undefined>(!isUndefined(init) ? String(init) : undefined)
  const cache = useRef<Map<string, CSSObject>>(new Map<string, CSSObject>())
  const [animations, setAnimations] = useState<CSSObject | undefined>(() => {
    for (const [key, { keyframes, ...config }] of Object.entries(styles)) {
      if (!cache.current.has(key)) cache.current.set(key, createCSS(keyframes, config)(theme))
    }

    return cache.current.get(key.current ?? '')
  })

  const setAnimation = (keysIfFunc: keyof T | ((key: keyof T | undefined) => keyof T)) => {
    const _key = runIfFunc(
      keysIfFunc,
      (!isUndefined(key.current) && isArray(styles) ? Number(key.current) : key.current) as
        | keyof T
        | undefined,
    )

    key.current = String(_key)

    setAnimations(cache.current.get(key.current))
  }

  return [animations, setAnimation]
}
