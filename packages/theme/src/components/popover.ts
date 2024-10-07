import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Popover: ComponentMultiStyle<"Popover"> = {
  baseStyle: {
    body: {
      gap: "sm",
      my: "sm",
      px: "sm",
    },
    closeButton: {
      right: "2",
      top: "2",
    },
    container: {
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      boxShadow: ["lg", "dark-lg"],
      color: "inherit",
      rounded: "md",
      zIndex: "guldo",
      _focusVisible: {
        boxShadow: "outline",
        outline: 0,
      },
    },
    footer: {
      borderColor: "inherit",
      borderTop: "1px solid",
      gap: "sm",
      p: "sm",
    },
    header: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      fontWeight: "semibold",
      gap: "sm",
      p: "sm",
    },
  },
}
