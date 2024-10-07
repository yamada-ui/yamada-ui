import type { UIStyle } from "@yamada-ui/core"

export const globalStyle: UIStyle = {
  "*, *::before, *::after": {
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "0",
    wordWrap: "break-word",
  },
  "*::placeholder, *[data-placeholder]": {
    color: "blackAlpha.600",
  },
  body: {
    bg: ["white", "black"],
    color: ["black", "white"],
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
