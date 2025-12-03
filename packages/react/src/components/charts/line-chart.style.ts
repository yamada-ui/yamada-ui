import { defineComponentStyle } from "../../core"

export const lineChartStyle = defineComponentStyle({
  base: {},

  sizes: {
    sm: {
      h: "xs",
      w: "xl",
    },
    md: {
      h: "sm",
      w: "3xl",
    },
    lg: {
      h: "md",
      w: "5xl",
    },
    full: {
      h: "md",
      w: "full",
    },
  },

  defaultProps: {
    size: "full",
  },
})

export type LineChartStyle = typeof lineChartStyle
