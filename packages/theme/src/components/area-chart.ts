import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const AreaChart: ComponentMultiStyle<"AreaChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      area: {},
    },
  },
)({ omit: ["line"] })
