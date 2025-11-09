import { defineComponentSlotStyle } from "../../core"

export const yAxisStyle = defineComponentSlotStyle({
  base: {
    label: {
      fontSize: "xs",
      fontWeight: "hairline",
    },
    root: {
      fontSize: "xs",
      stroke: "border.emphasized",
    },
  },
})

export type YAxisStyle = typeof yAxisStyle
