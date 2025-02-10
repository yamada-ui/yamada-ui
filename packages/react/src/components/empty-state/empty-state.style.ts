import { defineComponentSlotStyle } from "../../core"

export const emptyState = defineComponentSlotStyle({
  base: {
    content: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    description: {
      color: "fg.muted",
      fontSize: "sm",
    },
    indicator: {
      alignItems: "center",
      color: "fg.muted",
      display: "flex",
      justifyContent: "center",
    },
    root: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      w: "full",
    },
    title: {
      fontWeight: "semibold",
    },
  },

  sizes: {
    sm: {
      content: {
        gap: "xs",
      },
      indicator: {
        fontSize: "4xl",
      },
      root: {
        gap: "sm",
        py: "sm",
      },
      title: {
        fontSize: "md",
      },
    },
    md: {
      content: {
        gap: "sm",
      },
      indicator: {
        fontSize: "5xl",
      },
      root: {
        gap: "md",
        py: "md",
      },
      title: {
        fontSize: "lg",
      },
    },
    lg: {
      content: {
        gap: "md",
      },
      indicator: {
        fontSize: "6xl",
      },
      root: {
        gap: "lg",
        py: "lg",
      },
      title: {
        fontSize: "xl",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type EmptyState = typeof emptyState
