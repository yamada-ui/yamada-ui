import type { ComponentStyle } from "@yamada-ui/core"

export const Airy: ComponentStyle<"Airy"> = {
  baseStyle: {
    common: {
      width: "fit-content",
      userSelect: "none",
    },
    ":disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
