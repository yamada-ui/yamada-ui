import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { LineChart } from "./line-chart"

export const BarChart: ComponentMultiStyle<"BarChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      activeBar: {},
      background: { fill: "transparent" },
      bar: {},
      cursor: { strokeDasharray: "5 5" },
    },
  },
)({ omit: ["dot", "activeDot"] })
