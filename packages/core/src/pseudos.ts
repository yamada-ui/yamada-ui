import type { Length, Replace } from "@yamada-ui/utils"
import type { CSSUIObject } from "./css"

type ReplaceSelectors<
  Y extends string[],
  M extends string,
  D extends string,
  H extends string,
> = Y extends [infer R extends string, ...infer T extends string[]]
  ? `${Replace<Replace<M, D, R>, ",", `${H},`>}${Length<T> extends 0 ? "" : `${H}, `}${ReplaceSelectors<T, M, D, H>}`
  : H

const toGroup = <Y extends string>(selectors: Y) =>
  ["[role=group]", "[data-group]", ".group"]
    .map((prefix) => merge(parse(selectors), prefix, " &"))
    .join(", ") as ReplaceSelectors<
    ["[role=group]", "[data-group]", ".group"],
    Y,
    "&",
    " &"
  >

const toPeer = <Y extends string>(selectors: Y) =>
  ["[data-peer]", ".peer"]
    .map((prefix) => merge(parse(selectors), prefix, " ~ &"))
    .join(", ") as ReplaceSelectors<["[data-peer]", ".peer"], Y, "&", " ~ &">

const parse = (selectors: string) =>
  selectors.split(",").map((selector) => selector.trim().slice(1))

const merge = (selectors: string[], prefix = "&", suffix = "") =>
  selectors.map((selector) => `${prefix}${selector}${suffix}`).join(", ")

export const attributes = {
  /**
   * The CSS `[data-accept]` attribute selector.
   */
  _accept: "&[data-accept]",
  /**
   * The CSS `[data-between]` attribute selector.
   */
  _between: "&[data-between]",
  /**
   * The CSS `[data-end]` attribute selector.
   */
  _end: "&[data-end]",
  /**
   * The CSS `[aria-selected=true]` attribute selector.
   *
   * - `[aria-expanded=true]`
   * - `[data-expanded]`
   */
  _expanded: "&[data-expanded], &[aria-expanded=true]",
  /**
   * The CSS `[data-filled]` attribute selector.
   */
  _filled: "&[data-filled]",
  /**
   * The CSS `[data-grabbed]` attribute selector.
   *
   * - `[data-grabbed]`
   * - `[aria-grabbed=true]`
   */
  _grabbed: "&[data-grabbed], &[aria-grabbed=true]",
  /**
   * The CSS `[hidden]` attribute selector.
   *
   * - `[hidden]`
   * - `[data-hidden]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * The CSS `[data-holiday]` attribute selector.
   */
  _holiday: "&[data-holiday]",
  /**
   * The CSS `[data-idle]` attribute selector.
   */
  _idle: "&[data-idle]",
  /**
   * The CSS `[data-loaded]` attribute selector.
   */
  _loaded: "&[data-loaded]",
  /**
   * The CSS `[aria-busy=true]` attribute selector.
   *
   * - `[data-loading]`
   * - `[aria-busy=true]`
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * The CSS `[hidden]` attribute selector.
   */
  _nativeHidden: "&[hidden]",
  /**
   * The CSS `:where([data-outside])` attribute selector.
   */
  _outside: "&:where([data-outside])",
  /**
   * The CSS `[data-pressed]` attribute selector.
   *
   * - `[data-pressed]`
   * - `[aria-pressed=true]`
   */
  _pressed: "&[data-pressed], &[aria-pressed=true]",
  /**
   * The CSS `[data-reject]` attribute selector.
   */
  _reject: "&[data-reject]",
  _ripple: "& .ui-ripple",
  /**
   * The CSS `:selected` attribute selector.
   *
   * - `[data-selected]`
   * - `[aria-selected=true]`
   */
  _selected: "&[data-selected], &[aria-selected=true]",
  /**
   * The CSS `[data-start]` attribute selector.
   */
  _start: "&[data-start]",
  /**
   * The CSS `[data-today]` attribute selector.
   */
  _today: "&[data-today]",
  /**
   * The CSS `:where([data-weekend])` attribute selector.
   */
  _weekend: "&:where([data-weekend])",
} as const

