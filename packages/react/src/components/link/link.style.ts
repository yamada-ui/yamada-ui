import { defineComponentStyle } from "../../core"

export const linkStyle = defineComponentStyle({
  base: {
    color: "link",
    cursor: "pointer",
    outline: "none",
    textDecoration: "none",
    transitionDuration: "fast",
    transitionProperty: "common",
    transitionTimingFunction: "ease-out",
    _hover: {
      textDecoration: "underline",
    },
    _focusVisible: {
      boxShadow: "outline",
    },
  },
})

export type LinkStyle = typeof linkStyle
