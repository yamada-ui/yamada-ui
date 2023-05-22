import { CSSObject } from '@emotion/react'
import { isNumber, Union, Dict } from '@yamada-ui/utils'
import * as CSS from 'csstype'
import { ThemeToken } from '../theme'
import { StyledTheme } from '../theme.types'
import {
  analyzeCSSValue,
  isCSSFunction,
  tokenToCSSVar,
  createGradient,
  globalValues,
} from './utils'

type CSSProperties = Union<keyof CSS.Properties>

export type Transform = (value: any, theme: StyledTheme<Dict>, css?: Dict) => any

export type ConfigProps = {
  static?: CSSObject
  processResult?: boolean
  property?: CSSProperties | CSSProperties[] | ((theme: StyledTheme<Dict>) => CSSProperties)
  token?: ThemeToken
  transform?: Transform
}

export type Configs = Record<string, ConfigProps | true>

export const createTransform =
  ({
    token,
    compose,
    transform,
  }: {
    token: ThemeToken
    compose?: Transform
    transform?: Transform
  }): Transform =>
  (value, theme) => {
    value = tokenToCSSVar(token, value)(theme)

    let result = transform?.(value, theme) ?? value

    if (compose) result = compose(result, theme)

    return result
  }

export const createConfig =
  (token: ThemeToken, transform?: Transform) =>
  <T extends CSSProperties>(property: T | T[]): ConfigProps => ({
    token,
    property,
    transform: createTransform({
      token,
      transform,
    }),
  })

export const transforms = {
  px: (value: any) => {
    if (value == null) return value

    const { isUnitless } = analyzeCSSValue(value)

    return isUnitless || isNumber(value) ? `${value}px` : value
  },

  fraction: (value: any) => {
    if (isNumber(value) && value <= 1) {
      return `${value * 100}%`
    } else {
      return value
    }
  },

  isTruncated: (value: boolean) => {
    if (value === true) {
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    }
  },

  bgClip: (value: any) => {
    if (value === 'text') {
      return { color: 'transparent', backgroundClip: 'text' }
    } else {
      return { backgroundClip: value }
    }
  },

  bgImage: (value: any) => {
    if (value == null) return value

    if (!isCSSFunction(value) && !globalValues.has(value)) {
      return `url(${value})`
    } else {
      return value
    }
  },

  bgGradient: createGradient,
}

export const configs = {
  color: createConfig('colors'),

  space: createConfig('spaces', transforms.px),

  radii: createConfig('radii', transforms.px),

  shadow: createConfig('shadows'),

  border: createConfig('borders'),

  size: createConfig('sizes', transforms.px),

  sizeTransform: createConfig('sizes', transforms.fraction),

  prop: (
    property: ConfigProps['property'],
    token?: ThemeToken,
    transform?: ConfigProps['transform'],
  ) =>
    token
      ? {
          property,
          token,
          transform: createTransform({ token, transform }),
        }
      : {
          property,
          token,
        },

  propTransform: (property: ConfigProps['property'], transform?: ConfigProps['transform']) => ({
    property,
    transform,
  }),
}
