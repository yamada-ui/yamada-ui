import type { ComponentMultiStyle } from "@yamada-ui/core"

export const BarChart: ComponentMultiStyle = {
  baseStyle: {
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      paddingX: 3,
      paddingY: 1,
      rounded: 5,
    },
    tooltip: {
      border: "solid",
      borderWidth: 0.2,
      borderColor: ["blackAlpha.400", "whiteAlpha.400"],
      bgColor: ["white", "neutral.900"],
      rounded: 3,
      paddingX: 5,
      paddingY: 3,
    },
  },

  variants: {},

  sizes: {
    sm: {
      container: {
        w: "xl",
        h: "xs",
      },
      xAxis: {
        fontSize: "2xs",
      },
      yAxis: {
        fontSize: "2xs",
      },
      referenceLine: {
        fontSize: "2xs",
      },
    },
    md: {
      container: {
        w: "3xl",
        h: "sm",
      },
    },
    lg: {
      container: {
        w: "5xl",
        h: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
