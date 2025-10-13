import { defineComponentStyle } from "../../core"

export const yAxisStyle = defineComponentStyle({
  base: {
    fontSize: "xs",
    stroke: "border.emphasized",
  },
})

export type YAxisStyle = typeof yAxisStyle
