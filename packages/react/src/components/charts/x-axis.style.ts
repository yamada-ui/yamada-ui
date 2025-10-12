import { defineComponentStyle } from "../../core"

export const xAxisStyle = defineComponentStyle({
  base: {
    fontSize: "xs",
    stroke: "border.emphasized",
  },
})

export type XAxisStyle = typeof xAxisStyle
