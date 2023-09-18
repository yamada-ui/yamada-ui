import {
  css,
  keyframes as emotionKeyframes,
  StyledTheme,
  useTheme,
  useColorMode,
  ColorMode,
  AnimationStyle,
  Theme,
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
  isString,
} from '@yamada-ui/utils'
import { useCallback, useEffect, useRef, useState } from 'react'

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

const createKeyframes =
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

const createAnimation =
  (tokenOrObj: AnimationStyle | Theme['animations']) =>
  (theme: StyledTheme<Dict>, colorMode: ColorMode) => {
    let resolvedStyle: AnimationStyle | undefined

    if (isString(tokenOrObj)) {
      resolvedStyle = get(theme, `animations.${tokenOrObj}`, {})
    } else {
      resolvedStyle = tokenOrObj
    }

    const { keyframes = {}, ...config } = resolvedStyle ?? {}

    return createKeyframes(keyframes, config)(theme, colorMode)
  }

type Styles =
  | AnimationStyle
  | Theme['animations']
  | (AnimationStyle | Theme['animations'])[]

export const useAnimation = (styles: Styles): string => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  if (isArray(styles)) {
    return styles
      .map((style) => createAnimation(style)(theme, colorMode))
      .join(', ')
  } else {
    return createAnimation(styles)(theme, colorMode)
  }
}

export const useDynamicAnimation = <
  T extends (AnimationStyle | Theme['animations'])[] | Record<string, Styles>,
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
            .map((style) => createAnimation(style)(theme, colorMode))
            .join(', '),
        )
      } else {
        cache.current.set(key, createAnimation(styles)(theme, colorMode))
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
      const ev = new ownerWindow.CustomEvent('animationend', {
        bubbles: true,
      })

      ref.current?.dispatchEvent(ev)
    },
  }
}

export type ReturnUseAnimationObserver = ReturnType<typeof useAnimationObserver>
