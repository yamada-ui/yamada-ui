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
      borderColor: "$border",
      borderTopWidth: "1px",
      gap: "sm",
      p: "sm",
    },
    header: {
      borderBottomWidth: "1px",
      borderColor: "$border",
      fontWeight: "semibold",
      gap: "sm",
      p: "sm",
    },
  },
}
