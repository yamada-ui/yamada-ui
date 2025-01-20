import { defineStyles } from "../../core"

export const resetStyle = defineStyles.resetStyle({
  "*": {
    boxSizing: "border-box",
  },

  "::-webkit-file-upload-button": {
    font: "inherit",
    WebkitAppearance: "button",
  },

  "::-webkit-search-cancel-button": {
    WebkitAppearance: "none",
  },

  "::before, ::after": {
    boxSizing: "inherit",
  },

  "[contenteditable]": {
    outline: "none",
  },

  "[hidden]": {
    display: "none !important",
  },

  "[type='checkbox']": {
    appearance: "checkbox",
    WebkitAppearance: "checkbox",
  },

  "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button":
    {
      display: "none",
    },

  "[type='radio']": {
    appearance: "radio",
    WebkitAppearance: "radio",
  },

  "[type='search']": {
    outlineOffset: "-2px",
  },

  "[type='search']::-webkit-search-decoration": {
    WebkitAppearance: "none",
  },

  "[type='time']::-webkit-calendar-picker-indicator": {
    display: "none",
  },

  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "none",
  },

  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline dotted",
  },

  address: {
    fontStyle: "inherit",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  body: {
    margin: 0,
  },

  "button, [type='button'], [type='reset'], [type='submit']": {
    appearance: "none",
    cursor: "pointer",
    WebkitAppearance: "none",
  },

  "button, input": {
    overflow: "visible",
  },

  "button, input, optgroup, select, textarea": {
    appearance: "none",
    background: "transparent",
    border: 0,
    borderRadius: 0,
    color: "inherit",
    font: "inherit",
    margin: 0,
    outline: 0,
    padding: 0,
    textAlign: "inherit",
    verticalAlign: "middle",
    WebkitAppearance: "none",
  },

  "button, select": {
    textTransform: "none",
  },

  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
    {
      borderStyle: "none",
      padding: 0,
    },

  "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring":
    {
      outline: "1px dotted ButtonText",
    },

  "button[disabled], [type='button'][disabled], [type='reset'][disabled], [type='submit'][disabled]":
    {
      cursor: "default",
    },

  caption: {
    textAlign: "left",
  },

  "code, kbd, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "inherit",
  },

  dd: {
    marginLeft: 0,
  },

  details: {
    display: "block",
  },

  dt: {
    fontWeight: "inherit",
  },

  "embed, object, iframe": {
    border: 0,
    verticalAlign: "bottom",
  },

  fieldset: {
    margin: 0,
    minWidth: 0,
    padding: 0,
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    margin: 0,
  },

  hr: {
    border: 0,
    borderTop: "1px solid",
    boxSizing: "content-box",
    clear: "both",
    color: "inherit",
    height: 0,
    margin: 0,
    overflow: "visible",
  },

  html: {
    lineHeight: 1.15,
    WebkitTapHighlightColor: "transparent",
    WebkitTextSizeAdjust: "100%",
  },

  img: {
    borderStyle: "none",
    verticalAlign: "bottom",
  },

  "label[for]": {
    cursor: "pointer",
  },

  cite: {
    fontStyle: "inherit",
  },

  legend: {
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },

  main: {
    display: "block",
  },

  option: {
    padding: 0,
  },

  "p, table, blockquote, address, pre, iframe, form, figure, dl": {
    margin: 0,
  },

  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "inherit",
  },

  progress: {
    verticalAlign: "baseline",
  },

  "select::-ms-expand": {
    display: "none",
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

  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },

  "td, th": {
    padding: 0,
    verticalAlign: "top",
  },

  template: {
    display: "none",
  },

  textarea: {
    overflow: "auto",
  },

  th: {
    fontWeight: "bold",
    textAlign: "left",
  },

  "ul, ol": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
})
