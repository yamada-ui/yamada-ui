import type { CSSUIObject } from "./css"

export type Pseudos = typeof pseudos

export type PseudoSelectors = Pseudos[keyof Pseudos]

export const pseudos = {
  /**
   * The CSS `:hover` pseudo-class.
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * The CSS `:hover` pseudo-class.
   */
  _nativeHover: "&:hover",
  /**
   * The CSS `:active` pseudo-class.
   */
  _active: "&:active, &[data-active]",
  /**
   * The CSS `:active` pseudo-class.
   */
  _nativeActive: "&:active",
  /**
   * The CSS `:target` pseudo-class.
   */
  _target: "&:target, &[data-target]",
  /**
   * The CSS `:not(:target)` pseudo-class.
   */
  _notTarget: "&:not(:target)",
  /**
   * The CSS `:target` pseudo-class.
   */
  _nativeTarget: "&:target",
  /**
   * The CSS `:focus` pseudo-class.
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * The CSS `:focus` pseudo-class.
   */
  _nativeFocus: "&:focus",
  /**
   * The CSS `:focus-visible` pseudo-class.
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * The CSS `:focus-visible` pseudo-class.
   */
  _nativeFocusVisible: "&:focus-visible",
  /**
   * The CSS `:focus-within` pseudo-class.
   */
  _focusWithin: "&:focus-within, &[data-focus-within]",
  /**
   * The CSS `:focus-within` pseudo-class.
   */
  _nativeFocusWithin: "&:focus-within",
  /**
   * The CSS `:disabled` pseudo-class.
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * The CSS `:disabled` pseudo-class.
   */
  _nativeDisabled: "&:disabled, &[disabled]",
  /**
   * The CSS `:read-only` pseudo-class.
   */
  _readOnly: "&[readonly], &[aria-readonly=true], &[data-readonly]",
  /**
   * The CSS `:read-only` pseudo-class.
   */
  _nativeReadOnly: "&[readonly], &[aria-readonly=true]",
  /**
   * The CSS `:indeterminate` pseudo-class.
   */
  _indeterminate:
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * The CSS `::before` pseudo-element.
   */
  _before: "&::before",
  /**
   * The CSS `::after` pseudo-element.
   */
  _after: "&::after",
  /**
   * The CSS `::marker` pseudo-element.
   */
  _marker: "&::marker",
  /**
   * The CSS `::first-letter` pseudo-element.
   */
  _firstLetter: "&::first-letter",
  /**
   * The CSS `::first-line` pseudo-element.
   */
  _firstLine: "&::first-line",
  /**
   * The CSS `:empty` pseudo-class.
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`.
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * The CSS `:checked` pseudo-class.
   */
  _checked: "&:checked, &[data-checked], &[aria-checked=true]",
  /**
   * The CSS `:checked` pseudo-class.
   */
  _nativeChecked: "&:checked",
  /**
   * The CSS `:invalid` pseudo-class.
   */
  _invalid: "&[data-invalid], &[aria-invalid=true]",
  /**
   * The CSS `:valid` pseudo-class.
   */
  _valid: "&:valid, &[data-valid], &[data-state=valid]",
  /**
   * The CSS `:valid` pseudo-class.
   */
  _nativeValid: "&:valid",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`.
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * The CSS `[hidden=true]` pseudo-class.
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * The CSS `[hidden=true]` pseudo-class.
   */
  _nativeHidden: "&[hidden]",
  /**
   * The CSS `:visited` pseudo-class.
   */
  _visited: "&:visited",
  /**
   * The CSS `::placeholder` pseudo-element.
   */
  _placeholder: "&::placeholder, &[data-placeholder]",
  /**
   * The CSS `:placeholder-shown` pseudo-class.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * The CSS `:fullscreen` pseudo-class.
   */
  _fullScreen: "&:fullscreen",
  /**
   * The CSS `::selection` pseudo-element.
   */
  _selection: "&::selection",
  /**
   * The CSS `:nth-of-type(even)` pseudo-class.
   */
  _even: "&:nth-of-type(even)",
  /**
   * The CSS `:nth-of-type(odd)` pseudo-class.
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * The CSS `:first-of-type` pseudo-class.
   */
  _first: "&:first-of-type",
  /**
   * The CSS `:last-of-type` pseudo-class.
   */
  _last: "&:last-of-type",
  /**
   * The CSS `:not(:first-of-type)` pseudo-class.
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * The CSS `:not(:last-of-type)` pseudo-class.
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * The CSS `:-webkit-autofill` pseudo-class.
   */
  _autofill: "&:-webkit-autofill",
  _filled: "&[data-filled]",
  _start: "&[data-start]",
  _end: "&[data-end]",
  _outside: "&:where([data-outside])",
  _between: "&[data-between]",
  _weekend: "&:where([data-weekend])",
  _holiday: "&[data-holiday]",
  _today: "&[data-today]",
  _accept: "&[data-accept]",
  _reject: "&[data-reject]",
  _idle: "&[data-idle]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _loaded: "&[data-loaded]",
  _ripple: "& .ui-ripple",
  /**
   * The CSS `:vertical` pseudo-class.
   */
  _vertical:
    "&:vertical, &[aria-orientation=vertical], &[data-orientation=vertical]",
  /**
   * The CSS `:horizontal` pseudo-class.
   */
  _horizontal:
    "&:horizontal, &[aria-orientation=horizontal], &[data-orientation=horizontal]",
  /**
   * The CSS `::-webkit-scrollbar` pseudo-element.
   */
  _scrollbar: "&::-webkit-scrollbar",
  /**
   * The CSS `::-webkit-scrollbar-track` pseudo-element.
   */
  _scrollbarTrack: "&::-webkit-scrollbar-track",
  /**
   * The CSS `::-webkit-scrollbar-track-piece` pseudo-element.
   */
  _scrollbarTrackPiece: "&::-webkit-scrollbar-track-piece",
  /**
   * The CSS `::-webkit-scrollbar-thumb` pseudo-element.
   */
  _scrollbarThumb: "&::-webkit-scrollbar-thumb",
  /**
   * The CSS `::-webkit-scrollbar-button` pseudo-element.
   */
  _scrollbarButton: "&::-webkit-scrollbar-button",
  /**
   * The CSS `::-webkit-scrollbar-corner` pseudo-element.
   */
  _scrollbarCorner: "&::-webkit-scrollbar-corner",
  /**
   * The CSS `@media (prefers-color-scheme: dark)` media feature.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * The CSS `@media (prefers-reduced-motion: reduce)` media feature.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-mode` is applied to any parent of
   * this component or element.
   */
  _dark:
    ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]",
  /**
   * Styles for when `data-mode` is applied to any parent of
   * this component or element.
   */
  _light:
    ".ui-light &:not([data-mode]), [data-mode=light] &:not([data-mode]), &[data-mode=light]",
} as const

export const pseudosProperties = Object.keys(pseudos) as (keyof Pseudos)[]

export const pseudosSelectors = Object.values(pseudos)

export type PseudoProps = {
  [K in keyof Pseudos]?: CSSUIObject
}
