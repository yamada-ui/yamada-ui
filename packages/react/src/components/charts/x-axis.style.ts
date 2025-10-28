import { defineComponentSlotStyle } from "../../core"

export const xAxisStyle = defineComponentSlotStyle({
  base: {
    root: {
      fontSize: "xs",
      stroke: "border.emphasized",
    },
  },
})

export type XAxisStyle = typeof xAxisStyle
