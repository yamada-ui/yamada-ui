import { keyframes as emotionKeyframes, Keyframes, CSSObject } from '@emotion/react'
import { styles, pseudos, ColorScheme } from './'

const styleProps = { ...styles, ...pseudos }

export const defaultColorStyles = ['primary', 'secondary', 'warning', 'danger', 'link']

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined

export const mode =
  <L extends any, D extends any>(light: L, dark: D) =>
  (colorScheme: ColorScheme | undefined = 'light'): L | D =>
    colorScheme === 'light' ? light : dark

export const isDefaultColor =
  (defaultColor: any, otherColor: any) =>
  (colorStyle: string | undefined): any =>
    colorStyle && defaultColorStyles.includes(colorStyle) ? defaultColor : otherColor

export const keyframes = (...arg: CSSObject[]): Keyframes => emotionKeyframes(...arg)
