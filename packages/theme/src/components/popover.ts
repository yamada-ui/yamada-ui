import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Popover: ComponentMultiStyle<"Popover"> = {
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
      position: "absolute",
      top: "2",
      right: "2",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      p: "sm",
      gap: "sm",
      fontWeight: "semibold",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      my: "sm",
      px: "sm",
      gap: "sm",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      p: "sm",
      gap: "sm",
      borderTop: "1px solid",
      borderColor: "inherit",
    },
  },
}
