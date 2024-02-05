import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Popover: ComponentMultiStyle = {
  baseStyle: {
    container: {
      rounded: "md",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      color: "inherit",
      boxShadow: ["lg", "dark-lg"],
      zIndex: "guldo",
      _focusVisible: {
        outline: 0,
        boxShadow: "outline",
      },
    },
    closeButton: {
      top: "2",
      right: "2",
    },
    header: {
      p: "sm",
      gap: "sm",
      fontWeight: "semibold",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
    body: {
      my: "sm",
      px: "sm",
      gap: "sm",
    },
    footer: {
      p: "sm",
      gap: "sm",
      borderTop: "1px solid",
      borderColor: "inherit",
    },
  },
}
