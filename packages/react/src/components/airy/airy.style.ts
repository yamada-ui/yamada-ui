import { defineComponentStyle } from "../../core"

export const airyStyle = defineComponentStyle({
  base: {
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
})

export type AiryStyle = typeof airyStyle
