import type { ComponentStyle } from "@yamada-ui/core"

export const Tooltip: ComponentStyle = {
  baseStyle: {
    rounded: "md",
    bg: ["white", "black"],
    border: "1px solid",
    borderColor: ["blackAlpha.200", "whiteAlpha.100"],
    px: "sm",
    py: "0.5",
    fontWeight: "medium",
    fontSize: "sm",
    color: "inherit",
    boxShadow: ["md", "dark-md"],
    maxW: "xs",
    zIndex: "dodoria",
  },
}
