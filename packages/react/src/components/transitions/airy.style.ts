import { defineComponentStyle } from "../../core"

export const airyStyle = defineComponentStyle({
  base: {
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
})

export type AiryStyle = typeof airyStyle
