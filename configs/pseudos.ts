import { CSSUIProps } from '../types'

export type Pseudos = typeof pseudos

export const pseudos = {
  _hover: '&:hover, &[data-hover]',
  _active: '&:active, &[data-active]',
  _focus: '&:focus, &[data-focus]',
  _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  _readOnly: '&[readonly], &[aria-readonly=true], &[data-readonly]',
  _before: '&::before',
  _after: '&::after',
  _empty: '&:empty',
  _checked: '&[aria-checked=true], &[data-checked]',
  _invalid: '&[aria-invalid=true], &[data-invalid]',
  _valid: '&[data-valid], &[data-state=valid]',
  _selected: '&[aria-selected=true], &[data-selected]',
  _hidden: '&[hidden], &[data-hidden]',
  _visited: '&:visited',
  _placeholder: '&::placeholder',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _mediaDark: '@media (prefers-color-scheme: dark)',
  _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
  _dark: 'html[data-theme="dark"] &',
  _light: 'html[data-theme="light"] &',
}

export type PseudosProps<Y = 'responsive', M = 'scheme'> = {
  [K in keyof Pseudos]?: CSSUIProps<Y, M>
}
