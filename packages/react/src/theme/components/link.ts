import type { ComponentStyle } from "../../core"

export const Link: ComponentStyle<"Link"> = {
  baseStyle: {
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
}
