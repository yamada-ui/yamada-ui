import type { ComponentStyle } from "../../core"

export const Airy: ComponentStyle<"Airy"> = {
  baseStyle: {
    userSelect: "none",
    width: "fit-content",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _readOnly: {
      cursor: "default",
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
