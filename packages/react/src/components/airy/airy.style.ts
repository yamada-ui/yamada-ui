import { defineComponentStyle } from "../../core"

export const airyStyle = defineComponentStyle({
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

export type AiryStyle = typeof airyStyle
