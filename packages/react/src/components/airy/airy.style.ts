import { defineComponentStyle } from "../../core"

export const airyStyle = defineComponentStyle({
  base: {
    opacity: 1,
    rounded: "l1",
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
})

export type AiryStyle = typeof airyStyle
