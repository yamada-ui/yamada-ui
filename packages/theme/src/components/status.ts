import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Status: ComponentMultiStyle<"Status"> = {
  baseStyle: ({ colorScheme: bg = "info" }) => ({
    container: {
      alignItems: "center",
      display: "flex",
      gap: "sm",
    },
    indicator: {
      bg,
      flexShrink: 0,
      forcedColorAdjust: "none",
      rounded: "full",
    },
  }),

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
}
