import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { calc, getMemoizedObject as get } from "../../utils"
import { LineChart } from "./line-chart"

export const PieChart: ComponentMultiStyle<"PieChart"> = mergeMultiStyle(
  LineChart,
  {
    baseStyle: {
      activeShape: {},
      cell: {},
      inactiveShape: {},
      label: { fill: "currentColor", fillOpacity: 1 },
      labelLine: { stroke: "currentColor" },
      pie: {},
    },

    sizes: {
      sm: ({ theme: t, withLabels, withLegend }) => ({
        container: {
          h: calc.add(get(t, "sizes.3xs"), get(t, "sizes.1")),
          w: withLegend
            ? "full"
            : calc.add(
                get(t, "sizes.3xs"),
                withLabels ? get(t, "sizes.16") : "0px",
              ),
        },
        label: {
          fontSize: "xs",
        },
      }),
      md: ({ theme: t, withLabels, withLegend }) => ({
        container: {
          h: "2xs",
          w: withLegend
            ? "full"
            : calc.add(
                get(t, "sizes.2xs"),
                withLabels ? get(t, "sizes.16") : "0px",
              ),
        },
        label: {
          fontSize: "sm",
        },
      }),
      lg: ({ theme: t, withLabels, withLegend }) => ({
        container: {
          h: "xs",
          w: withLegend
            ? "full"
            : calc.add(
                get(t, "sizes.xs"),
                withLabels ? get(t, "sizes.16") : "0px",
              ),
        },
        label: {
          fontSize: "md",
        },
      }),
    },

    defaultProps: {
      size: "md",
    },
  },
)({ omit: ["line", "grid", "sizes.full"] })
