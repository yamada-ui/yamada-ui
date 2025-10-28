import { defineComponentSlotStyle } from "../../core"

export const xAxisStyle = defineComponentSlotStyle({
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

export type XAxisStyle = typeof xAxisStyle
