import { defineComponentStyle } from "../../core"
import { lineChartStyle } from "./line-chart.style"

export const composedChartStyle = defineComponentStyle({
  base: {
    ...lineChartStyle.base,
    "--bar-fill-opacity": "0.6",
    "--bar-stroke": "none",
  },
})

export type ComposedChartStyle = typeof composedChartStyle
