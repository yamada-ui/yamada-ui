import { keyframes as emotionKeyframes } from '@emotion/react'
import { CSSObject } from '@emotion/styled'
import * as CSS from 'csstype'
import { useTheme } from '../hooks'
import { CSSUIProps, Dict, Token } from '../types'
import { css } from './'

export type AnimationStyle = {
  keyframes: Record<string, CSSUIProps<'unresponsive', 'unscheme'>>
  delay?: Token<CSS.Property.AnimationDelay>
  direction?: Token<CSS.Property.AnimationDirection>
  duration?: Token<CSS.Property.AnimationDuration>
  fillMode?: Token<CSS.Property.AnimationFillMode>
  iterationCount?: Token<CSS.Property.AnimationIterationCount>
  playState?: Token<CSS.Property.AnimationPlayState>
  timingFunction?: Token<CSS.Property.AnimationTimingFunction>
}

const transformConfig = (obj: Omit<AnimationStyle, 'keyframes'>): Dict =>
  Object.entries(obj).reduce((obj, [key, value]) => {
    key = 'animation' + key.slice(0, 1).toUpperCase() + key.slice(1)

    obj[key] = value

    return obj
  }, {} as Dict)

export const animation = ({ keyframes: _keyframes, ...rest }: AnimationStyle): CSSObject => {
  const theme = useTheme()

  const keyframes = css(_keyframes)(theme)

  const _config = transformConfig(rest)

  const config = css(_config)(theme)

  const animationName = emotionKeyframes(keyframes)

  return { animationName, ...config }
}
