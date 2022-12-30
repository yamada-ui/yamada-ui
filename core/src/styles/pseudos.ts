import { CSSUIObject } from '..'

export type Pseudos = typeof pseudos

export const pseudos = {
  _hover: '&:hover, &[data-hover]',
  _active: '&:active, &[data-active]',
  _focus: '&:focus, &[data-focus]',
  _focusVisible: '&:focus-visible, &[data-focus-visible]',
  _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  _readOnly: '&[readonly], &[aria-readonly=true], &[data-readonly]',
  _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
  _before: '&::before',
  _after: '&::after',
  _empty: '&:empty',
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  _checked: '&[data-checked], &[aria-checked=true]',
  _invalid: '&[data-invalid], &[aria-invalid=true]',
  _valid: '&[data-valid], &[data-state=valid]',
  _selected: '&[aria-selected=true], &[data-selected]',
  _hidden: '&[hidden], &[data-hidden]',
  _visited: '&:visited',
  _placeholder: '&[data-placeholder], &::placeholder',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _mediaDark: '@media (prefers-color-scheme: dark)',
  _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
  _dark: '.ui-dark &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]',
  _light:
    '.ui-light &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]',
}

export type PseudosProps = {
  [K in keyof Pseudos]?: CSSUIObject
}
