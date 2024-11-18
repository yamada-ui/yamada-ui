import type { ComponentMultiStyle } from "@yamada-ui/core"

export const EmptyState: ComponentMultiStyle = {
  baseStyle: {
    container: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      w: "full",
    },
    content: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    description: {
      color: "muted",
      fontSize: "sm",
    },
    indicator: {
      alignItems: "center",
      color: "muted",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      fontWeight: "semibold",
    },
  },

  sizes: {
    sm: {
      container: {
        gap: "sm",
        py: "sm",
      },
      content: {
        gap: "xs",
      },
      indicator: {
        fontSize: "4xl",
      },
      title: {
        fontSize: "md",
      },
    },
    md: {
      container: {
        gap: "md",
        py: "md",
      },
      content: {
        gap: "sm",
      },
      indicator: {
        fontSize: "5xl",
      },
      title: {
        fontSize: "lg",
      },
    },
    lg: {
      container: {
        gap: "lg",
        py: "lg",
      },
      content: {
        gap: "md",
      },
      indicator: {
        fontSize: "6xl",
      },
      title: {
        fontSize: "xl",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
}
