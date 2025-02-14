import type { ComponentMultiStyle } from "../../core"

export const Popover: ComponentMultiStyle<"Popover"> = {
  baseStyle: {
    body: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: "sm",
      my: "sm",
      px: "sm",
    },
    closeButton: {
      position: "absolute",
      right: "2",
      top: "2",
    },
    container: {
      bg: ["white", "black"],
      borderColor: "$border",
      borderWidth: "1px",
      boxShadow: ["lg", "dark-lg"],
      color: "inherit",
      rounded: "md",
      vars: [
        {
          name: "border",
          token: "colors",
          value: ["blackAlpha.200", "whiteAlpha.100"],
        },
      ],
      zIndex: "guldo",
      _focusVisible: {
        boxShadow: "outline",
        outline: 0,
      },
    },
    footer: {
      alignItems: "center",
      borderColor: "$border",
      borderTopWidth: "1px",
      display: "flex",
      gap: "sm",
      justifyContent: "flex-start",
      p: "sm",
    },
    header: {
      alignItems: "center",
      borderBottomWidth: "1px",
      borderColor: "$border",
      display: "flex",
      fontWeight: "semibold",
      gap: "sm",
      justifyContent: "flex-start",
      p: "sm",
    },
  },
}
