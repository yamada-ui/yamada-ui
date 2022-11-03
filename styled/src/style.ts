import { keyframes as emotionKeyframes, Keyframes, CSSObject } from '@emotion/react'
import { styles, pseudos, Scheme } from './'

const styleProps = { ...styles, ...pseudos }

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined

export const mode =
  <L extends any, D extends any>(light: L, dark: D) =>
  (scheme: Scheme | undefined = 'light'): L | D =>
    scheme === 'light' ? light : dark

export const keyframes = (...arg: CSSObject[]): Keyframes => emotionKeyframes(...arg)
