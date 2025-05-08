import { defineComponentSlotStyle } from "../../core"

export const strengthMeterStyle = defineComponentSlotStyle({
  base: {
    indicator: {
      bg: "bg.subtle",
      flex: "1",
      h: "1",
      rounded: "l1",
    },
    indicators: {
      display: "flex",
      gap: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
    },
    label: {
      color: "fg.muted",
      fontSize: "xs",
    },
    root: {
      alignItems: "end",
      display: "flex",
      flexDirection: "column",
      gap: "xs",
      w: "full",
    },
  },
})

export type StrengthMeterStyle = typeof strengthMeterStyle
