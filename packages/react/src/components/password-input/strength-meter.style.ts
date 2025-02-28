import { defineComponentSlotStyle } from "../../core"

export const strengthMeterStyle = defineComponentSlotStyle({
  base: {
    indicator: {
      bg: "{bg}",
      flex: "1",
      h: "1",
      rounded: "sm",
      vars: [
        {
          name: "bg",
          token: "colors",
          value: ["blackAlpha.200", "whiteAlpha.200"],
        },
      ],
    },
    indicators: {
      display: "flex",
      gap: "sm",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
    },
    label: {
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
