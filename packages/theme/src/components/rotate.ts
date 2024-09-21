import type { ComponentStyle } from "@yamada-ui/core"

export const Rotate: ComponentStyle<"Rotate"> = {
  baseStyle: {
    common: {
      width: "fit-content",
      userSelect: "none",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
