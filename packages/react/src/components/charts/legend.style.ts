import { defineComponentStyle } from "../../core"

export const legendStyle = defineComponentStyle({
  base: {
    gap: "sm",
    mb: "md",
  },
})

export type LegendStyle = typeof legendStyle
