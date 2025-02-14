import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { LineChart } from "./line-chart"

export const AreaChart: ComponentMultiStyle<"AreaChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      area: {},
    },
  },
)({ omit: ["line"] })
