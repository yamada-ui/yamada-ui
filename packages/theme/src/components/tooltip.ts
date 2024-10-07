import type { ComponentStyle } from "@yamada-ui/core"

export const Tooltip: ComponentStyle<"Tooltip"> = {
  baseStyle: {
    bg: ["white", "black"],
    border: "1px solid",
    borderColor: ["blackAlpha.200", "whiteAlpha.100"],
    boxShadow: ["md", "dark-md"],
    color: "inherit",
    fontSize: "sm",
    fontWeight: "medium",
    maxW: "xs",
    px: "sm",
    py: "0.5",
    rounded: "md",
    zIndex: "dodoria",
  },
}