export type Attributes = typeof attributes
export type AttributeProperty = keyof Attributes
export type AttributeSelector = Attributes[AttributeProperty]
export type AttributeProps = {
  [K in AttributeProperty]?: CSSUIObject
}

export const attributeProperties = Object.keys(
  attributes,
) as AttributeProperty[]
export const attributeSelectors = Object.values(attributes)

export const pseudoElements = {
  /**
   * The CSS `::after` pseudo-element.
   */
  _after: "&::after",
  /**
   * The CSS `::backdrop` pseudo-element.
   */
  _backdrop: "&::backdrop",
  /**
   * The CSS `::before` pseudo-element.
   */
  _before: "&::before",
  /**
   * The CSS `::cue` pseudo-element.
   */
  _cue: "&::cue",
  /**
   * The CSS `::cue-region` pseudo-element.
   */
  _cueRegion: "&::cue-region",
  /**
   * The CSS `::file-selector-button` pseudo-element.
   */
  _fileSelector: "&::file-selector-button",
  /**
   * The CSS `::first-letter` pseudo-element.
   */
  _firstLetter: "&::first-letter",
  /**
   * The CSS `::first-line` pseudo-element.
   */
  _firstLine: "&::first-line",
  /**
   * The CSS `::marker` pseudo-element.
   */
  _marker: "&::marker",
  /**
   * The CSS `::placeholder` pseudo-element.
   *
   * - `::placeholder`
   * - `[data-placeholder]`
   */
  _placeholder: "&::placeholder, &[data-placeholder]",
  /**
   * The CSS `::-webkit-scrollbar` pseudo-element.
   *
   * - `::-webkit-scrollbar`
   * - `[data-scrollbar]`
   */
  _scrollbar: "&::-webkit-scrollbar, &[data-scrollbar]",
  /**
   * The CSS `::-webkit-scrollbar-button` pseudo-element.
   */
  _scrollbarButton: "&::-webkit-scrollbar-button",
  /**
   * The CSS `::-webkit-scrollbar-corner` pseudo-element.
   */
  _scrollbarCorner: "&::-webkit-scrollbar-corner",
  /**
   * The CSS `::-webkit-scrollbar-thumb` pseudo-element.
   */
  _scrollbarThumb: "&::-webkit-scrollbar-thumb",
  /**
   * The CSS `::-webkit-scrollbar-track` pseudo-element.
   */
  _scrollbarTrack: "&::-webkit-scrollbar-track",
  /**
   * The CSS `::-webkit-scrollbar-track-piece` pseudo-element.
   */
  _scrollbarTrackPiece: "&::-webkit-scrollbar-track-piece",
  /**
   * The CSS `::selection` pseudo-element.
   */
  _selection: "&::selection",
} as const

export type PseudoElements = typeof pseudoElements
export type PseudoElementProperty = keyof PseudoElements
export type PseudoElementSelector = PseudoElements[PseudoElementProperty]
export type PseudoElementProps = {
  [K in PseudoElementProperty]?: CSSUIObject
}

export const pseudoElementProperties = Object.keys(
  pseudoElements,
) as PseudoElementProperty[]
export const pseudoElementSelectors = Object.values(pseudoElements)

