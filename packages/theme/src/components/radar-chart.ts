import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const RadarChart: ComponentMultiStyle<"RadarChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      polarAngleAxis: {},
      polarAngleAxisTick: {
        "& > text": {
          fill: ["blackAlpha.700", "whiteAlpha.600"],
          fontSize: "xs",
        },
      },
      polarGrid: {
        stroke: ["blackAlpha.400", "whiteAlpha.400"],
        strokeWidth: 1,
      },
      polarRadiusAxis: {
        "& > line": {
          stroke: ["blackAlpha.400", "whiteAlpha.400"],
        },
      },
      polarRadiusAxisTick: {
        "& > text": {
          fill: ["blackAlpha.700", "whiteAlpha.600"],
          fontSize: "xs",
        },
      },
      radar: {},
    },

    sizes: {
      sm: {
        container: {
          w: "full",
        },
      },
      md: {
        container: {
          w: "full",
        },
      },
      lg: {
        container: {
          w: "full",
        },
      },
      full: {
        container: {
          w: "full",
        },
      },
    },
  },
)({ omit: ["line", "grid"] })
