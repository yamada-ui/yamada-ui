import { defineComponentSlotStyle } from "../../core"

export const lineChartStyle = defineComponentSlotStyle({
  base: {
    grid: {},
    legend: {},
    line: {},
    root: {},
    tooltip: {},
    "x-axis": {},
    "y-axis": {},
  },
})

export type LineChartStyle = typeof lineChartStyle
