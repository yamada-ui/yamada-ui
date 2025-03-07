import { defineComponentStyle } from "../../core"

export const rotateStyle = defineComponentStyle({
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
})

export type RotateStyle = typeof rotateStyle
