import type { ComponentStyle } from "@yamada-ui/core"

export const Airy: ComponentStyle<"Airy"> = {
  baseStyle: {
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _readOnly: {
      cursor: "default",
    },
    userSelect: "none",
    width: "fit-content",
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