export const pseudoClasses = {
  /**
   * The CSS `:active` pseudo-class.
   *
   * - `:active`
   * - `[data-active]`
   */
  _active: "&:active, &[data-active]",
  /**
   * The CSS `:any-link` pseudo-class.
   *
   * - `:any-link`
   * - `[data-any-link]`
   */
  _anyLink: "&:any-link, &[data-any-link]",
  /**
   * The CSS `:autofill` pseudo-class.
   */
  _autofill: "&:autofill, &:-webkit-autofill",
  /**
   * The CSS `:blank` pseudo-class.
   *
   * - `:blank`
   * - `[data-blank]`
   */
  _blank: "&:blank, &[data-blank]",
  /**
   * The CSS `:checked` pseudo-class.
   *
   * - `:checked`
   * - `[data-checked]`
   * - `[aria-checked=true]`
   */
  _checked: "&:checked, &[data-checked], &[aria-checked=true]",
  /**
   * The CSS `:default` pseudo-class.
   */
  _default: "&:default",
  /**
   * The CSS `:disabled` pseudo-class.
   *
   * - `:disabled`
   * - `[disabled]`
   * - `[aria-disabled=true]`
   * - `[data-disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * The CSS `:empty` pseudo-class.
   */
  _empty: "&:empty",
  /**
   * The CSS `:enabled` pseudo-class.
   */
  _enabled: "&:enabled, &[data-enabled]",
  /**
   * The CSS `:nth-of-type(even)` pseudo-class.
   */
  _even: "&:nth-of-type(even)",
  /**
   * The CSS `:first-of-type` pseudo-class.
   */
  _first: "&:first-of-type",
  /**
   * The CSS `:focus` pseudo-class.
   *
   * - `:focus`
   * - `[data-focus]`
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * The CSS `:focus-visible` pseudo-class.
   *
   * - `:focus-visible`
   * - `[data-focus-visible]`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * The CSS `:focus-within` pseudo-class.
   *
   * - `:focus-within`
   * - `[data-focus-within]`
   */
  _focusWithin: "&:focus-within, &[data-focus-within]",
  /**
   * The CSS `:fullscreen` pseudo-class.
   */
  _fullScreen: "&:fullscreen",
  /**
   * The CSS `:horizontal` pseudo-class.
   *
   * - `:horizontal`
   * - `[aria-orientation=horizontal]`
   * - `[data-orientation=horizontal]`
   */
  _horizontal:
    "&:horizontal, &[data-orientation=horizontal], &[aria-orientation=horizontal]",
  /**
   * The CSS `:hover` pseudo-class.
   *
   * - `:hover`
   * - `[data-hover]`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * The CSS `:indeterminate` pseudo-class.
   *
   * - `:indeterminate`
   * - `[aria-checked=mixed]`
   * - `[data-indeterminate]`
   */
  _indeterminate:
    "&:indeterminate, &[data-indeterminate], &[aria-checked=mixed]",
  /**
   * The CSS `:in-range` pseudo-class.
   *
   * - `:in-range`
   * - `[data-in-range]`
   */
  _inRange: "&:in-range, &[data-in-range]",
  /**
   * The CSS `:invalid` attribute selector.
   *
   * - `[data-invalid]`
   * - `[aria-invalid=true]`
   */
  _invalid: "&[data-invalid], &[aria-invalid=true]",
  /**
   * The CSS `:last-of-type` pseudo-class.
   */
  _last: "&:last-of-type",
  /**
   * The CSS `:link` pseudo-class.
   *
   * - `:link`
   * - `[data-link]`
   */
  _link: "&:link, &[data-link]",
  /**
   * The CSS `:modal` pseudo-class.
   */
  _modal: "&:modal",
  /**
   * The CSS `:active` pseudo-class.
   */
  _nativeActive: "&:active",
  /**
   * The CSS `:checked` pseudo-class.
   */
  _nativeChecked: "&:checked",
  /**
   * The CSS `:disabled` pseudo-class.
   *
   * - `:disabled`
   * - `[disabled]`
   */
  _nativeDisabled: "&:disabled, &[disabled]",
  /**
   * The CSS `:focus` pseudo-class.
   */
  _nativeFocus: "&:focus",
  /**
   * The CSS `:focus-visible` pseudo-class.
   */
  _nativeFocusVisible: "&:focus-visible",
  /**
   * The CSS `:focus-within` pseudo-class.
   */
  _nativeFocusWithin: "&:focus-within",
  /**
   * The CSS `:hover` pseudo-class.
   */
  _nativeHover: "&:hover",
  /**
   * The CSS `:read-only` pseudo-class.
   *
   * - `[readonly]`
   * - `[aria-readonly=true]`
   */
  _nativeReadOnly: "&[readonly], &[aria-readonly=true]",
  /**
   * The CSS `:target` pseudo-class.
   */
  _nativeTarget: "&:target",
  /**
   * The CSS `:valid` pseudo-class.
   */
  _nativeValid: "&:valid",
  /**
   * The CSS `:not(:first-of-type)` pseudo-class.
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * The CSS `:not(:last-of-type)` pseudo-class.
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * The CSS `:not(:target)` pseudo-class.
   */
  _notTarget: "&:not(:target)",
  /**
   * The CSS `:nth-of-type(odd)` pseudo-class.
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * The CSS `:only-of-type` pseudo-class.
   */
  _only: "&:only-of-type",
  /**
   * The CSS `:optional` pseudo-class.
   *
   * - `:optional`
   * - `[data-optional]`
   */
  _optional: "&:optional, &[data-optional]",
  /**
   * The CSS `:out-of-range` pseudo-class.
   *
   * - `:out-of-range`
   * - `[data-out-of-range]`
   */
  _outRange: "&:out-of-range, &[data-out-of-range]",
  /**
   * The CSS `:paused` pseudo-class.
   *
   * - `:paused`
   * - `[data-paused]`
   */
  _paused: "&:paused, &[data-paused]",
  /**
   * The CSS `:picture-in-picture` pseudo-class.
   */
  _picture: "&:picture-in-picture",
  /**
   * The CSS `:placeholder-shown` pseudo-class.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * The CSS `:playing` pseudo-class.
   *
   * - `:playing`
   * - `[data-playing]`
   */
  _playing: "&:playing, &[data-playing]",
  /**
   * The CSS `:read-only` pseudo-class.
   *
   * - `[readonly]`
   * - `[aria-readonly=true]`
   * - `[data-readonly]`
   */
  _readOnly: "&[readonly], &[data-readonly], &[aria-readonly=true]",
  /**
   * The CSS `:read-write` pseudo-class.
   *
   * - `:read-write`
   * - `[data-read-write]`
   */
  _readWrite: "&:read-write, &[data-read-write]",
  /**
   * The CSS `:required` pseudo-class.
   *
   * - `:required`
   * - `[required]`
   */
  _required: "&:required, &[required]",
  /**
   * The CSS `:target` pseudo-class.
   *
   * - `:target`
   * - `[data-target]`
   */
  _target: "&:target, &[data-target]",
  /**
   * The CSS `:user-invalid` pseudo-class.
   *
   * - `:user-invalid`
   * - `[data-user-invalid]`
   */
  _userInvalid: "&:user-invalid, &[data-user-invalid]",
  /**
   * The CSS `:valid` pseudo-class.
   *
   * - `:valid`
   * - `[data-valid]`
   */
  _valid: "&:valid, &[data-valid]",
  /**
   * The CSS `:vertical` pseudo-class.
   *
   * - `:vertical`
   * - `[aria-orientation=vertical]`
   * - `[data-orientation=vertical]`
   */
  _vertical:
    "&:vertical, &[data-orientation=vertical], &[aria-orientation=vertical]",
  /**
   * The CSS `:visited` pseudo-class.
   */
  _visited: "&:visited",
} as const

