import {
  css,
  StylesProps,
  Token,
  keyframes as emotionKeyframes,
  StyledTheme,
  useTheme,
  useColorMode,
  ColorMode,
} from '@yamada-ui/core'
import { useBoolean } from '@yamada-ui/use-boolean'
import { useEventListener } from '@yamada-ui/use-event-listener'
import {
  Dict,
  isArray,
  isUndefined,
  runIfFunc,
  getOwnerWindow,
  getMemoizedObject as get,
} from '@yamada-ui/utils'
import type * as CSS from 'csstype'
import { useCallback, useEffect, useRef, useState } from 'react'

export type AnimationStyle = {
  keyframes: Record<string, StylesProps<'unResponsive', 'unColorMode'>>
  duration?: Token<
    CSS.Property.AnimationDuration,
    'transitionDuration',
    'unResponsive',
    'unColorMode'
  >
  timingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    'transitionEasing',
    'unResponsive',
    'unColorMode'
  >
  delay?: Token<
    CSS.Property.AnimationDelay,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  iterationCount?: Token<
    CSS.Property.AnimationIterationCount,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  direction?: Token<
    CSS.Property.AnimationDirection,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  fillMode?: Token<
    CSS.Property.AnimationFillMode,
    unknown,
    'unResponsive',
    'unColorMode'
  >
  playState?: Token<
    CSS.Property.AnimationPlayState,
    unknown,
    'unResponsive',
    'unColorMode'
  >
}

const getValue =
  (
    name: string,
    path: Omit<AnimationStyle, 'keyframes'>[keyof Omit<
      AnimationStyle,
      'keyframes'
    >],
  ) =>
  (theme: StyledTheme<Dict>, colorMode: ColorMode) => {
    const value = get(theme, `${name}.${path}`)

    if (isArray(value)) {
      const [lightValue, darkValue] = value

      return colorMode === 'light' ? lightValue : darkValue
    } else {
      return value
    }
  }

const transformConfig =
  (obj: Omit<AnimationStyle, 'keyframes'>) =>
  (
    theme: StyledTheme<Dict>,
    colorMode: ColorMode,
  ): Omit<AnimationStyle, 'keyframes'> =>
    Object.entries(obj).reduce((obj, [key, value]) => {
      if (key === 'duration')
        value =
          getValue('transitions.duration', value)(theme, colorMode) ?? value
      if (key === 'timingFunction')
        value = getValue('transitions.easing', value)(theme, colorMode) ?? value

      obj[key] = value

      return obj
    }, {} as Dict) as Omit<AnimationStyle, 'keyframes'>

const createAnimation =
  (
    keyframes: AnimationStyle['keyframes'],
    config: Omit<AnimationStyle, 'keyframes'>,
  ) =>
  (theme: StyledTheme<Dict>, colorMode: ColorMode): string => {
    const generatedKeyframes = css(keyframes)(theme)

    const {
      duration = '0s',
      timingFunction = 'ease',
      delay = '0s',
      iterationCount = '1',
      direction = 'normal',
      fillMode = 'none',
      playState = 'running',
    } = transformConfig(config)(theme, colorMode)

    const name = emotionKeyframes(generatedKeyframes)

    return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  }

export const useAnimation = (
  styles: AnimationStyle | AnimationStyle[],
): string => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  if (isArray(styles)) {
    return styles
      .map((style) => {
        const { keyframes, ...config } = style

        return createAnimation(keyframes, config)(theme, colorMode)
      })
      .join(', ')
  } else {
    const { keyframes, ...config } = styles

    return createAnimation(keyframes, config)(theme, colorMode)
  }
}

export const useDynamicAnimation = <
  T extends
    | Array<AnimationStyle>
    | Record<string, AnimationStyle | AnimationStyle[]>,
>(
  arrayOrObj: T,
  init?: keyof T | (keyof T)[],
): [
  string | undefined,
  (
    key:
      | keyof T
      | (keyof T)[]
      | ((key: keyof T | (keyof T)[] | undefined) => keyof T | (keyof T)[]),
  ) => void,
] => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

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
          styles
            .map(({ keyframes, ...config }) =>
              createAnimation(keyframes, config)(theme, colorMode),
            )
            .join(', '),
        )
      } else {
        const { keyframes, ...config } = styles

        cache.current.set(
          key,
          createAnimation(keyframes, config)(theme, colorMode),
        )
      }
    }

    if (isArray(keys.current)) {
      return keys.current.map((key) => cache.current.get(key)).join(', ')
    } else {
      return cache.current.get(keys.current ?? '')
    }
  })

  const setAnimation = useCallback(
    (
      keysOrFunc:
        | keyof T
        | (keyof T)[]
        | ((key: keyof T | (keyof T)[] | undefined) => keyof T | (keyof T)[]),
    ) => {
      const args = (() => {
        if (!isUndefined(keys.current) && isArray(arrayOrObj)) {
          return isArray(keys.current)
            ? keys.current.map(Number)
            : Number(keys.current)
        } else {
          return keys.current
        }
      })() as keyof T | (keyof T)[] | undefined

      const keyOrArray = runIfFunc(keysOrFunc, args)

      keys.current = isArray(keyOrArray)
        ? keyOrArray.map(String)
        : String(keyOrArray)

      if (isArray(keys.current)) {
        setAnimations(
          keys.current.map((key) => cache.current.get(key)).join(', '),
        )
      } else {
        setAnimations(cache.current.get(keys.current ?? ''))
      }
    },
    [arrayOrObj],
  )

  return [animations, setAnimation]
}

export type UseAnimationObserverProps = {
  isOpen: boolean
  ref: React.RefObject<HTMLElement>
}

export const useAnimationObserver = ({
  isOpen,
  ref,
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
    'animationend',
    () => setMounted(isOpen),
  )

  const hidden = isOpen ? false : !mounted

  return {
    present: !hidden,
    onAnimationComplete() {
      const ownerWindow = getOwnerWindow(ref.current)
      const event = new ownerWindow.CustomEvent('animationend', {
        bubbles: true,
      })

      ref.current?.dispatchEvent(event)
    },
  }
}

export type ReturnUseAnimationObserver = ReturnType<typeof useAnimationObserver>
