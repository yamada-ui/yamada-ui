import type { CSSObject } from "../../core"

export const globalStyle: CSSObject = {
  "*, *::before, *::after": {
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "0",
    wordWrap: "break-word",
  },
  "*::placeholder, *[data-placeholder]": {
    color: "fg.subtle",
  },
  body: {
    colorScheme: "mono",
    bg: "bg",
    color: "fg",
    fontFamily: "body",
    lineHeight: "base",
    overflowX: "hidden",
    transitionDuration: "normal",
    transitionProperty: "background-color",
  },
  _dark: {
    "*::placeholder, *[data-placeholder]": {
      color: "whiteAlpha.400",
    },
  },
}
