import { styles, pseudos } from 'configs'

const styleProps = { ...styles, ...pseudos }

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined
