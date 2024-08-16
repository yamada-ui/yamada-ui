import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const RadialChart: ComponentMultiStyle<"RadialChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {},

    sizes: {},
  },
)({ omit: ["line", "grid"] })
