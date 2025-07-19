import { defineComponentSlotStyle } from "../../core"

export const popoverStyle = defineComponentSlotStyle({
  base: {
    body: {
      alignItems: "flex-start",
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "{gap}",
    },
    content: {
      bg: ["bg", "bg.subtle"],
      borderColor: ["border.subtle", "border.muted"],
      borderWidth: "1px",
      boxShadow: "sm",
      display: "flex",
      flexDirection: "column",
      focusVisibleRing: "none",
      gap: "{gap}",
      p: "{padding}",
      rounded: "l2",
    },
    footer: {
      alignItems: "center",
      display: "flex",
      gap: "{gap}",
      justifyContent: "flex-start",
    },
    header: {
      alignItems: "center",
      display: "flex",
      fontWeight: "semibold",
      gap: "{gap}",
      justifyContent: "flex-start",
    },
    positioner: {
      zIndex: "guldo",
    },
  },

  sizes: {
    xs: {
      content: {
        "--gap": "spaces.1",
        "--padding": "spaces.2",
        fontSize: "xs",
      },
    },
    sm: {
      content: {
        "--gap": "spaces.2",
        "--padding": "spaces.3",
        fontSize: "sm",
      },
    },
    md: {
      content: {
        "--gap": "spaces.3",
        "--padding": "spaces.4",
        fontSize: "md",
      },
    },
    lg: {
      content: {
        "--gap": "spaces.4",
        "--padding": "spaces.5",
        fontSize: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type PopoverStyle = typeof popoverStyle
