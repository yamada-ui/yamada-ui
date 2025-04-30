import { defineComponentStyle } from "../../core"

export const chartGridStyle = defineComponentStyle({
  base: {
    stroke: ["blackAlpha.400", "whiteAlpha.400"],
    strokeWidth: 1,
  },
})

export type ChartGridStyle = typeof chartGridStyle
