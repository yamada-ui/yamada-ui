import type { ComponentStyle } from "@yamada-ui/core"

export const Link: ComponentStyle<"Link"> = {
  baseStyle: {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "link",
    _hover: {
      textDecoration: "underline",
    },
    _focusVisible: {
      boxShadow: "outline",
    },
  },
}