export type PseudoClasses = typeof pseudoClasses
export type PseudoClassProperty = keyof PseudoClasses
export type PseudoClassSelector = PseudoClasses[PseudoClassProperty]
export type PseudoClassProps = {
  [K in PseudoClassProperty]?: CSSUIObject
}

export const pseudoClassProperties = Object.keys(
  pseudoClasses,
) as PseudoClassProperty[]
export const pseudoClassSelectors = Object.values(pseudoClasses)

export const atRules = {
  /**
   * Styles for when `data-mode` is applied to any parent of this component or element.
   */
  _dark:
    ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]",
  /**
   * Styles for when `data-mode` is applied to any parent of this component or element.
   */
  _light:
    ".ui-light &:not([data-mode]), [data-mode=light] &:not([data-mode]), &[data-mode=light]",
  /**
   * The CSS `@media (prefers-color-scheme: dark)` media query.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * The CSS `@media (prefers-color-scheme: light)` media query.
   */
  _mediaLight: "@media (prefers-color-scheme: light)",
  /**
   * The CSS `@media (prefers-reduced-motion: reduce)` media query.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * The CSS `@media print` media query.
   */
  _print: "@media print",
} as const

export type AtRules = typeof atRules
export type AtRuleProperty = keyof AtRules
export type AtRuleSelector = AtRules[AtRuleProperty]
export type AtRuleProps = {
  [K in keyof AtRules]?: CSSUIObject
}

