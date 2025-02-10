import { defineComponentSlotStyle } from "../../core"

export const statusStyle = defineComponentSlotStyle({
  base: {
    indicator: {
      bg: "colorScheme.solid",
      flexShrink: 0,
      forcedColorAdjust: "none",
      rounded: "full",
    },
    label: {},
    root: {
      alignItems: "center",
      display: "inline-flex",
      gap: "sm",
    },
  },

  sizes: {
    sm: {
      indicator: { boxSize: "2" },
      label: { fontSize: "sm" },
    },
    md: {
      indicator: { boxSize: "2.5" },
      label: { fontSize: "md" },
    },
    lg: {
      indicator: { boxSize: "3" },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    colorScheme: "info",
    size: "md",
  },
})

export type StatusStyle = typeof statusStyle
