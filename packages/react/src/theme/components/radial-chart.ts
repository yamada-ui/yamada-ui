import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
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
