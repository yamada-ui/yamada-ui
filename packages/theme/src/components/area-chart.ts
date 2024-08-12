import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const AreaChart: ComponentMultiStyle<"AreaChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      area: {
        fillOpacity: 1,
        strokeOpacity: 1,
      },
      dimArea: {
        fillOpacity: 0,
        strokeOpacity: 0.3,
      },
    },
  },
)({ omit: ["line"] })
