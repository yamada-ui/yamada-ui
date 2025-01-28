import type { CSSObject } from "../../core"

export const resetStyle: CSSObject = {
  "*, *::before, *::after": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "::-webkit-file-upload-button": {
    font: "inherit",
    WebkitAppearance: "button",
  },

  "::-webkit-search-cancel-button, ::-webkit-search-decoration": {
    WebkitAppearance: "none",
  },

  "[contenteditable]": {
    outline: "none",
  },

  "[hidden]:where(:not([hidden='until-found']))": {
    display: "none !important",
  },

  "[type='time']::-webkit-calendar-picker-indicator": {
    display: "none",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "abbr[title]": {
    textDecoration: "underline dotted",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  "button, input, optgroup, select, textarea": {
    appearance: "none",
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    color: "inherit",
    font: "inherit",
    fontFeatureSettings: "inherit",
    fontVariationSettings: "inherit",
    letterSpacing: "inherit",
    outline: 0,
    WebkitAppearance: "none",
  },

  "code, kbd, samp, pre": {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    fontSize: "1em",
  },

  "img, svg, video, canvas, audio, iframe, embed, object": {
    display: "block",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  hr: {
    blockSize: 0,
    border: "none",
    borderBlockStart: "1px solid",
    color: "inherit",
    overflow: "visible",
  },

  html: {
    fontFamily:
      "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    lineHeight: 1.5,
    WebkitTapHighlightColor: "transparent",
    WebkitTextSizeAdjust: "100%",
  },

  "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
    {
      display: "none",
    },

  "input[type='search']": {
    outlineOffset: "-2px",
  },

  mark: {
    backgroundColor: "inherit",
    color: "inherit",
  },

  progress: {
    verticalAlign: "baseline",
  },

  small: {
    fontSize: "80%",
  },

  sub: {
    bottom: "-0.25em",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  summary: {
    display: "list-item",
  },

  sup: {
    top: "-0.5em",
  },

  "ul, ol": {
    listStyle: "none",
  },

  "@media (prefers-reduced-motion: no-preference)": {
    ":where(html:focus-within)": {
      scrollBehavior: "smooth",
    },
  },

  ":where(html:has(dialog:modal[open]))": {
    overflow: "clip",
  },

  ":where(dialog, [popover])": {
    background: "none",
    border: "none",
    color: "inherit",
    inset: "unset",
    maxHeight: "unset",
    maxWidth: "unset",
    overflow: "unset",
  },

  ":where(dialog:not([open], [popover]), [popover]:not(:popover-open))": {
    display: "none !important",
  },
}
