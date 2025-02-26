import type { ComponentStyle } from "../../core"

export const Airy: ComponentStyle<"Airy"> = {
  baseStyle: {
    userSelect: "none",
    width: "fit-content",
    _readOnly: {
      cursor: "default",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
