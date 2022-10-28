import { keyframes as emotionKeyframes, Keyframes, CSSObject } from '@emotion/react'
import { styles, pseudos } from './'

const styleProps = { ...styles, ...pseudos }

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined

export const keyframes = (...arg: CSSObject[]): Keyframes => emotionKeyframes(...arg)
