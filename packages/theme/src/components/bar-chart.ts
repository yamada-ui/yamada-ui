import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
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
