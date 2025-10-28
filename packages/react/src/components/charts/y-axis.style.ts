import { defineComponentSlotStyle } from "../../core"

export const yAxisStyle = defineComponentSlotStyle({
  base: {
    root: {
      fontSize: "xs",
      stroke: "border.emphasized",
    },
  },
})

export type YAxisStyle = typeof yAxisStyle
