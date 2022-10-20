import * as CSS from 'csstype'
import { css, CSSUIProps, Token, keyframes as emotionKeyframes, CSSObject } from '@yamada-ui/styled'
import { useTheme } from '@yamada-ui/providers'
import { Dict } from '@yamada-ui/utils'

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

export const useAnimation = ({ keyframes: _keyframes, ...rest }: AnimationStyle): CSSObject => {
  const theme = useTheme()

  const keyframes = css(_keyframes)(theme)

  const _config = transformConfig(rest)

  const config = css(_config)(theme)

  const animationName = emotionKeyframes(keyframes)

  return { animationName, ...config }
}
