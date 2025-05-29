import { defineComponentStyle } from "../../core"

export const rotateStyle = defineComponentStyle({
  base: {
    opacity: 1,
    rounded: "l1",
    userSelect: "none",
    width: "fit-content",
    _readOnly: {
      layerStyle: "readOnly",
    },
    _disabled: {
      layerStyle: "disabled",
    },
  },
})

export type RotateStyle = typeof rotateStyle
