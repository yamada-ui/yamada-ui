import { defineComponentSlotStyle } from "../../core"

export const legendStyle = defineComponentSlotStyle({
  base: {
    content: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    item: {
      alignItems: "center",
      color: ["blackAlpha.800", "whiteAlpha.700"],
      display: "flex",
      fontSize: "md",
      gap: "sm",
      lineHeight: "taller",
      minH: "8",
      minW: "8",
      px: "3",
      rounded: "md",
      transitionDuration: "slower",
      transitionProperty: "common",
      _hover: {
        bg: ["blackAlpha.50", "whiteAlpha.100"],
      },
    },
    label: {},
    root: {
      gap: "sm",
      mb: "md",
    },
    swatch: {
      boxSize: "3",
      rounded: "full",
    },
  },
})

export type LegendStyle = typeof legendStyle
