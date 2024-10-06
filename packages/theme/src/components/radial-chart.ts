import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const RadialChart: ComponentMultiStyle<"RadialChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      background: {
        fill: "transparent",
      },
      cursor: {
        stroke: "none",
      },
      labelList: {
        fill: "white",
      },
      polarGrid: {
        stroke: ["blackAlpha.400", "whiteAlpha.400"],
        strokeWidth: 1,
      },
    },

    sizes: {},
  },
)({ omit: ["line", "grid"] })