export const atRuleProperties = Object.keys(atRules) as AtRuleProperty[]
export const atRuleSelectors = Object.values(atRules)

export const groupAttributes = {
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is accepted.
   */
  _groupAccept: toGroup(attributes._accept),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is active.
   */
  _groupActive: toGroup(pseudoClasses._active),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is blank.
   */
  _groupBlank: toGroup(pseudoClasses._blank),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is checked.
   */
  _groupChecked: toGroup(pseudoClasses._checked),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is disabled.
   */
  _groupDisabled: toGroup(pseudoClasses._disabled),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is enabled.
   */
  _groupEnabled: toGroup(pseudoClasses._enabled),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is expanded.
   */
  _groupExpanded: toGroup(attributes._expanded),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is focused.
   */
  _groupFocus: toGroup(pseudoClasses._focus),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is focused-visible.
   */
  _groupFocusVisible: toGroup(pseudoClasses._focusVisible),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is focus-within.
   */
  _groupFocusWithin: toGroup(pseudoClasses._focusWithin),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is grabbed.
   */
  _groupGrabbed: toGroup(attributes._grabbed),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is horizontal.
   */
  _groupHorizontal: toGroup(pseudoClasses._horizontal),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is hovered.
   */
  _groupHover: toGroup(pseudoClasses._hover),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is idle.
   */
  _groupIdle: toGroup(attributes._idle),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is invalid.
   */
  _groupInvalid: toGroup(pseudoClasses._invalid),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is loaded.
   */
  _groupLoaded: toGroup(attributes._loaded),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is loading.
   */
  _groupLoading: toGroup(attributes._loading),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is optional.
   */
  _groupOptional: toGroup(pseudoClasses._optional),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` has a placeholder shown.
   */
  _groupPlaceholderShown: toGroup(pseudoClasses._placeholderShown),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is pressed.
   */
  _groupPressed: toGroup(attributes._pressed),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is read-only.
   */
  _groupReadOnly: toGroup(pseudoClasses._readOnly),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is read-write.
   */
  _groupReadWrite: toGroup(pseudoClasses._readWrite),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is rejected.
   */
  _groupReject: toGroup(attributes._reject),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is required.
   */
  _groupRequired: toGroup(pseudoClasses._required),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is selected.
   */
  _groupSelected: toGroup(attributes._selected),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is user-invalid.
   */
  _groupUserInvalid: toGroup(pseudoClasses._userInvalid),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is valid.
   */
  _groupValid: toGroup(pseudoClasses._valid),
  /**
   * Styles to apply when a parent element with `role=group`, `data-group` or `.group` is vertical.
   */
  _groupVertical: toGroup(pseudoClasses._vertical),
} as const

export type GroupAttributes = typeof groupAttributes
export type GroupAttributeProperty = keyof GroupAttributes
export type GroupAttributeSelector = GroupAttributes[GroupAttributeProperty]
export type GroupAttributeProps = {
  [K in GroupAttributeProperty]?: CSSUIObject
}

export const groupAttributeProperties = Object.keys(
  groupAttributes,
) as GroupAttributeProperty[]
export const groupAttributeSelectors = Object.values(groupAttributes)

export const peerAttributes = {
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is accepted.
   */
  _peerAccept: toPeer(attributes._accept),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is active.
   */
  _peerActive: toPeer(pseudoClasses._active),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is blank.
   */
  _peerBlank: toPeer(pseudoClasses._blank),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is checked.
   */
  _peerChecked: toPeer(pseudoClasses._checked),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is disabled.
   */
  _peerDisabled: toPeer(pseudoClasses._disabled),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is enabled.
   */
  _peerEnabled: toPeer(pseudoClasses._enabled),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is expanded.
   */
  _peerExpanded: toPeer(attributes._expanded),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is focused.
   */
  _peerFocus: toPeer(pseudoClasses._focus),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is focused-visible.
   */
  _peerFocusVisible: toPeer(pseudoClasses._focusVisible),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is focus-within.
   */
  _peerFocusWithin: toPeer(pseudoClasses._focusWithin),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is grabbed.
   */
  _peerGrabbed: toPeer(attributes._grabbed),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is horizontal.
   */
  _peerHorizontal: toPeer(pseudoClasses._horizontal),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is hovered.
   */
  _peerHover: toPeer(pseudoClasses._hover),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is idle.
   */
  _peerIdle: toPeer(attributes._idle),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is invalid.
   */
  _peerInvalid: toPeer(pseudoClasses._invalid),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is loaded.
   */
  _peerLoaded: toPeer(attributes._loaded),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is loading.
   */
  _peerLoading: toPeer(attributes._loading),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is optional.
   */
  _peerOptional: toPeer(pseudoClasses._optional),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` has a placeholder shown.
   */
  _peerPlaceholderShown: toPeer(pseudoClasses._placeholderShown),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is pressed.
   */
  _peerPressed: toPeer(attributes._pressed),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is read-only.
   */
  _peerReadOnly: toPeer(pseudoClasses._readOnly),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is read-write.
   */
  _peerReadWrite: toPeer(pseudoClasses._readWrite),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is rejected.
   */
  _peerReject: toPeer(attributes._reject),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is required.
   */
  _peerRequired: toPeer(pseudoClasses._required),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is selected.
   */
  _peerSelected: toPeer(attributes._selected),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is user-invalid.
   */
  _peerUserInvalid: toPeer(pseudoClasses._userInvalid),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is valid.
   */
  _peerValid: toPeer(pseudoClasses._valid),
  /**
   * Styles to apply when a parent element with `data-peer` or `.peer` is vertical.
   */
  _peerVertical: toPeer(pseudoClasses._vertical),
} as const

export type PeerAttributes = typeof peerAttributes
export type PeerAttributeProperty = keyof PeerAttributes
export type PeerAttributeSelector = PeerAttributes[PeerAttributeProperty]
export type PeerAttributeProps = {
  [K in PeerAttributeProperty]?: CSSUIObject
}

export const peerAttributeProperties = Object.keys(
  peerAttributes,
) as PeerAttributeProperty[]
export const peerAttributeSelectors = Object.values(peerAttributes)

export const pseudos = {
  ...pseudoElements,
  ...attributes,
  ...pseudoClasses,
  ...atRules,
  ...groupAttributes,
  ...peerAttributes,
} as const

export type Pseudos = typeof pseudos
export type PseudoProperty = keyof Pseudos
export type PseudoSelector = Pseudos[PseudoProperty]
export type PseudoProps = {
  [K in keyof Pseudos]?: CSSUIObject
}

export const pseudoProperties = Object.keys(pseudos) as PseudoProperty[]
export const pseudoSelectors = Object.values(pseudos)
