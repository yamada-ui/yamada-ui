import type { ComponentMultiStyle } from "@yamada-ui/core"

//todo: 可能な限りここで設定できるようにする
export const AreaChart: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "4xl",
      h: "sm",
    },
    areaChart: {},
    referenceLine: {
      strokeWidth: 1,
      label: {
        fontSize: 12,
      },
    },
    grid: {},
    xAxis: {},
    yAxis: {},
    dot: {},
  },

  variants: {
    subtl: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      dot: { fill: ["white", "black"] },
    }),
    solid: {},
  },

  sizes: {
    sm: { dot: { strokeWidth: 1 } },
    md: { dot: { strokeWidth: 2 } },
    lg: { dot: { strokeWidth: 3 } },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
